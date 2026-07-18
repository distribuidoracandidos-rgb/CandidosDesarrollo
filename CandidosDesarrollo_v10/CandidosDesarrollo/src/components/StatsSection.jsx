import "../styles/StatsSection.css";

const STATS = [
  { numero: "+25", texto: "años de experiencia" },
  { numero: "+2.000", texto: "productos" },
  { numero: "+50", texto: "marcas" },
  { numero: "Cientos", texto: "de comercios abastecidos" },
  { numero: "100%", texto: "cobertura en Paraná y zona" },
];

function StatsSection() {
  return (
    <section className="stats">
      {STATS.map((s) => (
        <div key={s.texto} className="stats-item">
          <strong>{s.numero}</strong>
          <span>{s.texto}</span>
        </div>
      ))}
    </section>
  );
}

export default StatsSection;
