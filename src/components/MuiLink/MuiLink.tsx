import { Link as MuiLink, LinkProps } from "@mui/material";
import { forwardRef } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkComposed(props, ref) {
    return (
      <MuiLink
        {...props}
        component={ReactRouterLink}
        to={props.href ?? "#"}
        ref={ref}
      />
    );
  }
);
