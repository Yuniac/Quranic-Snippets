/* global browser */
import React from "react";
function FrequencyOfNewAyahs({ UILanguage, newSnippetFrequency, setNewSnippetFrequency }) {
	function handleChange(event) {
		const value = event.target.value;
		browser.storage.sync.set({ freq: value });
		setNewSnippetFrequency(value);
	}
	return (
		<div className="freq-wrapper">
			<div
				style={{
					display: "flex",
					direction: UILanguage === "ar" ? "rtl" : "ltr",
					flexDirection: "row",
					justifyContent: "flex-start",
				}}
			>
				<span>{UILanguage === "ar" ? "أية جديدة كل: " : "New Ayah Each: "}</span>
				<select onChange={handleChange}>
					<option value={newSnippetFrequency}>
						{UILanguage === "ar" ? "حالياً: " : "Currently: "}
						{newSnippetFrequency / 1000 / 60 / 60}
						&nbsp;
						{UILanguage === "en" ? "hour" : "ساعة"}
					</option>
					<option value="1800000">{UILanguage === "en" ? "1/2h" : "نصف ساعة"}</option>
					<option value="3600000">{UILanguage === "en" ? "1h" : "١ ساعة"}</option>
					<option value="7200000">{UILanguage === "en" ? "2h" : "٢ ساعة"}</option>
					<option value="14400000">{UILanguage === "en" ? "4h" : "٤ ساعة"}</option>
					<option value="21600000">{UILanguage === "en" ? "6h" : "٦ ساعة"}</option>
					<option value="43200000">{UILanguage === "en" ? "12h" : "١٢ ساعة"}</option>
					<option value="86400000">{UILanguage === "en" ? "24h" : "٢٤ ساعة"}</option>
				</select>
			</div>
		</div>
	);
}

export default FrequencyOfNewAyahs;
