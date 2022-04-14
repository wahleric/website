import '../css/Projects.css';
import Project from '../components/Project';
import ProjectCards from '../components/ProjectCards';
import { Routes, Route } from "react-router-dom";

function Projects() {
	return (
		<Routes>
			<Route path=":id" element={<Project />} />
			<Route path="*" element={<ProjectCards />} />
		</Routes>
	);
}

export default Projects;