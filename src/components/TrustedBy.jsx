import { FaStore } from "react-icons/fa6";
import "../styles/TrustedBy.css";

// Placeholder: reemplazar por los nombres y, si tenés, logos reales de tus
// comercios adheridos. Podés agregar más objetos a esta lista sin tocar
// el resto del componente.
const CLIENTES = [
  { label: "Drugstore", nombre: "Terminal" },
  { label: "Axion", nombre: "Cerrito" },
  { label: "Autoservicio", nombre: "El Gringo" },
  { label: "Maxi", nombre: "Al Sur" },
  { label: "Almacén", nombre: "Violeta" },
  { label: "", nombre: "Madafaka" },
  { label: "Drugstore", nombre: "Gregorutti" },
  { label: "YPF", nombre: "Don Sebastian" },
  { label: "Kiosco", nombre: "La Esquina" },
  { label: "Distribuidora", nombre: "Del Centro" },
  { label: "Drugstore", nombre: "Fratello" },
  { label: "", nombre: "Deu SRL" },
  { label: "Autoservicio", nombre: "El Sauce" },
  { label: "Despensa", nombre: "La Familia" },
  { label: "Bar", nombre: "Schonfeldt" },
  { label: "Drugstore", nombre: "Almafuertes" },
  { label: "Verduleria", nombre: "Laprida" },
  { label: "Maxi", nombre: "Kiosco el 21" },
  { label: "Granja y Polleria", nombre: "Los Tios" },
  { label: "Shell", nombre: "Wagner" },
  { label: "Kiosco", nombre: "24 Horas" },
];

function TrustedBy() {
  // Duplicamos la lista para lograr el efecto de scroll infinito continuo.
  const fila = [...CLIENTES, ...CLIENTES];

  return (
    <section className="confian">
      <h2 className="titulo-seccion">Comercios que confían en nosotros</h2>

      <div className="confian-carrusel">
        <div className="confian-track confian-track-derecha">
          {fila.map((cliente, i) => (
            <div
              key={`der-${cliente.nombre}-${i}`}
              className={`confian-card ${i % 3 === 0 ? "confian-card-grande" : ""}`}
            >
              {i % 2 === 0 && <FaStore className="confian-icono" />}
              <span className="confian-label">{cliente.label}</span>
              <strong className="confian-nombre">{cliente.nombre}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="confian-carrusel">
        <div className="confian-track confian-track-izquierda">
          {fila.map((cliente, i) => (
            <div
              key={`izq-${cliente.nombre}-${i}`}
              className={`confian-card ${i % 3 === 1 ? "confian-card-grande" : ""}`}
            >
              {i % 2 !== 0 && <FaStore className="confian-icono" />}
              <span className="confian-label">{cliente.label}</span>
              <strong className="confian-nombre">{cliente.nombre}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
