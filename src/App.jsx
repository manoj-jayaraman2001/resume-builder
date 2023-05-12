import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Templates from "./components/templates/templates";
import MyResumes from "./components/MyResumes/MyResume";
import AboutUs from "./components/AboutUs/AboutUs";
import UpdateDetials from "./components/updateDetials/UpdateDetials";
import Preview from "./components/Preview/Preview";
import { createContext } from "react";
import { PersonalData, Experience, Edu, skills } from "./data";
export const UserContext = createContext();
function App() {
  const [personaldata, setData] = useState(PersonalData);
  const [workExp, setExp] = useState(Experience);
  const [education, setEducation] = useState(Edu);
  const [skillArr, setSkills] = useState(skills);
  const value = {
    personaldata,
    workExp,
    education,
    skillArr,
    setData,
    setExp,
    setEducation,
    setSkills,
  };
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route index path="/" element={<Templates />} />
          <Route path="myresumes" element={<MyResumes />} />
          <Route path="aboutus" element={<AboutUs />} />
          {/* having a global context to all the forms */}
          <Route
            path="updateDetials"
            element={
              <UserContext.Provider value={{ ...value }}>
                <UpdateDetials />
              </UserContext.Provider>
            }
          />
          <Route path="preview" element={<Preview />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
