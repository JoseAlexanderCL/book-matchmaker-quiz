/**
 * Supabase client initialization
 *
 * Tablas esperadas (crear desde el panel de Supabase):
 * sessions:
 *   - id UUID PK (default uuid_generate_v4() o provisto por el frontend)
 *   - started_at timestamp not null
 *   - ended_at timestamp null
 *   - user_identifier text null
 *
 * results:
 *   - id UUID PK (puede generarse en frontend)
 *   - session_id UUID not null references sessions(id)
 *   - mbti text not null
 *   - selected_book text not null
 *   - score_details jsonb
 *   - created_at timestamp not null
 */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    '[Supabase] VITE_SUPABASE_URL no está definido. Copia .env.example a .env y configura la URL de tu proyecto.'
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    '[Supabase] VITE_SUPABASE_ANON_KEY no está definido. Copia .env.example a .env y configura la clave anónima.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
  global: { headers: { 'x-client-info': 'reading-club-quiz' } },
});
