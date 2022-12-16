import Api from "../api";
import { useParams } from "react-router-dom";

function SelectedCategoryPage() {
  const { categoryId } = useParams();
  const { data, success, loading } = Api.useApi(() =>
    Api.products.GetProductsByCategory(categoryId!)
  );
  console.log(data);

  return <div>CategoryPage</div>;
}

export default SelectedCategoryPage;
