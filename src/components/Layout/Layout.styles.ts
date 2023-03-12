import { Container } from "@mui/material";
import { styled } from "@mui/system";

export const LayoutWrapper = styled("div")({
  position: "relative",
  minHeight: "calc(100vh - 56px)",
});

export const LayoutContainer = styled(Container)({
  marginTop: "72px",
  paddingBottom: "120px", // Height of the footer
});
