import "../styles/Home.css";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { useProducts } from "../context/ProductsContext";

function Home() {
  const { productos, loading } = useProducts();

  if (loading) {
    return (
      <Layout>
        <h2>Cargando productos...</h2>
      </Layout>
    );
  }

  // Categorías únicas
  const categorias = [...new Set(productos.map((p) => p.CATEGORIA))];

  return (
    <Layout>

      <Hero />

      <h2 id="categorias" className="titulo-seccion">Categorías</h2>

      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <CategoryCard
            key={categoria}
            nombre={categoria}
            slug={categoria.toLowerCase()}
          />
        ))}
      </div>

      <h2 className="titulo-seccion">Productos destacados</h2>

      <div className="productos-grid">
        {productos
          .filter((p) => p.DESTACADO === "SI")
          .map((producto) => (
            <ProductCard
              key={producto.ID}
              producto={producto}
            />
          ))}
      </div>

    </Layout>
  );
}

export default Home;
