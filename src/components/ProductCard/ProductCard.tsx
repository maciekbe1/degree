import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";

import { Link } from "@/components";
import { ProductType } from "@/types";
import { formatPrice } from "@/utils/formatPrice";

type ProductCardProps = {
  product: ProductType;
  addToCart: (e: React.MouseEvent, product: ProductType) => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  addToCart,
}) => {
  return (
    <Tooltip title={product.title} placement="top">
      <Card raised sx={{ height: "100%" }}>
        <CardActionArea
          LinkComponent={Link}
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
            loading="lazy"
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
              onClick={(e) => addToCart(e, product)}
            >
              Add to cart
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
};
