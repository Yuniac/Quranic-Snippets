import React from "react";
import "../App.scss";
function Header({ language }) {
	return (
		<div className="header">
			<h1>
				<span
					style={{
						display: language === "ar" ? "inline-block" : "none",
					}}
				>
					قُصَّاصَاتْ قُرآنيّةَ
				</span>
				<span
					style={{
						display: language === "ar" ? "none" : "inline-block",
					}}
				>
					Quranic Snippets
				</span>
			</h1>
		</div>
	);
}

export default Header;
