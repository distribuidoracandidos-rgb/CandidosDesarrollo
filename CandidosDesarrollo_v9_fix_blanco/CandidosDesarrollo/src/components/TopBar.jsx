import { FaTruckFast, FaCircleXmark, FaWhatsapp, FaCircleUser } from "react-icons/fa6";
import "../styles/TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-info">
        <span>
          <FaTruckFast /> Envíos GRATIS en Paraná de lunes a viernes de 9:00 a 16:00 hs.
        </span>
        <span className="topbar-separador">|</span>
        <span>
          <FaCircleXmark /> Sábados y domingos no realizamos envíos
        </span>
      </div>

      <div className="topbar-accesos">
        <a
          href="https://wa.me/5493434162242"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> WhatsApp
        </a>

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
