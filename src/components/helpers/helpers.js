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
