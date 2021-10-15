/* global chrome */
// only stores this information on the very first time this extension runs;
chrome.storage.sync.get(null, (data) => {
	const keys = Object.keys(data);
	if (!keys.length) {
		const ayahObject = {
			ayah: "",
			ayahTimeStamp: new Date().getTime(),
			UILang: "en",
			QLang: "ar.asad",
			bookmarks: [],
			isIconFilled: false,
			freq: 3600000,
		};

		chrome.storage.sync.set(ayahObject, (data) => {
			console.log(data);
		});
	}
});
