import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import SearchResults from "../pages/SearchResults";
import About from "../pages/About";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Faq from "../pages/Faq";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:nombre" element={<Category />} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/pedidos-recibidos" element={<Orders />} />
        <Route path="/buscar" element={<SearchResults />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/novedades" element={<News />} />
        <Route path="/preguntas-frecuentes" element={<Faq />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/terminos" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
