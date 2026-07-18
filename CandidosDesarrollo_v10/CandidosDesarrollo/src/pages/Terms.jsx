import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Layout from "../components/Layout";
import "../styles/PaginaInstitucional.css";

function Terms() {
  return (
    <Layout>
      <div className="pagina-institucional">
        <Link to="/" className="volver-atras">
          <FaArrowLeft /> Volver atrás
        </Link>

        <h1>Términos y condiciones</h1>
        <p className="pagina-institucional-actualizado">
          Última actualización: julio de 2026
        </p>

        <h2>1. Sobre este sitio</h2>
        <p>
          Este sitio es un catálogo digital de Candido's Distribuidora
          Mayorista, orientado a comercios (kioscos, almacenes y afines) de
          Paraná y zona. Los precios, formatos y disponibilidad de productos
          se muestran a modo informativo y pueden actualizarse sin previo
          aviso.
        </p>

        <h2>2. Cómo se confirma un pedido</h2>
        <p>
          Los pedidos armados desde el sitio se envían por WhatsApp para su
          confirmación. Ningún pedido se considera cerrado hasta que Candido's
          lo confirma por ese medio, incluyendo disponibilidad de stock y
          forma de pago.
        </p>

        <h2>3. Precios</h2>
        <p>
          Los precios publicados están sujetos a modificaciones sin previo
          aviso, en función de variaciones de mercado, proveedores o
          condiciones económicas. El precio válido es siempre el confirmado
          al momento de cerrar el pedido.
        </p>

        <h2>4. Envíos</h2>
        <p>
          Los envíos sin cargo aplican exclusivamente dentro de Paraná y
          zonas aledañas, de lunes a viernes en el horario informado en el
          sitio. Fuera de esa zona u horario, el costo y la disponibilidad de
          envío se coordinan directamente por WhatsApp.
        </p>

        <h2>5. Datos personales</h2>
        <p>
          Los datos que nos compartís al hacer un pedido o una consulta
          (nombre, contacto, comercio) se usan únicamente para gestionar esa
          operación. Más detalle en nuestra{" "}
          <Link to="/privacidad">Política de privacidad</Link>.
        </p>

        <h2>6. Modificaciones</h2>
        <p>
          Candido's puede actualizar estos términos en cualquier momento. Te
          recomendamos revisarlos periódicamente.
        </p>

        <p className="pagina-institucional-nota">
          <em>
            Este texto es un punto de partida general y no reemplaza el
            asesoramiento de un profesional legal. Te recomendamos hacerlo
            revisar antes de operar comercialmente a gran escala.
          </em>
        </p>
      </div>
    </Layout>
  );
}

export default Terms;
