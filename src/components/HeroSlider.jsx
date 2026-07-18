import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa6";
import HeroChatMockup from "./HeroChatMockup";
import heroDeposito from "../assets/hero/hero-deposito-hd.jpg";
import "../styles/HeroSlider.css";

const SLIDES = [
  {
    etiqueta: "Mayorista de confianza",
    titulo: "Más de 25 años abasteciendo tu negocio",
    texto: "Ofrecemos las mejores marcas, precios competitivos y entrega rápida en Paraná y zona.",
  },
  {
    etiqueta: "Beneficio exclusivo",
    titulo: "Descuentos especiales pagando en efectivo",
    texto: "Consultá por promociones vigentes para comercios adheridos a nuestra red.",
  },
  {
    etiqueta: "Para tu comercio",
    titulo: "Más de 2.000 productos en un solo lugar",
    texto: "Cigarrillos, bebidas, snacks, accesorios y bazar, todo en un mismo pedido.",
  },
];

function HeroSlider() {
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActivo((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => clearInterval(intervalo);
  }, []);

  function anterior() {
    setActivo((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }

  function siguiente() {
    setActivo((prev) => (prev + 1) % SLIDES.length);
  }

  const slide = SLIDES[activo];

  return (
    <section
      className="hero-slider"
      style={{ backgroundImage: `url(${heroDeposito})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-textura" />

      <button className="hero-flecha hero-flecha-izq" onClick={anterior} aria-label="Anterior">
        <FaChevronLeft />
      </button>

      <div className="hero-contenido">
        <div className="hero-texto">
          <span className="hero-etiqueta">{slide.etiqueta}</span>
          <h1>{slide.titulo}</h1>
          <p>{slide.texto}</p>

          <div className="hero-botones">
            <a href="#categorias" className="hero-boton">
              Ver catálogo
            </a>

            <a
              href="https://wa.me/5493434162242?text=Hola%20Candido's%2C%20quer%C3%ADa%20consultar..."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-boton hero-boton-secundario"
            >
              <FaWhatsapp /> Contactar asesor
            </a>
          </div>
        </div>

        <HeroChatMockup />
      </div>

      <button className="hero-flecha hero-flecha-der" onClick={siguiente} aria-label="Siguiente">
        <FaChevronRight />
      </button>

      <div className="hero-puntos">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={i === activo ? "activo" : ""}
            onClick={() => setActivo(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
