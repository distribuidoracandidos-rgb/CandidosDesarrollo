import Layout from "../components/Layout";
import "../styles/ProductCard.css";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    total,
    increase,
    decrease,
  } = useCart();

  function enviarWhatsapp() {
    let mensaje = "Hola Candido's.%0A%0AQuiero pedir:%0A%0A";

    cart.forEach((p) => {
      mensaje += `• ${p.Producto}%0A`;
      mensaje += `   ${p.tipo} x${p.cantidad}%0A`;
      mensaje += `   $${(p.precio * p.cantidad).toLocaleString("es-AR")}%0A%0A`;
    });

    mensaje += `%0ATotal: $${total.toLocaleString("es-AR")}`;
    mensaje += "%0A%0AGracias.";

    window.open(
      `https://wa.me/5493434162242?text=${mensaje}`,
      "_blank"
    );
  }

  return (
    <Layout>
      <h1>Mi pedido</h1>

      {cart.length === 0 ? (
        <p>No hay productos agregados.</p>
      ) : (
        <>
          {cart.map((producto) => (
            <div
              key={`${producto.ID}-${producto.tipo}`}
              className="producto-card"
            >
              <h3>{producto.Producto}</h3>

              <p>{producto.Marca}</p>

              <p>
                {producto.tipo}: $
                {producto.precio.toLocaleString("es-AR")}
              </p>

              <p>
                Subtotal: $
                {(producto.precio * producto.cantidad).toLocaleString("es-AR")}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <button
                  onClick={() => decrease(producto.ID, producto.tipo)}
                >
                  -
                </button>

                <strong>{producto.cantidad}</strong>

                <button
                  onClick={() => increase(producto.ID, producto.tipo)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <hr />

          <h2>Total: ${total.toLocaleString("es-AR")}</h2>

          <button onClick={enviarWhatsapp}>
            Enviar pedido por WhatsApp
          </button>
        </>
      )}
    </Layout>
  );
}

export default Cart;
