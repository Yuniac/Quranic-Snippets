/* global browser */
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
	UILang: "ar",
	QLang: "ar.asad",
	bookmarks: [],
	isIconFilled: false,
	freq: 3600000,
};
browser.storage.sync.set(ayahObject);
