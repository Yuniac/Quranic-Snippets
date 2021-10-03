/* global browser */
// This stops eslint from breaking the code execution because, here and right now, "browser" isn't defined, but when this app is packged and ran as an extension, "browser" is indeed defined;

import React from "react";
//
import Header from "./Header";
import Snippet from "./Snippet";
import Settings from "./hidden_by_default/Settings";
import Bookmarks from "./hidden_by_default/Bookmarks";
import About from "./hidden_by_default/About";
//
import { getStoredValue } from "./helpers/helpers";

function Body({
	settingsVisibility,
	setSettingsVisibility,
	bookmarksVisibility,
	setBookmarksVisibility,
	aboutVisibility,
	setAboutVisibility,
	UILanguage,
	setUILanguage,
}) {
	const [QLanguage, setQLanguage] = React.useState("");
	const [bookmarks, setBookmarks] = React.useState([]);

	// get the already stored language, run once only;
	React.useEffect(() => {
		getStoredValue("QLang", setQLanguage);
	}, []);

	const getAyahURL = "http://api.alquran.cloud/v1/ayah/";
	// this state will manage the ayah that is visible to the user when he opens the extension
	const [ayah, setAyah] = React.useState("");
	// const [newSnippetFrequency, setNewSnippetFrequency] = React.useState(55);
	// console.log(newSnippetFrequency);

	let currentAyahNumber, currentAyahNumberGlobally, currentSurahNumber, currentAyahText, currentSurahNameEN, currentSurahNameAR;
	let urlToFetch;

	async function getRandomSnippet(sameAyahInSecondLang, forced, storedFreq) {
		// get stored ayah and its related information
		const { ayah, ayahTimeStamp, UILang, QLang, bookmarks, isIconFilled } = await browser.storage.sync.get([
			"ayah",
			"ayahTimeStamp",
			"UILang",
			"QLang",
			"bookmarks",
			"isIconFilled",
		]);

		// if nothing is stored, no old ayah, first time user OR an ayah indeed exist but its older than the user's defeind rate of getting new ayahs;
		// or if 'sameAyahInSecondLang' argument is present as true/false, true = fetch the same ayah but in the second langauge, will only be called when the language changes. if 'forced' = true then regardless of anything, fetch a new ayah in whichever current language we have, will only be called from 'get a new snippet now' button;
		if (!ayah.length || new Date().getTime() - ayahTimeStamp > storedFreq || sameAyahInSecondLang) {
			// fetch a new ayah
			const randomAyahNumber = Math.floor(Math.random() * 6236) + 1;
			// determine what's the fetching url;
			if (sameAyahInSecondLang) {
				const { currentAyahNumberGlobally } = await browser.storage.sync.get("currentAyahNumberGlobally");
				// if forced, then user has requested to get a new snippt, regardless of everything so fetch anew;
				if (forced) {
					urlToFetch = getAyahURL + randomAyahNumber + "/" + QLang;
				} else {
					// else, get the same verse that is stored but in th second language
					urlToFetch = getAyahURL + currentAyahNumberGlobally + "/" + QLang;
				}
			} else {
				urlToFetch = getAyahURL + randomAyahNumber + "/" + QLang;
			}
			// const urlToFetch = getAyahURL + randomAyahNumber + "/" + QLang;
			const fetchedAyah = await fetch(urlToFetch);
			let fetchedAyahAsJson = await fetchedAyah.json();

			fetchedAyahAsJson = fetchedAyahAsJson.data;
			currentAyahNumber = fetchedAyahAsJson.numberInSurah;
			currentAyahNumberGlobally = fetchedAyahAsJson.number;
			currentSurahNumber = fetchedAyahAsJson.surah.number;
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
				currentAyahNumberGlobally: currentAyahNumberGlobally,
				currentSurahNumber: currentSurahNumber,
				currentSurahNameEN: currentSurahNameEN,
				currentSurahNameAR: currentSurahNameAR,
				UILang: UILang,
				freq: storedFreq,
				isIconFilled: isIconFilled,
				bookmarks: bookmarks,
			};
			// if forced is true it means a totally new ayah was being requested, in such case make sure that the icon isn't filled = ayah not bookmakred
			if (forced) {
				newStoredAyah.isIconFilled = false;
			}
			// update the state with the newly fetched ayah
			setAyah(processedAyah);
			// store the new ayah with a timeStamp and any other info I might add later on;
			browser.storage.sync.set(newStoredAyah);
		} else {
			// otherwise, just use the old already stored ayah and use it to update the state;
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
	async function getStoredFreq() {
		const { freq } = await browser.storage.sync.get("freq");
		getRandomSnippet(false, false, freq);
	}
	React.useEffect(() => {
		getStoredFreq();
	}, []);

	return (
		<main>
			<Header UILanguage={UILanguage} />
			<Snippet
				ayah={ayah}
				UILanguage={UILanguage}
				getRandomSnippet={getRandomSnippet}
				QLanguage={QLanguage}
				bookmarks={bookmarks}
				setBookmarks={setBookmarks}
			/>
			<Settings
				settingsVisibility={settingsVisibility}
				setSettingsVisibility={setSettingsVisibility}
				UILanguage={UILanguage}
				setUILanguage={setUILanguage}
				QLanguage={QLanguage}
				setQLanguage={setQLanguage}
				getRandomSnippet={getRandomSnippet}
			/>
			<About aboutVisibility={aboutVisibility} setAboutVisibility={setAboutVisibility} UILanguage={UILanguage} />
			<Bookmarks
				bookmarks={bookmarks}
				setBookmarks={setBookmarks}
				bookmarksVisibility={bookmarksVisibility}
				setBookmarksVisibility={setBookmarksVisibility}
				QLanguage={QLanguage}
				UILanguage={UILanguage}
				ayah={ayah}
			/>
		</main>
	);
}
export default Body;
