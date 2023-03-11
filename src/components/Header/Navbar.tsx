import Home from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Button, IconButton, Stack, Toolbar } from "@mui/material";

import { navLinks } from "./constants";
import { SideDrawer } from "./SideDrawer";

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

      <Stack
        direction="row"
        spacing={4}
        sx={{
          display: { xs: `none`, md: "flex" },
        }}
      >
        {navLinks.map(({ title, path }, i) => (
          <Button key={`${title}${i}`} href={path}>
            {title}
          </Button>
        ))}
        <Badge badgeContent={1} color="secondary">
          <IconButton color="primary" aria-label="shopping cart">
            <ShoppingCartIcon />
          </IconButton>
        </Badge>
      </Stack>
      <SideDrawer />
    </Toolbar>
  );
};
