import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Typography } from "@mui/material";

const durations = [
  {
    label: "Up to 7 days",
    value: "7",
  },
  {
    label: "8 -14 days",
    value: "8-14",
  },
  {
    label: "More than 14 days",
    value: "15",
  },
];

const Duration = () => {
  return (
    <Autocomplete
      
      className="DurationContainer"
      options={durations}
      PaperComponent={({ children }) => (
        <div className="DurationContainerDropdown">{children}</div>
      )}
      renderOption={(props: any, option: any) => {
        const { label } = option || {};
        return (
          <Box {...props}>
            <Typography>{label}</Typography>
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="How long?"
          inputProps={{
            ...params.inputProps,
            readOnly: true,
          }}
        />
      )}
    />
  );
};

export default Duration;
