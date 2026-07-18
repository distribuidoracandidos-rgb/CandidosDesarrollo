import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import "../styles/ProductCard.css";

function Product() {
  const { id } = useParams();

  return (
    <Layout>

      <h1>Producto {id}</h1>

    </Layout>
  );
}

export default Product;
