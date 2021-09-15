import React from "react";
import "../App.scss";

function Snippet({ ayah }) {
	return (
		<div className="snippet-wrapper">
			<p className="current-ayah">{ayah}</p>
		</div>
	);
}

export default Snippet;
