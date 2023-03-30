import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Templates from "./components/templates/templates";
import MyResumes from "./components/MyResumes/MyResume";
import AboutUs from "./components/AboutUs/AboutUs";
import UpdateDetials from "./components/updateDetials/UpdateDetials";
import Preview from "./components/Preview/Preview";
function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Templates />} />
          <Route path="/myresumes" element={<MyResumes />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/updateDetials" element={<UpdateDetials />} />
          <Route path="/Preview" element={<Preview/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
