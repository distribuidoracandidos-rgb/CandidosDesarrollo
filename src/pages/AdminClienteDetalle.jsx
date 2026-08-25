import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import { useProducts } from "../context/ProductsContext";
import AdminHeader from "../components/AdminHeader";
import "../styles/Admin.css";

// Misma lógica que en ProductCard: de todos los formatos posibles,
// nos quedamos solo con los que tienen precio cargado (> 0).
function getFormatos(producto) {
  const formatos = [
    { nombre: "Cartón", precio: producto.Precio_Carton },
    { nombre: "Caja", precio: producto.Precio_Caja },
    { nombre: "Pack", precio: producto.Precio_Pack },
    { nombre: "Blister", precio: producto.Precio_Blister },
    { nombre: "Bulto", precio: producto.Precio_Bulto },
    { nombre: "Unidad", precio: producto.Precio_Unidad },
    { nombre: "Botella", precio: producto.Precio_Botella },
  ];
  return formatos.filter((f) => Number(f.precio) > 0);
}

function AdminClienteDetalle() {
  const { id } = useParams();
  const { productos } = useProducts();

  const [cliente, setCliente] = useState(null);
  const [ventas, setVentas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [guardando, setGuardando] = useState(false);

  // Modo catálogo (default) vs modo manual
  const [modoManual, setModoManual] = useState(false);

  // --- Estado del modo catálogo ---
  const [busquedaProducto, setBusquedaProducto] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [formatoSeleccionado, setFormatoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  // --- Estado del modo manual ---
  const [manual, setManual] = useState({
    producto: "",
    cantidad: 1,
    precioUnitario: "",
  });

  const [notas, setNotas] = useState("");

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

  const resultadosBusqueda =
    busquedaProducto.trim().length > 0
      ? productos
          .filter((p) =>
            (p.Producto || "")
              .toLowerCase()
              .includes(busquedaProducto.toLowerCase())
          )
          .slice(0, 6)
      : [];

  const formatosDisponibles = productoSeleccionado
    ? getFormatos(productoSeleccionado)
    : [];

  const montoCatalogo =
    (Number(cantidad) || 0) * (Number(formatoSeleccionado?.precio) || 0);

  const montoManual =
    (Number(manual.cantidad) || 0) * (Number(manual.precioUnitario) || 0);

  function seleccionarProducto(p) {
    setProductoSeleccionado(p);
    setBusquedaProducto(p.Producto);
    setFormatoSeleccionado(null);

    const formatos = getFormatos(p);
    // Si tiene un solo formato con precio, lo seleccionamos directo.
    if (formatos.length === 1) {
      setFormatoSeleccionado(formatos[0]);
    }
  }

  function limpiarSeleccion() {
    setProductoSeleccionado(null);
    setFormatoSeleccionado(null);
    setBusquedaProducto("");
  }

  function limpiarFormulario() {
    limpiarSeleccion();
    setCantidad(1);
    setManual({ producto: "", cantidad: 1, precioUnitario: "" });
    setNotas("");
    setModoManual(false);
    setMostrarForm(false);
  }

  async function handleAgregar(e) {
    e.preventDefault();

    let productoNombre = "";
    let cantidadFinal = 1;
    let montoFinal = 0;

    if (modoManual) {
      if (!manual.producto.trim() || !manual.precioUnitario) return;
      productoNombre = manual.producto.trim();
      cantidadFinal = Number(manual.cantidad) || 1;
      montoFinal = montoManual;
    } else {
      if (!productoSeleccionado || !formatoSeleccionado) return;
      productoNombre = `${productoSeleccionado.Producto} (${formatoSeleccionado.nombre})`;
      cantidadFinal = Number(cantidad) || 1;
      montoFinal = montoCatalogo;
    }

    setGuardando(true);

    const { error } = await supabase.from("ventas_clientes").insert({
      cliente_id: id,
      producto: productoNombre,
      cantidad: cantidadFinal,
      monto: montoFinal,
      notas: notas.trim() || null,
    });

    setGuardando(false);

    if (!error) {
      limpiarFormulario();
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
          <button
            type="button"
            className="admin-form-toggle-manual"
            onClick={() => {
              setModoManual(!modoManual);
              limpiarSeleccion();
            }}
          >
            {modoManual
              ? "← Volver a buscar en el catálogo"
              : "¿No está en el catálogo? Cargar manual"}
          </button>

          {!modoManual ? (
            <>
              {!productoSeleccionado ? (
                <div className="admin-producto-buscador">
                  <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={busquedaProducto}
                    onChange={(e) => setBusquedaProducto(e.target.value)}
                    autoFocus
                  />

                  {resultadosBusqueda.length > 0 && (
                    <div className="admin-producto-resultados">
                      {resultadosBusqueda.map((p) => (
                        <button
                          type="button"
                          key={p.ID}
                          className="admin-producto-resultado-item"
                          onClick={() => seleccionarProducto(p)}
                        >
                          <span>{p.Producto}</span>
                          <span className="admin-producto-resultado-marca">
                            {p.Marca}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="admin-producto-seleccionado">
                  <div className="admin-producto-seleccionado-info">
                    <strong>{productoSeleccionado.Producto}</strong>
                    <button type="button" onClick={limpiarSeleccion}>
                      Cambiar
                    </button>
                  </div>

                  {formatosDisponibles.length === 0 ? (
                    <p className="admin-vacio">
                      Este producto no tiene precios cargados.
                    </p>
                  ) : (
                    <div className="admin-formato-chips">
                      {formatosDisponibles.map((f) => (
                        <button
                          type="button"
                          key={f.nombre}
                          className={
                            formatoSeleccionado?.nombre === f.nombre
                              ? "admin-formato-chip admin-formato-chip-activo"
                              : "admin-formato-chip"
                          }
                          onClick={() => setFormatoSeleccionado(f)}
                        >
                          {f.nombre} · $
                          {Number(f.precio).toLocaleString("es-AR")}
                        </button>
                      ))}
                    </div>
                  )}

                  {formatoSeleccionado && (
                    <>
                      <input
                        type="number"
                        placeholder="Cantidad"
                        min="1"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                      />
                      <p className="admin-form-venta-monto">
                        Total: ${montoCatalogo.toLocaleString("es-AR")}
                      </p>
                    </>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Producto *"
                value={manual.producto}
                onChange={(e) =>
                  setManual({ ...manual, producto: e.target.value })
                }
                required
                autoFocus
              />

              <div className="admin-form-venta-fila">
                <input
                  type="number"
                  placeholder="Cantidad"
                  min="1"
                  value={manual.cantidad}
                  onChange={(e) =>
                    setManual({ ...manual, cantidad: e.target.value })
                  }
                />
                <input
                  type="number"
                  placeholder="Precio unitario *"
                  min="0"
                  step="0.01"
                  value={manual.precioUnitario}
                  onChange={(e) =>
                    setManual({ ...manual, precioUnitario: e.target.value })
                  }
                  required
                />
              </div>

              <p className="admin-form-venta-monto">
                Total: ${montoManual.toLocaleString("es-AR")}
              </p>
            </>
          )}

          <textarea
            placeholder="Notas (opcional)"
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
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

