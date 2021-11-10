import React from "react";
import "../../app.scss";
function CurrentSurahName({ UILanguage, currentSurahName, ayah }) {
	const loadingAnimation = <div className="loading-animation" style={{ position: "static", marginTop: "1rem" }}></div>;
	return (
		<>
			{ayah ? (
				<p
					className="current-ayah-from-surah"
					style={{
						direction: UILanguage.startsWith("ar") ? "rtl" : "ltr",
					}}
				>
					<span style={{ display: UILanguage.startsWith("ar") ? "none" : "inline" }}>Surah </span>
					{currentSurahName}
				</p>
			) : (
				loadingAnimation
			)}
		</>
	);
}

export default CurrentSurahName;
