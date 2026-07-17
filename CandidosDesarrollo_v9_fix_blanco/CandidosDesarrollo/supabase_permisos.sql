-- Habilitar seguridad a nivel de fila (obligatorio en Supabase)
alter table pedidos enable row level security;
alter table pedido_items enable row level security;

-- Permitir que la página guarde pedidos nuevos
create policy "Cualquiera puede crear pedidos"
on pedidos for insert
to anon
with check (true);

create policy "Cualquiera puede crear items de pedido"
on pedido_items for insert
to anon
with check (true);

-- Permitir leer los pedidos (para la página de historial)
create policy "Cualquiera puede leer pedidos"
on pedidos for select
to anon
using (true);

create policy "Cualquiera puede leer items de pedido"
on pedido_items for select
to anon
using (true);

-- Tabla de suscriptores al newsletter (agregada para la sección de Novedades)
create table if not exists suscriptores (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  creado_en timestamp with time zone default now()
);

alter table suscriptores enable row level security;

create policy "Cualquiera puede suscribirse"
on suscriptores for insert
to anon
with check (true);

-- Tabla de consultas del formulario de contacto
create table if not exists consultas (
  id uuid primary key default gen_random_uuid(),
  nombre text not null,
  contacto text not null,
  producto_interes text,
  mensaje text not null,
  creado_en timestamp with time zone default now()
);

alter table consultas enable row level security;

create policy "Cualquiera puede crear consultas"
on consultas for insert
to anon
with check (true);

create policy "Cualquiera puede leer consultas"
on consultas for select
to anon
using (true);
