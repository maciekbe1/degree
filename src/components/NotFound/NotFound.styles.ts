import { styled } from "@mui/material";

export const StyledGif = styled("img")({
  width: "auto",
  "@media(max-width: 780px)": {
    width: "100%",
  },
});

export const StyledNotFoundWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

export const StyledGifWrapper = styled("div")({
  textAlign: "center",
});
