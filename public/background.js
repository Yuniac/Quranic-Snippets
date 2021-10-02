/* global browser */
const ayahObject = {
	ayah: "",
	ayahTimeStamp: new Date().getTime(),
	UILang: "ar",
	QLang: "ar.asad",
	favorites: [],
};
browser.storage.sync.set(ayahObject);
