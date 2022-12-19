import React, { useEffect } from "react";
import { basketProductsSelector, getBasket } from "../redux/slices/basketSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import BasketItem from "../components/BasketItem";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import DeleteIcon from "@mui/icons-material/Delete";
import Loading from "../components/Loading";
import PaidIcon from "@mui/icons-material/Paid";
import Paper from "@mui/material/Paper";

function BasketPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(basketProductsSelector);
  useEffect(() => {
    dispatch(getBasket());
  }, []);
  console.log(products);

  return (
    <>
      <Container sx={{ marginTop: "100px" }}>
        {products ? (
          products.map((item, i) => <BasketItem item={item} key={`item${i}`} />)
        ) : (
          <Loading />
        )}
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
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ margin: "5px" }}
        >
          Delete All
        </Button>
        <Button
          variant="contained"
          endIcon={<PaidIcon />}
          sx={{ margin: "5px" }}
        >
          Buy All
        </Button>
      </Paper>
    </>
  );
}

export default BasketPage;
