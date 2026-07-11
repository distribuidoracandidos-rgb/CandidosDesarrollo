function ProductCard({ producto }) {
  return (
    <div className="producto-card">
      <div className="producto-imagen">
        📦
      </div>

      <span className="marca">{producto.marca}</span>

      <h3>{producto.nombre}</h3>

      <p>{producto.presentacion}</p>

      <div className="precios">
        <strong>Cartón: ${Number(producto.precioCarton).toLocaleString("es-AR")}</strong>

        <span>Caja: ${Number(producto.precioCaja).toLocaleString("es-AR")}</span>
      </div>

      <button>Agregar al pedido</button>
    </div>
  );
}

export default ProductCard;
