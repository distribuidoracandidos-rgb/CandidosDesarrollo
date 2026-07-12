import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/">🏠 Inicio</Link>

      <Link to="/">📂 Categorías</Link>

      <Link to="/carrito">🛒 Pedido</Link>
      

    </nav>
  );
}

export default Navbar;
