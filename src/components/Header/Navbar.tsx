import Home from "@mui/icons-material/Home";
import { IconButton, Toolbar } from "@mui/material";

import { CartDrawer } from "@/components";

export const Navbar = () => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: `flex`,
        justifyContent: "space-between",
        width: "100%",
        padding: 0,
      }}
    >
      <IconButton edge="start" aria-label="home" href="/" color="primary">
        <Home />
      </IconButton>
      <CartDrawer />
    </Toolbar>
  );
};
