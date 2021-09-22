/* global browser */
import React from "react";
import "../App.scss";

import CurrentAyahCallToActions from "./hidden_by_default/CurrentAyahCallToActions";

function Snippet({ ayah, QLanguage, UILanguage, getRandomSnippet }) {
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
		<div className="snippet-wrapper" style={{ padding: "0 0.4rem" }}>
			<p className="current-ayah" style={{ direction: QLanguage.startsWith("ar") ? "rtl" : "ltr" }}>
				{ayah}
			</p>
			<CurrentAyahCallToActions
				getRandomSnippet={getRandomSnippet}
				UILanguage={UILanguage}
				currentSurahName={currentSurahName}
				QLanguage={QLanguage}
			/>
		</div>
	);
}

export default Snippet;
