/* global browser */
import React from "react";
import "../../App.scss";

function LanguageSettings({ language, setLanguage }) {
	function changeLanguage(radio) {
		const lang = radio.target.value;
		setLanguage(lang);
	}
	React.useEffect(() => {
		if (language.length) {
			browser.storage.sync.set({ lang: language });
		}
	});
	return (
		<div>
			<div>
				<h4>
					<span style={{ display: language === "ar" ? "block" : "none", direction: language === "ar" ? "rtl" : "" }}>
						لغة الواجهة:
					</span>
					<span style={{ display: language === "ar" ? "none" : "block", direction: language === "ar" ? "" : "ltr" }}>
						Interface Language:
					</span>
				</h4>
			</div>
			<div className="change-lang-option" style={{ justifyContent: language === "ar" ? "flex-start" : "flex-end" }}>
				<div style={{ display: "flex", alignItems: "center", flexDirection: language === "ar" ? "row" : "row-reverse" }}>
					<label htmlFor="ar-radio">العربية</label>
					<input
						type="radio"
						value="ar"
						id="ar-radio"
						name="language-radio"
						onClick={changeLanguage}
						checked={language === "ar" ? true : false}
					/>
				</div>
				<div style={{ display: "flex", alignItems: "center", flexDirection: language === "ar" ? "row" : "row-reverse" }}>
					<label htmlFor="en-radio">English</label>
					<input
						type="radio"
						value="en"
						id="en-radio"
						name="language-radio"
						onClick={changeLanguage}
						checked={language === "ar" ? false : true}
					/>
				</div>
			</div>
		</div>
	);
}

export default LanguageSettings;
