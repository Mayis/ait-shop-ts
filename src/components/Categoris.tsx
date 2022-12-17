import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";

import Api from "../api";
import { Category } from "../api/slices/categories";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

type PropsType = {
  showCategories: boolean;
  closeCategories: () => void;
};
function Categories({ showCategories, closeCategories }: PropsType) {
  const navigate = useNavigate();
  const { data, success, loading } = Api.useApi(() =>
    Api.categories.GetCategories()
  );
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

        {data?.map((category: Category) => (
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
