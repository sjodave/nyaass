import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Project from "./Components/Projects/Project";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import FoundingStory from "./Components/AboutUS/FoundingStory";
import AboutUs from "./Components/AboutUS/AboutUs";
import EducationModal from "./Components/AboutUS/EducationModal";
import Events from "./Components/Events/Events";
import Funding from "./Components/Funding/Funding";
import JoinMoment from "./Components/JoinMOment/JoinMoment";
import IDP from "./Components/Projects/IDP";

function App() {
  return (
    <div id="App">
      <NavigationBar id="navbar"></NavigationBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/founding-story" element={<FoundingStory />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/education-model" element={<EducationModal />}></Route>
        <Route path="/Projects" element={<Project />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Funding" element={<Funding />}></Route>
        <Route path="/Join-the-moment" element={<JoinMoment />}></Route>
        <Route path="/Projects/IDP" element={<IDP />}></Route>
      </Routes>
    </div>
  );
}

export default App;
