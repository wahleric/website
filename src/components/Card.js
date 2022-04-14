import '../css/Card.css';

function cardClicked(callback, id) {
	if (callback instanceof Function) {
		callback(id);
	}
}

function Card(props) {
	return (
		<div className="card" onClick={() => {cardClicked(props.clickCallback, props.id)}}>
			<div className="card-image">
				<img src={props.image} />
			</div>
			<div className="card-title">
				{props.title}
			</div>
			<div className="card-description">
				{props.description}
			</div>
		</div>
	);
}

export default Card;