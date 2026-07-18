import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import "../styles/Home.css";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";

const CAMPOS_PRECIO = [
  "Precio_Carton",
  "Precio_Caja",
  "Precio_Blister",
  "Precio_Bulto",
  "Precio_Unidad",
  "Precio_Botella",
];

function precioMinimo(producto) {
  const precios = CAMPOS_PRECIO.map((campo) => Number(producto[campo]) || 0).filter(
    (p) => p > 0
  );
  return precios.length ? Math.min(...precios) : 0;
}

function SearchResults() {
  const { productos, loading } = useProducts();
  const [params] = useSearchParams();
  const [orden, setOrden] = useState("");
  const [marca, setMarca] = useState("");

  const query = (params.get("q") || "").toLowerCase();

  if (loading) {
    return (
      <Layout>
        <h2>Cargando...</h2>
      </Layout>
    );
  }

  let resultados = productos.filter((p) => {
    const producto = (p.Producto || "").toLowerCase();
    const marcaProducto = (p.Marca || "").toLowerCase();
    const categoria = (p.CATEGORIA || "").toLowerCase();
    return (
      producto.includes(query) ||
      marcaProducto.includes(query) ||
      categoria.includes(query)
    );
  });

  const marcas = [...new Set(resultados.map((p) => p.Marca).filter(Boolean))];

  if (marca) {
    resultados = resultados.filter((p) => p.Marca === marca);
  }

  if (orden === "asc") {
    resultados = [...resultados].sort((a, b) => precioMinimo(a) - precioMinimo(b));
  } else if (orden === "desc") {
    resultados = [...resultados].sort((a, b) => precioMinimo(b) - precioMinimo(a));
  }

  return (
    <Layout>
      <Link to="/" className="volver-atras">
        <FaArrowLeft /> Volver atrás
      </Link>

      <h1 className="titulo-categoria">Resultados para "{params.get("q")}"</h1>

      <div className="filtros-categoria">
        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="">Ordenar por precio</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>

        {marcas.length > 1 && (
          <select value={marca} onChange={(e) => setMarca(e.target.value)}>
            <option value="">Todas las marcas</option>
            {marcas.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        )}
      </div>

      {resultados.length === 0 ? (
        <p className="sin-resultados">
          No encontramos productos que coincidan con tu búsqueda.
        </p>
      ) : (
        <div className={`productos-grid ${resultados.length < 4 ? "centrado" : ""}`}>
          {resultados.map((producto) => (
            <ProductCard key={producto.ID} producto={producto} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default SearchResults;
