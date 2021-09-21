/* global browser */
import React from "react";

function QuranLanguageSettings({ QLanguage, setQLanguage, UILanguage }) {
	function changeQLanguage(radio) {
		const lang = radio.target.value;
		setQLanguage(lang);
		// the argument true means fetch a new ayah in the second langauge regardless of what's stored in the storage;
		browser.storage.sync.set({ QLang: QLanguage }).then(() => getRandomSnippet(true));
	}

	React.useEffect(() => {
		if (QLanguage.length) {
			browser.storage.sync.set({ QLang: QLanguage });
		}
	}, [QLanguage]);
	return (
		<div>
			<div>
				<h4>
					<span style={{ display: UILanguage === "ar" ? "block" : "none", direction: UILanguage === "ar" ? "rtl" : "" }}>
						لغة القرآن:
					</span>
					<span style={{ display: UILanguage === "ar" ? "none" : "block", direction: UILanguage === "ar" ? "" : "ltr" }}>
						Quran Language:
					</span>
				</h4>
			</div>
			<div className="change-lang-option" style={{ justifyContent: UILanguage === "ar" ? "flex-start" : "flex-end" }}>
				<div style={{ display: "flex", alignItems: "center", flexDirection: UILanguage === "ar" ? "row" : "row-reverse" }}>
					<label htmlFor="ar-radio">العربية</label>
					<input
						type="radio"
						value="ar.asad"
						id="ar-radio"
						name="quran-language-radio"
						onClick={changeQLanguage}
						checked={QLanguage === "ar.asad" ? true : false}
					/>
				</div>
				<div style={{ display: "flex", alignItems: "center", flexDirection: UILanguage === "ar" ? "row" : "row-reverse" }}>
					<label htmlFor="en-radio">English</label>
					<input
						type="radio"
						value="en.asad"
						id="en-radio"
						name="quran-language-radio"
						onClick={changeQLanguage}
						checked={QLanguage === "en.asad" ? true : false}
					/>
				</div>
			</div>
		</div>
	);
}

export default QuranLanguageSettings;
