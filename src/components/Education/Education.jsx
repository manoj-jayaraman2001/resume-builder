import React, { useContext, useState } from "react";
import "./Education.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { UserContext } from "../../App";
import { validate } from "../vadidationFunction";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";


const Education = (props) => {
  const context = useContext(UserContext);
  const education = context.education;
  const  [warningDisplay, setWarning] = useState('none')
  const style = { display: "flex", gap: "1.5em" };
  function updateEducation(event) {
    let element = event.target;

    context.setEducation((prevValue) => {
      return { ...prevValue, [element.id]: element.value };
    });
  }
  function handleNext() {
    // using validation function to make sure form fields are not empty
    if (validate(education)) {
      props.changeTab(4);
    } else {
      setWarning('flex')
      setTimeout(()=>{
        setWarning('none')
      }, 2500)
    }
  }
  return (
    <div className="edu">
      <h1>Education</h1>
      <div>
        <TextField
          size="small"
          label="Type"
          id="type"
          variant="outlined"
          value={education.type}
          onChange={(e) => {
            updateEducation(e);
          }}
        />
      </div>
      <div style={style}>
        <TextField
          size="small"
          label="University"
          id="university"
          variant="outlined"
          value={education.university}
          onChange={(e) => {
            updateEducation(e);
          }}
        />
        <TextField
          size="small"
          label="Degree"
          id="degree"
          variant="outlined"
          value={education.degree}
          onChange={(e) => {
            updateEducation(e);
          }}
        />
      </div>
      <div style={style}>
        <TextField
          size="small"
          label="Start Year"
          id="startYear"
          variant="outlined"
          value={education.startYear}
          onChange={(e) => {
            updateEducation(e);
          }}
        />
        <TextField
          size="small"
          label="End Year"
          id="endYear"
          variant="outlined"
          value={education.endYear}
          onChange={(e) => {
            updateEducation(e);
          }}
        />
      </div>
      <hr />
      <div style={{ ...style, marginLeft: "auto" }}>
        <div style={{ display: warningDisplay, gap: 4, alignItems: "center" }}>
          <WarningAmberIcon sx={{ color: "red" }} />
          <p style={{ color: "red" }}>All the fields are mandatory</p>
        </div>
        <Button
          sx={{ color: "#f02d3a", borderColor: "#f02d3a" }}
          variant="outlined"
          onClick={() => props.changeTab(2)}
        >
          Go Back
        </Button>
        <Button
          sx={{ backgroundColor: "#f02d3a" }}
          variant="contained"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Education;
