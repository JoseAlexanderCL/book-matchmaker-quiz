import { useCallback, useMemo } from 'react';
import { insertSession, completeSession, type ResultPayload } from '@/lib/supabaseApi';

const STORAGE_KEY = 'sessionId';

export function useSession() {
  const sessionId = useMemo<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }, []);

  const startSession = useCallback(async (user_identifier?: string | null) => {
    try {
      let id = localStorage.getItem(STORAGE_KEY);
      if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem(STORAGE_KEY, id);
      }
      // fire-and-forget
      insertSession(id, user_identifier);
      return id;
    } catch {
      return null;
    }
  }, []);

  const endSession = useCallback(async (result: ResultPayload) => {
    try {
      const id = localStorage.getItem(STORAGE_KEY);
      if (!id) return;
      // fire-and-forget
      completeSession(id, result);
      // Opcional: limpiar la sesión local
      // localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return { sessionId, startSession, endSession };
}
