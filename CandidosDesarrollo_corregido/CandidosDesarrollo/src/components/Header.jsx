import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-marca">
        <h1>Candido's</h1>
        <p>Distribuidora mayorista • Más de 25 años junto al comerciante</p>
      </div>

      <a
        className="header-contacto"
        href="https://wa.me/5493434162242?text=Hola%20Candido's%2C%20quer%C3%ADa%20consultar..."
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 Contactanos
      </a>
    </header>
  );
}

export default Header;
