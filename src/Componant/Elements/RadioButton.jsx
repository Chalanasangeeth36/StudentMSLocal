import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState(""); // Set the default value to the first option

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <div>
        <div className="mb-8">
          <RadioGroup name="choice" value={value} onChange={handleChange}>
            <div className="flex flex-row gap-8">
              {props.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio color="primary" />}
                  label={option}
                  className="text-base text-blue-800 font-['poppins']"
                />
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </FormControl>
  );
}
