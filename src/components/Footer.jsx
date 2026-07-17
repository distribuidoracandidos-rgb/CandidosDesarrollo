import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
  FaLock,
  FaShieldHalved,
} from "react-icons/fa6";
import logo from "../assets/logo/logo.png";
import "../styles/Footer.css";

function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-columnas">

        <div className="footer-col footer-col-marca">
          <div className="footer-logo">
            <img src={logo} alt="Candido's" />
            <div>
              <strong>Candido's</strong>
              <span>Distribuidora Mayorista</span>
            </div>
          </div>

          <p>
            Más de 25 años abasteciendo kioscos, almacenes y comercios de
            Paraná y zona con las mejores marcas y precios.
          </p>

          <div className="footer-social">
            <a href="https://wa.me/5493434162242" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/candidos.mayorista" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <strong>Empresa</strong>
          <Link to="/nosotros">Nosotros</Link>
          <a href="/#marcas">Marcas</a>
          <Link to="/novedades">Novedades</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="footer-col">
          <strong>Información</strong>
          <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
          <Link to="/terminos">Términos y condiciones</Link>
          <Link to="/privacidad">Política de privacidad</Link>
        </div>

        <div className="footer-col">
          <strong>Atención al cliente</strong>
          <a href="https://wa.me/5493434162242">
            <FaWhatsapp /> +54 9 343 416-2242
          </a>
          <a href="mailto:distribuidoracandidos@gmail.com">
            <FaEnvelope /> distribuidoracandidos@gmail.com
          </a>
          <span className="footer-ubicacion">
            <FaLocationDot /> Paraná, Entre Ríos, Argentina
          </span>
        </div>

        <div className="footer-col">
          <strong>Legal</strong>
          <Link to="/privacidad">Política de privacidad</Link>
          <Link to="/terminos">Términos y condiciones</Link>
          <span className="footer-seguridad">
            <FaLock /> Seguridad (HTTPS)
          </span>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © {anio} Candido's Distribuidora Mayorista. Todos los derechos reservados.
        </span>
        <span className="footer-sitio-seguro">
          <FaShieldHalved /> Sitio seguro
        </span>
      </div>
    </footer>
  );
}

export default Footer;
