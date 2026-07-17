import { FaTruckFast, FaCreditCard, FaBox, FaAward } from "react-icons/fa6";
import "../styles/Benefits.css";

const BENEFICIOS = [
  {
    icono: <FaTruckFast />,
    titulo: "Envíos gratuitos en Paraná",
    texto: "Lunes a viernes de 9 a 16 hs.",
  },
  {
    icono: <FaCreditCard />,
    titulo: "Todos los medios de pago",
    texto: "Transferencia, efectivo, MP",
  },
  {
    icono: <FaBox />,
    titulo: "Más de 2.000 productos",
    texto: "Variedad para tu negocio",
  },
  {
    icono: <FaAward />,
    titulo: "+25 años de experiencia",
    texto: "Distribuidora mayorista",
  },
];

function Benefits() {
  return (
    <section className="beneficios">
      {BENEFICIOS.map((b) => (
        <div key={b.titulo} className="beneficio-card">
          <div className="beneficio-icono">{b.icono}</div>
          <div>
            <strong>{b.titulo}</strong>
            <p>{b.texto}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Benefits;
