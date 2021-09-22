import React from "react";

function CurrentSurahName({ QLanguage, currentSurahName }) {
	return (
		<p
			className="current-ayah-from-surah"
			style={{
				direction: QLanguage.startsWith("ar") ? "rtl" : "ltr",
				textAlign: "center",
				marginTop: "0.4rem",
			}}
		>
			<span style={{ display: QLanguage.startsWith("ar") ? "none" : "inline-block" }}>Surah {currentSurahName}</span>
			<span style={{ display: QLanguage.startsWith("ar") ? "inline-block" : "none" }}>{currentSurahName}</span>
		</p>
	);
}

export default CurrentSurahName;
