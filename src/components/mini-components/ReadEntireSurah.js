import React from "react";

function ReadEntireSurah({ UILanguage, currentSurahNumber }) {
	const nobleQuranWebsiteLink = "https://quran.com/";
	const [externalLink, setExternalLink] = React.useState("");

	function makeExternalLink(surhaNumber) {
		setExternalLink(nobleQuranWebsiteLink + surhaNumber);
	}

	React.useEffect(() => {
		makeExternalLink(currentSurahNumber);
	}, [currentSurahNumber]);
	return (
		<div className="row" style={{ flexDirection: UILanguage === "ar" ? "row-reverse" : "row" }}>
			<span>
				<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
					<a href={externalLink} className="highlight-link">
						<span>أقرأ السورة كاملة </span>(رابط خارجي)
					</a>
				</span>
				<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
					<a href={externalLink} className="highlight-link">
						Read Entire Surah <span>(external link)</span>
					</a>
				</span>
			</span>
		</div>
	);
}

export default ReadEntireSurah;
