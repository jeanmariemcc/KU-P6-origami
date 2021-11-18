import React from "react";
import links from "../Data/data.json";
import Link from "./Link";

class Aside extends React.Component {
	render() {
		// console.log(links);
		return (
			<aside className="Aside">
				<ul>
					{links.map((link) => {
						return <Link key={link} url={link} location={link} />;
					})}
				</ul>
			</aside>
		);
	}
}

export default Aside;
