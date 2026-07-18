import TopBar from "./TopBar";
import Header from "./Header";
import Navbar from "./Navbar";
import { useCart } from "../context/CartContext";

function Layout({ children }) {
  const { mensaje } = useCart();

  return (
    <div className="app">

      {mensaje && (
        <div className="toast">
          {mensaje}
        </div>
      )}

      <TopBar />
      <Header />

      {children}

      <Navbar />

    </div>
  );
}

export default Layout;
