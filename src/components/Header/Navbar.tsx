import Home from "@mui/icons-material/Home";
import { IconButton, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <IconButton edge="start" aria-label="home" color="primary">
          <Home />
        </IconButton>
      </Link>

      <CartDrawer />
    </Toolbar>
  );
};
