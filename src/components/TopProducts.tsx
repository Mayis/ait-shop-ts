import "./style/style.css";

import { Container } from "@mui/system";
import ResponsiveGrid from "./ResponsiveGrid";
import { productsSelector } from "../redux/slices/productSlice";
import { useAppSelector } from "../redux/hooks";

function TopProducts() {
  const [, productOne, productTwo] = useAppSelector(productsSelector) || [];
  console.log(productOne, productTwo);

  return (
    productOne && (
      <Container>
        <div id="topProduct">
          <h2 className="topProductTitle">{productOne.title}</h2>
          <ResponsiveGrid items={productOne.items} />
        </div>
        <div id="topProduct">
          <h2 className="topProductTitle">{productTwo.title}</h2>
          <ResponsiveGrid items={productTwo.items} />
        </div>
      </Container>
    )
  );
}

export default TopProducts;
