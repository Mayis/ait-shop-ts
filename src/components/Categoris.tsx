import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";
import React, { memo } from "react";
import {
  allCategoriesSelector,
  categoryType,
} from "../redux/slices/categoriesSlice";

import { useAppSelector } from "../redux/hooks";

type propsType = {
  showCategories: boolean;
  closeCategories: () => void;
};
function Categories({ showCategories, closeCategories }: propsType) {
  const allCategories = useAppSelector(allCategoriesSelector);
  console.log(allCategories);

  return (
    //
    <Drawer anchor="left" open={showCategories} onClose={closeCategories}>
      <List sx={{ width: "200px" }}>
        <ListItem>
          <ListItemText primary="Categories" />
        </ListItem>
        <Divider />

        {allCategories?.map((category: categoryType) => (
          <ListItem sx={{ fontWeight: "700" }} key={category.id}>
            {category.title}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default memo(Categories);
