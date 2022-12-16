import "./style/style.css";

import { Container } from "@mui/system";
import { Products } from "../api/slices/products";
import ResponsiveGrid from "./ResponsiveGrid";

type Props = {
  topOne: Products;
  topTwo: Products;
};
function TopProducts({ topOne, topTwo }: Props) {
  return (
    <Container>
      <div id="topProduct">
        <h2 className="topProductTitle">{topOne.title}</h2>
        <ResponsiveGrid items={topOne.items} />
      </div>
      <div id="topProduct">
        <h2 className="topProductTitle">{topTwo.title}</h2>
        <ResponsiveGrid items={topTwo.items} />
      </div>
    </Container>
  );
}

export default TopProducts;
