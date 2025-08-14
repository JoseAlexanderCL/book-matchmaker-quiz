-- Crear políticas RLS restrictivas para la tabla sessions
-- Opción A: Sin acceso público de lectura/modificación, solo INSERT anónimo

-- Bloquear SELECT - nadie puede leer datos de sesiones
CREATE POLICY "Block all SELECT on sessions" 
ON public.sessions 
FOR SELECT 
USING (false);

-- Bloquear UPDATE - nadie puede actualizar sesiones manualmente
-- (las actualizaciones se hacen automáticamente vía trigger)
CREATE POLICY "Block all UPDATE on sessions" 
ON public.sessions 
FOR UPDATE 
USING (false);

-- Bloquear DELETE - nadie puede eliminar sesiones
CREATE POLICY "Block all DELETE on sessions" 
ON public.sessions 
FOR DELETE 
USING (false);