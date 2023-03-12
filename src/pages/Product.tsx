import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  StyledFlexCenter,
  StyledFlexEnd,
  StyledFlexSpaceBetween,
} from "@/components/Product/Product.styles";
import { addToCart } from "@/reducers/cart";
import { openDrawer } from "@/reducers/drawer";
import { useGetProductQuery } from "@/services/product";
import { formatPrice } from "@/utils/formatPrice";

export const Product = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductQuery(id);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      const { id, price, image, title } = product;
      dispatch(addToCart({ id, price, image, title }));
      dispatch(openDrawer(true));
    }
  };

  if (isError) {
    return <p>error</p>;
  }

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {product?.title}
            </Typography>
          </CardContent>
          <CardMedia component="img" image={product?.image} />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <StyledFlexEnd>
              {product?.price ? (
                <Chip label={formatPrice(product.price)} color="warning" />
              ) : null}
            </StyledFlexEnd>
            <p>{product?.description}</p>
            <StyledFlexSpaceBetween>
              <Rating
                name="product-rating"
                value={product?.rating?.rate}
                readOnly
              />
              <p>{product?.rating?.count} reviews</p>
            </StyledFlexSpaceBetween>
            <StyledFlexCenter>
              <Button
                onClick={handleAddToCart}
                disableElevation
                variant="contained"
                size="large"
                fullWidth
              >
                Add to cart
              </Button>
            </StyledFlexCenter>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
