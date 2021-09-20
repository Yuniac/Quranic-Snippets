/* global browser */
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
	lang: "en",
	Qlang: "ar.asad",
};
browser.storage.sync.set(ayahObject);
console.log(browser.storage.sync.get());
