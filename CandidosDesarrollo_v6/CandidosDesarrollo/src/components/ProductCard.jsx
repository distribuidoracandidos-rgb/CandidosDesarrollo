import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

function ProductCard({ producto }) {
  const { addToCart } = useCart();
  const [agregado, setAgregado] = useState("");

  const formatos = [
    {
      nombre: "Cartón",
      precio: producto.Precio_Carton,
    },
    {
      nombre: "Caja",
      precio: producto.Precio_Caja,
    },
    {
      nombre: "Blister",
      precio: producto.Precio_Blister,
    },
    {
      nombre: "Bulto",
      precio: producto.Precio_Bulto,
    },
    {
      nombre: "Unidad",
      precio: producto.Precio_Unidad,
    },
    {
      nombre: "Botella",
      precio: producto.Precio_Botella,
    },
  ];

  const conPrecio = formatos.filter((f) => Number(f.precio) > 0);

  // El botón de contacto va solo en "Carga Virtual SUBE" (no tiene precio fijo),
  // no en "Tarjeta SUBE" (que sí es un producto con stock/precio).
  const nombreProducto = (producto.Producto || "").toLowerCase();
  const esCargaVirtualSube =
    nombreProducto.includes("carga") && nombreProducto.includes("sube");

  return (
    <div className="producto-card">

      <div className="producto-imagen">
        <img
          src={`/imagenes/productos/${producto.FOTO}`}
          alt={producto.Producto}
        />
      </div>

      <span className="marca">{producto.Marca}</span>

      <h3>{producto.Producto}</h3>

      <p className="presentacion">
        {producto.Presentacion}
      </p>

      {conPrecio.length > 0 && (
        <div className="precios">
          {conPrecio.map((f) => (
            <div key={f.nombre} className="precio-item">
              <span>{f.nombre}</span>
              <strong>${Number(f.precio).toLocaleString("es-AR")}</strong>
            </div>
          ))}
        </div>
      )}

      <div className="botones-producto">

        {conPrecio.map((f) => (
          <button
            key={f.nombre}
            className={agregado === f.nombre ? "agregado" : ""}
            onClick={() => {
              addToCart({
                ...producto,
                tipo: f.nombre,
                precio: Number(f.precio),
              });

              setAgregado(f.nombre);

              setTimeout(() => {
                setAgregado("");
              }, 1000);
            }}
          >
            {agregado === f.nombre ? "✔ Agregado" : `+ ${f.nombre}`}
          </button>
        ))}

        {esCargaVirtualSube && (
          <a
            className="boton-contactar"
            href="https://wa.me/5493434162242?text=Hola%20Candido's%2C%20quiero%20consultar%20por%20la%20SUBE."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> ¡Contáctanos!
          </a>
        )}

      </div>

    </div>
  );
}

export default ProductCard;
