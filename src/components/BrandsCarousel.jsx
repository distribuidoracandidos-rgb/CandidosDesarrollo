import "../styles/BrandsCarousel.css";

const MARCAS = [
  "Sarandi",
  "Chyru",
  "ReVirtual",
  "Claro",
  "Personal",
  "Movistar",
  "Espert",
  "Brownway",
  "CobroExpress",
  "Golden",
  "Fuegolandia",
  "Stanley",
  "DirecTV",
  "Panini",
  "OCB",
  "Rapipago",
  "Golozen",
  "Wolfram",
  "Payway",
  "Tabes SA",
  "Guaymallen",
  "Sube Nacion",
  "Fernet Branca",
  "Candela",
];

function BrandsCarousel() {
  // Duplicamos la lista para que el marquee sea infinito y continuo.
  const marcas = [...MARCAS, ...MARCAS];

  return (
    <section id="marcas" className="marcas">
      <h2 className="titulo-seccion">Distribuimos las marcas líderes del mercado</h2>
      <p className="marcas-texto">
        Trabajamos con proveedores de primera línea para garantizarte calidad
        y variedad en cada pedido.
      </p>

      <div className="marcas-carrusel">
        <div className="marcas-track">
          {marcas.map((marca, i) => (
            <span key={`${marca}-${i}`} className="marca-item">
              {marca}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsCarousel;
