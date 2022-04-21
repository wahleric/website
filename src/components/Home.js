import '../css/Home.css';
import {Link} from "react-router-dom";

function Home() {
	return (
		<div className="home">
			 <Link to="/about">About</Link>
			 <Link to="/projects">Projects</Link>
		</div>
	);
}

export default Home;