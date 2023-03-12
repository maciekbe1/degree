import {
  Avatar,
  Button,
  ButtonGroup,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import { CartItem } from "@/types";

type CartDrawerItemProps = {
  item: CartItem;
  onRemove: (productId: number) => void;
  onIncrease: (productId: number) => void;
  onDecrease: (productId: number) => void;
};
const StyledListItem = styled(ListItem)({
  display: "flex",
  flexDirection: "column",
  "& .MuiListItemText-multiline": {
    margin: "0 0 0 8px",
  },
});
const StyledAvatar = styled(Avatar)({
  width: "60px",
  height: "60px",
});
const StyledProductControl = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});
const StyledProductInfo = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "12px",
});
export const CartDrawerItem: React.FC<CartDrawerItemProps> = ({
  item,
  onRemove,
  onIncrease,
  onDecrease,
}) => {
  return (
    <StyledListItem divider>
      <StyledProductInfo>
        <ListItemAvatar>
          <StyledAvatar variant="square" alt={item.title} src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              variant="body1"
              noWrap
              sx={{
                overflow: "hidden",
              }}
            >
              {item.title}
            </Typography>
          }
          secondary={`$${item.price}`}
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
