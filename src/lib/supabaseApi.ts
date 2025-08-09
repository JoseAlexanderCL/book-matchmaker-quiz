import { supabase } from '@/integrations/supabase/client';

export type ResultPayload = {
  mbti: string;
  selected_book: string;
  score_details: any;
};

export async function insertSession(sessionId: string, user_identifier?: string | null) {
  if (!supabase) return;
  try {
    await supabase.from('sessions').insert({
      id: sessionId,
      started_at: new Date().toISOString(),
      user_identifier: user_identifier ?? null,
    });
  } catch (error) {
    console.warn('[Supabase] Error insertSession', error);
  }
}

export async function completeSession(sessionId: string, result: ResultPayload) {
  if (!supabase) return;
  const now = new Date().toISOString();
  try {
    await supabase.from('results').insert({
      id: crypto.randomUUID(),
      session_id: sessionId,
      mbti: result.mbti,
      selected_book: result.selected_book,
      score_details: result.score_details,
      created_at: now,
    });
  } catch (error) {
    console.warn('[Supabase] Error insert result', error);
  }
  // ended_at is set automatically via DB trigger after inserting into results

}
