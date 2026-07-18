import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Home se carga siempre de entrada porque es la primera pantalla.
import Home from "../pages/Home";

// El resto de las páginas se cargan solo cuando el usuario navega a ellas
// (lazy loading), así el primer ingreso al sitio baja mucho menos JS.
const Category = lazy(() => import("../pages/Category"));
const Product = lazy(() => import("../pages/Product"));
const Cart = lazy(() => import("../pages/Cart"));
const Orders = lazy(() => import("../pages/Orders"));
const SearchResults = lazy(() => import("../pages/SearchResults"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Opinions = lazy(() => import("../pages/Opinions"));
const Faq = lazy(() => import("../pages/Faq"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));

function CargandoPagina() {
  return <div className="pagina-cargando">Cargando...</div>;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<CargandoPagina />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:nombre" element={<Category />} />
          <Route path="/producto/:id" element={<Product />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/pedidos-recibidos" element={<Orders />} />
          <Route path="/buscar" element={<SearchResults />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/opiniones" element={<Opinions />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terms />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
