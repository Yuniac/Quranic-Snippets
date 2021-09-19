/* global browser */
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
	lang: "ar",
};
browser.storage.sync.set(ayahObject);
