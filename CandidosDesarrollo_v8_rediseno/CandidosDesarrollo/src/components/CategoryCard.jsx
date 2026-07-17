import { Link } from "react-router-dom";
import {
  FaSmoking,
  FaBottleWater,
  FaCookie,
  FaCookieBite,
  FaBagShopping,
  FaHouse,
  FaBox,
  FaArrowRight,
} from "react-icons/fa6";
import { GiSmokingPipe } from "react-icons/gi";
import { nombreVisible } from "../data/categoryDisplay";

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
      <div className="categoria-fondo" />
      <div className="icono">{iconos[nombre] || <FaBox />}</div>
      <strong>{nombreVisible(nombre)}</strong>
      <span className="categoria-ingresar">
        Ingresar <FaArrowRight />
      </span>
    </Link>
  );
}

export default CategoryCard;
