import React from "react";

function ReadEntireAyah({ UILanguage, currentSurahNumber }) {
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
					<a href={externalLink}>أقرأ الأية كاملة (رابط خارجي)</a>
				</span>
				<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
					<a href={externalLink}>Read the entire Ayah (external link)</a>
				</span>
			</span>
		</div>
	);
}

export default ReadEntireAyah;
