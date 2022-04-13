import '../css/Projects.css';
import Card from '../components/Card'

function Projects() {


	//TODO: Create cards layout and pass projects into that, instead of looping through projects here

	let projects = require('../data/projects.json');
	console.log(projects);

	return (
		<div className="projects">
			{projects.map((project, index) => {
				return <Card key="{index}" title={project.title} image={project.primaryImage} description={project.shortDescription}/>
			})}
		</div>
	);
}

export default Projects;