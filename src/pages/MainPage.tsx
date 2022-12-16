import { useAppDispatch, useAppSelector } from "../redux/hooks";

import TopProducts from "../components/TopProducts";
import TopSellers from "../components/TopSellers";
import { getCategories } from "../redux/slices/categoriesSlice";
import { getProducts } from "../redux/slices/productSlice";
import { tokenSelector } from "../redux/slices/userSlice";
import { useEffect } from "react";
import withUser from "../components/HOC/withUser";

function MainPage() {
  const dispatch = useAppDispatch();
  const token = useAppSelector(tokenSelector);
  useEffect(() => {
    if (token) {
      dispatch(getProducts(token));
      dispatch(getCategories(token));
    }
  }, [dispatch, token]);
  return (
    <>
      <TopSellers />
      <TopProducts />
    </>
  );
}

export default withUser(MainPage);
