import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@mui/material";
import Divider from "src/components/shared/divider";
import { Fragment } from "react";

interface ILocationItemProps {
  label: string;
  value: {
    price: number;
    currency: string;
    place: string;
  };
}
const visitingPlaces = [
  {
    label: "Egypt: Cairo and Nile Cruise with 6 Visits",
    value: {
      place: "Egypt: Cairo and Nile Cruise with 6 Visits",
      price: 359,
      currency: "€",
    },
  },
  {
    label: "Egypt: Cairo and Nile Cruise with 8 Visits",
    value: {
      place: "Egypt: Cairo and Nile Cruise with 8 Visits",
      price: 359,
      currency: "€",
    },
  },
  {
    label: "Egypt: Cairo and Nile Cruise with 10 Visits",
    value: {
      place: "Egypt: Cairo and Nile Cruise with 10 Visits",
      price: 442,
      currency: "€",
    },
  },
  {
    label: "Egypt: Cairo and Nile Cruise with 12 Visits",
    value: {
      place: "Egypt: Cairo and Nile Cruise with 12 Visits",
      price: 568,
      currency: "€",
    },
  },
  {
    label: "Egypt: Cairo and Nile Cruise with 14 Visits",
    value: {
      place: "Egypt: Cairo and Nile Cruise with 14 Visits",
      price: 677,
      currency: "€",
    },
  },
  {
    label: "Egypt: Cairo and Nile Cruise with 16 Visits",
    value: {
      place: "Egypt: Cairo and Nile Cruise with 16 Visits",
      price: 722,
      currency: "€",
    },
  },
  {
    label: "Egypt: Cairo and Nile Cruise with 18 Visits",
    value: {
      place: "Egypt: Cairo and Nile Cruise with 18 Visits",
      price: 756,
      currency: "€",
    },
  },
  {
    label: "Egypt: Cairo and Nile Cruise with 20 Visits",
    value: {
      place: "Egypt: Cairo and Nile Cruise with 20 Visits",
      price: 802,
      currency: "€",
    },
  },
  {
    label: "Egypt: Cairo and Nile Cruise with 22 Visits",
    value: {
      place: "Egypt: Cairo and Nile Cruise with 22 Visits",
      price: 868,
      currency: "€",
    },
  },
  {
    label: "Egypt: Cairo and Nile Cruise with 6 Visits",
    value: {
      place: "Egypt: Cairo and Nile Cruise with 6 Visits",
      price: 954,
      currency: "€",
    },
  },
];

const LocationItem = ({
  label,
  value: { price, currency },
}: ILocationItemProps) => {
  return (
    <Box className="Location">
      <Typography className="Location__Label">{label}</Typography>
      <Typography>
        <span className="Location__Text">from</span>
        <span className="Location__Price">{price}</span>
        <span className="Location__Currency">{currency}</span>
      </Typography>
    </Box>
  );
};
const TravelLocation = () => {
  return (
    <Box className="SearchForm__Container__TravelLocation">
      <Autocomplete
        className="SearchForm__Container__TravelLocation__AutoComplete"
        options={visitingPlaces}
        PaperComponent={({ children }) => (
          <div className="TravelLocationDropdown">{children}</div>
        )}
        ListboxComponent={(props) => {
          const { children } = props;
          return (
            <Box {...props}>
              <Typography className="TravelLocationDropdown__Heading">
                TRAVEL PACKAGES
              </Typography>
              <LocationItem
                label="All travel packages to Egypt"
                value={visitingPlaces[0].value}
              />
              {children}
            </Box>
          );
        }}
        renderOption={(props: any, option: any) => {
          const { label, value } = option || {};
          return (
            <Box {...props}>
              <LocationItem label={label} value={value} />
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Where would you like to travel?"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </Box>
  );
};

export default TravelLocation;
