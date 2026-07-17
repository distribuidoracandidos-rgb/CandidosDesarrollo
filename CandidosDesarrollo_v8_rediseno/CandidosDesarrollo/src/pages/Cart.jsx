import Layout from "../components/Layout";
import "../styles/Cart.css";
import { useCart } from "../context/CartContext";
import { FaMinus, FaPlus, FaTrashCan, FaCartShopping, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../services/supabaseClient";

function Cart() {
  const { cart, total, increase, decrease, removeFromCart } = useCart();
  const [enviando, setEnviando] = useState(false);

  async function enviarWhatsapp() {
    setEnviando(true);

    // Guardamos el pedido en la base de datos antes de mandarlo por WhatsApp.
    // Si por algún motivo falla el guardado, igual dejamos que el pedido
    // se mande por WhatsApp para no perder la venta.
    try {
      const { data: pedido, error } = await supabase
        .from("pedidos")
        .insert({ total })
        .select()
        .single();

      if (!error && pedido) {
        const items = cart.map((p) => ({
          pedido_id: pedido.id,
          producto_id: String(p.ID),
          producto_nombre: p.Producto,
          tipo: p.tipo,
          cantidad: p.cantidad,
          precio_unitario: p.precio,
        }));

        await supabase.from("pedido_items").insert(items);
      }
    } catch (err) {
      console.error("No se pudo guardar el pedido en la base de datos:", err);
    }

    let mensaje = "Hola Candido's.%0A%0AQuiero pedir:%0A%0A";

    cart.forEach((p) => {
      mensaje += `• ${p.Producto}%0A`;
      mensaje += `   ${p.tipo} x${p.cantidad}%0A`;
      mensaje += `   $${(p.precio * p.cantidad).toLocaleString("es-AR")}%0A%0A`;
    });

    mensaje += `%0ATotal: $${total.toLocaleString("es-AR")}`;
    mensaje += "%0A%0AGracias.";

    window.open(`https://wa.me/5493434162242?text=${mensaje}`, "_blank");

    setEnviando(false);
  }

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="carrito-vacio">
          <FaCartShopping className="carrito-vacio-icono" />
          <h2>Tu pedido está vacío</h2>
          <p>Agregá productos desde el catálogo para armar tu pedido.</p>
          <Link to="/" className="carrito-vacio-boton">
            Ver categorías
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="titulo-categoria">Mi pedido</h1>

      <div className="carrito-lista">
        {cart.map((producto) => (
          <div key={`${producto.ID}-${producto.tipo}`} className="carrito-item">
            <div className="carrito-item-imagen">
              <img
                src={`/imagenes/productos/${producto.FOTO}`}
                alt={producto.Producto}
              />
            </div>

            <div className="carrito-item-info">
              <span className="marca">{producto.Marca}</span>
              <h3>{producto.Producto}</h3>
              <span className="carrito-item-formato">{producto.tipo}</span>
            </div>

            <div className="carrito-item-precios">
              <span className="carrito-item-unitario">
                ${producto.precio.toLocaleString("es-AR")} c/u
              </span>
              <strong className="carrito-item-subtotal">
                ${(producto.precio * producto.cantidad).toLocaleString("es-AR")}
              </strong>
            </div>

            <div className="carrito-item-acciones">
              <div className="carrito-stepper">
                <button
                  aria-label="Restar"
                  onClick={() => decrease(producto.ID, producto.tipo)}
                >
                  <FaMinus />
                </button>

                <strong>{producto.cantidad}</strong>

                <button
                  aria-label="Sumar"
                  onClick={() => increase(producto.ID, producto.tipo)}
                >
                  <FaPlus />
                </button>
              </div>

              <button
                className="carrito-eliminar"
                aria-label="Eliminar producto"
                onClick={() => removeFromCart(producto.ID, producto.tipo)}
              >
                <FaTrashCan />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="carrito-resumen">
        <div className="carrito-total">
          <span>Total</span>
          <strong>${total.toLocaleString("es-AR")}</strong>
        </div>

        <button className="carrito-enviar" onClick={enviarWhatsapp} disabled={enviando}>
          <FaWhatsapp /> {enviando ? "Enviando..." : "Enviar pedido por WhatsApp"}
        </button>
      </div>
    </Layout>
  );
}

export default Cart;
