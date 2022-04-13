import '../css/Header.css';
import {Link, NavLink} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-links">
        <ul>
          <li className="header-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="header-link">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="header-link">
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
