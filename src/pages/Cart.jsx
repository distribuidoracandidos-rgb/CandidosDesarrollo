import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart } = useCart();

  const total = cart.reduce(
    (acc, producto) => acc + Number(producto.precioCarton) * producto.cantidad,
    0
  );

  function enviarWhatsapp() {
    let mensaje = "Hola Candido's.%0A%0AQuiero pedir:%0A%0A";

    cart.forEach((p) => {
      mensaje += `• ${p.nombre} x ${p.cantidad}%0A`;
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
          {cart.map((producto, index) => (
            <div key={index} className="producto-card">
              <h3>{producto.nombre}</h3>
              <p>{producto.marca}</p>
              <p>
                Cartón: $
                {Number(producto.precioCarton).toLocaleString("es-AR")}
              </p>
              <p>Cantidad: {producto.cantidad}</p>
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
