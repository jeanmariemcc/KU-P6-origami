import React from "react";
import posts from "../Data/posts.json";
import OnePost from "./OnePost";

class Posts extends React.Component {
	render() {
		// console.log(links);
		return (
			// <posts className="Posts">
			<div className="Posts">
				{posts.map((post) => {
					return <OnePost text={post.text} author={post.author} />;
				})}
			</div>
			// </posts>
		);
	}
}

export default Posts;
