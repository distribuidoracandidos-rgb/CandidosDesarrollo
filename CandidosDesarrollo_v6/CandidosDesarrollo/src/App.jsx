import "./App.css";
import AppRouter from "./router/AppRouter";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
