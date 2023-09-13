import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import useClickOutside from "src/hooks/useClickOutside";
import DatePicker from "react-multi-date-picker";
import useWindowSize from "src/hooks/useWindowSize";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const DepartureDate = () => {
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const ref = useClickOutside(() => setShowDepartureDropdown(false), showDepartureDropdown);
  const [date, setDate] = useState<any>();
  const { width } = useWindowSize();

  return (
    <Box ref={ref} className="dropdownBtn">
      <Typography className="dropdownBtn__title">DEPARTURE DATE</Typography>
      <DatePicker
        numberOfMonths={width > 640 ? 2 : 1}
        value={date}
        onChange={(date) => {
          if (date) {
            setDate(date);
            setShowDepartureDropdown(false)
          }
        }}
        render={(value, openCalender) => {
          return (
            <Box
              onClick={() => {
                setShowDepartureDropdown(true)
                openCalender()
              }}
              className="dropdownBtn__btn"
            >
              <Typography className="text">
                {
                  date
                    ? `${date?.month?.name} ${date?.day}, ${date?.year}`
                    : (
                      new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date())
                    )
                }
              </Typography>
              {showDepartureDropdown ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default DepartureDate;
