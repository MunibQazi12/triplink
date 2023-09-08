import { Fragment, useState } from "react";
import { Box, Button, IconButton, List, Typography } from "@mui/material";
import {
  RemoveCircleOutlineOutlined,
  AddCircleOutlineOutlined,
} from "@mui/icons-material";
import useClickOutside from "src/hooks/useClickOutside";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { ClassNames } from "@emotion/react";

interface ISubOption {
  label: string;
  count: number;
  addHandler: () => void;
  removeHandler: () => void;
}
const SubOption = ({ label, count, addHandler, removeHandler }: ISubOption) => {
  return (
    <Box className="Travelers__Options" sx={{}}>
      <Typography className="Travelers__Options__Label">{label}</Typography>
      <Box>
        <IconButton onClick={removeHandler}>
          <RemoveCircleOutlineOutlined />
        </IconButton>
        <span className="Travelers__Options__Count">{count}</span>
        <IconButton onClick={addHandler}>
          <AddCircleOutlineOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

const Travelers = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [rooms, setRooms] = useState<any>([
    {
      label: "ROOM 1",
      value: {
        roomId: 1,
        adults: 0,
        childrens: 0,
      },
    },
  ]);
  const ref = useClickOutside(() => setOpen(false), open);

  const addRoomHandler = () => {
    setRooms((preState: any) => [
      ...preState,
      {
        label: `ROOM ${rooms.length + 1}`,
        value: {
          roomId: rooms.length + 1,
          adults: 0,
          childrens: 0,
        },
      },
    ]);
  };

  const handler = (roomId: number, type: string, isAdd: boolean) => {
    const updatedRooms = rooms.map((room: any) => {
      const { value } = room || {};
      if (roomId === value.roomId) {
        const calculatedValue = isAdd ? value[type] + 1 : value[type] - 1;
        return {
          ...room,
          value: {
            ...value,
            ...{ [type]: calculatedValue },
          },
        };
      }
      return room;
    });
    setRooms(updatedRooms);
  };
  const adultsCount = rooms?.reduce((total: number, { value }: any) => {
    return total + value?.adults;
  }, 0);
  const childrenCount = rooms?.reduce((total: number, { value }: any) => {
    return total + value?.childrens;
  }, 0);
  const travelers = (() => {
    let travelers = "";
    if (adultsCount > 0 && childrenCount > 0) {
      travelers = `Adults ${adultsCount} Childrens ${childrenCount}`;
    } else if (adultsCount > 0 && childrenCount <= 0) {
      travelers = `Adults ${adultsCount}`;
    } else if (adultsCount <= 0 && childrenCount > 0) {
      travelers = `Childrens ${childrenCount}`;
    } else {
      travelers = "";
    }
    return travelers;
  })();

  return (
    <Fragment>
      <Box ref={ref} className="TravelersContainer">
        <Box
          className={`TravelInputField ${open ? "TravelrsFocused" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <Typography className={travelers ? "" : "Placeholder"}>
            {travelers ? travelers : "Add travelers"}
          </Typography>
          <Box className={"iconMargin"}>
            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Box>
        </Box>
        {open ? (
          <List className={`Travelers ${rooms.length > 2 ? "AddScroll" : ""}`}>
            {rooms.map((room: any, index: number) => {
              const {
                label,
                value: { adults, childrens, roomId },
              } = room || {};
              return (
                <Box key={index}>
                  <Box>
                    <Typography className="Travelers__RoomLabel">
                      {label}
                    </Typography>

                    <SubOption
                      label={"Adults"}
                      count={adults}
                      addHandler={() => handler(roomId, "adults", true)}
                      removeHandler={() => {
                        adults > 0 && handler(roomId, "adults", false);
                      }}
                    />

                    <SubOption
                      label={"Childrens"}
                      count={childrens}
                      addHandler={() => handler(roomId, "childrens", true)}
                      removeHandler={() => {
                        childrens > 0 && handler(roomId, "childrens", false);
                      }}
                    />
                  </Box>
                  {index === rooms?.length - 1 ? (
                    <Button
                      className="Travelers__AddBtn"
                      onClick={addRoomHandler}
                    >
                      Add another room
                    </Button>
                  ) : (
                    <></>
                  )}
                </Box>
              );
            })}
          </List>
        ) : null}
      </Box>
    </Fragment>
  );
};

export default Travelers;
