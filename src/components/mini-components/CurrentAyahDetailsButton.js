import React from "react";

function CurrentAyahDetailsButton({ currentAyahDetailsVisibility, setCurrentAyahDetailsVisibility }) {
	const expandIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 24 24"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
			fill="#FFFFFF"
		>
			<g>
				<rect fill="none" height="24" width="24" />
			</g>
			<g>
				<g>
					<polygon points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41" />
					<polygon points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19" />
				</g>
			</g>
		</svg>
	);

	function handleClick() {
		setCurrentAyahDetailsVisibility((x) => !x);
	}
	return (
		<button
			onClick={handleClick}
			className={`cta-button current-ayah-details-toggle-button ${currentAyahDetailsVisibility ? "upward" : "downward"}`}
		>
			{expandIcon}
		</button>
	);
}

export default CurrentAyahDetailsButton;
