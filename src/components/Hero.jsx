import "../styles/Hero.css";
import heroBg from "../assets/hero/galpon.webp";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-luces" />
      <div className="hero-textura" />

      <div className="hero-texto">
        <h1>Candido's</h1>

        <p>
          Distribuidora mayorista de kioscos, almacenes y comercios.
        </p>

        <a href="#categorias" className="hero-boton">
          Ver catálogo
        </a>
      </div>
    </section>
  );
}

export default Hero;
