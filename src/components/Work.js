import '../css/Work.css';
import Card from '../components/Card'

function Work() {


	//TODO: Create cards layout and pass projects into that, instead of looping through projects here

	let projects = require('../data/projects.json');
	console.log(projects);

	return (
		<div className="work">
			{projects.map((project, index) => {
				return <Card key="{index}" title={project.title} image={project.image} shortDescription={project.shortDescription}/>
			})}
		</div>
	);
}

export default Work;