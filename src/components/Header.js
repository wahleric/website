import '../css/Header.css';
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-links">
        <ul>
          <li className="header-link">
            <NavLink to="/">Home</NavLink>
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
