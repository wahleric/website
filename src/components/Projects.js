import '../css/Projects.css';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

import CardCarousel from './CardCarousel';


function Projects() {
	let projects = require('../data/projects.json');
	let navigate = useNavigate();

	return (
		<div className="temp">
			<CardCarousel items={projects} />
		</div>







	);
{/*
			<div className="projects">
			<div className="projectslist">
				{Object.keys(projects).map((projectId, index) => {
					let project = projects[projectId] || {};
					return <Card key={index} title={project.title} image={project.primaryImage} description={project.shortDescription} onClickCallback={() => {navigate(projectId);}}/>
				})}
			</div>
		</div>*/}
}

export default Projects;