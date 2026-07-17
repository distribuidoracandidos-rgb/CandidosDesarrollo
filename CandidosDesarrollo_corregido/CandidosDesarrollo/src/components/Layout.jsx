import Header from "./Header";
import Navbar from "./Navbar";
import { useCart } from "../context/CartContext";

function Layout({ children }) {
  const { mensaje, cart } = useCart();

  return (
    <div className="app">

      {mensaje && (
        <div className="toast">
          {mensaje}
        </div>
      )}

      <div className="carrito-flotante">
        🛒 {cart.reduce((acc, p) => acc + p.cantidad, 0)}
      </div>

      <Header />

      {children}

      <Navbar />

    </div>
  );
}

export default Layout;
