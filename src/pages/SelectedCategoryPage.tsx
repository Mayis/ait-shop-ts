import Api from "../api";
import { Container } from "@mui/system";
import Loading from "../components/Loading";
import MultiProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

function SelectedCategoryPage() {
  const { categoryId } = useParams();
  const { data, success, loading } = Api.useApi(() => {
    return Api.products.GetProductsByCategory(categoryId!);
  }, [categoryId]);
  return loading ? (
    <Loading />
  ) : (
    <Container sx={{ marginTop: "80px" }}>
      {data?.items.map((item) => (
        <MultiProductCard item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default SelectedCategoryPage;
