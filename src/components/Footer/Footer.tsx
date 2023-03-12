import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        py: 2,
        bgcolor: "primary.main",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      component="footer"
    >
      <Typography align="center" color="common.white">
        Footer © 2023
      </Typography>
    </Box>
  );
};
