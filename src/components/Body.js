/* global browser */

import React from "react";

import Header from "./Header";
import Snippet from "./Snippet";
import Settings from "./hidden_by_default/Settings";
import Feedback from "./hidden_by_default/Feedback";

function Body({ settingsVisibility, setSettingsVisibility, feedbackVisibility, setFeedbackVisibility }) {
	const getAyaURL = "http://api.alquran.cloud/v1/ayah/";
	const [ayah, setAyah] = React.useState("");

	// const [refresh, setRefresh] = React.useState(true);
	const newSnippetFrequency = 3600000;
	// store a variable in localstorage to determine how often we fetch a new ayah;
	// const [newAyahTimer, setNewAyahTimer] = React.useState(() => {
	// });
	// let storedAyah, storedAyahTimeStamp;
	// browser.storage.local.get("ayah").then((x) => console.log(x.ayah, x));

	// browser.storage.local.get("ayah").then((value) => (storedAyah = value.ayah));
	// browser.storage.local.get("ayahTimeStamp").then((value) => (storedAyahTimeStamp = value.ayahTimeStamp));

	async function getRandomSnippet() {
		const { ayah, ayahTimeStamp } = await browser.storage.local.get(["ayah", "ayahTimeStamp"]);
		// if nothing is stored, no old ayah, first time user OR an ayah indeed exist but its older than the user's defeind rate of getting new ayahs;
		if (!ayah.length || new Date().getTime() - ayahTimeStamp >= newSnippetFrequency) {
			console.log("this has ran");
			const randomAyahNumber = Math.floor(Math.random() * 6236) + 1;
			const fetchedAyah = await fetch(getAyaURL + randomAyahNumber);
			const fetchedAyahAsJson = await fetchedAyah.json();
			const processedAyah = processAyah(fetchedAyahAsJson);
			const newStoredAyah = {
				ayah: processedAyah,
				ayahTimeStamp: new Date().getTime(),
			};
			setAyah(processedAyah);
			browser.storage.local.set(newStoredAyah);
		} else {
			// otherwise, just get the old already stored ayah
			console.log("hasn't, we are at the bottom");
			console.log(ayahTimeStamp, new Date().getTime(), ayahTimeStamp - new Date().getTime());
			console.log(ayahTimeStamp - new Date().getTime() >= newSnippetFrequency ? true : false);
			setAyah(ayah);
		}
	}
	function processAyah(json) {
		let ayah = json.data.text;
		if (ayah.match(/^(بِسْم)/)) {
			// if the ayah begins with 'bismillah', cut it out, as our focus is to only show the verse
			ayah = ayah.slice(38);
			return ayah;
		}
		return ayah;
	}
	React.useEffect(() => {
		getRandomSnippet();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	});

	return (
		<main>
			<Header />
			<Snippet ayah={ayah} />
			<Settings settingsVisibility={settingsVisibility} setSettingsVisibility={setSettingsVisibility} />
			<Feedback feedbackVisibility={feedbackVisibility} setFeedbackVisibility={setFeedbackVisibility} />
		</main>
	);
}
export default Body;
