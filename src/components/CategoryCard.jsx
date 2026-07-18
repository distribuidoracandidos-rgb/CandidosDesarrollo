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

function CategoryCard({ nombre, slug, foto, cantidad }) {
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

      {cantidad > 0 && (
        <span className="categoria-cantidad">
          {cantidad} {cantidad === 1 ? "producto" : "productos"}
        </span>
      )}

      <span className="categoria-ingresar">
        Ver categoría <FaArrowRight />
      </span>
    </Link>
  );
}

export default CategoryCard;
