import React, { useCallback, useEffect, useState } from "react";
import { getProducts, productsSelector } from "../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import Categories from "../components/Categoris";
import Header from "../components/Header";
import { tokenSelector } from "../redux/slices/userSlice";
import withUser from "../components/HOC/withUser";

function MainPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSelector);
  const token = useAppSelector(tokenSelector);
  const [showCategories, setShowCategories] = useState(false);
  const handleShowCategories = useCallback(() => setShowCategories(true), []);
  const closeCategories = useCallback(() => setShowCategories(false), []);
  console.log(products);

  useEffect(() => {
    if (token) {
      dispatch(getProducts(token));
    }
  }, [dispatch, token]);
  return (
    <>
      <Header />
    </>
  );
}

export default withUser(MainPage);
