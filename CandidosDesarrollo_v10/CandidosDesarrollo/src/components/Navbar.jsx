import { Link } from "react-router-dom";
import { FaHouse, FaCartShopping } from "react-icons/fa6";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <FaHouse /> Inicio
      </Link>

      <Link to="/carrito">
        <FaCartShopping /> Pedido
      </Link>
    </nav>
  );
}

export default Navbar;
