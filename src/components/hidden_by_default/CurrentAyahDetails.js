import React from "react";
//
import { getStoredValue } from "../helpers/helpers";
import ReadEntireSurah from "../mini-components/ReadEntireSurah";
import Divider from "../shared/Divider";
//
function CurrentAyahDetails({ currentAyahDetailsVisibility, UILanguage, ayah }) {
	// states we will get from the browser storagea after first re-render;
	const [currentSurahNameAR, setCurrentSurahNameAR] = React.useState("");
	const [currentSurahNameEN, setCurrentSurahNameEN] = React.useState("");
	const [currentAyahNumber, setCurrentAyahNumber] = React.useState(0);
	const [currentSurahNumber, setcurrentSurahNumber] = React.useState(0);
	const [currentAyahNumberGlobally, setCurrentAyahNumberGlobally] = React.useState(0);

	React.useEffect(() => {
		getStoredValue(["currentSurahNameAR"], setCurrentSurahNameAR);
		getStoredValue(["currentSurahNameEN"], setCurrentSurahNameEN);
		getStoredValue(["currentAyahNumber"], setCurrentAyahNumber);
		getStoredValue(["currentSurahNumber"], setcurrentSurahNumber);
		getStoredValue("currentAyahNumberGlobally", setCurrentAyahNumberGlobally);
	}, [UILanguage, ayah]);
	return (
		<div className="current-ayah-details-hidden" style={{ paddingBottom: currentAyahDetailsVisibility ? "170px" : 0 }}>
			<div
				className="wrapper"
				style={{
					height: currentAyahDetailsVisibility ? "auto" : "0",
					outline: currentAyahDetailsVisibility ? "1px solid lightcyan" : "none",
					boxShadow: currentAyahDetailsVisibility ? "2px 2px 4px lightcyan, -2px -2px 4px lightcyan" : "none",
				}}
			>
				<div className="row" style={{ flexDirection: UILanguage === "ar" ? "row-reverse" : "row" }}>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<span className="header-span">إسم السورة باللغة العربية: </span>
							{currentSurahNameAR}
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<span className="header-span">Surah name in Arabic:</span>
							<span>{currentSurahNameAR}</span>
						</span>
					</span>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<span className="header-span">إسم السورة باللغة الإنجليزية:</span>
							{currentSurahNameEN}
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<span className="header-span">Surah name in English: </span>
							{currentSurahNameEN}
						</span>
					</span>
				</div>
				<Divider />
				<div className="row numbers-row" style={{ flexDirection: UILanguage === "ar" ? "row-reverse" : "row" }}>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<span className="header-span"> رقم الأية في السورة:</span>
							<span className="highlight-numbers">{currentAyahNumber}</span>
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<span className="header-span">Ayah number in Surah:</span>
							<span className="highlight-numbers">{currentAyahNumber}</span>
						</span>
					</span>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<span className="header-span"> رقم السورة:</span>
							<span className="highlight-numbers">{currentSurahNumber}</span>
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<span className="header-span" style={{ minHeight: UILanguage === "en" ? "72px" : "auto" }}>
								{" "}
								Surah number:
							</span>
							<span className="highlight-numbers">{currentSurahNumber}</span>
						</span>
					</span>
					<span>
						<span style={{ display: UILanguage === "ar" ? "inline-block" : "none", direction: "rtl" }}>
							<span className="header-span"> رقم الأية في القرأن:</span>
							<span className="highlight-numbers">{currentAyahNumberGlobally}</span>
						</span>
						<span style={{ display: UILanguage === "ar" ? "none" : "inline-block", direction: "ltr" }}>
							<span className="header-span"> Ayah number in the Quran:</span>
							<span className="highlight-numbers">{currentAyahNumberGlobally}</span>
						</span>
					</span>
				</div>
				<Divider />
				<ReadEntireSurah UILanguage={UILanguage} currentSurahNumber={currentSurahNumber} />
			</div>
		</div>
	);
}

export default CurrentAyahDetails;
