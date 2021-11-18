function OnePost(props) {
	// console.log(props);
	return (
		<div className="Post">
			<img src="..\..\img\blue-origami-bird.png" alt="blue origami"></img>
			<p className="description">{props.text}</p>
			<div>
				<span>
					<small>Author: </small> {props.author}
				</span>
			</div>
		</div>
	);
}
export default OnePost;
