import '../css/Card.css';

function Card(props) {
	return (
		<div className="card">
			<p>This is a card</p>
			<p>This is the card's title: {props.title}</p>
			<p>This is the card's image: <img src={props.image} /></p>
			<p>This is the card's short description: {props.shortDescription}</p>
		</div>
	);
}

export default Card;