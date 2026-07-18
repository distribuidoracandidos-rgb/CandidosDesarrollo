import "../styles/TrustedBy.css";

// Placeholder: reemplazar por los nombres y, si tenés, logos reales de tus
// comercios adheridos. Podés agregar más strings a esta lista sin tocar
// el resto del componente.
const CLIENTES = [
  "Drugstore Terminal",
  "Deu Srl",
  "Madafaka",
  "Maxikiosco el Gringo",
  "Drugstore 365",
  "Drugstore Guemes",
  "Verduleria Laprida",
  "YPF el Empalme",
  "Despensa Violeta",
  "La Guinda",
  "Bar Schonfeldt",
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
            <div key={`der-${cliente}-${i}`} className="confian-card">
              {cliente}
            </div>
          ))}
        </div>
      </div>

      <div className="confian-carrusel">
        <div className="confian-track confian-track-izquierda">
          {fila.map((cliente, i) => (
            <div key={`izq-${cliente}-${i}`} className="confian-card">
              {cliente}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
