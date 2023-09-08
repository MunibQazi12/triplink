import {
  Box,
  Container,
  ListItem,
  List,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import CheckIcon from "src/assets/images/packageDatial/check.svg";

const IncludeList = [
  "Flights Spain - Cairo / Aswan - Spain.",
  "Domestic flight Aswan - Cairo.",
  "3 nights in Cairo and 4 nights in cruise.",
  "7 Breakfasts, 4 Lunches, 4 Dinners.",
  "Visits and entrance fees according to itinerary.",
];

const AdditionalInfo = () => {
  return (
    <Box className="AdditionalInfo">
      <Box className="OverView__Container__LeftSide__IncludeSection">
        <Typography className="AdditionalInfo__title">
          Additional info and notes
        </Typography>
        <Box
          flexDirection={"row"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box className="Included">
            <List className="Included__list list">
              {IncludeList.map((data, index: number) => (
                <ListItem key={index} className="listItem">
                  <Image src={CheckIcon} alt="CheckIcon" />
                  <Typography className="text">{data}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
      <Button className="seeMoreBtn">See More</Button>
    </Box>
  );
};

export default AdditionalInfo;
