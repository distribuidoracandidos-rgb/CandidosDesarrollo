import {
  FaInstagram,
  FaEnvelope,
  FaLocationDot,
  FaTruckFast,
} from "react-icons/fa6";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bloque">
        <strong>¿Querés ser vendedor de nuestra red?</strong>
        <p>Escribinos por Instagram o mail y te contamos cómo sumarte.</p>

        <div className="footer-contactos">
          <a
            href="https://instagram.com/candidos.mayorista"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> @candidos.mayorista
          </a>

          <a href="mailto:contacto@candidosdistribuidora.com.ar">
            <FaEnvelope /> contacto@candidosdistribuidora.com.ar
          </a>
        </div>
      </div>

      <div className="footer-bloque">
        <p className="footer-ubicacion">
          <FaLocationDot /> Paraná, Entre Ríos, Argentina
        </p>

        <p className="footer-envios">
          <FaTruckFast /> Envíos sin costo dentro de Paraná y zonas aledañas
        </p>
      </div>
    </footer>
  );
}

export default Footer;
