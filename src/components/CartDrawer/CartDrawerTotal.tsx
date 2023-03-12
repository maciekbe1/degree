import { formatPrice } from "@/utils/formatPrice";

import { TotalWrapper } from "./CartDrawerTotal.styles";

type CartDrawerTotalProps = {
  total: number;
};

export const CartDrawerTotal = ({ total }: CartDrawerTotalProps) => {
  return (
    <TotalWrapper>
      <span>Total: </span>
      <span>{formatPrice(total)}</span>
    </TotalWrapper>
  );
};
