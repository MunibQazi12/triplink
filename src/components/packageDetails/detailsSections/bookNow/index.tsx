import { Box, Button, Typography } from "@mui/material";
import OriginDropdown from "./origin";
import TravelerDropdown from "./travelers";
import DepartureDate from "./departureDate";

const index = () => {

  return (
    <Box className="chooseDetails">
      <Typography className="chooseDetails__title">
        Choose your details
      </Typography>
      <Box className="chooseDetails__dropdownContainer">
        <OriginDropdown />
        <TravelerDropdown />
        <DepartureDate />
      </Box>
      <Box className="bookNowContainer">
      <Button className="BookNowBtn">Book now</Button>
      </Box>
    </Box>
  );
};

export default index;
