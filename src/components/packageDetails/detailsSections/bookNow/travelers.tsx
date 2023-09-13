import { useState } from "react";
import { Box, Typography } from "@mui/material";
import useClickOutside from "src/hooks/useClickOutside";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { SubOption } from "src/components/shared/searchForm/travelers";

interface Travelers {
  adults: number,
  childrens: number
}

const Travelers = () => {

  const [travelers, setTravelers] = useState<Travelers>({
    adults: 1,
    childrens: 1
  })
  const { adults, childrens } = travelers;
  const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
  const ref = useClickOutside(() => setShowTravelersDropdown(false), showTravelersDropdown);

  const addHandler = (type: string) => {
    setTravelers((preState: any) => (
      {
        ...preState,
        [type]: preState[type] + 1
      }
    ))
  }

  const removeHandler = (type: string) => {
    setTravelers((preState: any) => (
      {
        ...preState,
        [type]: preState[type] - 1
      }
    ))
  }


  return (
    <Box onClick={() => setShowTravelersDropdown(!showTravelersDropdown)} ref={ref} className="dropdownBtn">
      <Typography className="dropdownBtn__title">TRAVELERS</Typography>
      <Box className="dropdownBtn__btn">
        <Typography className="text">{`Adults ${adults}, Childrens ${childrens}`}</Typography>
        {showTravelersDropdown ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Box>
      {showTravelersDropdown ? (
        <Box className="Travelers">
          <SubOption
            label="Adults"
            count={adults}
            addHandler={() => addHandler('adults')}
            removeHandler={() => adults > 0 && removeHandler('adults')}
          />
          <SubOption
            label="Childrens"
            count={childrens}
            addHandler={() => addHandler('childrens')}
            removeHandler={() => childrens > 0 && removeHandler('childrens')}
          />
        </Box>
      ) : null}
    </Box>
  );
};

export default Travelers;
