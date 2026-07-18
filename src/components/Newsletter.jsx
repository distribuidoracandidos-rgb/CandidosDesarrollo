import { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { supabase } from "../services/supabaseClient";
import "../styles/Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState("idle"); // idle | enviando | ok | error | sin-configurar

  async function suscribirse(e) {
    e.preventDefault();
    if (!email.trim()) return;

    setEstado("enviando");

    if (!supabase) {
      // Esto pasa si faltan las variables VITE_SUPABASE_URL /
      // VITE_SUPABASE_ANON_KEY en el hosting (Vercel), o si no se cargaron
      // en el último deploy.
      console.warn(
        "Newsletter: Supabase no está configurado (faltan las variables de entorno)."
      );
      setEstado("sin-configurar");
      return;
    }

    const { error } = await supabase.from("suscriptores").insert({ email });

    if (error) {
      // Esto suele pasar si la tabla "suscriptores" todavía no existe en
      // Supabase (falta correr supabase_permisos.sql) o el RLS bloquea el insert.
      console.error("Newsletter: error al guardar la suscripción:", error);
      setEstado("error");
    } else {
      setEstado("ok");
      setEmail("");
    }
  }

  return (
    <section className="newsletter">
      <div className="newsletter-texto">
        <FaEnvelope className="newsletter-icono" />
        <div>
          <strong>Recibí nuestras novedades y promociones</strong>
          <p>Suscribite a nuestro newsletter o canal de WhatsApp.</p>
        </div>
      </div>

      <div className="newsletter-acciones">
        <form className="newsletter-form" onSubmit={suscribirse}>
          <input
            type="email"
            required
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={estado === "enviando"}>
            {estado === "enviando" ? "Enviando..." : "Suscribirme"}
          </button>
        </form>

        <a
          className="newsletter-canal"
          href="https://wa.me/5493434162242?text=Hola%2C%20quiero%20unirme%20al%20canal%20de%20novedades%20de%20Candido's"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> Unirme al canal
        </a>
      </div>

      {estado === "ok" && (
        <p className="newsletter-mensaje newsletter-ok">
          ¡Listo! Ya estás suscripto.
        </p>
      )}

      {estado === "error" && (
        <p className="newsletter-mensaje newsletter-error">
          No pudimos guardar tu mail, probá de nuevo en un rato.
        </p>
      )}

      {estado === "sin-configurar" && (
        <p className="newsletter-mensaje newsletter-error">
          El newsletter todavía no está configurado del todo (falta conectar
          la base de datos). Escribinos por WhatsApp mientras tanto.
        </p>
      )}
    </section>
  );
}

export default Newsletter;
