import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Cart from "../pages/Cart";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:nombre" element={<Category />} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
