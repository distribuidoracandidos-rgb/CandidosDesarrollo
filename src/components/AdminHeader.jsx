import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/AdminHeader.css";

function AdminHeader({ titulo, mostrarVolver }) {
  const { logout } = useAuth();

  return (
    <div className="admin-header">
      <div className="admin-header-textos">
        {mostrarVolver && (
          <Link to="/admin/clientes" className="admin-volver">
            ← Clientes
          </Link>
        )}
        <h1>{titulo}</h1>
      </div>

      <button className="admin-logout" onClick={logout}>
        Salir
      </button>
    </div>
  );
}

export default AdminHeader;

