import Layout from "../components/Layout";
import "../styles/PaginaInstitucional.css";

function News() {
  return (
    <Layout>
      <div className="pagina-institucional">
        <h1>Novedades</h1>
        <p>
          Muy pronto vas a encontrar acá los últimos productos, promociones
          y novedades de Candido's. Mientras tanto, sumate a nuestro
          newsletter o canal de WhatsApp desde el inicio para no perderte
          nada.
        </p>
      </div>
    </Layout>
  );
}

export default News;
