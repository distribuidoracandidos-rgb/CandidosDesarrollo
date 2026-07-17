import { FaBusSimple, FaWhatsapp } from "react-icons/fa6";
import "../styles/ServiceCard.css";

function ServiceCard() {
  return (
    <div className="servicio-card">
      <div className="servicio-icono">
        <FaBusSimple />
      </div>

      <div className="servicio-info">
        <strong>Carga Virtual SUBE</strong>
        <span>Servicios</span>
      </div>

      <a
        className="servicio-boton"
        href="https://wa.me/5493434162242?text=Hola%20Candido's%2C%20quiero%20consultar%20por%20la%20Carga%20Virtual%20de%20SUBE."
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp /> ¡Contáctanos!
      </a>
    </div>
  );
}

export default ServiceCard;
