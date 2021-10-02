/* global browser */
import React from "react";
//
import { getStoredValue } from "../helpers/helpers";

function FavoriteCurrentAyah({ UILanguage, ayah }) {
	const [currentAyahNumberGlobally, setCurrentAyahNumberGlobally] = React.useState(0);
	// const [currentSurahNameEN, setCurrentSurahNameEN] = React.useState(0);
	const [bookmarkedAyahs, setBookmarkedAyahs] = React.useState([]);

	const [isIconFilled, setIsIconFilled] = React.useState(false);

	React.useEffect(() => {
		getStoredValue("currentAyahNumberGlobally", setCurrentAyahNumberGlobally);
		getStoredValue("bookmarks", setBookmarkedAyahs);

		// getStoredValue("currentSurahNameEN", setCurrentSurahNameEN);
	}, [ayah]);

	React.useEffect(() => {});

	const bookmarkIconNotFilled = (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
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
		const isAlreadyFavored = bookmarkedAyahs.find((ayahNumber) => ayahNumber === currentAyahNumberGlobally);
		return isAlreadyFavored;
	}

	async function handleClick() {
		const isAlreadyFavored = checkIfBookmarked();
		// if it's not then add it to favorites;
		if (!isAlreadyFavored) {
			bookmarkedAyahs.push(currentAyahNumberGlobally);
			await browser.storage.sync.set({ bookmarks: bookmarkedAyahs, isIconFilled: true });
			setBookmarkedAyahs([...bookmarkedAyahs]);
			setIsIconFilled(true);
			// if `checkIfFavored returned truthy that means the user clicked on an already favored ayah so remove it;
		} else {
			const { bookmarks: storedAndBookmarkedAyahs } = await browser.storage.sync.get("bookmarks");
			const storedAndBookmarkedAyahToBeRemovedIndex = storedAndBookmarkedAyahs.findIndex(
				(ayah) => ayah === currentAyahNumberGlobally
			);
			storedAndBookmarkedAyahs.splice(storedAndBookmarkedAyahToBeRemovedIndex, 1);
			await browser.storage.sync.set({ favorites: storedAndBookmarkedAyahs, isIconFilled: false });
			setIsIconFilled(false);
		}
	}

	React.useEffect(() => {
		getStoredValue("isIconFilled", setIsIconFilled);
		checkIfBookmarked();
	});
	return (
		<div className="bookmark-ayah" style={{ left: UILanguage === "ar" ? "8px" : "494px" }}>
			<button className="cta-button" onClick={handleClick}>
				{isIconFilled ? bookmarkIconFilled : bookmarkIconNotFilled}
			</button>
		</div>
	);
}

export default FavoriteCurrentAyah;
