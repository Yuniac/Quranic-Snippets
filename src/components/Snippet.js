/* global browser */
import React from "react";
import "../App.scss";

import CurrentAyahCallToActions from "./mini-components/CurrentAyahCallToActions";
import CurrentAyahDetails from "./hidden_by_default/CurrentAyahDetails";
import CurrentSurahNameComp from "./mini-components/CurrentSurahName";

function Snippet({
	ayah,
	QLanguage,
	UILanguage,
	getRandomSnippet,
	bookmarks,
	setBookmarks,
	isIconFilled,
	setIsIconFilled,
	setFooterVisibility,
}) {
	const [currentSurahName, setCurrentSurahName] = React.useState("");
	const [currentAyahDetailsVisibility, setCurrentAyahDetailsVisibility] = React.useState(false);

	const loadingAnimation = <span className="loading-animation"></span>;
	// this variable determines whether we align the ayah in the middle or align it at the start, because long ayahs and short ayahs behave differently
	const alignThreshold = 30;
	React.useEffect(() => {
		async function getStoredName() {
			if (UILanguage.startsWith("ar")) {
				const { currentSurahNameAR } = await browser.storage.sync.get();
				setCurrentSurahName(currentSurahNameAR);
			} else {
				const { currentSurahNameEN } = await browser.storage.sync.get();
				setCurrentSurahName(currentSurahNameEN);
			}
		}
		getStoredName();
	}, [ayah, UILanguage]);
	return (
		<div className="snippet-wrapper" style={{ padding: "0 0.4rem" }}>
			<div
				className="current-ayah"
				style={{
					fontSize: QLanguage.startsWith("ar") ? "1.9rem" : "1.3rem",
					lineHeight: QLanguage.startsWith("ar") ? "4.1rem" : "2rem",
					alignItems: ayah.length > alignThreshold ? "flex-start" : "center",
				}}
			>
				<p>{ayah ? ayah : loadingAnimation}</p>
			</div>
			<CurrentSurahNameComp UILanguage={UILanguage} currentSurahName={currentSurahName} ayah={ayah} />
			<CurrentAyahCallToActions
				getRandomSnippet={getRandomSnippet}
				UILanguage={UILanguage}
				currentSurahName={currentSurahName}
				currentAyahDetailsVisibility={currentAyahDetailsVisibility}
				setCurrentAyahDetailsVisibility={setCurrentAyahDetailsVisibility}
				ayah={ayah}
				bookmarks={bookmarks}
				setBookmarks={setBookmarks}
				isIconFilled={isIconFilled}
				setFooterVisibility={setFooterVisibility}
				setIsIconFilled={setIsIconFilled}
			/>
			<CurrentAyahDetails
				currentAyahDetailsVisibility={currentAyahDetailsVisibility}
				currentSurahName={currentSurahName}
				UILanguage={UILanguage}
				ayah={ayah}
			/>
		</div>
	);
}

export default Snippet;
