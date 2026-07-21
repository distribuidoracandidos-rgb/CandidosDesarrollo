import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Layout from "../components/Layout";
import EntreRiosMap from "../components/EntreRiosMap";
import "../styles/PaginaInstitucional.css";

function About() {
  return (
    <Layout>
      <div className="pagina-institucional">
        <Link to="/" className="volver-atras">
          <FaArrowLeft /> Volver atrás
        </Link>

        <h1>Quiénes somos</h1>
        <p>
          Candido's es una distribuidora mayorista con más de 25 años de
          trayectoria, abasteciendo kioscos, almacenes y comercios de Paraná
          y la zona. Trabajamos con las mejores marcas del mercado para
          ofrecerte variedad, precios competitivos y entregas rápidas.
        </p>
        <p>
          <em>
            (Hace más de 25 años, Candido's comenzó su camino en Paraná, Entre Ríos, ofreciendo tarjetas de recarga virtual para compañías como CTI Móvil, Personal Light y Global. Con el crecimiento de la tecnología, fuimos incorporando nuevos servicios como cargas virtuales, cobranza de impuestos y servicios, recarga de tarjetas SUBE y otras soluciones para comercios.

Con esfuerzo, compromiso y una atención personalizada, expandimos nuestra presencia desde Paraná hacia localidades como Oro Verde, San Benito, Colonia Avellaneda, Crespo, La Paz, Villaguay, Federal, Federación, Victoria y muchas otras ciudades de la provincia.

A lo largo de los años también ampliamos nuestro negocio, incorporando la distribución mayorista de productos para kioscos, almacenes y comercios. Hoy, Candido's cuenta con más de 25 años de trayectoria, ofreciendo una amplia variedad de productos, las mejores marcas del mercado, precios competitivos y un servicio de distribución rápido y confiable, acompañando el crecimiento de cientos de comercios en Entre Ríos.)
          </em>
        </p>
      </div>

      <EntreRiosMap />
    </Layout>
  );
}

export default About;
