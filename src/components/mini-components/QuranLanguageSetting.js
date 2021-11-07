/* global chrome */
import React from "react";

function QuranLanguageSettings({ QLanguage, setQLanguage, UILanguage, getRandomSnippet }) {
	async function changeQLanguage(radio) {
		const lang = radio.target.value;
		// set the state with the new language the user chose
		setQLanguage(lang);
		// after receiving the newly set language by the user (after the re-render), store it in the storage
		chrome.storage.sync.set({ QLang: lang }, () => {
			chrome.storage.sync.get(["freq"], ({ freq }) => {
				getRandomSnippet(true, false, freq);
			});
		});
	}

	return (
		<div style={{ marginTop: "0.5rem" }}>
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
