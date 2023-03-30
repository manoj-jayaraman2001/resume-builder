import React from "react";
import "./templates.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Templates = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/updateDetials");
  }

  

  return (
    <div className="templates">
      <h1>Templates</h1>
      <p>Select a template to get started</p>
      <div>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ backgroundColor: "#f02d3a" }}
        >
          Use template
        </Button>
        
       
      </div>
    </div>
  );
};

export default Templates;
