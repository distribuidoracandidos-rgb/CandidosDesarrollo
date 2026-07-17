import Layout from "../components/Layout";
import "../styles/PaginaInstitucional.css";

function Privacy() {
  return (
    <Layout>
      <div className="pagina-institucional">
        <h1>Política de privacidad</h1>
        <p>
          En Candido's Distribuidora Mayorista respetamos tu privacidad. Los
          datos que nos compartís (nombre, mail, pedidos) se usan
          exclusivamente para gestionar tus compras y comunicarte novedades,
          y nunca se venden ni se comparten con terceros.
        </p>
        <p>
          <em>
            (Texto de referencia — te recomiendo reemplazarlo por una
            política redactada o revisada por un profesional legal antes de
            operar comercialmente.)
          </em>
        </p>
      </div>
    </Layout>
  );
}

export default Privacy;
