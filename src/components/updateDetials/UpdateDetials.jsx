import React from "react";
import "./updateDetials.css";
import { useState, useContext, useEffect } from "react";
import PersonalInfo from "../PersonalInfo/personalInfo";
import WorkExperience from "../WorkExperience/WorkExperience";
import Education from "../Education/Education";
import KeySkills from "../KeySkills/KeySkills";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { WarningAmberOutlined } from "@mui/icons-material";
function UpdateDetails() {
  const [state, setState] = useState(1);
  const [warnDisplay, setWarn] = useState("none");


  const navigate = useNavigate();
  function goBack() {
    navigate("/");
  }

  
  function changeTab(Index) {
    setState(Index);
  }


//  conditionally rendering forms based on state
  const component = () => {
    if (state === 1) return <PersonalInfo changeTab={changeTab} warn={warn} />;
    if (state === 2)
      return <WorkExperience changeTab={changeTab} warn={warn} />;
    if (state === 3) return <Education changeTab={changeTab} warn={warn} />;
    if (state === 4) return <KeySkills changeTab={changeTab} warn={warn} />;
  };
  function warn() {
    setWarn("flex");
    setTimeout(() => {
      setWarn("none");
    }, 2500);
  }
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      // cleanup
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  function alertUser(e) {
    e.preventDefault();
    e.returnValue = "";
  }

  return (
    <div className="updateDetials">
      <div>
        <div className="tabs">
          <div
            onClick={() => changeTab(1)}
            className={`tab ${state === 1 ? "activeTab" : ""}`}
          >
            <p>Personal Info</p>
          </div>
          <div
            onClick={() => changeTab(2)}
            className={`tab ${state === 2 ? "activeTab" : ""}`}
          >
            <p>Work Experience</p>
          </div>
          <div
            onClick={() => changeTab(3)}
            className={`tab ${state === 3 ? "activeTab" : ""}`}
          >
            <p>Education</p>
          </div>
          <div
            onClick={() => changeTab(4)}
            className={`tab ${state === 4 ? "activeTab" : ""}`}
          >
            <p>Key Skills</p>
          </div>
        </div>
        <div style={{ display: warnDisplay, gap: 5, alignItems: "center", marginTop: 10 }}>
          <WarningAmberOutlined sx={{ color: "red" }} />
          <p style={{ color: "red" }}>All Fields are Mandatory</p>
        </div>
      </div>

      <div className="Forms">{component()}</div>
    </div>
  );
}

export default UpdateDetails;
