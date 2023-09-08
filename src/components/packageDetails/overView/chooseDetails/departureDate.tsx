import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DropdownIcon from "src/assets/images/packageDatial/chevron-up.png";
import useClickOutside from "src/hooks/useClickOutside";
import DatePicker from "react-multi-date-picker";
import useWindowSize from "src/hooks/useWindowSize";


const DepartureDate = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useClickOutside(() => setShowDropdown(false), showDropdown);
  const [date, setDate] = useState<any>();
  const { width} = useWindowSize();

  return (
    <Box ref={ref} className="dropdownBtn">
      <Typography className="dropdownBtn__title">DEPARTURE DATE</Typography>
      <DatePicker
        numberOfMonths={ width > 640 ? 2 : 1}
        value={date}
        onChange={(date) => {
          if (date) {
            setDate(date);
          }
        }}
        render={(value,openCalender) => {
          return (
            <Box
              onClick={() => openCalender()}
              className="dropdownBtn__btn"
            >
              <Typography className="text">{`${date?.day} ${date?.month?.name} ${date?.year}`}</Typography>
              <Image src={DropdownIcon} alt="DropdownIcon" />
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default DepartureDate;
