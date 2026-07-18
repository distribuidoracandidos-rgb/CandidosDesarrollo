import { Link } from "react-router-dom";
import { FaArrowLeft, FaStar, FaQuoteLeft, FaBullhorn } from "react-icons/fa6";
import Layout from "../components/Layout";
import "../styles/Opinions.css";
import { TESTIMONIOS, NOVEDADES } from "../data/testimonials";

function Opinions() {
  return (
    <Layout>
      <div className="opiniones-pagina">
        <Link to="/" className="volver-atras">
          <FaArrowLeft /> Volver atrás
        </Link>

        <h1>Opiniones y novedades</h1>
        <p className="opiniones-intro">
          Lo que dicen los comercios que ya trabajan con nosotros, y las
          últimas novedades de Candido's.
        </p>

        <section>
          <h2 className="opiniones-subtitulo">Testimonios de clientes</h2>

          <div className="testimonios-grid">
            {TESTIMONIOS.map((t) => (
              <div key={t.nombre} className="testimonio-card">
                <FaQuoteLeft className="testimonio-icono" />
                <p>{t.texto}</p>

                <div className="testimonio-estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < t.estrellas ? "activa" : ""}
                    />
                  ))}
                </div>

                <strong>{t.nombre}</strong>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="opiniones-subtitulo">Novedades de la empresa</h2>

          <div className="novedades-lista">
            {NOVEDADES.map((n) => (
              <div key={n.titulo} className="novedad-item">
                <div className="novedad-icono">
                  <FaBullhorn />
                </div>
                <div>
                  <span className="novedad-fecha">{n.fecha}</span>
                  <strong>{n.titulo}</strong>
                  <p>{n.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Opinions;
