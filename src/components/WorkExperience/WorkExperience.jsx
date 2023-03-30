import React from "react";
import "./WorkExperience.css";
import { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

function ExperienceComponent(props) {
  const styles = { display: "flex", gap: "1.5em" };
  return (
    <div className="exp-comp">
      <h4>{`Experience ${props.number}`}</h4>
      <hr />
      <div style={styles}>
        <TextField
          name={`${props.number}`}
          label="Job Title"
          variant="outlined"
          id="jobTitle"
          onChange={(e) => {
            props.updateExp(e, "onChange", props.number);
          }}
        />
        <TextField
          name={`${props.number}`}
          label="Organization Name"
          variant="outlined"
          id="companyName"
          onChange={(e) => {
            props.updateExp(e, "onChange", props.number);
          }}
          
        />
      </div>
      <div style={{ display: "flex", gap: "1.5em" }}>
      <TextField
          name={`${props.number}`}
          label="Start Year"
          variant="outlined"
          id="start"
          onChange={(e) => {
            props.updateExp(e, "onChange", props.number);
          }}
      
        />
        <TextField
          name={`${props.number}`}
          label="End Year"
          variant="outlined"
          id="end"
          onChange={(e) => {
            props.updateExp(e, "onChange", props.number);
          }}
         
        />
        
      </div>
      <div>
        <TextField
          name={`${props.number}`}
          label="Key Responsibilities"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          id="Role"
          onChange={(e) => {
            props.updateExp(e, "onChange", props.number);
          }}
          
        />
      </div>
    </div>
  );
}

const WorkExperience = (props) => {
  const [number, setNumber] = useState(1);
  const jobTitle = props.workExp[number - 1].jobTitle
  const [ExpArray, setExpArray] = useState([
    <ExperienceComponent
      key={number}
      number={number}
      updateExp={props.updateExp}
      workExp = {props.workExp}
      jobTitle = {jobTitle}
    />,
  ]);
  function addExperience() {
    setExpArray((preValue) => [
      ...preValue,
      <ExperienceComponent
        key={number + 1}
        number={number + 1}
        updateExp={props.updateExp}
        workExp = {props.workExp}
        jobTitle = {jobTitle}
      />,
    ]);
    setNumber((value) => value + 1);
  }
  function removeExperience() {
    setExpArray((preValue) => {
      const temp = [...preValue];
      temp.pop();
      return temp;
    });
    setNumber((value) => value - 1);
  }


  console.log(props.workExp)
  return (
    <div className="work-exp">
      <h1>Work Experience</h1>
      {ExpArray}
      <div className="btns">
        <Button
          sx={{
            width: "fit-content",

            margin: "0 auto",
          }}
          onClick={(event) => {
            addExperience();
            props.updateExp(event, "add");
          }}
          disabled={number < 3 ? false : true}
        >
          Add New
        </Button>
        <Button
          disabled={number === 1 ? true : false}
          sx={{
            width: "fit-content",
            color: "#f02d3a",
            margin: "0 auto",
            borderColor: "#f02d3a",
          }}
          onClick={(event) => {
            removeExperience();
            props.updateExp(event, "remove");
          }}
        >
          Remove
        </Button>
      </div>
      <hr />
      <div className="next-btn" style={{ marginLeft: "auto" }}>
        <Button
          variant="outlined"
          onClick={() => props.changeTab(1)}
          sx={{
            color: "#f02d3a",
            borderColor: "#f02d3a",
            width: "fit-content",
          }}
        >
          Go Back
        </Button>
        <Button
          onClick={() => props.changeTab(3)}
          variant="contained"
          sx={{ backgroundColor: "#f02d3a", width: "fit-content" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default WorkExperience;
