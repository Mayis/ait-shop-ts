import CaruselSlider from "./Slider/CaruselSlider";
import React from "react";
import { productsSelector } from "../redux/slices/productSlice";
import { useAppSelector } from "../redux/hooks";

function TopSellers() {
  const [topSellers] = useAppSelector(productsSelector) || [];
  return topSellers && <CaruselSlider items={topSellers.items} />;
}

export default TopSellers;
