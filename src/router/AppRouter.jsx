import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:nombre" element={<Category />} />
        <Route path="/producto/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
