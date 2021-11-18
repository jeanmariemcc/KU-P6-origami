import React from "react";
import links from "../Data/data.json";
import Posts from "./Posts";

class Main extends React.Component {
	render() {
		// console.log(links);
		return (
			<main className="Main">
				<h1>Origami Heading!!!</h1>
				<Posts />
			</main>
		);
	}
}

export default Main;
