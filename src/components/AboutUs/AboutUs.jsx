import React from "react";
import "./AboutUs.css";
import RBlogo from "../../assets/rglogo3.png";
const AboutUs = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="content">
        <div>
          <p style={{marginBottom: 16}}>
            At our website, we believe that building a professional resume
            should be easy and accessible for everyone. That's why we have
            created a simple and intuitive online resume builder that allows
            users to choose from a variety of beautifully designed templates and
            customize them with their own information.
          </p>
          <p>
            Our platform is user-friendly, with straightforward forms and
            easy-to-follow instructions, so users can focus on crafting a
            compelling resume that highlights their skills and achievements.
            Whether you're a recent graduate, changing careers, or simply
            looking to update your existing resume, our website provides a
            hassle-free solution that delivers polished and professional
            results. With the ability to save and download your resume in a
            format of your choice, our platform is the ultimate tool for anyone
            looking to take their career to the next level.
          </p>
        </div>
        <img src={RBlogo} alt="Logo_resumeBuilder" />
      </div>
    </div>
  );
};

export default AboutUs;
