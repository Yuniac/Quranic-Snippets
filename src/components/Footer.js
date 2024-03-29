import React from "react";
import "../App.scss";
//
import { openPopup } from "./helpers/helpers";

function Footer({ setSettingsVisibility, setBookmarksVisibility, setAboutVisibility, footerVisibility, language }) {
	const settingsIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
		</svg>
	);
	const bookmarksIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" />
		</svg>
	);

	const infoIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
		</svg>
	);
	return (
		<footer style={{ display: footerVisibility ? "block" : "none" }}>
			<ul>
				<li
					onClick={() => openPopup(setSettingsVisibility)}
					className="lang-link"
					style={{ flexDirection: language === "ar" ? "row-reverse" : "row" }}
				>
					<span
						style={{
							display: language === "ar" ? "inline-block" : "none",
							direction: language === "ar" ? "rtl" : "",
							textShadow: language === "ar" ? "0px 2px 1px black" : "none",
						}}
					>
						الإعدادات
					</span>
					<span
						style={{
							display: language === "ar" ? "none" : "inline-block",
							direction: language === "ar" ? "rtl" : "",
							textShadow: language === "ar" ? "none" : "none",
							fontWeight: "700",
						}}
					>
						Settings
					</span>
					{settingsIcon}
				</li>
				<li
					onClick={() => openPopup(setBookmarksVisibility)}
					className="bookmarks-link"
					style={{ flexDirection: language === "ar" ? "row-reverse" : "row" }}
				>
					<span
						style={{
							display: language === "ar" ? "inline-block" : "none",
							direction: language === "ar" ? "rtl" : "",
							textShadow: language === "ar" ? "0px 2px 1px black" : "none",
						}}
					>
						المحفوظات
					</span>
					<span
						style={{
							display: language === "ar" ? "none" : "inline-block",
							direction: language === "ar" ? "rtl" : "",
							textShadow: language === "ar" ? "none" : "none",
							fontWeight: "700",
						}}
					>
						Bookmarks
					</span>
					{bookmarksIcon}
				</li>
				<li
					onClick={() => openPopup(setAboutVisibility)}
					className="bookmarks-link"
					style={{ flexDirection: language === "ar" ? "row-reverse" : "row" }}
				>
					<span
						style={{
							display: language === "ar" ? "inline-block" : "none",
							direction: language === "ar" ? "rtl" : "",
							textShadow: language === "ar" ? "0px 2px 1px black" : "none",
						}}
					>
						حولَ
					</span>
					<span
						style={{
							display: language === "ar" ? "none" : "inline-block",
							direction: language === "ar" ? "rtl" : "",
							textShadow: language === "ar" ? "none" : "none",
							fontWeight: "700",
						}}
					>
						About
					</span>
					{infoIcon}
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
