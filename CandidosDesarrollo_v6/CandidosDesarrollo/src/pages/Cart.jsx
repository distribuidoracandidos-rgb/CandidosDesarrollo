import Layout from "../components/Layout";
import "../styles/Cart.css";
import { useCart } from "../context/CartContext";
import { FaMinus, FaPlus, FaTrashCan, FaCartShopping, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, total, increase, decrease, removeFromCart } = useCart();

  function enviarWhatsapp() {
    let mensaje = "Hola Candido's.%0A%0AQuiero pedir:%0A%0A";

    cart.forEach((p) => {
      mensaje += `• ${p.Producto}%0A`;
      mensaje += `   ${p.tipo} x${p.cantidad}%0A`;
      mensaje += `   $${(p.precio * p.cantidad).toLocaleString("es-AR")}%0A%0A`;
    });

    mensaje += `%0ATotal: $${total.toLocaleString("es-AR")}`;
    mensaje += "%0A%0AGracias.";

    window.open(`https://wa.me/5493434162242?text=${mensaje}`, "_blank");
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

        <button className="carrito-enviar" onClick={enviarWhatsapp}>
          <FaWhatsapp /> Enviar pedido por WhatsApp
        </button>
      </div>
    </Layout>
  );
}

export default Cart;
