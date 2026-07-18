import { FaWhatsapp, FaCheckDouble } from "react-icons/fa6";
import "../styles/HeroChatMockup.css";

// Mockup de chat integrado a la composición del Hero (no es una captura
// real de WhatsApp, es una recreación propia con la misma estética).
function HeroChatMockup() {
  return (
    <div className="hero-chat">
      <div className="hero-chat-header">
        <FaWhatsapp />
        <div>
          <strong>Candido's</strong>
          <span>en línea</span>
        </div>
      </div>

      <div className="hero-chat-cuerpo">
        <div className="hero-chat-burbuja hero-chat-burbuja-cliente">
          Hola! Necesito hacer un pedido para el kiosco 👋
        </div>

        <div className="hero-chat-burbuja hero-chat-burbuja-nosotros">
          ¡Hola! Contanos qué necesitás y te armamos el pedido al toque 🚚
          <span className="hero-chat-hora">
            09:41 <FaCheckDouble />
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroChatMockup;
