import '../css/Card.css';

function Card(props) {
	return (
		<div className="card" onClick={props.onClickCallback}>
			<div className="card-field image">
				<img src={`${process.env.PUBLIC_URL}/${props.image}`} alt={props.title} />
			</div>
			<div className="card-field title">
				{props.title}
			</div>
			<div className="card-field description">
				{props.description}
			</div>
		</div>
	);
}

export default Card;