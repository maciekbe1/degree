import {
  Button,
  ButtonGroup,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import { Link } from "@/components";
import { CartItem } from "@/types";
import { formatPrice } from "@/utils/formatPrice";

import {
  StyledAvatar,
  StyledListItem,
  StyledProductControl,
  StyledProductInfo,
} from "./CartDrawerItem.styles";

type CartDrawerItemProps = {
  item: CartItem;
  onRemove: (productId: number) => void;
  onIncrease: (productId: number) => void;
  onDecrease: (productId: number) => void;
  onClose: () => void;
};

export const CartDrawerItem: React.FC<CartDrawerItemProps> = ({
  item,
  onRemove,
  onIncrease,
  onDecrease,
  onClose,
}) => {
  return (
    <StyledListItem divider>
      <StyledProductInfo>
        <ListItemAvatar>
          <StyledAvatar variant="square" alt={item.title} src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Link href={`/product/${item.id}`} onClick={onClose}>
              <Typography
                variant="body1"
                noWrap
                sx={{
                  overflow: "hidden",
                }}
              >
                {item.title}
              </Typography>
            </Link>
          }
          secondary={formatPrice(item.price)}
        />
      </StyledProductInfo>
      <StyledProductControl>
        <ButtonGroup size="small">
          <Button onClick={() => onRemove(item.id)} variant="outlined">
            x
          </Button>
        </ButtonGroup>
        {item.quantity}
        <ButtonGroup size="small">
          <Button
            variant="outlined"
            disabled={item.quantity === 1}
            onClick={() => onDecrease(item.id)}
          >
            -
          </Button>
          <Button variant="outlined" onClick={() => onIncrease(item.id)}>
            +
          </Button>
        </ButtonGroup>
      </StyledProductControl>
    </StyledListItem>
  );
};
