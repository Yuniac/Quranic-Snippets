import React from "react";

function Footer({ setSettingsVisibility, setFeedbackVisibility }) {
	function openSettings() {
		setSettingsVisibility(true);
	}
	function openFeedback() {
		setFeedbackVisibility(true);
	}
	return (
		<footer>
			<ul>
				<li onClick={openSettings}>الإعدادات</li>
				<li onClick={openFeedback}>تواصل معنا</li>
			</ul>
		</footer>
	);
}

export default Footer;
