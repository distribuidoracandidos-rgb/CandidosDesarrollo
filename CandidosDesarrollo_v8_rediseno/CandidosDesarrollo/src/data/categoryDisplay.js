// Nombres "lindos" para mostrar en pantalla, sin tocar el valor real
// de CATEGORIA que viene de la planilla (así no se rompe el filtrado).
export const NOMBRE_VISIBLE = {
  Comestibles: "Alfajores",
};

export function nombreVisible(categoria) {
  return NOMBRE_VISIBLE[categoria] || categoria;
}
