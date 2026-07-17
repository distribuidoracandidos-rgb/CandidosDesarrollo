import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [mensaje, setMensaje] = useState("");


  function addToCart(producto) {
    setMensaje("✅ Producto agregado");

setTimeout(() => {
  setMensaje("");
}, 2000);

    setCart((prev) => {

      const existe = prev.find(
  (p) =>
    p.ID === producto.ID &&
    p.tipo === producto.tipo
);
      if (existe) {

        return prev.map((p) =>
          p.ID === producto.ID &&
p.tipo === producto.tipo
            ? {
                ...p,
                cantidad: p.cantidad + 1,
              }
            : p
        );

      }

      return [
        ...prev,
        {
          ...producto,
          cantidad: 1,
        },
      ];
    });
  }

  function increase(id, tipo) {

    setCart((prev) =>
      prev.map((p) =>
        p.ID === id && p.tipo === tipo
          ? {
              ...p,
              cantidad: p.cantidad + 1,
            }
          : p
      )
    );

  }

  function decrease(id, tipo) {

    setCart((prev) =>
      prev
        .map((p) =>
          p.ID === id && p.tipo === tipo
            ? {
                ...p,
                cantidad: p.cantidad - 1,
              }
            : p
        )
        .filter((p) => p.cantidad > 0)
    );

  }

const total = cart.reduce((acc, p) => {
  return acc + (Number(p.precio) * Number(p.cantidad));
}, 0);
console.log(cart);
console.log(total);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increase,
        decrease,
        total,
        mensaje,
      }}
    >
      {children}
    </CartContext.Provider>
  );

}

export function useCart() {
  return useContext(CartContext);
}
