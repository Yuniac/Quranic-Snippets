/* global chrome */
import React from "react";
import "../App.scss";

import CurrentAyahCallToActions from "./mini-components/CurrentAyahCallToActions";
import CurrentAyahDetails from "./hidden_by_default/CurrentAyahDetails";
import CurrentSurahNameComp from "./mini-components/CurrentSurahName";

function Snippet({ ayah, QLanguage, UILanguage, getRandomSnippet, bookmarks, setBookmarks, isIconFilled, setIsIconFilled }) {
	const [currentSurahName, setCurrentSurahName] = React.useState("");
	const [currentAyahDetailsVisibility, setCurrentAyahDetailsVisibility] = React.useState(false);

	const loadingAnimation = <span className="loading-animation"></span>;
	const alignThreshold = 40;
	React.useEffect(() => {
		async function getStoredName() {
			if (UILanguage.startsWith("ar")) {
				chrome.storage.sync.get(["currentSurahNameAR"], ({ currentSurahNameAR }) => {
					setCurrentSurahName(currentSurahNameAR);
				});
			} else {
				chrome.storage.sync.get(["currentSurahNameEN"], ({ currentSurahNameEN }) => {
					setCurrentSurahName(currentSurahNameEN);
				});
			}
		}
		getStoredName();
	}, [UILanguage, ayah]);
	return (
		<div className="snippet-wrapper" style={{ padding: "0 0.4rem" }}>
			<div style={{ width: "100%" }} className="current-ayah-wrapper">
				<p
					className="current-ayah"
					style={{
						fontSize: QLanguage.startsWith("ar") ? "1.9rem" : "1.3rem",
						lineHeight: QLanguage.startsWith("ar") ? "4.1rem" : "2rem",
						alignItems: ayah.length > alignThreshold ? "flex-start" : "center",
					}}
				>
					{ayah ? ayah : loadingAnimation}
				</p>
			</div>
			<CurrentSurahNameComp currentSurahName={currentSurahName} UILanguage={UILanguage} ayah={ayah} />
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
				setIsIconFilled={setIsIconFilled}
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
