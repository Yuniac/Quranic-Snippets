/* global browser */

import React from "react";

import Header from "./Header";
import Snippet from "./Snippet";
import Settings from "./hidden_by_default/Settings";
import Feedback from "./hidden_by_default/Feedback";

function Body({ settingsVisibility, setSettingsVisibility, feedbackVisibility, setFeedbackVisibility }) {
	const [ayah, setAyah] = React.useState("");

	// const [refresh, setRefresh] = React.useState(true);
	// const newSnippetFrequency = 3600000;
	// store a variable in localstorage to determine how often we fetch a new ayah;
	const [newAyahTimer, setNewAyahTimer] = React.useState(() => {
		if (!localStorage.getItem("timer")) {
			localStorage.setItem("timer", "10000");
		}
	});
	const getAyaURL = "http://api.alquran.cloud/v1/ayah/";

	function getRandomSnippet() {
		const randomAyahNumber = Math.floor(Math.random() * 6236) + 1;
		fetch(getAyaURL + randomAyahNumber)
			.then((response) => response.json())
			.then((responseAsJson) => {
				const processedAyah = processAyah(responseAsJson);
				setAyah(processedAyah);
			})
			.then(() => {
				// compare times and determine whether we should fetch a new ayah or not;
				// const timer = JSON.parse(localStorage.getItem("timer"));
				browser.storage.sync.get();

				// setTimeout(() => {
				// 	setNewAyahTimer((oldState) => !oldState);
				// }, timer);
			})
			.catch((e) => console.log(e));
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
	}, [newAyahTimer]);
	browser.runtime.onMessage.addListener((x) => {
		console.log("||||||||", x, "|||||||||");
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
