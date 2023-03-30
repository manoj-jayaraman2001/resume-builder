import React from "react";
import "./keySkills.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import {useNavigate } from "react-router-dom";


const KeySkills = (props) => {

  const navigate = useNavigate() 

  function handleClick(){
    navigate('/Preview')
  }







  console.log(props.skillArr)
  const [number, setNumber] = useState(2);
  const [skillArray, setSkillArray] = useState([
    <TextField
      size="small"
      key={1}
      label={`Skill ${1}`}
      id = {`0`}
      value = {props.skillArr[0]}
      onChange={(e) => props.updateSkills(e, "onchange")}
    />,
    <TextField
      size="small"
      key={2}
      id = {"1"}
      label={`Skill ${2}`}
      value = {props.skillArr[1]}
      onChange={(e) => props.updateSkills(e , "onchange")}
    />,
  ]);

  function addNew() {
    setNumber((value) => value + 1);
    setSkillArray((prevValue) => {
      const newSkill = [
        ...prevValue,
        [
          <TextField
            size="small"
            key={number + 1}
            id={`${number}`}
            label={`Skill ${number + 1}`}
            onChange={(e) => props.updateSkills(e, "onchange")}
          />,
        ],
      ];
      return newSkill;
    });
  }
  function removeSkill() {
    const newArr = [...skillArray];
    newArr.pop();
    setSkillArray(newArr);
    setNumber((value) => value - 1);
  }

  return (
    <div className="skills">
      <h1>Key Skills</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5em" }}>
        {skillArray}
      </div>
      <div style={{ display: "flex", gap: "1.5em", margin: "0 auto" }}>
        <Button
          sx={{ width: "fit-content" }}
          onClick={(e) => {addNew(); props.updateSkills(e, "add")}}
          disabled={number > 15 ? true : false}
        >
          Add New
        </Button>
        <Button
         onClick={(e) => {removeSkill(); props.updateSkills(e, "remove")}}
          sx={{ width: "fit-content", color: "#f02d3a" }}
          disabled={number === 1 ? true : false}
        >
          Remove
        </Button>
      </div>
      <hr />
      <div style={{ display: "flex", gap: "1.5em", marginLeft: "auto" }}>
        <Button
          variant="outlined"
          sx={{ color: "#f02d3a", borderColor: "#f02d3a" }}
          onClick={() => props.changeTab(3)}
        >
          Go Back
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#f02d3a" }} onClick = {handleClick}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default KeySkills;
