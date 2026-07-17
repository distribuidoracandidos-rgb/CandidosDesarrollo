import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
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
