import React from "react";

function CurrentSurahName({ QLanguage, CurrentSurahName }) {
	return (
		<p
			className="current-ayah-from-surah"
			style={{
				direction: QLanguage.startsWith("ar") ? "rtl" : "ltr",
				textAlign: "center",
				marginTop: "0.4rem",
			}}
		>
			<span style={{ display: QLanguage.startsWith("ar") ? "none" : "inline" }}>Surah </span>
			{CurrentSurahName}
		</p>
	);
}

export default CurrentSurahName;
