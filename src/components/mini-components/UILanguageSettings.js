/* global browser */
import React from "react";
import "../../App.scss";

function UILanguageSettings({ UILanguage, setUILanguage }) {
	function changeUILanguage(radio) {
		const lang = radio.target.value;
		setUILanguage(lang);
	}
	React.useEffect(() => {
		if (UILanguage.trim() !== "") {
			browser.storage.sync.set({ UILang: UILanguage });
		}
	}, [UILanguage]);
	return (
		<div>
			<div>
				<h4>
					<span style={{ display: UILanguage === "ar" ? "block" : "none", direction: UILanguage === "ar" ? "rtl" : "" }}>
						لغة الواجهة:
					</span>
					<span style={{ display: UILanguage === "ar" ? "none" : "block", direction: UILanguage === "ar" ? "" : "ltr" }}>
						Interface Language:
					</span>
				</h4>
			</div>
			<div className="change-lang-option" style={{ justifyContent: UILanguage === "ar" ? "flex-start" : "flex-end" }}>
				<div style={{ display: "flex", alignItems: "center", flexDirection: UILanguage === "ar" ? "row" : "row-reverse" }}>
					<label htmlFor="ar-ui-radio">العربية</label>
					<input
						type="radio"
						value="ar"
						id="ar-ui-radio"
						name="ui-language-radio"
						onClick={changeUILanguage}
						checked={UILanguage === "ar" ? true : false}
					/>
				</div>
				<div style={{ display: "flex", alignItems: "center", flexDirection: UILanguage === "ar" ? "row" : "row-reverse" }}>
					<label htmlFor="en-ui-radio">English</label>
					<input
						type="radio"
						value="en"
						id="en-ui-radio"
						name="ui-language-radio"
						onClick={changeUILanguage}
						checked={UILanguage === "ar" ? false : true}
					/>
				</div>
			</div>
		</div>
	);
}

export default UILanguageSettings;
