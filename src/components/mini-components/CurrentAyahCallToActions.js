import React from "react";
//
import NewSnippetNowButton from "./NewSnippetNowButton";
import CurrentSurahName from "./CurrentSurahName";
import CurrentAyahDetailsButton from "./CurrentAyahDetailsButton";
import FavoriteCurrentAyah from "./FavoriteCurrentAyah";
// renaming a variable temporarily due to a naming conflict in this component;
function CurrentAyahCallToActions({
	UILanguage,
	getRandomSnippet,
	currentSurahName,
	currentAyahDetailsVisibility,
	setCurrentAyahDetailsVisibility,
	ayah,
}) {
	return (
		<div className="current-surah-cta">
			<NewSnippetNowButton UILanguage={UILanguage} getRandomSnippet={getRandomSnippet} />
			<CurrentSurahName currentSurahName={currentSurahName} UILanguage={UILanguage} />
			<CurrentAyahDetailsButton
				currentAyahDetailsVisibility={currentAyahDetailsVisibility}
				setCurrentAyahDetailsVisibility={setCurrentAyahDetailsVisibility}
			/>
			<FavoriteCurrentAyah UILanguage={UILanguage} ayah={ayah} />
		</div>
	);
}

export default CurrentAyahCallToActions;
