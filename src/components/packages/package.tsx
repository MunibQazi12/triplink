import { Box, Typography , Card, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";


export type PackageType = {
    heading: string;
    description: string;
    packages: number,
    placeImage: HTMLImageElement,
    duration: string,
    type: string,
    price: number
}

interface IProps {
    packageData: PackageType
}

const Package = ({ packageData }: IProps) => {
    const { heading, description, placeImage, duration, type, price } = packageData || {};
    return (
            <Card className="Container__CardContainer__Card" >
                <CardMedia className="Container__CardContainer__Card__Image">
                <Image src={placeImage} alt="place 1" />
                </CardMedia>
                <CardContent className="Container__CardContainer__Card__Content">
                <Typography className="Container__CardContainer__Card__Content__Heading">{heading}</Typography>
                <Typography className="Container__CardContainer__Card__Content__Type">{type}</Typography>
                
                <Box className="SearchResultTypeDuration">                
                <Typography className="Type">{type}</Typography>
                <Typography className="duration">{duration}</Typography>
                <Typography className="freeCancellation">Free Cancellation</Typography>
                </Box>
                
                <Typography className="Container__CardContainer__Card__Content__Destination">{description}</Typography>
                <Typography className="Container__CardContainer__Card__Content__Duration">{duration}</Typography>
                <Typography className="fromText">from</Typography>
                <Typography className="Container__CardContainer__Card__Content__Price">{`${price}`}<span className="currency">€</span></Typography>
                </CardContent>
            </Card>
        
    );
}
export default Package;