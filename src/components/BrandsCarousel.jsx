import "../styles/BrandsCarousel.css";

const MARCAS = [
  "Sarandí",
  "Brownway",
  "Golden",
  "Espert",
  "Tabes S.A.",
  "Candela",
  "OCB",
  "Chyru",
  "Guaymallén",
  "Golozen",
  "Fernet Branca",
  "Wolfram",
  "SUBE",
  "ReVirtual",
  "Payway",
  "Movistar",
  "Claro",
  "Personal",
  "DirecTV",
  "Fuegolandia",
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
