import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/system";
import { ReactNode } from "react";

import { Footer, Header } from "@/components";

type LayoutProps = {
  children: ReactNode;
};

const LayoutWrapper = styled("div")({
  position: "relative",
  minHeight: "100vh",
});

const LayoutContainer = styled(Container)({
  marginTop: "72px",
  paddingBottom: "120px", // Height of the footer
});

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <CssBaseline />
      <Header />
      <div id="back-to-top-anchor"></div>
      <LayoutContainer>{children}</LayoutContainer>
      <Footer />
    </LayoutWrapper>
  );
};
