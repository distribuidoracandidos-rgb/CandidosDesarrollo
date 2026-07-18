import { Link } from "react-router-dom";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { TESTIMONIOS } from "../data/testimonials";
import "../styles/TestimonialsSection.css";

function TestimonialsSection() {
  return (
    <section className="testimonios-home">
      <h2 className="titulo-seccion">Lo que dicen nuestros clientes</h2>

      <div className="testimonios-home-grid">
        {TESTIMONIOS.map((t) => (
          <div key={t.nombre} className="testimonio-home-card">
            <FaQuoteLeft className="testimonio-home-icono" />
            <p>{t.texto}</p>

            <div className="testimonio-home-estrellas">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i < t.estrellas ? "activa" : ""} />
              ))}
            </div>

            <strong>{t.nombre}</strong>
          </div>
        ))}
      </div>

      <Link to="/opiniones" className="testimonios-home-link">
        Ver todas las opiniones
      </Link>
    </section>
  );
}

export default TestimonialsSection;
