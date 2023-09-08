import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CustomImageList from "./CustomImageList";

const MainBanner = () => {
  return (
    <Box className="MainBanner">
      <Container className="MainBanner__Container">
        <Box className="MainBanner__Container__header">
          <Box className="MainBanner__Container__header__info">
            <Typography className="circutText">Circuit</Typography>
            <Typography className="days">7 nights - 8 days</Typography>
            <Typography className="CancellationText">
              Free cancellation
            </Typography>
          </Box>
          <Box className="MainBanner__Container__header__price">
            <Typography className="fromText">from</Typography>
            <Typography className="number">624</Typography>
            <Typography className="currency">€</Typography>
          </Box>
        </Box>
        <CustomImageList />
      </Container>
    </Box>
  );
};

export default MainBanner;
