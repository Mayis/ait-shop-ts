import React, { useEffect } from "react";
import {
  basketMessageSelector,
  basketProductsSelector,
  deleteBasket,
  getBasket,
  purchaseBasket,
} from "../redux/slices/basketSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import BasketItem from "../components/BasketItem";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import DeleteIcon from "@mui/icons-material/Delete";
import EmptyBasket from "../components/EmptyBasket";
import Loading from "../components/Loading";
import PaidIcon from "@mui/icons-material/Paid";
import Paper from "@mui/material/Paper";

function BasketPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(basketProductsSelector);
  const message = useAppSelector(basketMessageSelector);
  useEffect(() => {
    dispatch(getBasket());
  }, []);
  const purchaseAll = () => {
    dispatch(purchaseBasket());
  };
  const deleteAll = () => {
    dispatch(deleteBasket());
  };
  console.log(message);

  return products ? (
    <>
      <Container sx={{ marginTop: "100px" }}>
        {products.map((item) => (
          <BasketItem item={item} key={item.product.id} />
        ))}
      </Container>
      <Paper
        sx={{
          width: "95%",
          height: "200px",
          margin: "10px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={deleteAll}
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ margin: "5px" }}
        >
          Delete All
        </Button>
        <Button
          onClick={purchaseAll}
          variant="contained"
          endIcon={<PaidIcon />}
          sx={{ margin: "5px" }}
        >
          Buy All
        </Button>
      </Paper>
    </>
  ) : (
    <EmptyBasket />
  );
}

export default BasketPage;
