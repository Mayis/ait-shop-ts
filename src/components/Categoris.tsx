import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { memo } from "react";

type propsType = {
  showCategories: boolean;
  closeCategories: () => void;
};
function Categories({ showCategories, closeCategories }: propsType) {
  return (
    //
    <Drawer anchor="left" open={showCategories} onClose={closeCategories}>
      <List sx={{ width: "450px" }}>
        <ListItem>
          <ListItemText primary="Categories" />
        </ListItem>
        <Divider />

        <ListItem>
          <Typography sx={{ fontWeight: "700" }}>someCategories</Typography>
          {/* <IconButton sx={{ position: "absolute", right: "5px" }}>
          <PaidIcon color="success" fontSize="large" />
        </IconButton> */}
        </ListItem>
      </List>
    </Drawer>
  );
}

export default memo(Categories);
