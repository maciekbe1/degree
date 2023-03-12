import { Box, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { ProductCard } from "@/components";
import { addToCart } from "@/reducers/cart";
import { openDrawer } from "@/reducers/drawer";
import { useGetAllProductsQuery } from "@/services/product";
import { ProductType } from "@/types";

export const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent, product: ProductType) => {
    const { id, price, image, title } = product;
    e.preventDefault();
    dispatch(addToCart({ id, price, image, title }));
    dispatch(openDrawer(true));
  };

  return (
    <>
      <Grid container spacing={4}>
        {data?.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <ProductCard
              key={index}
              product={product}
              addToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
      {isLoading && <Box mt={4}>loading...</Box>}
    </>
  );
};
