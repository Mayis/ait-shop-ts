import React, { useEffect } from "react";
import { getProducts, productsSelector } from "../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import Header from "../components/Header";
import { getCategories } from "../redux/slices/categoriesSlice";
import { tokenSelector } from "../redux/slices/userSlice";
import withUser from "../components/HOC/withUser";

function MainPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSelector);
  const token = useAppSelector(tokenSelector);
  console.log(products);

  useEffect(() => {
    if (token) {
      dispatch(getProducts(token));
      dispatch(getCategories(token));
    }
  }, [dispatch, token]);
  return (
    <>
      <Header />
    </>
  );
}

export default withUser(MainPage);
