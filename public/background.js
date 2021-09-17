/* global browser */
function send(msg) {
	browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		tabs.sendMessage(tabs[0].id, { message: msg }, (x) => {
			console.log(x);
		});
		console.log(tabs[0]);
	});
}

send(1);
// browser.storage.sync
// 	.set({ freq: 1 })
// 	.then(() => {
// 		const freq = browser.storage.sync.get("freq");
// 		freq.then

// 	})
// 	.catch((e) => console.log("Error", e));

// currentBrowser.storage.sync
// 	.get()
// 	.then((storedData) => {
// 		if (storedData === {} || !storedData) {
// 			currentBrowser.storage.sync.set(360000).then((storedData) => {
// 				console.log(storedData);
// 			});
// 		} else {
// 			console.log(storedData);
// 		}
// 	})
// 	.catch((e) => console.log("ERROR", e));
