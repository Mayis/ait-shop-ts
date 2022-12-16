import "./style/style.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Items } from "../redux/slices/productSlice";

type ItemsProps = {
  items: Items[];
};

export default function ResponsiveGrid({ items }: ItemsProps) {
  return (
    <Box sx={{ flexGrow: 1, padding: "15px 0px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {items.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <img src={item.src} alt="" className="prodImg" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
