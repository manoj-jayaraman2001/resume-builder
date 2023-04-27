import React from "react";
import "./templates.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Images from "./images";

const TemplatePreview =(props)=>{
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  function handleClick(event) {
    navigate("/updateDetials");
    sessionStorage.setItem('selectedTemplate', `${props.Index + 1}`)
  }


  return (
    <div
      className="previewComponent"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={(e) => handleClick(e)}
      id = {props.Index + 1}
    >
      <div
        style={{
          background: hover ? 'rgba(0,0,0,0.5)' : 'none',
          width: "100%",
          height: "100%",
          position: 'absolute'
        }}
      >
        <Button
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "6px",
            fontSize: 12,
            display: hover ? "inline" : "none",
          }}
          variant="contained"
        >
          Use Template
        </Button>
      </div>
      <img
        className="templateImage"
        src={props.url}
        alt={`Template ${props.Index + 1}`}
        // style={{transform: hover ? 'scale(1.15)' : 'scale(1)'}}
      />
    </div>
  )
}


const Templates = (props) => {
 
  const imgArray = Images()
  const templates = imgArray.map((url, Index)=> {
    return (<TemplatePreview key={Index} Index = {Index} url = {url.path} setTemplate = {props.setTemplate}/>)
  })

  
  return (
    <div className="templates">
      <h1>Templates</h1>
      <p>Select a template to get started</p>
      <div>
        <div className="resumeTemplates">{templates}</div>
      </div>
    </div>
  );
};

export default Templates;
