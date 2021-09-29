import React from "react";
//
import NewSnippetNowButton from "./NewSnippetNowButton";
import CurrentSurahName from "./CurrentSurahName";
import CurrentAyahDetailsButton from "./CurrentAyahDetailsButton";
// renaming a variable temporarily due to a naming conflict in this component;
function CurrentAyahCallToActions({
	UILanguage,
	getRandomSnippet,
	currentSurahName,
	currentAyahDetailsVisibility,
	setCurrentAyahDetailsVisibility,
}) {
	return (
		<div className="current-surah-cta">
			<NewSnippetNowButton UILanguage={UILanguage} getRandomSnippet={getRandomSnippet} />
			<CurrentSurahName currentSurahName={currentSurahName} UILanguage={UILanguage} />
			<CurrentAyahDetailsButton
				currentAyahDetailsVisibility={currentAyahDetailsVisibility}
				setCurrentAyahDetailsVisibility={setCurrentAyahDetailsVisibility}
			/>
		</div>
	);
}

export default CurrentAyahCallToActions;
