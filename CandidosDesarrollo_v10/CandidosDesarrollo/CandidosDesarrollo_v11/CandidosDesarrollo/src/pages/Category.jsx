import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import "../styles/Home.css";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useProducts } from "../context/ProductsContext";
import { nombreVisible } from "../data/categoryDisplay";

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

function Category() {
  const { nombre } = useParams();
  const { productos, loading } = useProducts();
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("");
  const [marca, setMarca] = useState("");

  if (loading) {
    return (
      <Layout>
        <h2>Cargando...</h2>
      </Layout>
    );
  }

  const deLaCategoria = productos.filter(
    (p) => p.CATEGORIA.toLowerCase() === nombre.toLowerCase()
  );

  const marcas = [...new Set(deLaCategoria.map((p) => p.Marca).filter(Boolean))];

  const texto = busqueda.trim().toLowerCase();

  let filtrados = texto
    ? deLaCategoria.filter((p) => {
        const producto = (p.Producto || "").toLowerCase();
        const marcaProducto = (p.Marca || "").toLowerCase();
        return producto.includes(texto) || marcaProducto.includes(texto);
      })
    : deLaCategoria;

  if (marca) {
    filtrados = filtrados.filter((p) => p.Marca === marca);
  }

  if (orden === "asc") {
    filtrados = [...filtrados].sort((a, b) => precioMinimo(a) - precioMinimo(b));
  } else if (orden === "desc") {
    filtrados = [...filtrados].sort((a, b) => precioMinimo(b) - precioMinimo(a));
  }

  return (
    <Layout>
      <Link to="/" className="volver-atras">
        <FaArrowLeft /> Volver atrás
      </Link>

      <h1 className="titulo-categoria">{nombreVisible(nombre)}</h1>

      <SearchBar
        value={busqueda}
        onChange={setBusqueda}
        placeholder={`Buscar en ${nombreVisible(nombre)}...`}
      />

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

      {filtrados.length === 0 ? (
        <p className="sin-resultados">
          No encontramos productos que coincidan con tu búsqueda.
        </p>
      ) : (
        <div className={`productos-grid ${filtrados.length < 4 ? "centrado" : ""}`}>
          {filtrados.map((producto) => (
            <ProductCard key={producto.ID} producto={producto} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Category;
