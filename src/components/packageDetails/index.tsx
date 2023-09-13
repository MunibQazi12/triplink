import { Box } from '@mui/material'
import React from 'react'
import Appbar from 'src/components/appbar'
import SearchForm from 'src/components/shared/searchForm'
import PackageGallery from './packageGallery'
import DetailSections from './detailsSections'
import Footer from '../footer'
import Place1 from "src/assets/images/packageDatial/palce1.png";
import MainImage from "src/assets/images/packageDatial/MainBannerImage.png";

const PackageDetails = () => {
  return (
    <Box>
      <Appbar />
      <SearchForm />
      <PackageGallery />
      <DetailSections />
      <Footer />
    </Box>
  )
}

export default PackageDetails;


// dummy data
export const INCLUDES = [
  "Flights Spain - Cairo / Aswan - Spain.",
  "Domestic flight Aswan - Cairo.",
  "3 nights in Cairo and 4 nights in cruise.",
  "7 Breakfasts, 4 Lunches, 4 Dinners.",
  "Visits and entrance fees according to itinerary.",
];

export const NOT_INCLUDES = [
  "Flights Spain - Cairo / Aswan - Spain.",
  "Domestic flight Aswan - Cairo.",
  "3 nights in Cairo and 4 nights in cruise.",
];

export const ITINERARY_SCHEDULES = [
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

export const ORIGINS = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla']
