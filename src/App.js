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
	const [bookmarksVisibility, setBookmarksVisibility] = React.useState(false);
	const [aboutVisibility, setAboutVisibility] = React.useState(false);
	const [footerVisibility, setFooterVisibility] = React.useState(true);

	React.useEffect(() => {
		getStoredValue("UILang", setUILanguage);
	}, [UILanguage]);
	return (
		<div className="App" onContextMenu={(e) => e.preventDefault()}>
			<Body
				UILanguage={UILanguage}
				setUILanguage={setUILanguage}
				settingsVisibility={settingsVisibility}
				setSettingsVisibility={setSettingsVisibility}
				bookmarksVisibility={bookmarksVisibility}
				setBookmarksVisibility={setBookmarksVisibility}
				aboutVisibility={aboutVisibility}
				setAboutVisibility={setAboutVisibility}
				setFooterVisibility={setFooterVisibility}
			/>
			<Footer
				setSettingsVisibility={setSettingsVisibility}
				setBookmarksVisibility={setBookmarksVisibility}
				setAboutVisibility={setAboutVisibility}
				language={UILanguage}
				footerVisibility={footerVisibility}
			/>
		</div>
	);
}

export default App;
