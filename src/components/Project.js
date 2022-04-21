import '../css/Project.css';
import { useParams, Navigate } from 'react-router-dom';

function getImages(projectData) {
	let images = [];
	if (projectData.primaryImage) {
		images.push(projectData.primaryImage);
	}
	if (Array.isArray(projectData.secondaryImages)) {
		projectData.secondaryImages.forEach((image) => images.push(image));
	}

	return images;
}

function Project(props) {
	let { id } = useParams();
	let projects = require('../data/projects.json');
	let projectData = projects && projects[id];

	// If the user is trying to access a non-existent project, redirect them to the Projects page
	if (!projectData) {
		return (
			<Navigate replace to="/projects" />
		);
	}

	let images = getImages(projectData);
	return (
		<div className="project">
			<div className="field title">
				<div className="field-title">
					{projectData.title}
				</div>
			</div>

			<div className="field images">
				{images.map((image, index) => {
					return <img key={index} className="project-image" src={`${process.env.PUBLIC_URL}/${image}`} alt={projectData.title} />
				})}
			</div>

			<div className="field description">
				{projectData.longDescription}
			</div>

			<div className="field languages">
				<div className="field-title">
					Languages used
				</div>
				<ul>
					{projectData.languages.map((language, index) => {
						return <li key={index}>{language}</li>
					})}
				</ul>
			</div>

			<div className="field libraries">
				<div className="field-title">
					Libraries and frameworks used
				</div>
				<ul>
					{projectData.libraries.map((library, index) => {
						return <li key={index}>{library}</li>
					})}
				</ul>
			</div>

			<div className="field source">
				<a href={projectData.sourceUrl}>View source code</a>
			</div>
		</div>
	);
}

export default Project;