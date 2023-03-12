import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { useDispatch, useSelector } from "react-redux";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/reducers/cart";
import { handleCartDrawer } from "@/reducers/drawer";
import { RootState } from "@/store";

import { CartDrawerItem } from "./CartDrawerItem";
import { CartDrawerTotal } from "./CartDrawerTotal";

export const CartDrawer = () => {
  const dispatch = useDispatch();

  const drawerIsOpen = useSelector(
    (state: RootState) => state.persistedReducer.drawer.isOpen
  );

  const cartItems = useSelector(
    (state: RootState) => state.persistedReducer.cart.items
  );

  const totalPrice = useSelector(
    (state: RootState) => state.persistedReducer.cart.total
  );

  const cartLength = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const onDrawerHandler = (isOpen: boolean) => {
    dispatch(handleCartDrawer(isOpen));
  };

  const onProductRemove = (productId: number) => {
    dispatch(removeFromCart(productId));
    if (cartLength === 1) {
      dispatch(handleCartDrawer(false));
    }
  };

  const onProductIncrease = (productId: number) => {
    dispatch(increaseQuantity(productId));
  };

  const onProductDecrease = (productId: number) => {
    dispatch(decreaseQuantity(productId));
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
          {cartItems.map((item, i) => (
            <CartDrawerItem
              key={i}
              item={item}
              onRemove={onProductRemove}
              onIncrease={onProductIncrease}
              onDecrease={onProductDecrease}
            />
          ))}
        </List>
        <CartDrawerTotal total={totalPrice} />
      </Drawer>
    </>
  );
};
