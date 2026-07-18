import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";
import { useState } from "react";
import { FaWhatsapp, FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

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

  const nombreProducto = (producto.Producto || "").toLowerCase();

  // El botón de contacto va en servicios sin precio fijo: Carga Virtual SUBE
  // y Posnet Payway.
  const esCargaVirtualSube =
    nombreProducto.includes("carga") && nombreProducto.includes("sube");
  const esPosnetPayway =
    nombreProducto.includes("posnet") || nombreProducto.includes("payway");
  const esContactoDirecto = esCargaVirtualSube || esPosnetPayway;

  // Indicador de stock: si la planilla todavía no tiene una columna "Stock",
  // asumimos que está disponible para no mostrar "Sin stock" de forma incorrecta.
  const stockRaw = producto.Stock ?? producto.STOCK;
  const sinStock =
    stockRaw !== undefined &&
    ["no", "0", "false", "sin stock"].includes(String(stockRaw).toLowerCase());

  const esDestacado = producto.DESTACADO === "SI";
  const esNuevo = producto.NUEVO === "SI";

  return (
    <div className="producto-card">

      {(esDestacado || esNuevo || sinStock) && (
        <div className="producto-etiquetas">
          {esNuevo && <span className="etiqueta etiqueta-nuevo">Nuevo</span>}
          {esDestacado && <span className="etiqueta etiqueta-destacado">Destacado</span>}
        </div>
      )}

      <div className="producto-imagen">
        <img
          src={`/imagenes/productos/${producto.FOTO}`}
          alt={producto.Producto}
          loading="lazy"
          decoding="async"
        />
      </div>

      <span className="marca">{producto.Marca}</span>

      <h3>{producto.Producto}</h3>

      <p className="presentacion">
        {producto.Presentacion}
      </p>

      <div className={`producto-stock ${sinStock ? "sin-stock" : "en-stock"}`}>
        {sinStock ? <FaCircleXmark /> : <FaCircleCheck />}
        {sinStock ? "Sin stock" : "En stock"}
      </div>

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

        {!sinStock &&
          conPrecio.map((f) => (
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

        {esContactoDirecto && (
          <a
            className="boton-contactar"
            href={`https://wa.me/5493434162242?text=Hola%20Candido's%2C%20quiero%20consultar%20por%20${encodeURIComponent(
              producto.Producto || ""
            )}.`}
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
