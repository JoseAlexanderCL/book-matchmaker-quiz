-- Create sessions and results tables with RLS for anonymous inserts/updates (no SELECT)

-- Sessions table
create table if not exists public.sessions (
  id uuid primary key default gen_random_uuid(),
  started_at timestamptz not null default now(),
  ended_at timestamptz null,
  user_identifier text null
);

-- Results table
create table if not exists public.results (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.sessions(id) on delete cascade,
  mbti text not null,
  selected_book text not null,
  score_details jsonb,
  created_at timestamptz not null default now()
);

-- Index for performance
create index if not exists results_session_id_idx on public.results(session_id);

-- Enable Row Level Security
alter table public.sessions enable row level security;
alter table public.results enable row level security;

-- RLS Policies: allow anonymous inserts and updates (no SELECT policy, so reads are blocked)
-- Sessions policies
create policy "Allow anon insert sessions"
  on public.sessions
  for insert
  to anon, authenticated
  with check (true);

create policy "Allow anon update sessions"
  on public.sessions
  for update
  to anon, authenticated
  using (true)
  with check (true);

-- Results policies
create policy "Allow anon insert results"
  on public.results
  for insert
  to anon, authenticated
  with check (true);
