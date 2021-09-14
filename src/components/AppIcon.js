import React from "react";
import variables from "../style/_variables.scss";
function AppIcon() {
	console.log(variables);
	return (
		<h1 style={{ textAlign: "center", margin: "1rem 0 2rem", fontSize: "green", backgroundColor: "$secondary-bg" }}>القرأن الكريم!</h1>
	);
}

export default AppIcon;
