import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Contact.css";
import { supabase } from "../services/supabaseClient";
import { FaWhatsapp } from "react-icons/fa6";

function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    contacto: "",
    producto: "",
    mensaje: "",
  });
  const [estado, setEstado] = useState("idle");

  function actualizar(campo, valor) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  }

  async function enviar(e) {
    e.preventDefault();
    setEstado("enviando");

    // Guardamos la consulta en Supabase (tabla "consultas") para poder ver
    // después qué productos consultan más los clientes.
    const { error } = await supabase.from("consultas").insert({
      nombre: form.nombre,
      contacto: form.contacto,
      producto_interes: form.producto,
      mensaje: form.mensaje,
    });

    if (error) {
      setEstado("error");
      return;
    }

    setEstado("ok");

    const texto = `Hola Candido's, soy ${form.nombre}.%0A%0A${
      form.producto ? `Consulta sobre: ${form.producto}%0A%0A` : ""
    }${form.mensaje}%0A%0AMe pueden contactar por: ${form.contacto}`;

    window.open(`https://wa.me/5493434162242?text=${texto}`, "_blank");

    setForm({ nombre: "", contacto: "", producto: "", mensaje: "" });
  }

  return (
    <Layout>
      <div className="contacto-pagina">
        <h1>Contacto</h1>
        <p>
          Escribinos y te respondemos a la brevedad. También podés
          contactarnos directo por{" "}
          <a
            href="https://wa.me/5493434162242"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <FaWhatsapp />
          </a>
          .
        </p>

        <form className="contacto-form" onSubmit={enviar}>
          <label>
            Nombre
            <input
              type="text"
              required
              value={form.nombre}
              onChange={(e) => actualizar("nombre", e.target.value)}
            />
          </label>

          <label>
            Mail o teléfono de contacto
            <input
              type="text"
              required
              value={form.contacto}
              onChange={(e) => actualizar("contacto", e.target.value)}
            />
          </label>

          <label>
            Producto de interés (opcional)
            <input
              type="text"
              value={form.producto}
              onChange={(e) => actualizar("producto", e.target.value)}
            />
          </label>

          <label>
            Mensaje
            <textarea
              required
              rows={5}
              value={form.mensaje}
              onChange={(e) => actualizar("mensaje", e.target.value)}
            />
          </label>

          <button type="submit" disabled={estado === "enviando"}>
            {estado === "enviando" ? "Enviando..." : "Enviar consulta"}
          </button>

          {estado === "error" && (
            <p className="contacto-error">
              No pudimos enviar tu consulta, probá de nuevo en un rato.
            </p>
          )}
        </form>
      </div>
    </Layout>
  );
}

export default Contact;
