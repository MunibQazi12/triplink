import React, { useState } from "react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import DropdownIcon from "src/assets/images/packageDatial/chevron-up.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import useClickOutside from "src/hooks/useClickOutside";

const TravelerDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useClickOutside(() => setShowDropdown(false), showDropdown);

  return (
    <Box ref={ref} className="dropdownBtn">
      <Typography className="dropdownBtn__title">TRAVELERS</Typography>
      <Box onClick={() => setShowDropdown(true)} className="dropdownBtn__btn">
        <Typography className="text">1 adult</Typography>
        <Image src={DropdownIcon} alt="DropdownIcon" />
      </Box>
      {showDropdown ? (
        <Box className="travelerDropdown">
          <List className="travelerDropdown__List">
            <ListItem className="listItem">
              <Typography className="listItem__text">Adults</Typography>
              <Box className="listItem__functions">
                <RemoveIcon />
                <Typography className="listItem__functions__text">2</Typography>
                <AddIcon />
              </Box>
            </ListItem>
            <ListItem className="listItem">
              <Typography className="listItem__text">Adults</Typography>
              <Box className="listItem__functions">
                <RemoveIcon />
                <Typography className="listItem__functions__text">2</Typography>
                <AddIcon />
              </Box>
            </ListItem>
          </List>
        </Box>
      ) : null}
    </Box>
  );
};

export default TravelerDropdown;
