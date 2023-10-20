import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const TransitionOptions = ({ setTransitionOption }) => {
  const [value, setValue] = useState("none");

  const handleChange = (event) => {
    setValue(event.target.value);
    setTransitionOption(event.target.value);
  };

  return (
    <div>
      <RadioGroup
        row
        name="transition-effect"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="none" control={<Radio />} label="None" />
        <FormControlLabel value="success" control={<Radio />} label="Success" />
        <FormControlLabel value="failure" control={<Radio />} label="Failure" />
        <FormControlLabel value="timeout" control={<Radio />} label="Timeout" />
        <FormControlLabel
          value="no-internet"
          control={<Radio />}
          label="No Internet"
        />
      </RadioGroup>
    </div>
  );
};

export default TransitionOptions;
