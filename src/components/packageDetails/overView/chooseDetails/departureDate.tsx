import React, { useState } from "react";
import { Box , Typography } from "@mui/material";
import Image from "next/image";
import DropdownIcon from "src/assets/images/packageDatial/chevron-up.png";
// import Travelers from "src/components/shared/searchForm/travelers";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
// import useClickOutside from "src/hooks/useClickOutside";
// import DatePicker from "react-multi-date-picker";


const DepartureDate = () => {
  const [showDropdown, setShowDropdown] = useState(false);
//   const ref = useClickOutside(() => setShowDropdown(false), showDropdown);
//   const [value, setValue] = useState(new Date());
  return (
    <Box className="dropdownBtn">
      <Typography className="dropdownBtn__title">DEPARTURE DATE</Typography>
      <Box onClick={() => setShowDropdown(true)} className="dropdownBtn__btn">
        <Typography className="text">Add the date</Typography>
        <Image src={DropdownIcon} alt="DropdownIcon" />
      </Box>

      {/* {showDropdown ? <DatePicker value={value} numberOfMonths={2} /> : null } */}
    </Box>
  );
};

export default DepartureDate;
