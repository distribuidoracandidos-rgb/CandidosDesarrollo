import { Link } from "react-router-dom";

function CategoryCard({ nombre, slug }) {

  const iconos = {
    Cigarrillos: "🚬",
    Tabaco: "🌿",
    Bebidas: "🥤",
    Comestibles: "🍪",
    Snack: "🍿",
    Accesorios: "🛍️",
    Bazar: "🏠"
  };

  return (
    <Link to={`/categoria/${slug}`} className="categoria">

      <div className="icono">
        {iconos[nombre] || "📦"}
      </div>

      <strong>{nombre}</strong>

    </Link>
  );
}

export default CategoryCard;
