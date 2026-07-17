import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Home.css";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useProducts } from "../context/ProductsContext";

function Category() {
  const { nombre } = useParams();
  const { productos, loading } = useProducts();
  const [busqueda, setBusqueda] = useState("");

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

  const texto = busqueda.trim().toLowerCase();

  const filtrados = texto
    ? deLaCategoria.filter((p) => {
        const producto = (p.Producto || "").toLowerCase();
        const marca = (p.Marca || "").toLowerCase();
        return producto.includes(texto) || marca.includes(texto);
      })
    : deLaCategoria;

  return (
    <Layout>
      <h1 className="titulo-categoria">{nombre}</h1>

      <SearchBar
        value={busqueda}
        onChange={setBusqueda}
        placeholder={`Buscar en ${nombre}...`}
      />

      {filtrados.length === 0 ? (
        <p className="sin-resultados">
          No encontramos productos que coincidan con "{busqueda}".
        </p>
      ) : (
        <div className="productos-grid">
          {filtrados.map((producto) => (
            <ProductCard key={producto.ID} producto={producto} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Category;
