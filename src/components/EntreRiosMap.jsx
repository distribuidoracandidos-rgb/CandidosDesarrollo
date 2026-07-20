import { useEffect, useRef, useState } from "react";
import { FaLocationDot, FaUsers, FaStore, FaUserTie } from "react-icons/fa6";
import entreRiosData from "../data/entreRiosRed.json";
import { RANGOS_LEYENDA, colorPorClientes } from "../data/entreRiosColors";
import "../styles/EntreRiosMap.css";

const { localidades } = entreRiosData;

function EntreRiosMap() {
  const [activa, setActiva] = useState(null);
  const [seleccionMobile, setSeleccionMobile] = useState(null);
  const [visible, setVisible] = useState(false);
  const contenedorRef = useRef(null);

  // Animación de entrada: el mapa aparece progresivamente cuando la
  // sección entra en pantalla, en vez de aparecer todo junto de golpe.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (contenedorRef.current) {
      observer.observe(contenedorRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const totalComercios = localidades.reduce((acc, l) => acc + l.comercios, 0);
  const totalLocalidades = localidades.length;

  function alTocar(localidad) {
    // En mobile no hay hover real, así que el toque abre/cierra la tarjeta.
    setSeleccionMobile((prev) => (prev?.id === localidad.id ? null : localidad));
  }

  return (
    <section
      className={`red-comercial ${visible ? "red-comercial-visible" : ""}`}
      ref={contenedorRef}
    >
      <h2 className="titulo-seccion">Nuestra Red Comercial</h2>
      <p className="red-comercial-intro">
        Un vistazo a dónde llega Candido's dentro de Entre Ríos. Pasá el
        cursor (o tocá, si estás en el celular) sobre cada localidad para ver
        el detalle.
      </p>

      <div className="red-comercial-mapa-wrap">
        <div className="red-comercial-mapa">
          <svg
            className="red-comercial-silueta"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Silueta esquemática inspirada en el contorno real de Entre
                Ríos (angosta al norte entre los ríos Paraná y Uruguay,
                ensanchándose hacia el sur) — no es un trazado geográfico
                exacto de límites oficiales. */}
            <path
              d="M 40 3
                 C 48 2, 56 4, 60 8
                 L 66 16 L 72 22 L 78 30 L 83 40
                 L 87 50 L 88 60 L 85 70
                 L 79 79 L 71 87 L 62 93
                 L 52 96 L 43 94
                 L 36 88 L 30 80
                 L 27 71 L 24 62
                 L 19 56 L 15 48
                 L 13 38 L 15 28
                 L 20 19 L 27 12
                 L 34 6 Z"
              fill="url(#gradienteMapa)"
              stroke="rgba(244, 180, 0, 0.4)"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="gradienteMapa" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1c1c1e" />
                <stop offset="100%" stopColor="#0a0a0a" />
              </linearGradient>
            </defs>
          </svg>

          {localidades.map((localidad, i) => (
            <button
              key={localidad.id}
              type="button"
              className={`red-comercial-punto ${activa?.id === localidad.id ? "activo" : ""}`}
              style={{
                left: `${localidad.x}%`,
                top: `${localidad.y}%`,
                "--color-punto": colorPorClientes(localidad.clientes),
                "--delay": `${i * 0.06}s`,
              }}
              onMouseEnter={() => setActiva(localidad)}
              onMouseLeave={() => setActiva(null)}
              onClick={() => alTocar(localidad)}
              aria-label={localidad.nombre}
            >
              <span className="red-comercial-punto-nucleo" />
              <span className="red-comercial-punto-nombre">{localidad.nombre}</span>

              {activa?.id === localidad.id && (
                <div className="red-comercial-tooltip">
                  <strong>{localidad.nombre}</strong>
                  <span>
                    <FaStore /> {localidad.comercios} comercios
                  </span>
                  <span>
                    <FaUsers /> {localidad.clientes} clientes activos
                  </span>
                  {localidad.vendedores > 0 && (
                    <span>
                      <FaUserTie /> {localidad.vendedores}{" "}
                      {localidad.vendedores === 1 ? "vendedor" : "vendedores"}
                    </span>
                  )}
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="red-comercial-leyenda">
          <strong>
            <FaLocationDot /> Referencias por clientes activos
          </strong>
          {RANGOS_LEYENDA.map((rango) => (
            <div key={rango.label} className="red-comercial-leyenda-item">
              <span
                className="red-comercial-leyenda-color"
                style={{ background: rango.color }}
              />
              {rango.label}
            </div>
          ))}
        </div>
      </div>

      {/* Tarjeta emergente para mobile (donde no hay hover real) */}
      {seleccionMobile && (
        <div
          className="red-comercial-card-mobile"
          onClick={() => setSeleccionMobile(null)}
        >
          <div className="red-comercial-card-mobile-contenido" onClick={(e) => e.stopPropagation()}>
            <strong>{seleccionMobile.nombre}</strong>
            <span>
              <FaStore /> {seleccionMobile.comercios} comercios
            </span>
            <span>
              <FaUsers /> {seleccionMobile.clientes} clientes activos
            </span>
            {seleccionMobile.vendedores > 0 && (
              <span>
                <FaUserTie /> {seleccionMobile.vendedores}{" "}
                {seleccionMobile.vendedores === 1 ? "vendedor" : "vendedores"}
              </span>
            )}
            <button onClick={() => setSeleccionMobile(null)}>Cerrar</button>
          </div>
        </div>
      )}

      <div className="red-comercial-stats">
        <div>
          <strong>+{totalLocalidades}</strong>
          <span>localidades atendidas</span>
        </div>
        <div>
          <strong>+{totalComercios}</strong>
          <span>comercios activos</span>
        </div>
        <div>
          <strong>+25</strong>
          <span>años de trayectoria</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>cobertura en Entre Ríos</span>
        </div>
      </div>
    </section>
  );
}

export default EntreRiosMap;
