/* global browser */
// This stops eslint from breaking the code execution because, here and right now, "browser" isn't defined, but when this app is packged and ran as an extension, "browser" is indeed defined;

import React from "react";

import Header from "./Header";
import Snippet from "./Snippet";
import Settings from "./hidden_by_default/Settings";
import Feedback from "./hidden_by_default/Feedback";

function Body({ settingsVisibility, setSettingsVisibility, feedbackVisibility, setFeedbackVisibility, language, setLanguage }) {
	const getAyaURL = "http://api.alquran.cloud/v1/ayah/";
	// this state will manage the ayah that is visible to the user when he opens the extension
	const [ayah, setAyah] = React.useState("");
	//
	const newSnippetFrequency = 3600000;

	async function getRandomSnippet() {
		// get stored ayah and its related information
		const { ayah, ayahTimeStamp } = await browser.storage.sync.get(["ayah", "ayahTimeStamp"]);
		// if nothing is stored, no old ayah, first time user OR an ayah indeed exist but its older than the user's defeind rate of getting new ayahs;
		if (!ayah.length || new Date().getTime() - ayahTimeStamp >= newSnippetFrequency) {
			// fetch a new ayah
			const randomAyahNumber = Math.floor(Math.random() * 6236) + 1;
			const fetchedAyah = await fetch(getAyaURL + randomAyahNumber);
			const fetchedAyahAsJson = await fetchedAyah.json();
			// processing the ayah to remove "bismillah". might change this later;
			const processedAyah = processAyah(fetchedAyahAsJson);
			// create an object containing the ayah and all the information about it;
			const newStoredAyah = {
				ayah: processedAyah,
				ayahTimeStamp: new Date().getTime(),
				lang: language,
			};
			// update the state with the newly fetched ayah
			setAyah(processedAyah);
			// store the new ayah with a timeStamp and any other info I might add later on;
			browser.storage.sync.set(newStoredAyah);
		} else {
			// otherwise, just get the old already stored ayah and use it to update the state;
			setAyah(ayah);
		}
	}

	// if the ayah begins with 'bismillah', cut it out, as our focus is to only show the verse
	function processAyah(json) {
		let ayah = json.data.text;
		if (ayah.match(/^(بِسْم)/)) {
			ayah = ayah.slice(38);
			return ayah;
		}
		return ayah;
	}
	React.useEffect(() => {
		// getRandomSnippet();
	});

	return (
		<main>
			<Header language={language} />
			<Snippet ayah={ayah} />
			<Settings
				settingsVisibility={settingsVisibility}
				setSettingsVisibility={setSettingsVisibility}
				language={language}
				setLanguage={setLanguage}
			/>
			<Feedback feedbackVisibility={feedbackVisibility} setFeedbackVisibility={setFeedbackVisibility} />
		</main>
	);
}
export default Body;
