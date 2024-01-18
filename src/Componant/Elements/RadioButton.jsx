import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState(""); // Set the default value to the first option

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <div>
        <Typography
          variant="h6"
          gutterBottom
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {props.label}
        </Typography>
        <div className="mb-8">
          <RadioGroup name="choice" value={value} onChange={handleChange}>
            <div className="flex flex-row gap-8">
              {props.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio color="primary" />}
                  label={option}
                  className="text-blue-800 " // Updated font styles using Tailwind CSS classes
                />
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </FormControl>
  );
}
