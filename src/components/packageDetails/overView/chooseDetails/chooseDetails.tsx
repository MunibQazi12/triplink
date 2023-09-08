import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import DropdownIcon from "src/assets/images/packageDatial/chevron-up.png";
import OriginDropdown from "./originDropdown";
import TravelerDropdown from "./travelarDropdown";
import DepartureDate from "./departureDate";

const ChooseDetails = () => {

  return (
    <Box className="chooseDetails">
      <Typography className="chooseDetails__title">
        Choose your details
      </Typography>
      <Box className="chooseDetails__dropdownContainer">
        <OriginDropdown/>
         <TravelerDropdown/>
        <DepartureDate/>
      </Box>
      <Button className="BookNowBtn">Book now</Button>
    </Box>
  );
};

export default ChooseDetails;
