/* global browser */
import React from "react";
//
import { getStoredValue } from "../helpers/helpers";

function BookmarkCurrentAyah({ UILanguage, ayah, bookmarks, setBookmarks, currentSurahName }) {
	const [currentAyahNumberGlobally, setCurrentAyahNumberGlobally] = React.useState(0);
	const [currentAyahNumber, setCurrentAyahNumber] = React.useState(0);
	const [isIconFilled, setIsIconFilled] = React.useState(false);
	React.useEffect(() => {
		getStoredValue("currentAyahNumberGlobally", setCurrentAyahNumberGlobally);
		getStoredValue("bookmarks", setBookmarks);
		getStoredValue("currentAyahNumber", setCurrentAyahNumber);
	}, [ayah]);

	const bookmarkIconNotFilled = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 24 24"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
			fill="#FFFFFF"
		>
			<rect fill="none" height="24" width="24" />
			<path d="M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-2v2h-2V7h-2V5h2V3h2v2h2V7z" />
		</svg>
	);
	const bookmarkIconFilled = (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
		</svg>
	);

	function checkIfBookmarked() {
		// figure out whether the current ayah the user is trying to favorite its favored already or not;
		const isAlreadyFavored = bookmarks.find((ayahNumber) => ayahNumber[0] === currentAyahNumberGlobally);
		return isAlreadyFavored;
	}

	async function handleClick() {
		const isAlreadyFavored = checkIfBookmarked();
		// if it's not then add it to favorites;
		if (!isAlreadyFavored) {
			bookmarks.push([currentAyahNumberGlobally, ayah, currentSurahName, currentAyahNumber]);
			await browser.storage.sync.set({ bookmarks: bookmarks, isIconFilled: true });
			setBookmarks([...bookmarks]);
			setIsIconFilled(true);
			// if `checkIfFavored returned truthy that means the user clicked on an already favored ayah so remove it;
		} else {
			const { bookmarks: storedAndBookmarkedAyahs } = await browser.storage.sync.get("bookmarks");
			const storedAndBookmarkedAyahToBeRemovedIndex = storedAndBookmarkedAyahs.findIndex(
				(ayah) => ayah[0] === currentAyahNumberGlobally
			);
			storedAndBookmarkedAyahs.splice(storedAndBookmarkedAyahToBeRemovedIndex, 1);
			await browser.storage.sync.set({ bookmarks: storedAndBookmarkedAyahs, isIconFilled: false });
			setIsIconFilled(false);
		}
	}

	React.useEffect(() => {
		getStoredValue("isIconFilled", setIsIconFilled);
		checkIfBookmarked();
	});
	return (
		<div className="bookmark-ayah">
			<button className="cta-button" onClick={handleClick}>
				{isIconFilled ? bookmarkIconFilled : bookmarkIconNotFilled}
			</button>
		</div>
	);
}

export default BookmarkCurrentAyah;
