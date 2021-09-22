import React from "react";
//
import NewSnippetNowButton from "../mini-compoenents/NewSnippetNowButton";
import CurrentSurahName from "../mini-compoenents/CurrentSurahName";
import CurrentAyahDetails from "../mini-compoenents/CurrentAyahDetails";
// renaming a variable temporarily due to a naming conflict;
function CurrentAyahCallToActions({ UILanguage, QLanguage, getRandomSnippet, currentSurahName: surahName }) {
	return (
		<div className="current-surah-cta">
			<NewSnippetNowButton UILanguage={UILanguage} getRandomSnippet={getRandomSnippet} />
			<CurrentSurahName CurrentSurahName={surahName} QLanguage={QLanguage} />
			<CurrentAyahDetails QLanguage={QLanguage} />
		</div>
	);
}

export default CurrentAyahCallToActions;
