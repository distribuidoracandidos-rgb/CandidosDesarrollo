import axios from "axios";

const API_URL = "https://script.google.com/macros/s/AKfycbxTy8tZLW8oXjWHfYfJyCbO2lSTH0keB7RawtWGR1it3ze2fZj2OTz0r0zSNr5gCQs/exec";

// El endpoint de productos es un Google Apps Script: puede tardar varios
// segundos en responder (es lento por naturaleza, no depende de nuestro código).
// Para que la web no se sienta una tortuga, guardamos la respuesta un ratito
// en sessionStorage: mientras el usuario navega o recarga la página dentro de
// esa misma pestaña, mostramos los datos guardados al instante y, en segundo
// plano, pedimos la versión más nueva para la próxima vez. Los datos nunca
// quedan "viejos" por mucho tiempo porque el caché expira solo a los 5 minutos.
const CACHE_KEY = "candidos_productos_cache_v1";
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutos

function leerCache() {
  try {
    const crudo = sessionStorage.getItem(CACHE_KEY);
    if (!crudo) return null;

    const { data, timestamp } = JSON.parse(crudo);
    const vencido = Date.now() - timestamp > CACHE_TTL_MS;
    return { data, vencido };
  } catch {
    return null;
  }
}

function guardarCache(data) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ data, timestamp: Date.now() })
    );
  } catch {
    // Si sessionStorage no está disponible (modo privado, etc.), no pasa nada:
    // simplemente no se cachea y sigue funcionando como antes.
  }
}

export async function getProducts() {
  const cache = leerCache();

  if (cache && !cache.vencido) {
    // Hay datos frescos guardados: los devolvemos al instante, sin esperar
    // a la red.
    return cache.data;
  }

  if (cache && cache.vencido) {
    // Hay datos guardados pero vencidos: los devolvemos igual para que la
    // pantalla se pinte ya mismo, y pedimos la versión nueva en segundo
    // plano para actualizar el caché (el usuario no espera por esto).
    axios
      .get(API_URL)
      .then((response) => guardarCache(response.data))
      .catch(() => {});
    return cache.data;
  }

  // No hay nada guardado todavía (primera visita de la sesión): esperamos
  // la respuesta como antes.
  const response = await axios.get(API_URL);
  guardarCache(response.data);
  return response.data;
}

export async function getCategories() {
  const response = await axios.get(API_URL + "?tipo=categorias");
  return response.data;
}

