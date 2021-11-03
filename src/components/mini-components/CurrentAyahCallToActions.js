import React from "react";
//
import NewSnippetNowButton from "./NewSnippetNowButton";
import CurrentSurahName from "./CurrentSurahName";
import CurrentAyahDetailsButton from "./CurrentAyahDetailsButton";
import BookmarkCurrentAyah from "./BookmarkCurrentAyah";
// renaming a variable temporarily due to a naming conflict in this component;
function CurrentAyahCallToActions({
	UILanguage,
	getRandomSnippet,
	currentSurahName,
	currentAyahDetailsVisibility,
	setCurrentAyahDetailsVisibility,
	ayah,
	bookmarks,
	setBookmarks,
}) {
	return (
		<div className="current-ayah-cta">
			<NewSnippetNowButton UILanguage={UILanguage} getRandomSnippet={getRandomSnippet} />
			<BookmarkCurrentAyah
				UILanguage={UILanguage}
				ayah={ayah}
				bookmarks={bookmarks}
				setBookmarks={setBookmarks}
				currentSurahName={currentSurahName}
			/>
			<CurrentAyahDetailsButton
				currentAyahDetailsVisibility={currentAyahDetailsVisibility}
				setCurrentAyahDetailsVisibility={setCurrentAyahDetailsVisibility}
			/>
		</div>
	);
}

export default CurrentAyahCallToActions;
