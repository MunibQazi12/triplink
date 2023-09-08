import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import Place1 from "src/assets/images/Bitmap.png";
import Place2 from "src/assets/images/packages/package2.jpg";
import Place3 from "src/assets/images/packages/package8.png";
import Place4 from "src/assets/images/packages/package2.jpg";
import Place5 from "src/assets/images/packages/package1.jpg";
import Place6 from "src/assets/images/packages/package8.png";
import Place7 from "src/assets/images/packages/package1.jpg";
import Place8 from "src/assets/images/packages/package2.jpg";
import Package, { PackageType } from "./package";

const PackagesData: any = [
  	{
		heading: "Egypt: Cairo and Nile Cruise with 10 Visits + Abu Simbel",
		description:
		"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
		packages: 10,
		placeImage: Place1,
		duration: "7 nights - 8 days",
		type: "Circuit",
		price: 624,
  	},
  	{
		heading: "Greece: Athens + Mykonos and Santorini",
		description:
		"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
		packages: 10,
		placeImage: Place1,
		duration: "7 nights - 8 days",
		type: "Honeymoon",
		price: 462,
	},
  	{
		heading: "Morocco: Imperial Cities + Thousand Kasbahs + Desert",
		description:
		"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
		packages: 10,
		placeImage: Place1,
		duration: "7 nights - 8 days",
		type: "Circuit",
		price: 246,
	},
  	{
		heading: "Italy: Trip to the Italian Tyrol and Dolomites",
		description:
		"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
		packages: 10,
		placeImage: Place1,
		duration: "7 nights - 8 days",
		type: "Adventure",
		price: 264,
	},
  	{
		heading: "Mayan Legacy: Guatemala, Honduras, El Salvador",
		description:
		"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
		packages: 10,
		placeImage: Place1,
		duration: "7 nights - 8 days",
		type: "Circuit",
		price: 624,
	},
  	{
		heading: "Costa Rica Basics with Manuel Antonio Beaches",
		description:
		"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
		packages: 10,
		placeImage: Place1,
		duration: "7 nights - 8 days",
		type: "Honeymoon",
		price: 462,
	},
  	{
		heading: "Spain: Discover Granada, Cordoba and Seville",
		description:
		"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
		packages: 10,
		placeImage: Place1,
		duration: "7 nights - 8 days",
		type: "Circuit",
		price: 246,
	},
  	{
		heading: "Egypt: Cairo and Nile Cruise with 8 Visits + Abu Simbel",
		description:
		"Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do.",
		packages: 10,
		placeImage: Place1,
		duration: "7 nights - 8 days",
		type: "Adventure",
		price: 264,
	},
];

const Packages = () => {
  	return (
		<Box id="Packages">
			<Container className="Container">
				<Typography className="Container__heading">
					Featured packages
				</Typography>
				<Typography className="Container__SubHeading">
					Get to know and be inspired by our featured options
				</Typography>
				<Box className="Container__CardContainer">
					{PackagesData.map((packageData: PackageType, index: number) => (
						<Package key={index} packageData={packageData} />
					))}
				</Box>
			</Container>
		</Box>
  	);
};

export default Packages;
