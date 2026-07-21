import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Layout from "../components/Layout";
import "../styles/PaginaInstitucional.css";

function Privacy() {
  return (
    <Layout>
      <div className="pagina-institucional">
        <Link to="/" className="volver-atras">
          <FaArrowLeft /> Volver atrás
        </Link>

        <h1>Política de privacidad</h1>
        <p className="pagina-institucional-actualizado">
          Última actualización: julio de 2026
        </p>

        <h2>1. Qué datos recopilamos</h2>
        <p>
          Según cómo interactúes con el sitio, podemos recopilar: tu nombre,
          número de contacto o mail (cuando hacés un pedido, una consulta o
          te suscribís al newsletter), y el detalle de los productos que
          pedís o consultás.
        </p>

        <h2>2. Para qué usamos tus datos</h2>
        <ul>
          <li>Gestionar y confirmar tus pedidos por WhatsApp.</li>
          <li>Responder tus consultas de contacto.</li>
          <li>
            Enviarte novedades y promociones, solo si te suscribiste
            voluntariamente al newsletter o al canal de WhatsApp.
          </li>
          <li>
            Entender qué productos generan más interés, para mejorar
            nuestro catálogo.
          </li>
        </ul>

        <h2>3. Con quién compartimos tus datos</h2>
        <p>
          No vendemos ni compartimos tus datos personales con terceros con
          fines comerciales. Tus datos se almacenan en Supabase, nuestro
          proveedor de base de datos, exclusivamente para el funcionamiento
          interno del sitio.
        </p>

        <h2>4. Tus derechos</h2>
        <p>
          Podés pedirnos en cualquier momento que te contemos qué datos
          tenemos tuyos, que los corrijamos, o que los eliminemos,
          escribiéndonos por WhatsApp o mail.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Este sitio no utiliza cookies de seguimiento publicitario. Puede
          utilizar almacenamiento técnico básico necesario para el
          funcionamiento del carrito de compras durante tu visita.
        </p>

        <p className="pagina-institucional-nota">
          <em>
            Ante cualquier consulta, reclamo o solicitud relacionada con nuestros servicios, el cliente podrá comunicarse con Candido’s a través de los medios oficiales disponibles en este sitio.
          </em>
        </p>
      </div>
    </Layout>
  );
}

export default Privacy;
