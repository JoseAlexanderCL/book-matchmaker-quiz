-- 1) Ensure RLS enabled on critical tables
ALTER TABLE IF EXISTS public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.results ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_log ENABLE ROW LEVEL SECURITY;

-- 2) Tighten sessions UPDATE policy: remove broad anon updates
DROP POLICY IF EXISTS "Allow anon update sessions" ON public.sessions;
-- We purposely do NOT create an UPDATE policy; updates will be done via trigger.

-- 3) Lock down user_log: drop permissive ALL policy and allow only INSERT
DROP POLICY IF EXISTS "Allow all access to user_log" ON public.user_log;
CREATE POLICY "Allow anon insert user_log"
ON public.user_log
FOR INSERT
TO anon
WITH CHECK (true);

-- 4) Add FK results.session_id -> sessions.id (idempotent)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint c
    JOIN pg_class t ON c.conrelid = t.oid
    WHERE t.relname = 'results' AND c.conname = 'results_session_id_fkey'
  ) THEN
    ALTER TABLE public.results
    ADD CONSTRAINT results_session_id_fkey
    FOREIGN KEY (session_id) REFERENCES public.sessions(id) ON DELETE CASCADE;
  END IF;
END
$$;

-- 5) Create definer function + trigger to set sessions.ended_at automatically on result insert
CREATE OR REPLACE FUNCTION public.end_session_on_result()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.sessions
  SET ended_at = now()
  WHERE id = NEW.session_id AND ended_at IS NULL;
  RETURN NEW;
END;
$$;

GRANT EXECUTE ON FUNCTION public.end_session_on_result() TO anon, authenticated;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'trg_end_session_on_result'
  ) THEN
    CREATE TRIGGER trg_end_session_on_result
    AFTER INSERT ON public.results
    FOR EACH ROW
    EXECUTE FUNCTION public.end_session_on_result();
  END IF;
END
$$;