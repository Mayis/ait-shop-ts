import React, { memo, useState } from "react";

import AppBar from "@mui/material/AppBar";
import BasicModal from "./BasicModal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

type PropsType = {
  handleShowCategories: () => void;
};
function AppBarMenu({ handleShowCategories }: PropsType) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleHomePage = () => navigate("/");
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          position: "fixed",
          top: 0,
          zIndex: 2,
          width: "100%",
        }}
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
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={handleHomePage}
            >
              shop ait
            </Typography>
            <Button color="inherit" onClick={handleOpen}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <BasicModal open={open} handleClose={handleClose} />
    </>
  );
}
export default memo(AppBarMenu);
