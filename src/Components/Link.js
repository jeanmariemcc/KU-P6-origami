function Link(props) {
	// console.log(props);
	return (
		<li className="listItem">
			<a href="/#">{props.location}</a>
		</li>
	);
}
export default Link;
