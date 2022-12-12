import React, { memo } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

type PropsType = {
  handleShowCategories: () => void;
  appUserLogout: () => void;
};
function AppBarMenu({ handleShowCategories, appUserLogout }: PropsType) {
  return (
    <Box
      sx={{ flexGrow: 1, position: "fixed", top: 0, zIndex: 2, width: "100%" }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleShowCategories}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            shop ait
          </Typography>
          <Button color="inherit" onClick={appUserLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default memo(AppBarMenu);
