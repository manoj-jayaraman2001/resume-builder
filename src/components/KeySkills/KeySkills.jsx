import React from "react";
import "./keySkills.css";
import { useContext } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { validate, validateExp} from "../vadidationFunction";

const KeySkills = (props) => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const skills = context.skillArr;
  const skillArray = skills.map((value, Index) => {
    return (
      <TextField
        size="small"
        key={Index}
        value={value}
        placeholder={`Skill ${Index + 1}`}
        onChange={(e) => {
          updateSkills(e, Index);
        }}
      />
    );
  });

  function setSessionData(){
    // on clicking next saving resume data on session storage.
    sessionStorage.setItem('personaldata',JSON.stringify(context.personaldata))
    sessionStorage.setItem('workExp',JSON.stringify(context.workExp))
    sessionStorage.setItem('education',JSON.stringify(context.education))
    sessionStorage.setItem('keySkills',JSON.stringify(context.skillArr))
  }

  function handleClick() {
    
    if(!validate(context.personaldata)){
      props.changeTab(1)
      props.warn()
    }else if(!validateExp(context.workExp)){
      props.changeTab(2)
      props.warn()
    }else if(!validate(context.education)){
      props.changeTab(3)
      props.warn()
    }else if(!validate(context.skillArr)){
      props.warn()
    }else{
      setSessionData()
      navigate("/preview");
    }
   
    

  }

  function addNew() {
    context.setSkills((prevValue) => {
        return [...prevValue, ""]
    })
  }
  function removeSkill() {
    context.setSkills((prevValue) => {
      let newSkills =  [...prevValue]
      newSkills.pop()
      return newSkills
  })
  }
  function updateSkills(event, Index) {
    context.setSkills((prevValue) => {
      let newSkills = [...prevValue]
      newSkills[Index] = event.target.value
      return newSkills
    })
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
          onClick={(e) => {
            addNew();
          }}
          disabled={skills.length > 12 ? true : false}
        >
          Add New
        </Button>
        <Button
          onClick={(e) => {
            removeSkill();
          }}
          sx={{ width: "fit-content", color: "#f02d3a" }}
          disabled={skills.length === 1 ? true : false}
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
        <Button
          variant="contained"
          sx={{ backgroundColor: "#f02d3a" }}
          onClick={handleClick}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default KeySkills;
