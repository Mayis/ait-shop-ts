import Api from "../api";
import MultiProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

function SelectedCategoryPage() {
  const { categoryId } = useParams();
  const { data, success, loading } = Api.useApi(() =>
    Api.products.GetProductsByCategory(categoryId!)
  );
  console.log(data);

  return (
    <div>
      {data!.items.map((item) => (
        <MultiProductCard item={item} />
      ))}
    </div>
  );
}

export default SelectedCategoryPage;
