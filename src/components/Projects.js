import '../css/Projects.css';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

function Projects() {
	let projects = require('../data/projects.json');
	let navigate = useNavigate();

	return (
		<div className="projects">
			<div className="field intro">
				Below is a collection of my personal developer projects. Click on a project card to see additional details about the project, including the languages and libraries involved
			</div>
			<div className="field projectslist">
				{Object.keys(projects).map((projectId, index) => {
					let project = projects[projectId] || {};
					return <Card key={index} title={project.title} image={project.primaryImage} description={project.shortDescription} onClickCallback={() => {navigate(projectId);}}/>
				})}
			</div>
		</div>
	);
}

export default Projects;