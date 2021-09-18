/* global browser */
// browser.storage.local.clear();
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
};
browser.storage.local.set(ayahObject);
