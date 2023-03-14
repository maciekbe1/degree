import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, Button, Drawer, IconButton, List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/reducers/cart";
import { openDrawer } from "@/reducers/drawer";
import { RootState } from "@/store";

import { CartDrawerItem } from "./CartDrawerItem";
import { CartDrawerTotal } from "./CartDrawerTotal";

export const CartDrawer = () => {
  const dispatch = useDispatch();

  const drawerIsOpen = useSelector(
    (state: RootState) => state.persistedReducer.drawer.isOpen
  );

  const { items, total } = useSelector(
    (state: RootState) => state.persistedReducer.cart
  );

  const cartLength = items.reduce((total, item) => total + item.quantity, 0);

  const onDrawerHandler = (isOpen: boolean) => {
    dispatch(openDrawer(isOpen));
  };

  const onProductRemove = (itemId: number) => {
    dispatch(removeFromCart(itemId));
    if (cartLength === 1) {
      dispatch(openDrawer(false));
    }
  };

  const onProductIncrease = (itemId: number) => {
    dispatch(increaseQuantity(itemId));
  };

  const onProductDecrease = (itemId: number) => {
    dispatch(decreaseQuantity(itemId));
  };

  return (
    <>
      <IconButton
        color="primary"
        aria-label="shopping cart"
        onClick={() => onDrawerHandler(true)}
      >
        <Badge badgeContent={cartLength} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Drawer
        anchor="right"
        open={drawerIsOpen}
        onClose={() => onDrawerHandler(false)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "common.white",
          },
        }}
      >
        <Box
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            onClick={() => onDrawerHandler(false)}
            startIcon={<CloseIcon />}
          >
            Close
          </Button>
          <Badge badgeContent={cartLength} color="secondary">
            <ShoppingCartIcon color="primary" />
          </Badge>
        </Box>

        <List sx={{ width: 320 }} role="presentation">
          {items.map((item, i) => (
            <CartDrawerItem
              key={i}
              item={item}
              onRemove={onProductRemove}
              onIncrease={onProductIncrease}
              onDecrease={onProductDecrease}
              onClose={() => onDrawerHandler(false)}
            />
          ))}
        </List>
        <CartDrawerTotal total={total} />
      </Drawer>
    </>
  );
};
