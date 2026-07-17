import "../styles/TrustedBy.css";

// Placeholder: reemplazar por los nombres reales de tus comercios/clientes.
const CLIENTES = [
  "Drugstore Terminal",
  "Deu Srl",
  "Maxikiosco la Esquina",
  "Drugstore Guemes",
  "Verduleria Laprida",
  "Madafaka",
  "Wilson Proveeduria",
  "Drugstore 365",
  "Maxicels",
  "Despensa Violeta",
  "Maxikiosco el Gringo",
];

function TrustedBy() {
  return (
    <section className="confian">
      <h2 className="titulo-seccion">Confían en nosotros</h2>

      <div className="confian-grid">
        {CLIENTES.map((cliente) => (
          <div key={cliente} className="confian-item">
            {cliente}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBy;
