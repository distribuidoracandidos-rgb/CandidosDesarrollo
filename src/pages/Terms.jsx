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
            (Los pedidos realizados a través de este sitio web constituyen una solicitud de compra y estarán sujetos a su posterior verificación y confirmación por parte de Candido's, la cual se realizará mediante los canales oficiales de comunicación, principalmente WhatsApp.

La disponibilidad de productos, precios, promociones y condiciones comerciales podrá variar sin previo aviso, de acuerdo con la existencia de stock, modificaciones de proveedores o políticas comerciales de la empresa. La confirmación definitiva del pedido se realizará únicamente una vez validada la información correspondiente.

Los beneficios de entrega gratuita son aplicables exclusivamente dentro de Paraná y zonas aledañas, en los días y horarios establecidos por la empresa. Para otras localidades podrán aplicarse costos, plazos y condiciones de entrega diferentes.

El uso de este sitio implica la aceptación de los presentes Términos y Condiciones, así como de la Política de Privacidad vigente.)
          </em>
        </p>
      </div>
    </Layout>
  );
}

export default Terms;
