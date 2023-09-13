import { Box, ListItem, List, Typography, Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CheckIcon from "src/assets/images/packageDatial/check.svg";
import { INCLUDES } from "..";

const AdditionalInfo = () => {
  const [seeMoreItems, setSeeMoreItems] = useState(false);
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
              {INCLUDES.map((data, index: number) => (
                <ListItem key={index} className="listItem">
                  <Image src={CheckIcon} alt="CheckIcon" />
                  <Typography className="text">{data}</Typography>
                </ListItem>
              ))}
              {seeMoreItems && (
                <>
                  {INCLUDES.map((data, index: number) => (
                    <ListItem key={index} className="listItem">
                      <Image src={CheckIcon} alt="CheckIcon" />
                      <Typography className="text">{data}</Typography>
                    </ListItem>
                  ))}
                </>
              )}
            </List>
          </Box>
        </Box>
      </Box>
      <Button onClick={() => setSeeMoreItems(true)} className="seeMoreBtn">
        See More
      </Button>
    </Box>
  );
};

export default AdditionalInfo;
