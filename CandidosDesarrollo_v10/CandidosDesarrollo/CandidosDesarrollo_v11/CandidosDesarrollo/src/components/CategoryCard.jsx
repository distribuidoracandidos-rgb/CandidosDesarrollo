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

function CategoryCard({ nombre, slug, foto }) {
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
      {foto ? (
        <img
          src={`/imagenes/productos/${foto}`}
          alt=""
          className="categoria-imagen"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="categoria-fondo" />
      )}

      <div className="categoria-overlay" />

      <div className="icono">{iconos[nombre] || <FaBox />}</div>
      <strong>{nombreVisible(nombre)}</strong>
      <span className="categoria-ingresar">
        Ingresar <FaArrowRight />
      </span>
    </Link>
  );
}

export default CategoryCard;
