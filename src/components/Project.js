import '../css/Project.css';

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
	let projectData = props.projectData;
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
					return <img key={index} className="project-image" src={image}/>
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