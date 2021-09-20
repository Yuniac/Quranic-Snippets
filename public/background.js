/* global browser */
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
	currentAyahNumber: null,
	curentAyahNumberInSurah: null,
	currentSurahNameEN: null,
	currentSurahNameAR: null,
	UILang: "ar",
	QLang: "ar.asad",
};
browser.storage.sync.set(ayahObject);
