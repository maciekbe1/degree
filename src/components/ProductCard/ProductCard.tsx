import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

import { addToCart } from "@/reducers/cart";
import { handleCartDrawer } from "@/reducers/drawer";
import { ProductType } from "@/types";
import { formatPrice } from "@/utils/formatPrice";

type ProductCardProps = {
  product: ProductType;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent, product: ProductType) => {
    const { id, price, image, title } = product;
    e.preventDefault();
    dispatch(addToCart({ id, price, image, title }));
    dispatch(handleCartDrawer(true));
  };

  return (
    <Card raised sx={{ height: "100%" }}>
      <CardActionArea
        LinkComponent="a"
        href={`/product/${product.id}`}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <CardHeader
          title={
            <Typography noWrap variant="h6">
              {product.title}
            </Typography>
          }
          sx={{
            width: "100%",
            "& .MuiCardHeader-content": {
              width: "100%",
            },
          }}
          subheader={
            <Rating
              name="product-rating"
              value={product.rating.rate}
              readOnly
            />
          }
        />
        <CardMedia
          component="img"
          height="240"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {product.category}
            </Typography>
            <Chip
              label={<Typography>{formatPrice(product.price)}</Typography>}
              variant="outlined"
              size="small"
            />
          </div>
          <Button
            variant="contained"
            size="small"
            onClick={(e) => handleAddToCart(e, product)}
          >
            Add to cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
