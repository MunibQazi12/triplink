import { Box } from "@mui/material";
import React from "react";
import Appbar from "src/components/appbar";
import Footer from "src/components/footer";
import Packages from "src/components/packages";
import SearchResultNavBar from "src/components/searchFilters";
import SearchForm from "src/components/shared/searchForm";
import SortFilters from "src/components/sortFilters";

export default function SearchFilters() {
  return (
    <Box id="SearchResult">
      <Appbar />
      <SearchForm />
      <SearchResultNavBar />
      <SortFilters />
      <Packages />
      <Footer />
    </Box>
  );
}
