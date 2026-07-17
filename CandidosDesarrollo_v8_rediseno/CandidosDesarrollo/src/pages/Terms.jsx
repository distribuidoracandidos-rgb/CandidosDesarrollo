import Layout from "../components/Layout";
import "../styles/PaginaInstitucional.css";

function Terms() {
  return (
    <Layout>
      <div className="pagina-institucional">
        <h1>Términos y condiciones</h1>
        <p>
          Los pedidos realizados a través de este sitio se confirman por
          WhatsApp. Los precios y el stock están sujetos a disponibilidad y
          pueden modificarse sin previo aviso. Los envíos gratuitos aplican
          únicamente dentro de Paraná y zonas aledañas, de lunes a viernes.
        </p>
        <p>
          <em>
            (Texto de referencia — te recomiendo reemplazarlo por términos
            redactados o revisados por un profesional legal.)
          </em>
        </p>
      </div>
    </Layout>
  );
}

export default Terms;
