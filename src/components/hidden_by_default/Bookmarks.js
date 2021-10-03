/* global browser */
import React from "react";
import ToggleButton from "../shared/ToggleButton";
import "../../App.scss";
//
import { zImportant, zRegular } from "../../style/_variables.module.scss";
//
import { getStoredValue } from "../helpers/helpers";
function Bookmarks({ bookmarks, setBookmarks, bookmarksVisibility, setBookmarksVisibility, UILanguage, QLanguage }) {
	function handleClick(button) {
		// it's not a pretty, but it's quite a fast way to change a string into a number;
		const id = button.currentTarget.id * 1;
		const bookmarkedAyahToBeRemoved = bookmarks.findIndex((bookmarkedAyah) => bookmarkedAyah[0] === id);
		bookmarks.splice(bookmarkedAyahToBeRemoved, 1);
		browser.storage.sync.set({ bookmarks: bookmarks, isIconFilled: false });
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
			<h2>{UILanguage === "ar" ? "الأيات المحفوظة" : "Bookmarked Ayahs (verses)"}</h2>
			<div className="bookmarked-ayahs">
				{/* 0 = ayah global id
					1 = ayah text 
					2 = surah name which the ayah is from
				*/}
				{bookmarks.map((bookmark) => (
					<div className="bookmarked-ayah-container">
						<div className="bookmarked-ayah-cta" style={{ flexDirection: UILanguage === "ar" ? "row" : "row-reverse" }}>
							<button className="cta-button" onClick={handleClick} id={bookmark[0]}>
								{removeBookMarkIcon}
							</button>
							<p>{bookmark[2]}</p>
						</div>
						<div className="bookmarked-ayah-body" key={bookmark[0]}>
							<p>{bookmark[1]}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Bookmarks;
