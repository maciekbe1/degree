import { Link as MuiLink, LinkProps } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

export const Link: React.FC<LinkProps> = (props) => {
  return (
    <MuiLink {...props} component={ReactRouterLink} to={props.href ?? "#"} />
  );
};
