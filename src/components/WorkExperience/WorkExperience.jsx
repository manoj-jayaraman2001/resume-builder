import React from "react";
import "./WorkExperience.css";
import { useState, useContext } from "react";
import { Button } from "@mui/material";
import { UserContext } from "../../App";
import { validateExp } from "../vadidationFunction";
import ExperienceComponent from "./ExperienceComponent";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
const WorkExperience = (props) => {
  const context = useContext(UserContext);
  const workExp = context.workExp;
  const [number, setNumber] = useState(workExp.length);
  const [warningDisplay, setWarning] = useState("none");
  const ExpArray = workExp.map((value, Index) => {
    return <ExperienceComponent key={Index} number={Index + 1} value={value} />;
  });

  function addExperience() {
    context.setExp((prevExp) => {
      return [
        ...prevExp,
        {
          id: prevExp.length + 1,
          jobTitle: "",
          companyName: "",
          start: "",
          end: "",
          Role: [""],
        },
      ];
    });
  }
  function handleNext() {
    if (validateExp(workExp)) {
      props.changeTab(3);
    } else {
      setWarning("flex");
      setTimeout(() => {
        setWarning("none");
      }, 2500);
    }
  }
  function removeExperience() {
    context.setExp((prevExp) => {
      let newExp = [...prevExp];
      newExp.pop();
      return newExp;
    });
  }

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
          }}
          disabled={workExp.length < 3 ? false : true}
        >
          Add New
        </Button>
        <Button
          disabled={workExp.length === 1 ? true : false}
          sx={{
            width: "fit-content",
            color: "#f02d3a",
            margin: "0 auto",
            borderColor: "#f02d3a",
          }}
          onClick={(event) => {
            removeExperience();
          }}
        >
          Remove
        </Button>
      </div>
      <hr />
      <div className="next-btn" style={{ marginLeft: "auto" }}>
        <div style={{ display: warningDisplay, gap: 4, alignItems: "center" }}>
          <WarningAmberIcon sx={{ color: "red" }} />
          <p style={{ color: "red" }}>All the fields are mandatory</p>
        </div>
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
          onClick={handleNext}
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
