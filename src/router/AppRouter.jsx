import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home";

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
const AdminLogin = lazy(() => import("../pages/AdminLogin"));
const AdminClientes = lazy(() => import("../pages/AdminClientes"));
const AdminClienteDetalle = lazy(() => import("../pages/AdminClienteDetalle"));

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
          <Route path="/buscar" element={<SearchResults />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/opiniones" element={<Opinions />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/terminos" element={<Terms />} />

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/pedidos-recibidos"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/clientes"
            element={
              <ProtectedRoute>
                <AdminClientes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/clientes/:id"
            element={
              <ProtectedRoute>
                <AdminClienteDetalle />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;

