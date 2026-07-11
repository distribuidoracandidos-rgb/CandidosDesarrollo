import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

function Category() {
  const { nombre } = useParams();

  return (
    <Layout>
      <h2>{nombre.toUpperCase()}</h2>

      <p>Próximamente aparecerán todos los productos de esta categoría.</p>
    </Layout>
  );
}

export default Category;
