import "./App.css";
import AppRouter from "./router/AppRouter";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <AppRouter />
        <Analytics />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
