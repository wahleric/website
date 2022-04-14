import '../css/ProjectCards.css';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

function ProjectCards() {
	let projects = require('../data/projects.json');
	let navigate = useNavigate();

	return (
		<div className="projectcards">
			{Object.keys(projects).map((projectId, index) => {
				let project = projects[projectId] || {};
				return <Card key="{index}" id={projectId} title={project.title} image={project.primaryImage} description={project.shortDescription} onClickCallback={() => {navigate(projectId);}}/>
			})}
		</div>
	);
}

export default ProjectCards;