import React from "react";

function CurrentSurahName({ UILanguage, CurrentSurahName }) {
	return (
		<p
			className="current-ayah-from-surah"
			style={{
				direction: UILanguage.startsWith("ar") ? "rtl" : "ltr",
				textAlign: "center",
				marginTop: "0.4rem",
			}}
		>
			<span style={{ display: UILanguage.startsWith("ar") ? "none" : "inline" }}>Surah </span>
			{CurrentSurahName}
		</p>
	);
}

export default CurrentSurahName;
