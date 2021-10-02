import React from "react";
import ToggleButton from "../shared/ToggleButton";
import "../../App.scss";
//
import { zImportant, zRegular } from "../../style/_variables.module.scss";
//
import { getStoredValue } from "../helpers/helpers";
function Bookmarks({ bookmarks, setBookmarks, bookmarksVisibility, setBookmarksVisibility, UILanguage, QLanguage }) {
	function handleClick(button) {
		console.log(button);
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
	}, [bookmarks]);

	// React.useEffect(() => {
	// 	fetchBookmarkedAyahs();
	// }, [bookmarks, bookmakredAyahs]);
	return (
		<div
			className="bookmarks popup-css"
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
				{bookmarks.map((bookmark) => (
					<div
						className="bookmarked-ayah-container"
						style={{
							flexDirection: QLanguage === "ar.asad" ? "row" : "row-reverse",
							direction: QLanguage === "ar.asad" ? "rtl" : "ltr",
						}}
					>
						<div key={bookmark[0]} id={bookmark[0]}>
							{bookmark[1]}
						</div>
						<button className="cta-button" onClick={handleClick}>
							{removeBookMarkIcon}
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Bookmarks;
