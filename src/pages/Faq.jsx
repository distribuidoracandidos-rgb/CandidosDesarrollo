import Layout from "../components/Layout";
import "../styles/PaginaInstitucional.css";

const PREGUNTAS = [
  {
    p: "¿Cuál es el mínimo de compra?",
    r: "Consultanos por WhatsApp según el producto, cada formato tiene su mínimo.",
  },
  {
    p: "¿Hacen envíos?",
    r: "Sí, envíos sin costo dentro de Paraná y zonas aledañas, de lunes a viernes de 9 a 16 hs.",
  },
  {
    p: "¿Qué medios de pago aceptan?",
    r: "Transferencia, efectivo y Mercado Pago.",
  },
  {
    p: "¿Puedo retirar por el local?",
    r: "Sí, coordiná el retiro escribiéndonos por WhatsApp.",
  },
];

function Faq() {
  return (
    <Layout>
      <div className="pagina-institucional">
        <h1>Preguntas frecuentes</h1>
        {PREGUNTAS.map((item) => (
          <div key={item.p}>
            <h2>{item.p}</h2>
            <p>{item.r}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Faq;
