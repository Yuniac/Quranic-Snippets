import React from "react";
import "../App.scss";

function Snippet({ ayah }) {
	return (
		<div className="snippet-wrapper" style={{ padding: "0 5px" }}>
			<p className="current-ayah">{ayah}</p>
		</div>
	);
}

export default Snippet;
