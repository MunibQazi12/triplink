import Image from "next/image";
import { Fragment } from "react";
import { ITINERARY_SCHEDULES } from "..";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Itinerary = () => {

    return (
        <Fragment>
            <Typography className="title">Itinerary</Typography>
            <Box className="Schedule__accordians">
                {ITINERARY_SCHEDULES?.map((data: any, index: number) => {
                    const { title, ImageLink, text, flightInfo } = data || {};
                    return (
                        <Accordion className="pannel" key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className="pannel__Summary"
                            >
                                <Box className="div"></Box>
                                <Typography className="text">{title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="pannel__Details">
                                <Image className="placeImage" src={ImageLink} alt="Place1" />
                                <Typography className="paragraph">{text}</Typography>
                                <Typography className="AccomodationDetail">
                                    Accommodation: 4* Hotel in Cairo
                                </Typography>
                                <Box className="info">
                                    <Box className="info__flight">
                                        <LocalAirportIcon />
                                        <Typography className="text">{flightInfo}</Typography>
                                    </Box>

                                    <Box className="info__Dinner">
                                        <RestaurantIcon />
                                        <Typography className="text">Dinner</Typography>
                                    </Box>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </Box>
        </Fragment>
    );
}

export default Itinerary;