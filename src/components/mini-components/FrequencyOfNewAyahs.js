import React from "react";
//
import { getStoredValue } from "../helpers/helpers";
function FrequencyOfNewAyahs({ UILanguage, newSnippetFrequency, setNewSnippetFrequency }) {
	const [userFriendlyFreq, setUserFriendlyFreq] = React.useState(0);
	async function makeFreqUserFriendly() {
		await getStoredValue("freq", setNewSnippetFrequency);
		const convertedValue = newSnippetFrequency / 1000 / 60 / 60;
		setUserFriendlyFreq(convertedValue);
	}

	React.useEffect(() => {
		makeFreqUserFriendly();
	}, [newSnippetFrequency]);

	return (
		<div className="freq-wrapper">
			<div
				style={{
					display: UILanguage === "ar" ? "flex" : "none",
					direction: UILanguage === "ar" ? "rtl" : "",
					flexDirection: UILanguage === "ar" ? "row" : "",
				}}
			>
				<span> أية جديدة كل:</span>
				<input type="number" />
				<button>حفظ</button>
				<span>(حالياً كل {userFriendlyFreq} ساعة)</span>
			</div>
			<div
				style={{
					display: UILanguage === "ar" ? "none" : "flex",
					direction: UILanguage === "ar" ? "" : "ltr",
					flexDirection: UILanguage === "ar" ? "row-reverse" : "",
					justifyContent: "flex-start",
				}}
			>
				<span>New Ayah Each: </span>
				<input type="number" />
				<button>save</button>
				<span>(Currently each {userFriendlyFreq} hour)</span>
			</div>
		</div>
	);
}

export default FrequencyOfNewAyahs;
