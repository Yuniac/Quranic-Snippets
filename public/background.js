/* global chrome */
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
	UILang: "en",
	QLang: "ar.asad",
	bookmarks: [],
	isIconFilled: false,
	freq: 3600000,
};
chrome.storage.sync.set(ayahObject);
