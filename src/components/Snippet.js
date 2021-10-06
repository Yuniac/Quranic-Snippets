/* global browser */
import React from "react";
import "../App.scss";

import CurrentAyahCallToActions from "./mini-components/CurrentAyahCallToActions";
import CurrentAyahDetails from "./hidden_by_default/CurrentAyahDetails";

function Snippet({ ayah, QLanguage, UILanguage, getRandomSnippet, bookmarks, setBookmarks }) {
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

	const loadingAnimation = <div className="loading-animation"></div>;

	React.useEffect(() => {
		getStoredName();
	});
	return (
		<div className="snippet-wrapper" style={{ padding: "0 0.4rem" }}>
			<p className="current-ayah" style={{ direction: QLanguage.startsWith("ar") ? "rtl" : "ltr" }}>
				{ayah ? ayah : loadingAnimation}
			</p>
			<CurrentAyahCallToActions
				getRandomSnippet={getRandomSnippet}
				UILanguage={UILanguage}
				currentSurahName={currentSurahName}
				currentAyahDetailsVisibility={currentAyahDetailsVisibility}
				setCurrentAyahDetailsVisibility={setCurrentAyahDetailsVisibility}
				ayah={ayah}
				bookmarks={bookmarks}
				setBookmarks={setBookmarks}
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
