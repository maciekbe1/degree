import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

import { Footer, Header } from "@/components";

import { LayoutContainer, LayoutWrapper } from "./Layout.styles";

type LayoutProps = {
  children: ReactNode;
};

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
