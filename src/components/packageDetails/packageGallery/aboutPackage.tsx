import { Box, Typography } from "@mui/material";

const AboutPackage = () => {

    return (
        <Box className="MainBanner__Container__header">
            <Box className="MainBanner__Container__header__info">
                <Typography className="circutText">Circuit</Typography>
                <Typography className="days">7 nights - 8 days</Typography>
                <Typography className="CancellationText">
                    Free cancellation
                </Typography>
            </Box>
            <Box className="MainBanner__Container__header__price">
                <Typography className="fromText">from</Typography>
                <Typography className="number">624</Typography>
                <Typography className="currency">€</Typography>
            </Box>
        </Box>
    );
}

export default AboutPackage;