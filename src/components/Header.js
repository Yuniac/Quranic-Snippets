import React from "react";
import "../App.scss";
function Header({ UILanguage }) {
	return (
		<div className="header">
			<h1>
				<span
					style={{
						display: UILanguage === "ar" ? "inline-block" : "none",
					}}
				>
					قُصَّاصَاتْ قُرآنيّةَ
				</span>
				<span
					style={{
						display: UILanguage === "ar" ? "none" : "inline-block",
					}}
				>
					Quranic Snippets
				</span>
			</h1>
		</div>
	);
}

export default Header;
