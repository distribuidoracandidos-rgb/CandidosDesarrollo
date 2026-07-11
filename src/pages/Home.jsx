
import "../styles/Home.css";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import categories from "../data/categories";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { getProducts } from "../services/api";

function Home() {
  const [productosApi, setProductosApi] = useState([]);

useEffect(() => {
  async function cargarProductos() {
    try {
      const data = await getProducts();
      console.log("Productos:", data);
      setProductosApi(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  }

  cargarProductos();
}, []);
  return (
  <Layout>

    <SearchBar />

    <h2>Categorías</h2>

   {[...new Set(productosApi.map((p) => p.CATEGORIA))].map((categoria) => (
  <CategoryCard
    key={categoria}
    nombre={categoria}
    slug={categoria.toLowerCase()}
  />
))}


<h2>Productos destacados</h2>

{productosApi.map((producto) => (
  <ProductCard
    key={producto.ID}
    producto={{
      marca: producto.Marca,
      nombre: producto.Producto,
      presentacion: producto.Presentacion,
      precioCarton: producto.Precio_Cartón,
      precioCaja: producto.Precio_Caja,
    }}
  />
))}

  </Layout>
);
}

export default Home;

