import React from "react";
import "./personalInfo.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
const PersonalInfo = (props) => {
  const navigate = useNavigate();

  function goback() {
    navigate("/");
  }

  const styles = { display: "flex", gap: "1.5em" };

  function changeAvatar(event) {
    const img = event.target.files[0]
    let url = URL.createObjectURL(img)
    props.updateProfilePic(url)
  }
  return (
    <div className="personalInfo">
      <div className="profile-photo">
        <Avatar src={props.personaldata.profilePic} sx={{ width: "100px", height: "100px" }} />
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
          onChange={(e) => {
            props.updatePersonalData(e);
          }}
          size="small"
          label="First Name"
          id="firstName"
          variant="outlined"
          value={props.personaldata.firstName}
        />
        <TextField
          onChange={(e) => {
            props.updatePersonalData(e);
          }}
          size="small"
          label="Last Name"
          id="lastName"
          variant="outlined"
          value={props.personaldata.lastName}
        />
      </div>
      <div style={styles}>
        <TextField
          onChange={(e) => {
            props.updatePersonalData(e);
          }}
          size="small"
          label="Email"
          id="email"
          variant="outlined"
          value={props.personaldata.email}
        />
        <TextField
          onChange={(e) => {
            props.updatePersonalData(e);
          }}
          size="small"
          label="Mobile No"
          id="mobileNo"
          variant="outlined"
          value={props.personaldata.mobileNo}
        />
      </div>
      <div>
        <TextField
          onChange={(e) => {
            props.updatePersonalData(e);
          }}
          size="small"
          label="Address"
          id="address"
          variant="outlined"
          fullWidth
          value={props.personaldata.address}
        />
      </div>
      <div style={styles}>
        <TextField
          onChange={(e) => {
            props.updatePersonalData(e);
          }}
          size="small"
          label="City"
          id="city"
          variant="outlined"
          value={props.personaldata.city}
        />
        <TextField
          onChange={(e) => {
            props.updatePersonalData(e);
          }}
          size="small"
          label="State"
          id="state"
          variant="outlined"
          value={props.personaldata.state}
        />
      </div>
      <div>
        <TextField
          onChange={(e) => {
            props.updatePersonalData(e);
          }}
          size="small"
          label="Postal Code"
          id="postalCode"
          variant="outlined"
          value={props.personaldata.postalCode}
        />
      </div>
      <div>
        <TextField
          onChange={(e) => {
            props.updatePersonalData(e);
          }}
          multiline
          rows={4}
          label="Objective"
          id="Objective"
          variant="outlined"
          fullWidth
          value={props.personaldata.Objective}
        />
      </div>
      <div style={{ ...styles, marginLeft: "auto" }}>
        <Button
          onClick={goback}
          sx={{ color: "#f02d3a", borderColor: "#f02d3a", fontWeight: "500" }}
          variant="outlined"
        >
          Back
        </Button>
        <Button
          onClick={() => props.changeTab(2)}
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
