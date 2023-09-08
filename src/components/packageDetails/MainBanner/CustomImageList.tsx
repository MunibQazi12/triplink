import { Box, Button } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import MainImage from "src/assets/images/packageDatial/MainBannerImage.png";
import Bitmap1 from "src/assets/images/packageDatial/Bitmap1.png";
import Bitmap2 from "src/assets/images/packageDatial/Bitmap2.png";

export default function CustomImageList() {
  return (
    <Box className="CustomImageList">
      <Box className="CustomImageList__listItem">
          <Image className="mainImage" src={MainImage} alt="MainImage" />
        <Box>
          <Image className="mainImage" width={291} height={245} src={Bitmap1} alt="Bitmap1" />
          <Box className="ImageBitMap2">
          <Button className="seeMoreBtn">See 16 photos</Button>
          <Image className="mainImage " width={291} height={245} src={Bitmap2} alt="Bitmap2" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
