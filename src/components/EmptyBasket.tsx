import "./style/style.css";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function EmptyBasket() {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/products/home");
  };
  return (
    <div className="emptyBasket">
      <div className="childEmpty">
        <h2 className="emptyH2">Basket is empty</h2>
        <Button variant="contained" color="success" onClick={handleHomePage}>
          HOME PAGE
        </Button>
      </div>
    </div>
  );
}

export default EmptyBasket;
