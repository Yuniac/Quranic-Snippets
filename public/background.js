/* global browser */
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
	UILang: "ar",
	QLang: "ar.asad",
	bookmarks: [],
};
browser.storage.sync.set(ayahObject);
