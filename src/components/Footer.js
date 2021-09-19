import React from "react";
import "../App.scss";

function Footer({ setSettingsVisibility, setFeedbackVisibility, language }) {
	const settingsIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
		</svg>
	);
	const feedbackIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
		</svg>
	);
	function openSettings() {
		setSettingsVisibility(true);
	}
	function openFeedback() {
		setFeedbackVisibility(true);
	}
	return (
		<footer>
			<ul>
				<li onClick={openSettings} className="lang-link" style={{ flexDirection: language === "ar" ? "row-reverse" : "row" }}>
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
				<li onClick={openFeedback} className="feedback-link" style={{ flexDirection: language === "ar" ? "row-reverse" : "row" }}>
					<span
						style={{
							display: language === "ar" ? "inline-block" : "none",
							direction: language === "ar" ? "rtl" : "",
							textShadow: language === "ar" ? "0px 2px 1px black" : "none",
						}}
					>
						تواصل معنا
					</span>
					<span
						style={{
							display: language === "ar" ? "none" : "inline-block",
							direction: language === "ar" ? "rtl" : "",
							textShadow: language === "ar" ? "none" : "none",
							fontWeight: "700",
						}}
					>
						Feedback
					</span>
					{feedbackIcon}
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
