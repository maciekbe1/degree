import { Slide, useScrollTrigger } from "@mui/material";
import { ReactElement } from "react";

type HideOnScrollProps = {
  children: ReactElement;
};

export const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
