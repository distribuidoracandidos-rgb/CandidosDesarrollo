import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../services/api";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await getProducts();
        setProductos(data);
      } finally {
        setLoading(false);
      }
    }

    cargar();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productos,
        loading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
