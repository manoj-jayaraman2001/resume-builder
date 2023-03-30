import React from "react";
import "./Education.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const Education = (props) => {
  const style = { display: "flex", gap: "1.5em" };
  return (
    <div className="edu">
      <h1>Education</h1>
      <div>
        <TextField
          size="small"
          label="Type"
          id="type"
          variant="outlined"
          value={props.education.type}
          onChange={props.updateEducation}
        />
      </div>
      <div style={style}>
        <TextField
          size="small"
          label="University"
          id="university"
          variant="outlined"
          value={props.education.university}
          onChange={props.updateEducation}
        />
        <TextField
          size="small"
          label="Degree"
          id="degree"
          variant="outlined"
          value={props.education.degree}
          onChange={props.updateEducation}
        />
      </div>
      <div style={style}>
        <TextField
          size="small"
          label="Start Year"
          id="startYear"
          variant="outlined"
          value={props.education.startYear}
          onChange={props.updateEducation}
        />
        <TextField
          size="small"
          label="End Year"
          id="endYear"
          variant="outlined"
          value={props.education.endYear}
          onChange={props.updateEducation}
        />
      </div>
      <hr />
      <div style={{ ...style, marginLeft: "auto" }}>
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
          onClick={() => props.changeTab(4)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Education;
