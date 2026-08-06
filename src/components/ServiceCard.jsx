import { FaBusSimple, FaShop, FaWhatsapp } from "react-icons/fa6";
import "../styles/ServiceCard.css";

function ServiceCard() {
  return (
    <>
      <div className="servicio-card">
        <div className="servicio-icono">
          <FaBusSimple />
        </div>

        <div className="servicio-info">
          <strong>Carga virtual y SUBE</strong>
          <span>Servicios</span>
        </div>

        <a
          className="servicio-boton"
          href="https://wa.me/5493434162242?text=Hola..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> ¡Contáctanos!
        </a>
      </div>

      <div className="servicio-card">
        <div className="servicio-icono">
          <FaShop />
        </div>

        <div className="servicio-info">
          <strong>Rapipago</strong>
          <span>Cobranza de facturas</span>
        </div>

        <a
          className="servicio-boton"
          href="https://wa.me/5493434162242?text=Hola%20Candido's,%20quiero%20consultar%20por%20Rapipago."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> ¡Contáctanos!
        </a>
      </div>
    </>
  );
}

export default ServiceCard;
