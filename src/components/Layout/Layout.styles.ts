import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const LayoutWrapper = styled("div")({
  position: "relative",
  paddingBottom: "24px",
  marginTop: "84px",
});

export const LayoutContainer = styled(Container)({
  paddingBottom: "56px",
  minHeight: "calc(100vh - 108px)",
});

//  "64px", height of the header nav desktop
//  "56px", height of the header nav mobile
//  "56px", Height of the footer
