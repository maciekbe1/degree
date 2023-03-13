import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Box, Typography } from "@mui/material";

export const ProductNotExist = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Typography fontSize={120} textAlign="center">
        <ProductionQuantityLimitsIcon fontSize="inherit" />
      </Typography>
      <Typography variant="h5" align="center">
        We&lsquo;re sorry, but the product you are looking for is not exist
      </Typography>
    </Box>
  );
};
