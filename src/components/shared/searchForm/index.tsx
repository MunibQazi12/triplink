import TravelLocation from "./travelLocation";
import Duration from "./duration";
import Travelers from "./travelers";
import { Box, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import MobileSreachButton from "./MobileSreachButton";
import Link from "next/link";

const SearchForm = () => {
  return (
    <Box className="SearchForm">
      <Box className='SearchForm__Container'>
        <TravelLocation />
        <Duration />
        <Travelers />
        <MobileSreachButton />
        <IconButton className='SearchForm__Container__SearchBtn'>
          <Link href={'/search-result'}>
            <SearchOutlined />
          </Link>
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchForm;
