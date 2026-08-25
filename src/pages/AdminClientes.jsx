import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import AdminHeader from "../components/AdminHeader";
import "../styles/Admin.css";

function AdminClientes() {
  const [clientes, setClientes] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [nuevo, setNuevo] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    notas: "",
  });

  async function cargar() {
    setCargando(true);

    const { data: dataClientes } = await supabase
      .from("clientes")
      .select("*")
      .order("nombre", { ascending: true });

    const { data: dataVentas } = await supabase
      .from("ventas_clientes")
      .select("cliente_id, monto");

    setClientes(dataClientes || []);
    setVentas(dataVentas || []);
    setCargando(false);
  }

  useEffect(() => {
    cargar();
  }, []);

  function totalDe(clienteId) {
    return ventas
      .filter((v) => v.cliente_id === clienteId)
      .reduce((acc, v) => acc + Number(v.monto), 0);
  }

  async function handleAgregar(e) {
    e.preventDefault();
    if (!nuevo.nombre.trim()) return;

    setGuardando(true);

    const { error } = await supabase.from("clientes").insert({
      nombre: nuevo.nombre.trim(),
      direccion: nuevo.direccion.trim() || null,
      telefono: nuevo.telefono.trim() || null,
      notas: nuevo.notas.trim() || null,
    });

    setGuardando(false);

    if (!error) {
      setNuevo({ nombre: "", direccion: "", telefono: "", notas: "" });
      setMostrarForm(false);
      cargar();
    }
  }

  const clientesFiltrados = clientes.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="admin-page">
      <AdminHeader titulo="Mis clientes" />

      <div className="admin-clientes-acciones">
        <input
          type="text"
          placeholder="Buscar cliente..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="admin-buscador"
        />
      </div>

      <button
        className="admin-boton-primario"
        onClick={() => setMostrarForm(!mostrarForm)}
      >
        {mostrarForm ? "Cancelar" : "+ Nuevo cliente"}
      </button>

      {mostrarForm && (
        <form className="admin-form-nuevo-cliente" onSubmit={handleAgregar}>
          <input
            type="text"
            placeholder="Nombre *"
            value={nuevo.nombre}
            onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
            required
            autoFocus
          />
          <input
            type="text"
            placeholder="Dirección"
            value={nuevo.direccion}
            onChange={(e) =>
              setNuevo({ ...nuevo, direccion: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={nuevo.telefono}
            onChange={(e) =>
              setNuevo({ ...nuevo, telefono: e.target.value })
            }
          />
          <textarea
            placeholder="Notas (opcional)"
            value={nuevo.notas}
            onChange={(e) => setNuevo({ ...nuevo, notas: e.target.value })}
          />
          <button type="submit" disabled={guardando}>
            {guardando ? "Guardando..." : "Guardar cliente"}
          </button>
        </form>
      )}

      {cargando ? (
        <p className="admin-vacio">Cargando...</p>
      ) : clientesFiltrados.length === 0 ? (
        <p className="admin-vacio">
          {busqueda
            ? "No encontré ningún cliente con ese nombre."
            : "Todavía no cargaste ningún cliente."}
        </p>
      ) : (
        <div className="admin-clientes-lista">
          {clientesFiltrados.map((c) => (
            <Link
              to={`/admin/clientes/${c.id}`}
              key={c.id}
              className="admin-cliente-card"
            >
              <div>
                <strong>{c.nombre}</strong>
                {c.direccion && <p>{c.direccion}</p>}
              </div>
              <strong className="admin-cliente-total">
                ${totalDe(c.id).toLocaleString("es-AR")}
              </strong>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminClientes;



