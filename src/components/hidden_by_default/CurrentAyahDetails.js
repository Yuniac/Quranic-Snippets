import React from "react";

function CurrentAyahDetails({
	currentAyahDetailsVisibility,
	currentSurahNameAR,
	currentSurahNameEN,
	curentAyahNumber,
	curentAyahNumberInSurah,
	UILanguage,
}) {
	return (
		<div className="current-ayah-details-hidden">
			<div className="wrapper" style={{ height: currentAyahDetailsVisibility === true ? "auto" : "0" }}>
				<div className="row" style={{ flexDirection: UILanguage === "ar" ? "row-reverse" : "row" }}>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							إسم السورة باللغة العربية: {currentSurahNameAR}
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							The Surah name in Arabic: {currentSurahNameEN}
						</span>
					</span>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							إسم السورة باللغة الإنجليزية: {currentSurahNameAR}
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							The Surah name in English: {currentSurahNameEN}
						</span>
					</span>
				</div>
				<div className="row" style={{ flexDirection: UILanguage === "ar" ? "row-reverse" : "row" }}>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							رقم الأية: {curentAyahNumber}
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							Ayah number: {curentAyahNumber}
						</span>
					</span>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							رقم السورة: {curentAyahNumberInSurah}
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							The Surah number: {curentAyahNumberInSurah}
						</span>
					</span>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<a href>أقرأ الأية كاملة (رابط خارجي)</a>
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<a href>Read entire Ayah (external link)</a>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}

export default CurrentAyahDetails;
