import { Typography } from "@mui/material";

import notFoundGif from "@/assets/notFoundGif.gif";
import {
  StyledGif,
  StyledGifWrapper,
  StyledNotFoundWrapper,
} from "@/components/NotFound/NotFound.styles";

const NotFound = () => {
  return (
    <StyledNotFoundWrapper>
      <StyledGifWrapper>
        <StyledGif src={notFoundGif} alt="Page not found" />
      </StyledGifWrapper>
      <Typography variant="h5" align="center">
        Sorry, the page you&lsquo;re looking for doesn&lsquo;t exist :)
      </Typography>
    </StyledNotFoundWrapper>
  );
};

export default NotFound;
