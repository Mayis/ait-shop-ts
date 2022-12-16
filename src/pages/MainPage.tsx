import Api from "../api";
import TopProducts from "../components/TopProducts";
import TopSellers from "../components/TopSellers";
import withUser from "../components/HOC/withUser";

function MainPage() {
  const { data, success, loading } = Api.useApi(() =>
    Api.products.GetTopProducts()
  );
  console.log(data);

  return (
    data && (
      <>
        <TopSellers tops={data![0]} />
        <TopProducts topOne={data![1]} topTwo={data![2]} />
      </>
    )
  );
}

export default withUser(MainPage);
