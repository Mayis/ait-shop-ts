import React from "react";
import { basketProductsSelector } from "../redux/slices/basketSlice";
import { useAppSelector } from "../redux/hooks";

function BasketPage() {
  const products = useAppSelector(basketProductsSelector);
  console.log(products);

  return <div>BasketPage</div>;
}

export default BasketPage;
