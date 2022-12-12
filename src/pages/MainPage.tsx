import React, { useEffect } from "react";
import { getProducts, productsSelector } from "../redux/slices/productSlice";
import { tokenSelector, userSelector } from "../redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import withUser from "../components/HOC/withUser";

function MainPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSelector);
  const token = useAppSelector(tokenSelector);
  useEffect(() => {
    if (token) {
      dispatch(getProducts(token));
    }
  }, [dispatch, token]);
  return <div>MainPage</div>;
}

export default withUser(MainPage);
