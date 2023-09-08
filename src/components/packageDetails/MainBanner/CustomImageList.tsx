import { Box, Button } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import MainImage from "src/assets/images/packageDatial/MainBannerImage.png";
import Bitmap1 from "src/assets/images/packageDatial/Bitmap1.png";
import Bitmap2 from "src/assets/images/packageDatial/Bitmap2.png";
import MainImageGallery from "./MainImageGallery";
import useClickOutside from "src/hooks/useClickOutside";
import useWindowSize from "src/hooks/useWindowSize";




export default function CustomImageList() {
  const [showImageGallary, setShowImageGallary] = React.useState(false);
	const { width} = useWindowSize();

	const ref = useClickOutside(() => setShowImageGallary(false), showImageGallary);


  return (
    <Box ref={ref} className="CustomImageList">
      {showImageGallary ? (
        <MainImageGallery />
      ) : (
        <Box className="CustomImageList__listItem">
          <Box className="mainImage">
            <Image src={MainImage} alt="MainImage" fill={true} />
          </Box>
          <Box className="sideImages">
            <Box className="Bitmap1">
              <Image src={Bitmap1} alt="Bitmap1" />
            </Box>
            <Box className="ImageBitMap2">
              <Box className="seeAllPhotos">
              <Button
                onClick={() => setShowImageGallary(true)}
                className="btn"
              >
                See 16 photos
              </Button>
              </Box>
              <Image className="" src={Bitmap2} alt="Bitmap2" />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
