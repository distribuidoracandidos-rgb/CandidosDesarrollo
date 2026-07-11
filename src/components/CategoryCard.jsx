import { Link } from "react-router-dom";

function CategoryCard({ nombre, slug }) {
  return (
    <Link to={`/categoria/${slug}`} className="categoria">
      <strong>{nombre}</strong>
    </Link>
  );
}

export default CategoryCard;
