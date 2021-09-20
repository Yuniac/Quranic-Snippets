/* global browser */
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
	UILang: "ar",
	QLang: "ar.asd",
};
browser.storage.sync.set(ayahObject);
