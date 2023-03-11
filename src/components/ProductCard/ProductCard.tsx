import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { ProductType } from "@/types";

type ProductCardProps = {
  product: ProductType;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      underline="none"
      sx={{ height: "100%" }}
    >
      <Card raised sx={{ height: "100%" }}>
        <CardActionArea
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <CardHeader
            title={product.title}
            // subheader={dateUtil(post.publishedAt)}
          />
          <CardMedia
            component="img"
            height="240"
            image={product.image}
            alt={product.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {product.category}
            </Typography>
            <Grid spacing={1} container>
              <Grid item>
                <Chip
                  icon={<AttachMoneyIcon fontSize="small" />}
                  label={<Typography>{product.price}</Typography>}
                  variant="outlined"
                  size="small"
                />
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
