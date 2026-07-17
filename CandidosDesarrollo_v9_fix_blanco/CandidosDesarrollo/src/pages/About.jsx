import Layout from "../components/Layout";
import "../styles/PaginaInstitucional.css";

function About() {
  return (
    <Layout>
      <div className="pagina-institucional">
        <h1>Quiénes somos</h1>
        <p>
          Candido's es una distribuidora mayorista con más de 25 años de
          trayectoria, abasteciendo kioscos, almacenes y comercios de Paraná
          y la zona. Trabajamos con las mejores marcas del mercado para
          ofrecerte variedad, precios competitivos y entregas rápidas.
        </p>
        <p>
          <em>
            (Este texto es un punto de partida — contame más sobre la
            historia real de Candido's y lo reemplazo por el texto
            definitivo.)
          </em>
        </p>
      </div>
    </Layout>
  );
}

export default About;
