/* global chrome */
export async function getStoredValue(value, setter) {
	function updateLocalValues(storedData) {
		setter(storedData[value]);
	}
	chrome.storage.sync.get(value, updateLocalValues);
}

export function openPopup(setter) {
	setter(true);
}
export function cleanUpUneededCharacters(index, array) {
	const regex = /[-–:;/”,]/;
	// if the first letter isn't a character, remove it with the exception of brackets [] () {};
	if (index === "start") {
		if (regex.test(array[0])) {
			array.shift();
			return array;
		}
		return array;
	}
	if (index === "end") {
		// sometimes also, the last 'letter' in the ayah might be a colon, an underscore or a dash, we remove them;
		const lastLetterOfAyah = array[array.length - 1];
		// this regex matches for some of the characters that don't make sense to have alone at the end of the verse. bear in mind that when reading the Quran normally, those verses having such characters at the end of them is normal because there is context to it, there are verses before them and after them which isn't the case here;
		if (regex.test(lastLetterOfAyah)) {
			array.pop();
		}
		return array;
	}
}
