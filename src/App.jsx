import "./App.css";
import AppRouter from "./router/AppRouter";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
