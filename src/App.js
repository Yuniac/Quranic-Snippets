/* global browser */
import "./style/reset.scss";
import "./App.scss";
//
import Body from "./components/Body";
import Footer from "./components/Footer";
import React from "react";
//
import { getStoredValue } from "./components/helpers/helpers";

function App() {
	const [UILanguage, setUILanguage] = React.useState("");
	const [settingsVisibility, setSettingsVisibility] = React.useState(false);
	const [feedbackVisibility, setFeedbackVisibility] = React.useState(false);

	React.useEffect(() => {
		getStoredValue("UILang", setUILanguage);
	}, [UILanguage]);
	return (
		<div className="App">
			<Body
				UILanguage={UILanguage}
				setUILanguage={setUILanguage}
				settingsVisibility={settingsVisibility}
				setSettingsVisibility={setSettingsVisibility}
				feedbackVisibility={feedbackVisibility}
				setFeedbackVisibility={setFeedbackVisibility}
			/>
			<Footer setSettingsVisibility={setSettingsVisibility} setFeedbackVisibility={setFeedbackVisibility} language={UILanguage} />
		</div>
	);
}

export default App;
