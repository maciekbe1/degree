import { Box, Grid } from "@mui/material";

import { ProductCard } from "@/components";
import { useGetAllProductsQuery } from "@/services/product";

export const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  return (
    <>
      <Grid container spacing={4}>
        {data?.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <ProductCard key={index} product={product} />
          </Grid>
        ))}
      </Grid>
      {isLoading && <Box mt={4}>loading...</Box>}
    </>
  );
};
