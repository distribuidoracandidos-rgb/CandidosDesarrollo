import { useParams } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import AdminHeader from "../components/AdminHeader";
import "../styles/Admin.css";

function AdminClienteDetalle() {
  const { id } = useParams();

  const [cliente, setCliente] = useState(null);
  const [ventas, setVentas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [nueva, setNueva] = useState({
    producto: "",
    cantidad: 1,
    precioUnitario: "",
    notas: "",
  });

  async function cargar() {
    setCargando(true);

    const { data: dataCliente } = await supabase
      .from("clientes")
      .select("*")
      .eq("id", id)
      .single();

    const { data: dataVentas } = await supabase
      .from("ventas_clientes")
      .select("*")
      .eq("cliente_id", id)
      .order("fecha", { ascending: false });

    setCliente(dataCliente || null);
    setVentas(dataVentas || []);
    setCargando(false);
  }

  useEffect(() => {
    cargar();
  }, [id]);

  const total = ventas.reduce((acc, v) => acc + Number(v.monto), 0);
  const montoCalculado =
    (Number(nueva.cantidad) || 0) * (Number(nueva.precioUnitario) || 0);

  async function handleAgregar(e) {
    e.preventDefault();
    if (!nueva.producto.trim() || !nueva.precioUnitario) return;

    setGuardando(true);

    const { error } = await supabase.from("ventas_clientes").insert({
      cliente_id: id,
      producto: nueva.producto.trim(),
      cantidad: Number(nueva.cantidad) || 1,
      monto: montoCalculado,
      notas: nueva.notas.trim() || null,
    });

    setGuardando(false);

    if (!error) {
      setNueva({ producto: "", cantidad: 1, precioUnitario: "", notas: "" });
      setMostrarForm(false);
      cargar();
    }
  }

  if (cargando) {
    return (
      <div className="admin-page">
        <AdminHeader titulo="Cliente" mostrarVolver />
        <p className="admin-vacio">Cargando...</p>
      </div>
    );
  }

  if (!cliente) {
    return (
      <div className="admin-page">
        <AdminHeader titulo="Cliente no encontrado" mostrarVolver />
      </div>
    );
  }

  return (
    <div className="admin-page">
      <AdminHeader titulo={cliente.nombre} mostrarVolver />

      <div className="admin-cliente-info">
        {cliente.direccion && <p>📍 {cliente.direccion}</p>}
        {cliente.telefono && <p>📞 {cliente.telefono}</p>}
        {cliente.notas && <p className="admin-cliente-notas">📝 {cliente.notas}</p>}
      </div>

      <div className="admin-cliente-total-box">
        <span>Total vendido</span>
        <strong>${total.toLocaleString("es-AR")}</strong>
      </div>

      <button
        className="admin-boton-primario"
        onClick={() => setMostrarForm(!mostrarForm)}
      >
        {mostrarForm ? "Cancelar" : "+ Cargar venta"}
      </button>

      {mostrarForm && (
        <form className="admin-form-venta" onSubmit={handleAgregar}>
          <input
            type="text"
            placeholder="Producto *"
            value={nueva.producto}
            onChange={(e) =>
              setNueva({ ...nueva, producto: e.target.value })
            }
            required
            autoFocus
          />

          <div className="admin-form-venta-fila">
            <input
              type="number"
              placeholder="Cantidad"
              min="1"
              value={nueva.cantidad}
              onChange={(e) =>
                setNueva({ ...nueva, cantidad: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Precio unitario *"
              min="0"
              step="0.01"
              value={nueva.precioUnitario}
              onChange={(e) =>
                setNueva({ ...nueva, precioUnitario: e.target.value })
              }
              required
            />
          </div>

          <p className="admin-form-venta-monto">
            Total: ${montoCalculado.toLocaleString("es-AR")}
          </p>

          <textarea
            placeholder="Notas (opcional)"
            value={nueva.notas}
            onChange={(e) => setNueva({ ...nueva, notas: e.target.value })}
          />

          <button type="submit" disabled={guardando}>
            {guardando ? "Guardando..." : "Guardar venta"}
          </button>
        </form>
      )}

      {ventas.length === 0 ? (
        <p className="admin-vacio">Todavía no le cargaste ninguna venta.</p>
      ) : (
        <div className="admin-ventas-lista">
          {ventas.map((v) => (
            <div key={v.id} className="admin-venta-item">
              <div>
                <strong>{v.producto}</strong> x{v.cantidad}
                <p className="admin-venta-fecha">
                  {new Date(v.fecha).toLocaleDateString("es-AR")}
                </p>
                {v.notas && <p className="admin-venta-notas">{v.notas}</p>}
              </div>
              <strong>${Number(v.monto).toLocaleString("es-AR")}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminClienteDetalle;
import { useEffect, useState } from "react";

