import { FaTruckFast, FaCircleXmark, FaWhatsapp, FaCircleUser } from "react-icons/fa6";
import "../styles/TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-accesos topbar-accesos-izq">
        <a
          href="https://wa.me/5493434162242"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </div>

      <div className="topbar-info">
        <span>
          <FaTruckFast /> Envíos <strong>GRATIS</strong> en Paraná de lunes a
          viernes de <strong>9:00 A 16:00 HS.</strong>
        </span>
        <span className="topbar-separador">|</span>
        <span className="topbar-info-secundaria">
          <FaCircleXmark /> Sábados y domingos no realizamos envíos
        </span>
      </div>

      <div className="topbar-accesos">
        <button
          type="button"
          className="topbar-login"
          onClick={() => alert("El acceso de clientes registrados está próximamente disponible.")}
        >
          <FaCircleUser /> Ingresar
        </button>
      </div>
    </div>
  );
}

export default TopBar;
