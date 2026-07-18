import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMagnifyingGlass, FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logo/logo.png";
import { useCart } from "../context/CartContext";
import "../styles/Header.css";

function Header() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();
  const { cart } = useCart();

  const cantidad = cart.reduce((acc, p) => acc + p.cantidad, 0);

  function buscar(e) {
    e.preventDefault();
    if (busqueda.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(busqueda.trim())}`);
    }
  }

  return (
    <header className="header">
      <div className="header-fila">
        <Link to="/" className="header-marca">
          <img src={logo} alt="Candido's" className="header-logo" />
          <div>
            <h1>Candido's</h1>
            <span>Distribuidora Mayorista</span>
          </div>
        </Link>

        <nav className="header-nav">
          <Link to="/">Inicio</Link>
          <a href="/#categorias">Catálogo</a>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/opiniones">Opiniones</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div className="header-acciones">
          <form className="header-buscador" onSubmit={buscar}>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button type="submit" aria-label="Buscar">
              <FaMagnifyingGlass />
            </button>
          </form>

          <Link to="/carrito" className="header-carrito">
            <FaCartShopping />
            {cantidad > 0 && <span className="header-carrito-badge">{cantidad}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
