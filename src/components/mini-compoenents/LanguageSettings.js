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
		<div className="change-lang-option">
			<label htmlFor="ar-radio">العربية</label>
			<input
				type="radio"
				value="ar"
				id="ar-radio"
				name="language-radio"
				onClick={changeLanguage}
				checked={language === "ar" ? true : false}
			/>
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
	);
}

export default LanguageSettings;
