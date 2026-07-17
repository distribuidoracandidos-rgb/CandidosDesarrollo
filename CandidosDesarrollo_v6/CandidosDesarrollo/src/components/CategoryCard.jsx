import { Link } from "react-router-dom";
import {
  FaSmoking,
  FaBottleWater,
  FaCookie,
  FaCookieBite,
  FaBagShopping,
  FaHouse,
  FaBox,
} from "react-icons/fa6";
import { GiSmokingPipe } from "react-icons/gi";

function CategoryCard({ nombre, slug }) {
  const iconos = {
    Cigarrillos: <FaSmoking />,
    Tabaco: <GiSmokingPipe />,
    Bebidas: <FaBottleWater />,
    Comestibles: <FaCookie />,
    Snack: <FaCookieBite />,
    Accesorios: <FaBagShopping />,
    Bazar: <FaHouse />,
  };

  return (
    <Link to={`/categoria/${slug}`} className="categoria">
      <div className="icono">{iconos[nombre] || <FaBox />}</div>
      <strong>{nombre}</strong>
    </Link>
  );
}

export default CategoryCard;
