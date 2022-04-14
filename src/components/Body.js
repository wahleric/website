import '../css/Body.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Projects from './Projects';

function Body() {
  return (
    <div className="body">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Body;