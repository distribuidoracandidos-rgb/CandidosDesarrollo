import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";
import { useState } from "react";

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

      <div className="precios">

        {formatos
          .filter((f) => Number(f.precio) > 0)
          .map((f) => (
            <div
              key={f.nombre}
              className="precio-item"
            >
              <span>{f.nombre}</span>

              <strong>
                $
                {Number(f.precio).toLocaleString("es-AR")}
              </strong>
            </div>
          ))}

      </div>

      <div className="botones-producto">

       {formatos
  .filter((f) => Number(f.precio) > 0)
  .map((f) => (
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
  
      </div>

    </div>
  );
}

export default ProductCard;
