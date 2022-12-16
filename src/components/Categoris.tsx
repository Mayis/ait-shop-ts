import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";
import React, { memo } from "react";
import {
  allCategoriesSelector,
  categoryType,
} from "../redux/slices/categoriesSlice";

import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";

type propsType = {
  showCategories: boolean;
  closeCategories: () => void;
};
function Categories({ showCategories, closeCategories }: propsType) {
  const allCategories = useAppSelector(allCategoriesSelector);
  const navigate = useNavigate();
  const handleSelect = (categoryId: string): void => {
    navigate(`/category/${categoryId}`);
  };

  return (
    //
    <Drawer anchor="left" open={showCategories} onClose={closeCategories}>
      <List sx={{ width: "200px" }}>
        <ListItem>
          <ListItemText primary="Categories" />
        </ListItem>
        <Divider />

        {allCategories?.map((category: categoryType) => (
          <ListItem
            sx={{ fontWeight: "700", cursor: "pointer" }}
            key={category.id}
            onClick={() => handleSelect(category.id)}
          >
            {category.title}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default memo(Categories);
