import React from "react";

import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

const ProtoBufferForm: React.FC = () => {
  return (
    <FormControl>
      <FormControl>
        <TextField id="" label="Device Name" variant="outlined" />
        <TextField id="" label="Timeout" variant="outlined" />
      </FormControl>
      <FormControl>
        <RadioGroup defaultValue="audible" name="">
          <FormControlLabel
            value="audible"
            control={<Radio />}
            label="Audible"
          />
          <FormControlLabel
            value="visible"
            control={<Radio />}
            label="Visible"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Button variant="contained">Outlined</Button>
        <Button variant="outlined" component="span">
          Upload File
        </Button>
      </FormControl>
    </FormControl>
  );
};

export default ProtoBufferForm;
