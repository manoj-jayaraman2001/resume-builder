import React from "react";
import "./personalInfo.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useState, useContext } from "react";
import { UserContext } from "../../App";
import { validate } from "../vadidationFunction";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
const PersonalInfo = (props) => {
  const navigate = useNavigate();
  function goback() {
    navigate("/");
  }
  const context = useContext(UserContext);
  let perData = context.personaldata;
  const [warningDisplay, setWarning] = useState('none')
  const styles = { display: "flex", gap: "1.5em" };

  function changeAvatar(event) {
    const img = event.target.files[0];
    let url = URL.createObjectURL(img);
    context.setData((value) => {
      return { ...value, profilePic: url };
    });
  }

  function updatePersonalData(event) {
    let element = event.target;
    context.setData((value) => {
      return { ...value, [element.id]: element.value };
    });
  }

  function handleNext() {
    if(validate(perData)){
      props.changeTab(2)
    }else{
      setWarning('flex')
      setTimeout(() => {
        setWarning('none')
      }, 2500);
    }
    
  }

  return (
    <div className="personalInfo">
      <div className="profile-photo">
        <Avatar
          src={perData.profilePic}
          sx={{ width: "100px", height: "100px" }}
        />
        <input
          id="profilePic"
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          onChange={changeAvatar}
        />
        <label htmlFor="profilePic">Choose a profile picture</label>
      </div>
      <div style={styles}>
        <TextField
          value={perData.firstName}
          size="small"
          label="First Name"
          id="firstName"
          variant="outlined"
          onChange={(e) => updatePersonalData(e)}
        />
        <TextField
          value={perData.lastName}
          size="small"
          label="Last Name"
          id="lastName"
          variant="outlined"
          onChange={(e) => updatePersonalData(e)}
        />
      </div>
      <div style={styles}>
        <TextField
          value={perData.email}
          size="small"
          label="Email"
          id="email"
          variant="outlined"
          onChange={(e) => updatePersonalData(e)}
        />
        <TextField
          size="small"
          label="Mobile No"
          id="mobileNo"
          variant="outlined"
          value={perData.mobileNo}
          onChange={(e) => updatePersonalData(e)}
        />
      </div>
      <div>
        <TextField
          size="small"
          label="Address"
          id="address"
          variant="outlined"
          fullWidth
          value={perData.address}
          onChange={(e) => updatePersonalData(e)}
        />
      </div>
      <div style={styles}>
        <TextField
          size="small"
          label="City"
          id="city"
          variant="outlined"
          value={perData.city}
          onChange={(e) => updatePersonalData(e)}
        />
        <TextField
          size="small"
          label="State"
          id="state"
          variant="outlined"
          value={perData.state}
          onChange={(e) => updatePersonalData(e)}
        />
      </div>
      <div style={styles}>
        <TextField
          size="small"
          label="Postal Code"
          id="postalCode"
          variant="outlined"
          value={perData.postalCode}
          onChange={(e) => updatePersonalData(e)}
        />
        <TextField
          size="small"
          label="Professional Title"
          id="professionalTitle"
          variant="outlined"
          value={perData.professionalTitle}
          onChange={(e) => updatePersonalData(e)}
        />
      </div>
      <div>
        <TextField
          multiline
          rows={4}
          label="Summary"
          id="Objective"
          variant="outlined"
          fullWidth
          value={perData.Objective}
          onChange={(e) => updatePersonalData(e)}
        />
      </div>

      <div style={{ ...styles, marginLeft: "auto" }}>
        <div style={{ display: warningDisplay, gap: 4, alignItems: 'center' }}>
          <WarningAmberIcon sx={{ color: "red" }} />
          <p style={{ color: "red" }}>All the fields are mandatory</p>
        </div>
        <Button
          onClick={goback}
          sx={{ color: "#f02d3a", borderColor: "#f02d3a", fontWeight: "500" }}
          variant="outlined"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          sx={{ background: "#f02d3a" }}
          variant="contained"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
