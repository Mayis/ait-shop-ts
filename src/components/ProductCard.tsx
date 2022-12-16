import { Button, CardActionArea, CardActions } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Items } from "../api/slices/products";
import React from "react";
import Typography from "@mui/material/Typography";

type Props = {
  item: Items;
};
export default function MultiProductCard({ item }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
        <Button size="small" color="primary">
          ADD TO BUSKET
        </Button>
      </CardActions>
    </Card>
  );
}
