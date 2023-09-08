import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import DropdownIcon from "src/assets/images/packageDatial/chevron-up.png";
import useClickOutside from "src/hooks/useClickOutside";

const OriginDropdown = () => {
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
	const ref = useClickOutside(() => setShowOriginDropdown(false), showOriginDropdown);


  return (
    <Box ref={ref} className="dropdownBtn">
      <Typography className="dropdownBtn__title">ORIGIN</Typography>
      <Box
        onClick={() => setShowOriginDropdown(true)}
        className="dropdownBtn__btn"
      >
        <Typography className="text">Madrid</Typography>
        <Image src={DropdownIcon} alt="DropdownIcon" />
      </Box>
      {showOriginDropdown ? (
        <Box className="travelerDropdown">
          <Typography className="text">Madrid</Typography>
          <Typography className="text">Barcelona</Typography>
          <Typography className="text">Valencia</Typography>
          <Typography className="text">Sevilla</Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default OriginDropdown;
