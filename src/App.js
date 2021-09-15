import "./style/reset.scss";
import "./App.scss";
//
import Body from "./components/Body";
import Footer from "./components/Footer";
import React from "react";

function App() {
	const [settingsVisibility, setsettingsVisibility] = React.useState(false);
	const [feedbackVisibility, setFeedbackVisibility] = React.useState(false);
	return (
		<div className="App">
			<Body
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
