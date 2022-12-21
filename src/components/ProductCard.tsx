import { Button, CardActionArea, CardActions } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Items } from "../api/slices/products";
import React from "react";
import Typography from "@mui/material/Typography";
import { addToBasket } from "../redux/slices/basketSlice";
import { useAppDispatch } from "../redux/hooks";

type Props = {
  item: Items;
};
export default function MultiProductCard({ item }: Props) {
  const dispatch = useAppDispatch();
  const handleAddBasket = (id: string) => {
    dispatch(addToBasket(id));
  };
  return (
    <Card
      sx={{
        margin: "15px",
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          maxWidth: "100%",
          height: "300px",
          padding: "10px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "50%",
            height: "100%",
            padding: "10px",
            objectFit: "contain",
          }}
          image={item.src}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleAddBasket(item.id)}
        >
          ADD TO BUSKET
        </Button>
      </CardActions>
    </Card>
  );
}
