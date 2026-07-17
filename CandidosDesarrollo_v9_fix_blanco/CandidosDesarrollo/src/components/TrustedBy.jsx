import "../styles/TrustedBy.css";

// Placeholder: reemplazar por los nombres reales de tus comercios/clientes.
const CLIENTES = [
  "Kiosco El 20",
  "Autoservicio Don José",
  "Maxi Kiosco",
  "Almacén San Martín",
  "Kiosco La Esquina",
  "Distribuidora Del Centro",
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
