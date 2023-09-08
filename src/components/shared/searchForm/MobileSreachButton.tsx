import { Box, Typography , Button} from "@mui/material";
import Link from "next/link";
import React from "react";

const MobileSreachButton = () => {
  return (
    <Link href={'/search-result'}>
      <Box className="SearchForm__Container__MobileSearchBtn">
      <Button className="searchBtn">
        <Typography className="text">Search</Typography>
      </Button>
    </Box>
    </Link>
  );
};
export default MobileSreachButton;
