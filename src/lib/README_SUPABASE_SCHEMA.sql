/*
SQL de referencia para crear tablas y relación (ejecutar en el panel de Supabase > SQL):

-- Habilita la extensión si fuera necesario
-- create extension if not exists "uuid-ossp";

create table if not exists public.sessions (
  id uuid primary key default uuid_generate_v4(),
  started_at timestamp with time zone not null default now(),
  ended_at timestamp with time zone null,
  user_identifier text null
);

create table if not exists public.results (
  id uuid primary key default uuid_generate_v4(),
  session_id uuid not null references public.sessions(id) on delete cascade,
  mbti text not null,
  selected_book text not null,
  score_details jsonb,
  created_at timestamp with time zone not null default now()
);

-- Índices sugeridos
create index if not exists results_session_id_idx on public.results(session_id);
*/
