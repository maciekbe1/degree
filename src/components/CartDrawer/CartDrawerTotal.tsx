import { styled } from "@mui/system";

import { formatPrice } from "@/utils/formatPrice";

type CartDrawerTotalProps = {
  total: number;
};

const TotalWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "bold",
  padding: "0 8px",
  marginBottom: "24px",
});

export const CartDrawerTotal = ({ total }: CartDrawerTotalProps) => {
  return (
    <TotalWrapper>
      <span>Total: </span>
      <span>{formatPrice(total)}</span>
    </TotalWrapper>
  );
};
