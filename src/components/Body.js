import '../css/Body.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Project from './Project';
import Projects from './Projects';

function Body() {
  return (
    <div className="body">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Body;