/* global browser */
// only stores the initial values on the very first time the extension runs;
if (!browser.storage.sync.get()) {
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
}
