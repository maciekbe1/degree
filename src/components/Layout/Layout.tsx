import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";

import { Header } from "@/components";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <div id="back-to-top-anchor"></div>
      <Box mt={10}>{children}</Box>
    </>
  );
};
