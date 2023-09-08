import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Image from "next/image";
import Place1 from "src/assets/images/packageDatial/palce1.png";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MainImage from "src/assets/images/packageDatial/MainBannerImage.png";

const AccordianInfo = [
  {
    title: "Day 1: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: Place1,
    flightInfo: "Flight Spain - Cairo",
  },
  {
    title: "Day 2: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: MainImage,
    flightInfo: "Flight Spain - Cairo",
  },
  {
    title: "Day 3: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: Place1,
    flightInfo: "Flight Spain - Cairo",
  },
  {
    title: "Day 4: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: Place1,
    flightInfo: "Flight Spain - Cairo",
  },
  {
    title: "Day 5: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: Place1,
    flightInfo: "Flight Spain - Cairo",
  },
  {
    title: "Day 6: Arrival in Cairo",
    text: "Departure from the airport to Cairo. Upon arrival at the airport, transfer to the hotel. No obligations for the rest of the day. You can enjoy the city on your own. Dinner and accommodation.",
    ImageLink: Place1,
    flightInfo: "Flight Spain - Cairo",
  },
];

export default function Accordions() {
  return (
    <Box className="Schedule__accordians">
      {AccordianInfo.map((data) => (
        <>
          <Accordion className="pannel">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="pannel__Summary"
            >
              <Box className="div"></Box>

              <Typography className="text">{data.title}</Typography>
            </AccordionSummary>
            <AccordionDetails className="pannel__Details">
              <Image className="placeImage" src={data.ImageLink} alt="Place1" />
              <Typography className="paragraph">{data.text}</Typography>
              <Typography className="AccomodationDetail">
                Accommodation: 4* Hotel in Cairo
              </Typography>
              <Box className="info">
                <Box className="info__flight">
                  <LocalAirportIcon />
                  <Typography className="text">{data.flightInfo}</Typography>
                </Box>

                <Box className="info__Dinner">
                  <RestaurantIcon />
                  <Typography className="text">Dinner</Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </Box>
  );
}
