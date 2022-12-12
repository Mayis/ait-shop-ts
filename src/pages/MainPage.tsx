import React, { useEffect } from "react";
import { getProducts, productsSelector } from "../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import Header from "../components/Header";
import TopSellers from "../components/TopSellers";
import { getCategories } from "../redux/slices/categoriesSlice";
import { tokenSelector } from "../redux/slices/userSlice";
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
      <Header />
      <TopSellers />
    </>
  );
}

export default withUser(MainPage);
