import React from "react";
import "./updateDetials.css";
import { useState } from "react";
import PersonalInfo from "../PersonalInfo/personalInfo";
import WorkExperience from "../WorkExperience/WorkExperience";
import Education from "../Education/Education";
import KeySkills from "../KeySkills/KeySkills";
function UpdateDetails() {
  const [personaldata, setData] = useState({
    profilePic: "/broken-image.jpg",
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    Objective: "",
  });
  const [workExp, setExp] = useState([
    {
      id: 1,
      jobTitle: "",
      companyName: "",
      start: "",
      end: "",
      Role: "",
    },
  ]);
  console.log(personaldata);
  const [education, setEducation] = useState({
    type: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  });

  const [skillArr, setSkills] = useState(["", ""]);
  function updateProfilePic(url) {
    setData((value) => ({ ...value, profilePic: url }));
  }
  function updatePersonalData(event) {
    let element = event.target;
    setData((value) => {
      return { ...value, [element.id]: element.value };
    });
  }

  function updateExp(event, action, number) {
    let element = event.target;
    if (action === "add") {
      setExp((value) => {
        return [
          ...value,
          {
            id: value.length + 1,
            jobTitle: "",
            companyName: "",
            start: "",
            end: "",
            Role: "",
          },
        ];
      });
    } else if (action === "onChange") {
      setExp((value) => {
        let expArr = [...value];
        expArr[number - 1][element.id] = element.value;
        return expArr;
      });
    } else if (action === "remove") {
      setExp((value) => {
        let expArr = [...value];
        expArr.pop();
        return expArr;
      });
    }
  }

  function updateEducation(event) {
    let element = event.target;
    setEducation((value) => {
      return { ...value, [element.id]: element.value };
    });
  }

  function updateSkills(event, action) {
    if (action === "onchange") {
      setSkills((value) => {
        console.log(event.target.id);
        const arr = [...value];
        arr[Number(event.target.id)] = event.target.value;
        return arr;
      });
    } else if (action === "add") {
      setSkills((value) => {
        const arr = [...value];
        arr.push("");
        return arr;
      });
    } else if (action === "remove") {
      setSkills((value) => {
        const arr = [...value];
        arr.pop();
        return arr;
      });
    }
  }

  const [state, setState] = useState(1);

  function changeTab(Index) {
    setState(Index);
  }

  const component = () => {
    if (state === 1)
      return (
        <PersonalInfo
          changeTab={changeTab}
          updatePersonalData={updatePersonalData}
          personaldata={personaldata}
          updateProfilePic={updateProfilePic}
        />
      );
    if (state === 2)
      return (
        <WorkExperience
          changeTab={changeTab}
          updateExp={updateExp}
          workExp={workExp}
        />
      );
    if (state === 3)
      return (
        <Education
          changeTab={changeTab}
          updateEducation={updateEducation}
          education={education}
        />
      );
    if (state === 4)
      return (
        <KeySkills
          changeTab={changeTab}
          updateSkills={updateSkills}
          skillArr={skillArr}
        />
      );
  };
  return (
    <div className="updateDetials">
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

      <div className="Forms">{component()}</div>
    </div>
  );
}

export default UpdateDetails;
