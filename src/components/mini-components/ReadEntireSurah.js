import React from "react";

function ReadEntireSurah({ UILanguage, currentSurahNumber }) {
	const nobleQuranWebsiteLink = "https://quran.com/";
	const [externalLink, setExternalLink] = React.useState("");

	React.useEffect(() => {
		setExternalLink(nobleQuranWebsiteLink + currentSurahNumber);
	}, [currentSurahNumber]);
	return (
		<div className="row" style={{ flexDirection: UILanguage === "ar" ? "row-reverse" : "row" }}>
			<span>
				<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
					<a href={externalLink} className="highlight-link" target="_blank" rel="noreferrer">
						<span>أقرأ السورة كاملة </span>(رابط خارجي)
					</a>
				</span>
				<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
					<a href={externalLink} className="highlight-link" target="_blank" rel="noreferrer">
						Read the entire Surah <span>(external link)</span>
					</a>
				</span>
			</span>
		</div>
	);
}

export default ReadEntireSurah;
