import "../styles/Home.css";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import BrandsCarousel from "../components/BrandsCarousel";
import TrustedBy from "../components/TrustedBy";
import TestimonialsSection from "../components/TestimonialsSection";
import StatsSection from "../components/StatsSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import HeroSlider from "../components/HeroSlider";
import Benefits from "../components/Benefits";
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

  // Para cada categoría, usamos la foto de un producto real de esa
  // categoría como fondo de la tarjeta (preferimos uno marcado como
  // destacado, si no hay, el primero que tenga foto cargada). Así queda
  // sincronizado solo con la base de datos, sin tener que elegir fotos
  // a mano ni tocar código cuando cambien los productos.
  const fotoPorCategoria = {};
  categorias.forEach((categoria) => {
    const deLaCategoria = productos.filter((p) => p.CATEGORIA === categoria);
    const destacado = deLaCategoria.find((p) => p.DESTACADO === "SI" && p.FOTO);
    const conFoto = destacado || deLaCategoria.find((p) => p.FOTO);
    fotoPorCategoria[categoria] = conFoto?.FOTO;
  });

  const destacados = productos.filter((p) => p.DESTACADO === "SI");

  return (
    <Layout>

      <HeroSlider />

      <Benefits />

      <ServiceCard />

      <h2 id="categorias" className="titulo-seccion">Categorías</h2>

      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <CategoryCard
            key={categoria}
            nombre={categoria}
            slug={categoria.toLowerCase()}
            foto={fotoPorCategoria[categoria]}
          />
        ))}
      </div>

      <BrandsCarousel />

      <h2 className="titulo-seccion">Productos destacados</h2>

      <div className={`productos-grid ${destacados.length < 4 ? "centrado" : ""}`}>
        {destacados.map((producto) => (
          <ProductCard
            key={producto.ID}
            producto={producto}
          />
        ))}
      </div>

      <TrustedBy />

      <TestimonialsSection />

      <StatsSection />

      <Newsletter />

      <Footer />

    </Layout>
  );
}

export default Home;
