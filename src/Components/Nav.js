import React from "react";
import links from "../Data/data.json";
import Link from "./Link";

class Nav extends React.Component {
	// TODO fetch first 11 posts to get the links to the page
	render() {
		// console.log(links);
		return (
			<nav className="Navigation" style={{ position: "fixed" }}>
				<ul>
					<li className="listItem">
						<img
							src="./img/white-origami-bird.png"
							alt="Origami logo"
						/>
					</li>
					{links.map((link) => {
						return <Link key={link} url={link} location={link} />;
					})}
				</ul>
			</nav>
		);
	}
}

export default Nav;
