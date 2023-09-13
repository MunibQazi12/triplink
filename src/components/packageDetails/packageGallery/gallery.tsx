import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import useClickOutside from "src/hooks/useClickOutside";
import PackageHeroImage from "src/assets/images/packageDatial/Bitmap.png";
import Bitmap1 from "src/assets/images/packageDatial/Bitmap11.png";
import Bitmap2 from "src/assets/images/packageDatial/Bitmap22.png";
import useWindowSize from "src/hooks/useWindowSize";


const PACKAGE_IMAGES: any = [
    {
        original: PackageHeroImage,
        thumbnail: PackageHeroImage,
        originalHeight: 500,
    },
    {
        original: Bitmap1,
        thumbnail: Bitmap1,
        originalHeight: 500,
    },
    {
        original: Bitmap2,
        thumbnail: Bitmap2,
        originalHeight: 500,
    }
];

const Gallery = () => {

    const [showDetailedImages, setShowDetailedImages] = useState(false);
    const { width } = useWindowSize();
    const ref = useClickOutside(() => setShowDetailedImages(false), showDetailedImages);

    return (
        <Box ref={ref} className="CustomImageList">
            {
                (width <= 640 || showDetailedImages)
                    ? (<ImageGallery
                        items={PACKAGE_IMAGES}
                        renderItem={(item) => {
                            return <Image
                                src={item.original}
                                alt="package original"
                                onClick={() => setShowDetailedImages(false)}
                            />;
                        }}
                        
                        showPlayButton={false}
                        renderThumbInner={(item) => {
                            return <Image
                                src={item.thumbnail || ''}
                                height={70}
                                width={70}
                                alt="package thumbnail" />;
                        }}
                        showThumbnails={true}
                    />)
                    :
                    (<Box className="CustomImageList__listItem">
                        <Box className="mainImage">
                            <Image src={PackageHeroImage} alt="MainImage" fill={true} />
                        </Box>
                        <Box className="sideImages">
                            <Box className="Bitmap1">
                                <Image src={Bitmap1} alt="Bitmap1" />
                            </Box>
                            <Box className="ImageBitMap2">
                                <Box className="seeAllPhotos Bitmap2">
                                    <Button
                                        onClick={() => setShowDetailedImages(true)}
                                        className="btn"
                                    >
                                        See 16 photos
                                    </Button>
                                </Box>
                                <Image className="" src={Bitmap2} alt="Bitmap2" />
                            </Box>
                        </Box>
                    </Box>)
            }
        </Box>
    );
}

export default Gallery;