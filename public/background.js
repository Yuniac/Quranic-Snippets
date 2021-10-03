/* global browser */
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
	UILang: "ar",
	QLang: "ar.asad",
	bookmarks: [],
	isIconFilled: false,
};
browser.storage.sync.set(ayahObject);
