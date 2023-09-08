import Image from "next/image";
import ImageGallery from "react-image-gallery";
import MainImage from "src/assets/images/packageDatial/MainBannerImage.png";

const images: any = [
  {
    original: MainImage,
    originalHeight: 500,
  },
  {
    original: MainImage,
    originalHeight: 500,
  },
  {
    original: MainImage,
    originalHeight: 500,
  },
  {
    original: MainImage,
    originalHeight: 500,
  },
];

const MainImageGallery = () => {
  return (
    <ImageGallery
      items={images}
      renderItem={(item) => {
        return <Image src={item.original} alt="zxzxz" />;
      }}
    />
  );
};

export default MainImageGallery;
