import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Toolbar from "@mui/material/Toolbar";

import useHeaderState from "@/hooks/useHeaderState";

import BackToTop from "./BackToTop";
import { HideOnScroll } from "./HideOnScroll";
import { Navbar } from "./Navbar";

export const Header = () => {
  const { isViewportScrolled } = useHeaderState();
  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color={isViewportScrolled ? "primary" : "transparent"}
        >
          <Toolbar>
            <Container
              maxWidth="xl"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <Navbar />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};
