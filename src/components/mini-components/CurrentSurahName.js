import React from "react";

function CurrentSurahName({ UILanguage, currentSurahName }) {
	return (
		<p
			className="current-ayah-from-surah"
			style={{
				direction: UILanguage.startsWith("ar") ? "rtl" : "ltr",
				textAlign: "center",
				marginTop: "0.4rem",
			}}
		>
			<span style={{ display: UILanguage.startsWith("ar") ? "none" : "inline-block" }}>Surah {currentSurahName}</span>
			<span style={{ display: UILanguage.startsWith("ar") ? "inline-block" : "none" }}>{currentSurahName}</span>
		</p>
	);
}

export default CurrentSurahName;
