import Menu from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { navLinks } from "./constants";

export const SideDrawer = () => {
  const [open, setOpen] = useState(false);

  const list = () => (
    <Box
      sx={{ width: 250, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      {navLinks.map(({ title, path }, i) => (
        <Typography
          key={`${title}${i}`}
          sx={{
            ml: 5,
            my: 2,
            textTransform: `uppercase`,
          }}
        >
          <Button href={path}>{title}</Button>
        </Typography>
      ))}
    </Box>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={() => setOpen(true)}
        color="primary"
        sx={{
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "common.white",
          },
        }}
      >
        {list()}
      </Drawer>
    </>
  );
};
