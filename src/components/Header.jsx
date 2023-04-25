import React from "react";
import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileClicked, setMobileClicked] = useState(false);
  
  function handleClick() {
    setMobileClicked((value) => !value);
  }
  return (
    <div className="header">
      <h1>Resume Builder</h1>
      <div className={`Links ${mobileClicked ? "active" : ""}`}>
        <Link className= "link"   to="/"  >
          Resume Templates
        </Link>
        <Link className="link"  to="/myresumes">
          My Resumes
        </Link>
        <Link className="link" to="/aboutus">
          About Us
        </Link>
      </div>
      <div id="mobile">
        <i
          onClick={handleClick}
          id="icon"
          className={mobileClicked ? "fa-solid fa-close" : "fa-solid fa-bars"}
        ></i>
      </div>
    </div>
  );
};

export default Header;
