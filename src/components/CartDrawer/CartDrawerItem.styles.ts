import { Avatar, ListItem } from "@mui/material";
import { styled } from "@mui/system";

export const StyledListItem = styled(ListItem)({
  display: "flex",
  flexDirection: "column",
  "& .MuiListItemText-multiline": {
    margin: "0 0 0 8px",
  },
});

export const StyledAvatar = styled(Avatar)({
  width: "60px",
  height: "60px",
  "& .MuiAvatar-img": {
    objectFit: "contain",
  },
});

export const StyledProductControl = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const StyledProductInfo = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "12px",
});
