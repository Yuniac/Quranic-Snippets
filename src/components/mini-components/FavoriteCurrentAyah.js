/* global browser */
import React from "react";
//
import { getStoredValue } from "../helpers/helpers";

function FavoriteCurrentAyah({ UILanguage, ayah }) {
	const [currentAyahNumberGlobally, setCurrentAyahNumberGlobally] = React.useState(0);
	// const [currentSurahNameEN, setCurrentSurahNameEN] = React.useState(0);
	const [favoredAyahs, setFavoredAyahs] = React.useState([]);

	const [isIconFilled, setIsIconFilled] = React.useState(false);

	React.useEffect(() => {
		getStoredValue("currentAyahNumberGlobally", setCurrentAyahNumberGlobally);
		getStoredValue("favorites", setFavoredAyahs);

		// getStoredValue("currentSurahNameEN", setCurrentSurahNameEN);
	}, [ayah]);

	React.useEffect(() => {});

	const favoriteIconNotFilled = (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
		</svg>
	);
	const favoriteIconFilled = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 24 24"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
			fill="#FFFFFF"
		>
			<g>
				<path d="M0,0h24v24H0V0z" fill="none" />
				<path d="M0,0h24v24H0V0z" fill="none" />
			</g>
			<g>
				<path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
			</g>
		</svg>
	);

	function checkIfFavored() {
		// figure out whether the current ayah the user is trying to favorite its favored already or not;
		const isAlreadyFavored = favoredAyahs.find((ayahNumber) => ayahNumber === currentAyahNumberGlobally);
		return isAlreadyFavored;
	}

	async function handleClick() {
		const isAlreadyFavored = checkIfFavored();
		// if it's not then add it to favorites;
		if (!isAlreadyFavored) {
			favoredAyahs.push(currentAyahNumberGlobally);
			await browser.storage.sync.set({ favorites: favoredAyahs, isIconFilled: true });
			setFavoredAyahs([...favoredAyahs]);
			setIsIconFilled(true);
			// if `checkIfFavored returned truthy that means the user clicked on an already favored ayah so remove it;
		} else {
			const { favorites: storedAndFavoredAyahsNumbers } = await browser.storage.sync.get("favorites");
			const storedAndFavoredToBeRemovedAyahNumber = storedAndFavoredAyahsNumbers.findIndex(
				(ayah) => ayah === currentAyahNumberGlobally
			);
			storedAndFavoredAyahsNumbers.splice(storedAndFavoredToBeRemovedAyahNumber, 1);
			await browser.storage.sync.set({ favorites: storedAndFavoredAyahsNumbers, isIconFilled: false });
			setIsIconFilled(false);
		}
	}

	React.useEffect(() => {
		getStoredValue("isIconFilled", setIsIconFilled);
		checkIfFavored();
	});
	return (
		<div className="favorite-ayah" style={{ left: UILanguage === "ar" ? "8px" : "494px" }}>
			<button className="cta-button" onClick={handleClick}>
				{isIconFilled ? favoriteIconFilled : favoriteIconNotFilled}
			</button>
		</div>
	);
}

export default FavoriteCurrentAyah;
