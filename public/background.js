/* global browser */
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
	UILang: "en",
	QLang: "ar.asad",
	bookmarks: [],
	isIconFilled: false,
	freq: 3600000,
};
browser.storage.sync.set(ayahObject);
