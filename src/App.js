/* global browser */
import "./style/reset.scss";
import "./App.scss";
//
import Body from "./components/Body";
import Footer from "./components/Footer";
import React from "react";

function App() {
	const [language, setLanguage] = React.useState("");
	const [settingsVisibility, setsettingsVisibility] = React.useState(false);
	const [feedbackVisibility, setFeedbackVisibility] = React.useState(false);

	function getStoredLang() {
		const storedData = browser.storage.sync.get();
		storedData.then(({ lang }) => {
			setLanguage(lang);
			// console.log(lang, "stored <");
			console.log(language);
		});
	}
	React.useEffect(() => {
		getStoredLang();
	}, [language]);
	return (
		<div className="App">
			<Body
				language={language}
				setLanguage={setLanguage}
				settingsVisibility={settingsVisibility}
				setSettingsVisibility={setsettingsVisibility}
				feedbackVisibility={feedbackVisibility}
				setFeedbackVisibility={setFeedbackVisibility}
			/>
			<Footer setSettingsVisibility={setsettingsVisibility} setFeedbackVisibility={setFeedbackVisibility} />
		</div>
	);
}

export default App;
