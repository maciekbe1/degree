import { Box, useScrollTrigger, Zoom } from "@mui/material";
import { ReactNode } from "react";

type BackToTop = {
  children: ReactNode;
};

export const BackToTop: React.FC<BackToTop> = ({ children }) => {
  const trigger = useScrollTrigger();

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement;
    const anchor = (target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={(e) => handleClick(e)}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 30 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

export default BackToTop;
