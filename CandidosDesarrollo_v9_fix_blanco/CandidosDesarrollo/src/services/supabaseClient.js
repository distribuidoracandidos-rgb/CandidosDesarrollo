import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let cliente = null;

// Si faltan las variables de entorno (o están mal cargadas en el hosting),
// NO tiramos abajo toda la página: dejamos "supabase" en null y cada
// funcionalidad que lo use (pedidos, newsletter, contacto) falla en
// silencio para esa parte puntual, sin romper el resto del sitio.
if (supabaseUrl && supabaseKey) {
  try {
    cliente = createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.error("No se pudo inicializar Supabase:", error);
  }
} else {
  console.warn(
    "Faltan las variables VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. " +
      "El guardado de pedidos, newsletter y consultas va a estar desactivado " +
      "hasta que se configuren."
  );
}

export const supabase = cliente;
