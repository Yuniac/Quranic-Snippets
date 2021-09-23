import React from "react";
//
import NewSnippetNowButton from "./NewSnippetNowButton";
import CurrentAyahDetailsButton from "./CurrentAyahDetailsButton";
import CurrentSurahName from "./CurrentSurahName";
import CurrentAyahDetails from "../hidden_by_default/CurrentAyahDetails";
// renaming a variable temporarily due to a naming conflict;
function CurrentAyahCallToActions({ UILanguage, QLanguage, getRandomSnippet, currentSurahName: surahName }) {
	const [currentAyahDetailsVisibility, setCurrentAyahDetailsVisibility] = React.useState(false);
	return (
		<div className="current-surah-cta">
			<NewSnippetNowButton UILanguage={UILanguage} getRandomSnippet={getRandomSnippet} />
			<CurrentSurahName CurrentSurahName={surahName} QLanguage={QLanguage} />
			<CurrentAyahDetailsButton setCurrentAyahDetailsVisibility={setCurrentAyahDetailsVisibility} />
			<CurrentAyahDetails
				QLanguage={QLanguage}
				CurrentSurahName={surahName}
				currentAyahDetailsVisibility={currentAyahDetailsVisibility}
			/>
		</div>
	);
}

export default CurrentAyahCallToActions;
