import { BasketProd } from "../api/slices/basket";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

type Props = {
  item: {
    product: BasketProd;
    count: number;
  };
};
function BasketItem({ item }: Props) {
  const {
    count,
    product: { id, price, src, title },
  } = item;
  return (
    <div id="basketItem">
      <div className="delItem">
        <IconButton>
          <RemoveCircleOutlineIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="imgDiv">
        <img src={src} alt={title} />
      </div>
      <div className="incrAndDecr">
        <Button variant="contained">+</Button>
        <h3>{count}</h3>
        <Button variant="contained">-</Button>
      </div>
      <div className="priceDiv">
        <h3 className="priceH3">{count * price}$</h3>
      </div>
    </div>
  );
}

export default BasketItem;
