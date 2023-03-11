// import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";

// import { useEffect, useRef, useState } from "react";
import { ProductCard } from "@/components";
import { useGetAllProductsQuery } from "@/services/product";

export const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  // const products = useSelector((state) => state);
  // const dispatch = useDispatch();

  return (
    <Container>
      <Grid container spacing={4}>
        {data?.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <ProductCard key={index} product={product} />
          </Grid>
        ))}
      </Grid>
      {isLoading && <p>Loading products...</p>}
      {/* {!isLoading && !hasMore && <p>No more products to load.</p>} */}
    </Container>
  );
};
