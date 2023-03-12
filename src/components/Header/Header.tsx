import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";

import BackToTop from "./BackToTop";
import { HideOnScroll } from "./HideOnScroll";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="default">
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
            <Navbar />
          </Container>
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
