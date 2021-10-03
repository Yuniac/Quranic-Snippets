/* global browser */
export async function getStoredValue(value, setter) {
	const storedData = await browser.storage.sync.get(value);
	const extractedValue = storedData[value];
	setter(extractedValue);
}

export function openPopup(setter) {
	setter(true);
}
