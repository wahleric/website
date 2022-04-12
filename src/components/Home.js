import '../css/Home.css';
import {Link, NavLink} from "react-router-dom";

function Home() {
	return (
		<div className="home">
			 <Link to="/about">About</Link>
			 <Link to="/work">Work</Link>
		</div>
	);
}

export default Home;