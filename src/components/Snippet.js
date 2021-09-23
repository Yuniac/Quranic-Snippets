/* global browser */
import React from "react";
import "../App.scss";

import CurrentAyahCallToActions from "./mini-components/CurrentAyahCallToActions";
import CurrentAyahDetails from "./hidden_by_default/CurrentAyahDetails";

function Snippet({ ayah, QLanguage, UILanguage, getRandomSnippet }) {
	const [currentSurahName, setCurrentSurahName] = React.useState("");
	const [currentAyahDetailsVisibility, setCurrentAyahDetailsVisibility] = React.useState(false);

	async function getStoredName() {
		if (UILanguage.startsWith("ar")) {
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
				currentAyahDetailsVisibility={currentAyahDetailsVisibility}
				setCurrentAyahDetailsVisibility={setCurrentAyahDetailsVisibility}
			/>
			<CurrentAyahDetails
				currentAyahDetailsVisibility={currentAyahDetailsVisibility}
				currentSurahName={currentSurahName}
				UILanguage={UILanguage}
				QLanguage={QLanguage}
				ayah={ayah}
			/>
		</div>
	);
}

export default Snippet;
