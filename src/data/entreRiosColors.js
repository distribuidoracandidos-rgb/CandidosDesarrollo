// Reglas de color de la leyenda, según cantidad de clientes activos.
// Cambiá los rangos acá si en algún momento necesitás otra escala.
export const RANGOS_LEYENDA = [
  { max: 20, color: "#9ca3af", label: "1–20 clientes" },
  { max: 50, color: "#f4b400", label: "21–50 clientes" },
  { max: 100, color: "#f97316", label: "51–100 clientes" },
  { max: Infinity, color: "#dc2626", label: "Más de 100 clientes" },
];

export function colorPorClientes(clientes) {
  const rango = RANGOS_LEYENDA.find((r) => clientes <= r.max);
  return rango ? rango.color : RANGOS_LEYENDA[0].color;
}
