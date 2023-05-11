import React from "react";
import "./WorkExperience.css";
import {useContext } from "react";
import TextField from "@mui/material/TextField";
import { UserContext } from "../../App";
import Input from "@mui/material/Input";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function ExperienceComponent(props) {
  const context = useContext(UserContext);
  const workExp = context.workExp;
  const roles = props.value.Role;
  const styles = { display: "flex", gap: "1.5em" };
  const iconStyle = {
    fontSize: 30,
    cursor: roles.length === 4 ? "not-allowed" : "pointer",
  };

  function updateRole(event, Index){
    let value = event.target.value
    roles[Index] = value
    context.setExp((prevValue) => {
      let newExp = [...prevValue]
      return newExp
    })
  }

  const RolesArray = roles.map((value, Index) => {
    return (
      <div key={Index} style={{ display: "flex", gap: 5 }}>
        <p style={{ alignSelf: "flex-end", color: "gray" }}>{Index + 1}.</p>
        <Input 
        fullWidth
        value = {roles[Index]}
        onChange={(e) => updateRole(e, Index)}
        />
      </div>
    );
  });

  function updateExp(event) {
    let element = event.target;
    context.setExp((value) => {
      let expArr = [...value];
      expArr[props.number - 1][element.id] = element.value;
      return expArr;
    });
  }

  //  functions for adding and removing roles

  function addRole() {
    if (roles.length < 4) {
      roles.push("");
    }
    context.setExp((prevValue) => {
      let newExp = [...prevValue];
      return newExp;
    });
  }
  function removeRole() {
    if (roles.length > 1) roles.pop();
    context.setExp((prevValue) => {
      let newExp = [...prevValue];
      return newExp;
    });
  }
  return (
    <div className="exp-comp">
      <h4>{`Experience ${props.number}`}</h4>
      <hr />
      <div style={styles}>
        <TextField
          label="Job Title"
          variant="outlined"
          id="jobTitle"
          size="small"
          value={workExp[props.number - 1]["jobTitle"]}
          onChange={(e) => {
            updateExp(e);
          }}
        />
        <TextField
          label="Organization Name"
          variant="outlined"
          id="companyName"
          size="small"
          value={workExp[props.number - 1]["companyName"]}
          onChange={(e) => {
            updateExp(e);
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "1.5em" }}>
        <TextField
          label="Start Year"
          variant="outlined"
          id="start"
          size="small"
          value={workExp[props.number - 1]["start"]}
          onChange={(e) => {
            updateExp(e);
          }}
        />
        <TextField
          label="End Year"
          variant="outlined"
          id="end"
          size="small"
          value={workExp[props.number - 1]["end"]}
          onChange={(e) => {
            updateExp(e);
          }}
        />
      </div>
      <h4>Key Roles</h4>
      <div
        style={{
          display: "flex",
          border: "1px solid gray",
          borderRadius: "4px",
          padding: 10,
          flexDirection: "column",
        }}
      >
        {RolesArray}
        <div
          style={{
            display: "flex",
            gap: "3px",
            marginLeft: "auto",
            marginTop: 10,
          }}
        >
          <AddCircleIcon sx={iconStyle} onClick={addRole} />
          <RemoveCircleIcon
            sx={{
              ...iconStyle,
              cursor: roles.length === 1 ? "not-allowed" : "pointer",
            }}
            onClick={removeRole}
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
