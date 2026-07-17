import logo from "../assets/logo/logo.png";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-marca">
        <img src={logo} alt="Candido's" className="header-logo" />

        <div>
          <h1>Candido's</h1>
          <p>Distribuidora mayorista • Más de 25 años junto al comerciante</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
