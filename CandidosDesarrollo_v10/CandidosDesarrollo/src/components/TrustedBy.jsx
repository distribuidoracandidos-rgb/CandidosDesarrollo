import "../styles/TrustedBy.css";

// Placeholder: reemplazar por los nombres y, si tenés, logos reales de tus
// comercios adheridos. Podés agregar más objetos a esta lista sin tocar
// el resto del componente.
const CLIENTES = [
  { label: "Kiosco", nombre: "El 20" },
  { label: "Autoservicio", nombre: "Don José" },
  { label: "Maxi", nombre: "Kiosco" },
  { label: "Almacén", nombre: "San Martín" },
  { label: "Kiosco", nombre: "La Esquina" },
  { label: "Distribuidora", nombre: "Del Centro" },
  { label: "Despensa", nombre: "La Familia" },
  { label: "Kiosco", nombre: "24 Horas" },
];

function TrustedBy() {
  // Duplicamos la lista para lograr el efecto de scroll infinito continuo.
  const fila = [...CLIENTES, ...CLIENTES];

  return (
    <section className="confian">
      <h2 className="titulo-seccion">Comercios que confían en nosotros</h2>

      <div className="confian-carrusel">
        <div className="confian-track confian-track-derecha">
          {fila.map((cliente, i) => (
            <div key={`der-${cliente.nombre}-${i}`} className="confian-card">
              <span className="confian-label">{cliente.label}</span>
              <strong className="confian-nombre">{cliente.nombre}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="confian-carrusel">
        <div className="confian-track confian-track-izquierda">
          {fila.map((cliente, i) => (
            <div key={`izq-${cliente.nombre}-${i}`} className="confian-card">
              <span className="confian-label">{cliente.label}</span>
              <strong className="confian-nombre">{cliente.nombre}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
