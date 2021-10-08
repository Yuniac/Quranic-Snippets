import React from "react";

function CurrentSurahName({ UILanguage, currentSurahName }) {
	return (
		<p
			className="current-ayah-from-surah"
			style={{
				direction: UILanguage.startsWith("ar") ? "rtl" : "ltr",
			}}
		>
			<span style={{ display: UILanguage.startsWith("ar") ? "none" : "inline" }}>Surah </span>
			{currentSurahName}
		</p>
	);
}

export default CurrentSurahName;
