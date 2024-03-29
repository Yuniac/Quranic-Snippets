/* global browser */
import React from "react";
import ToggleButton from "../shared/ToggleButton";
import "../../App.scss";
//
import { zImportant, zRegular } from "../../style/_variables.module.scss";
//
import { getStoredValue } from "../helpers/helpers";
function Bookmarks({ ayah, bookmarks, setBookmarks, bookmarksVisibility, setBookmarksVisibility, UILanguage, setIsIconFilled }) {
	async function handleClick(button) {
		// it's not a pretty, but it's quite a fast way to change a string into a number;
		const id = button.currentTarget.id * 1;
		const bookmarkedAyahToBeRemoved = bookmarks.findIndex((bookmarkedAyah) => bookmarkedAyah[0] === id);
		// if the current ayah being viewed equals the one that is being removed from bookmarks in the bookmarks section, then toggle the icon for the ayah that is being viewed also, because otherwise there is no need to to if the ayah being removed from bookmakrs isn't the same one as the one being viewed. (viewed = the main ayah, the one showing in the app currently);
		if (bookmarks[bookmarkedAyahToBeRemoved][1] === ayah) {
			await browser.storage.sync.set({ isIconFilled: false });
			setIsIconFilled(false);
		}
		bookmarks.splice(bookmarkedAyahToBeRemoved, 1);
		await browser.storage.sync.set({ bookmarks: bookmarks });
		setBookmarks(bookmarks);
	}
	const removeBookMarkIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 24 24"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
			fill="#FFFFFF"
		>
			<rect fill="none" height="24" width="24" />
			<path d="M17,11v6.97l-5-2.14l-5,2.14V5h6V3H7C5.9,3,5,3.9,5,5v16l7-3l7,3V11H17z M21,7h-6V5h6V7z" />
		</svg>
	);

	const bookmarkedAyahs = bookmarks.map((bookmark) => (
		<div className="bookmarked-ayah-container">
			<div className="bookmarked-ayah-cta" style={{ flexDirection: UILanguage === "ar" ? "row" : "row-reverse" }}>
				{/* 0 = ayah global id
					1 = ayah text 
					2 = surah name which the ayah is from
					3 = the ayah number within the verse
				*/}
				<button className="cta-button" onClick={handleClick} id={bookmark[0]}>
					{removeBookMarkIcon}
				</button>
				<p>
					{bookmark[2]}&nbsp;({bookmark[3]})
				</p>
			</div>
			<div className="bookmarked-ayah-body" key={bookmark[0]}>
				<p dir="auto">{bookmark[1]}</p>
			</div>
		</div>
	));

	const noBookmarksPlaceHolderImg = (
		<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 2v5l-1-.75L15 9V4h2zm3 12H8V4h5v9l3-2.25L19 13V4h1v12z" />
		</svg>
	);
	const noBookmarksPlaceHolder = (
		<div className="no-bookmarks-placeholder">
			<div>
				<p style={{ display: UILanguage === "ar" ? "block" : "none" }}>
					إضغط على زر "إضافة إشارة مرجعية" الذي بجانب كل أية لإضافتها هنا
				</p>
				<p style={{ display: UILanguage === "ar" ? "none" : "block" }}>
					Click on the "Add to bookmarks" button which you can find next to each ayah to add that ayah here.
				</p>
			</div>
			<div>{noBookmarksPlaceHolderImg}</div>
		</div>
	);

	React.useEffect(() => {
		getStoredValue("bookmarks", setBookmarks);
	}, [bookmarks, UILanguage, setBookmarks]);
	return (
		<div
			className="bookmarks popup-css popup-css-infinite"
			style={{
				visibility: bookmarksVisibility ? "visible" : "hidden",
				display: bookmarksVisibility ? "block" : "none",
				pointerEvents: bookmarksVisibility ? "auto" : "none",
				zIndex: bookmarksVisibility ? zImportant : zRegular,
				direction: UILanguage === "ar" ? "rtl" : "ltr",
			}}
		>
			<ToggleButton setFunction={setBookmarksVisibility} UILanguage={UILanguage} />
			<h2>{UILanguage === "ar" ? "الأيات المحفوظة:" : "Bookmarked Ayahs (verses):"}</h2>
			<div className="bookmarked-ayahs">{bookmarkedAyahs.length ? bookmarkedAyahs : noBookmarksPlaceHolder}</div>
		</div>
	);
}

export default Bookmarks;
