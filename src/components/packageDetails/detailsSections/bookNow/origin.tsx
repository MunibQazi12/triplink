import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import useClickOutside from "src/hooks/useClickOutside";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ORIGINS } from "../..";

const Origin = () => {

  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [origin, setOrigin] = useState('Madrid');
  const ref = useClickOutside(() => setShowOriginDropdown(false), showOriginDropdown);

  const originHandler = (origin: string) => {
    setOrigin(origin);
    setShowOriginDropdown(false);
  }

  return (
    <Box onClick={() => setShowOriginDropdown(!showOriginDropdown)} ref={ref} className="dropdownBtn">
      <Typography className="dropdownBtn__title">ORIGIN</Typography>
      <Box className="dropdownBtn__btn">
        <Typography className="text">{origin}</Typography>
        {showOriginDropdown ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Box>
      {showOriginDropdown ? (
        <Box className="travelerDropdown">
          {
            ORIGINS.map((origin: string, index: number) => <Typography
              key={index}
              className="text"
              onClick={() => originHandler(origin)}
            >{origin}</Typography>)
          }
        </Box>
      ) : null}
    </Box>
  );
};

export default Origin;
