import { Button, Typography } from "@mui/material";
import Image from "next/image";
import CrossIcon from "src/assets/images/crossIcon.png";
import React, { FC } from "react";
import { Box, Stack } from "@mui/material";
import FiltersDropdown from "./filtersDropdown";
import PriceFilterDropdown from "./priceFilterDropdown";
import { SearchFiltersDropdown } from ".";

interface FilterProps {
  filter: string;
  onClick?: () => void;
}

const SearchFiltersMobileLayout: FC<FilterProps> = ({ filter, onClick }) => {
  return (
    <Box className="MobileFilterModel">
      <Stack className="MobileFilterModel__header">
        <Image
          onClick={onClick}
          className="MobileFilterModel__header__CrossIcon"
          src={CrossIcon}
          alt="crossIcon"
        />
        <Typography className="MobileFilterModel__header__text">
          {filter}
        </Typography>
        <Typography className="MobileFilterModel__header__text"></Typography>
      </Stack>
      <Box className="customDropdown">
        {filter === "Filters" ? (
          <>
            <FiltersDropdown title="Theme"/>
            <FiltersDropdown title="Category"/>
            <PriceFilterDropdown />
            <FiltersDropdown title="Duration"/>
            <FiltersDropdown title="Other features" />
          </>
        ) : (
          SearchFiltersDropdown[filter]
        )}
      </Box>

      <Stack className="MobileFilterModel__Footer">
        <Button className="MobileFilterModel__Footer__Button">
          Show results
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchFiltersMobileLayout;
