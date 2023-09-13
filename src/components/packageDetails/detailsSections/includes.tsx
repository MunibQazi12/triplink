import { Box, List, ListItem, Typography , Button} from "@mui/material";
import Image from "next/image";
import { Fragment, useState } from "react";
import { INCLUDES, NOT_INCLUDES } from "..";
import CheckIcon from "src/assets/images/packageDatial/check.svg";
import CrossIcon from "src/assets/images/packageDatial/CrossIcon.svg";

interface ListItemProps {
    items: string[];
    icon: any
}
const ListItems = ({
    items,
    icon
}: ListItemProps) => {

    return (
        <List className="Included__list">
            {items.map((item: string, index: number) => (
                <ListItem key={index} className="listItem">
                    <Image src={icon} alt="CheckIcon" />
                    <Typography className="text">{item}</Typography>
                </ListItem>
            ))}
        </List>
    )
}


const Includes = () => {

    const [seeMoreInfo , setSeeMoreInfo] = useState(false)

    return (
        <Fragment>
            <Typography className="title">What’s included?</Typography>
            <Box className="whatsInclude">
                <Box className="Included">
                    <ListItems items={INCLUDES} icon={CheckIcon} />
                    {seeMoreInfo && <ListItems items={INCLUDES} icon={CheckIcon} />}
                </Box>
                <Box className="NotIncluded">
                    <ListItems items={NOT_INCLUDES} icon={CrossIcon} />
                </Box>
            </Box>
            <Button onClick={() => setSeeMoreInfo(true)} className="seeMoreBtn">See More</Button>
          

        </Fragment>
    );
}

export default Includes;