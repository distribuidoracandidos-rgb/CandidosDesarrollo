import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/Orders.css";
import { supabase } from "../services/supabaseClient";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

function Orders() {
  const [pedidos, setPedidos] = useState([]);
  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [abierto, setAbierto] = useState(null);

  useEffect(() => {
    async function cargar() {
      if (!supabase) {
        setCargando(false);
        return;
      }

      const { data: dataPedidos } = await supabase
        .from("pedidos")
        .select("*")
        .order("creado_en", { ascending: false });

      const { data: dataItems } = await supabase
        .from("pedido_items")
        .select("*");

      setPedidos(dataPedidos || []);
      setItems(dataItems || []);
      setCargando(false);
    }

    cargar();
  }, []);

  if (cargando) {
    return (
      <Layout>
        <h1 className="titulo-categoria">Pedidos recibidos</h1>
        <p className="pedidos-vacio">Cargando...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="titulo-categoria">Pedidos recibidos</h1>

      {pedidos.length === 0 ? (
        <p className="pedidos-vacio">Todavía no llegó ningún pedido.</p>
      ) : (
        <div className="pedidos-lista">
          {pedidos.map((pedido) => {
            const itemsDelPedido = items.filter(
              (i) => i.pedido_id === pedido.id
            );
            const estaAbierto = abierto === pedido.id;

            return (
              <div key={pedido.id} className="pedido-card">
                <button
                  className="pedido-header"
                  onClick={() =>
                    setAbierto(estaAbierto ? null : pedido.id)
                  }
                >
                  <div className="pedido-header-info">
                    <strong>
                      {new Date(pedido.creado_en).toLocaleString("es-AR")}
                    </strong>
                    <span className={`pedido-estado pedido-estado-${pedido.estado}`}>
                      {pedido.estado}
                    </span>
                  </div>

                  <div className="pedido-header-total">
                    <strong>${Number(pedido.total).toLocaleString("es-AR")}</strong>
                    {estaAbierto ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {estaAbierto && (
                  <div className="pedido-items">
                    {itemsDelPedido.map((item) => (
                      <div key={item.id} className="pedido-item">
                        <span>
                          {item.producto_nombre}{" "}
                          <em>({item.tipo})</em> x{item.cantidad}
                        </span>
                        <strong>
                          $
                          {(item.precio_unitario * item.cantidad).toLocaleString(
                            "es-AR"
                          )}
                        </strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </Layout>
  );
}

export default Orders;
