import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductCard } from "@/components";
import { addToCart } from "@/reducers/cart";
import { openDrawer } from "@/reducers/drawer";
import { setProducts } from "@/reducers/product";
import { useGetAllProductsQuery } from "@/services/product";
import { RootState } from "@/store";
import { ProductType } from "@/types";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state: RootState) => state.persistedReducer.product.products
  );

  const { data, isLoading, isSuccess } = useGetAllProductsQuery(name, {
    skip: !!products.length,
  });

  const handleAddToCart = (e: React.MouseEvent, product: ProductType) => {
    const { id, price, image, title } = product;
    e.preventDefault();
    dispatch(addToCart({ id, price, image, title }));
    dispatch(openDrawer(true));
  };

  useEffect(() => {
    if (isSuccess && !products.length) {
      dispatch(setProducts(data));
    }
  }, [isSuccess]);

  if (isLoading && !products.length) {
    //TODO: Prepare loading component
    return <div>loading...</div>;
  }

  return (
    <>
      <Grid container spacing={4} sx={{ mt: 0 }}>
        {products.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <ProductCard
              key={index}
              product={product}
              addToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
