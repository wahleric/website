import '../css/Projects.css';
import Card from '../components/Card';

function Projects() {
	let projects = require('../data/projects.json');

	return (
		<div className="projects">
			{projects.map((project, index) => {
				return <Card key="{index}" title={project.title} image={project.primaryImage} description={project.shortDescription} />
			})}
		</div>
	);
}

export default Projects;