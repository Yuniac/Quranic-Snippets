/* global browser */
// This stops eslint from breaking the code execution because, here and right now, "browser" isn't defined, but when this app is packged and ran as an extension, "browser" is indeed defined;
import React from "react";
//
import Header from "./Header";
import Snippet from "./Snippet";
import Settings from "./hidden_by_default/Settings";
import Feedback from "./hidden_by_default/Feedback";
//
import { getStoredValue } from "./helpers/helpers";

function Body({ settingsVisibility, setSettingsVisibility, feedbackVisibility, setFeedbackVisibility, UILanguage, setUILanguage }) {
	const [QLanguage, setQLanguage] = React.useState("");

	// get the already stored language, run once only;
	React.useEffect(() => {
		getStoredValue("QLang", setQLanguage);
	}, []);

	const getAyahURL = "http://api.alquran.cloud/v1/ayah/";
	// this state will manage the ayah that is visible to the user when he opens the extension
	const [ayah, setAyah] = React.useState("");
	//
	const newSnippetFrequency = 3600000;

	let currentAyahNumber, currentAyahNumberInSurah, currentAyahText, currentSurahNameEN, currentSurahNameAR;
	let urlToFetch;

	async function getRandomSnippet(sameAyahInSecondLang, forced) {
		// get stored ayah and its related information
		const { ayah, ayahTimeStamp, UILang, QLang } = await browser.storage.sync.get(["ayah", "ayahTimeStamp", "UILang", "QLang"]);

		// if nothing is stored, no old ayah, first time user OR an ayah indeed exist but its older than the user's defeind rate of getting new ayahs;
		// or if 'sameAyahInSecondLang' argument is present as true/false, true = fetch the same ayah but in the second langauge, will only be called when the language changes. if 'forced' = true then regardless of anything, fetch a new ayah in whichever current language we have, will only be called from 'get a new snippet now' button;
		if (!ayah.length || new Date().getTime() - ayahTimeStamp >= newSnippetFrequency || sameAyahInSecondLang) {
			// fetch a new ayah
			const randomAyahNumber = Math.floor(Math.random() * 6236) + 1;
			if (sameAyahInSecondLang) {
				const { currentAyahNumber } = await browser.storage.sync.get("currentAyahNumber");
				// if forced, then user has requested to get a new snippt, regardless of everything so fetch anew;
				if (forced) {
					urlToFetch = getAyahURL + randomAyahNumber + "/" + QLang;
				} else {
					// else, get the same verse that is stored but in th second language
					urlToFetch = getAyahURL + currentAyahNumber + "/" + QLang;
				}
			} else {
				urlToFetch = getAyahURL + randomAyahNumber + "/" + QLang;
			}
			// const urlToFetch = getAyahURL + randomAyahNumber + "/" + QLang;
			const fetchedAyah = await fetch(urlToFetch);
			let fetchedAyahAsJson = await fetchedAyah.json();

			fetchedAyahAsJson = fetchedAyahAsJson.data;
			currentAyahNumber = fetchedAyahAsJson.number;
			currentAyahNumberInSurah = fetchedAyahAsJson.numberInSurah;
			currentAyahText = fetchedAyahAsJson.text;
			currentSurahNameEN = fetchedAyahAsJson.surah.englishName;
			currentSurahNameAR = fetchedAyahAsJson.surah.name;

			// processing the ayah to remove "bismillah". might change this later;
			const processedAyah = processAyah(currentAyahText);
			// create an object containing the ayah and all the information about it;
			const newStoredAyah = {
				ayah: processedAyah,
				ayahTimeStamp: new Date().getTime(),
				currentAyahNumber: currentAyahNumber,
				currentAyahNumberInSurah: currentAyahNumberInSurah,
				currentSurahNameEN: currentSurahNameEN,
				currentSurahNameAR: currentSurahNameAR,
				UILang: UILang,
				QLang: QLang,
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
	function processAyah(ayah) {
		if (ayah.match(/^(بِسْم)/)) {
			ayah = ayah.slice(38);
			return ayah;
		}
		return ayah;
	}
	React.useEffect(() => {
		getRandomSnippet(false);
		// TODO
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<main>
			<Header UILanguage={UILanguage} />
			<Snippet ayah={ayah} UILanguage={UILanguage} getRandomSnippet={getRandomSnippet} QLanguage={QLanguage} />
			<Settings
				settingsVisibility={settingsVisibility}
				setSettingsVisibility={setSettingsVisibility}
				UILanguage={UILanguage}
				setUILanguage={setUILanguage}
				QLanguage={QLanguage}
				setQLanguage={setQLanguage}
				getRandomSnippet={getRandomSnippet}
			/>
			<Feedback feedbackVisibility={feedbackVisibility} setFeedbackVisibility={setFeedbackVisibility} />
		</main>
	);
}
export default Body;
