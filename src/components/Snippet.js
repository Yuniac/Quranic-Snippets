/* global browser */
import React from "react";
import "../App.scss";

function Snippet({ ayah, QLanguage }) {
	const [currentSurahName, setCurrentSurahName] = React.useState("");

	async function getStoredName() {
		if (QLanguage.startsWith("ar")) {
			const { currentSurahNameAR } = await browser.storage.sync.get();
			setCurrentSurahName(currentSurahNameAR);
		} else {
			const { currentSurahNameEN } = await browser.storage.sync.get();
			setCurrentSurahName(currentSurahNameEN);
		}
	}
	React.useEffect(() => {
		getStoredName();
	});
	return (
		<div className="snippet-wrapper" style={{ padding: "0 5px" }}>
			<p className="current-ayah" style={{ direction: QLanguage.startsWith("ar") ? "rtl" : "ltr" }}>
				{ayah}
			</p>
			<p className="current-ayah-from-surah">{currentSurahName}</p>
		</div>
	);
}

export default Snippet;
