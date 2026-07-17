import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/">🏠 Inicio</Link>

      <Link to="/carrito">🛒 Pedido</Link>
      

    </nav>
  );
}

export default Navbar;
