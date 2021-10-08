import React from "react";
import { zImportant, zRegular } from "../../style/_variables.module.scss";

import UILanguageSettings from "../mini-components/UILanguageSettings";
import ToggleButton from "../shared/ToggleButton";
import Divider from "../shared/Divider";
import QuranLanguageSettings from "../mini-components/QuranLanguageSetting";
import FrequencyOfNewAyahs from "../mini-components/FrequencyOfNewAyahs";

function Settings({ settingsVisibility, setSettingsVisibility, UILanguage, setUILanguage, QLanguage, setQLanguage, getRandomSnippet }) {
	return (
		<div
			className="settings popup-css"
			style={{
				visibility: settingsVisibility ? "visible" : "hidden",
				pointerEvents: settingsVisibility ? "auto" : "none",
				zIndex: settingsVisibility ? zImportant : zRegular,
			}}
		>
			<h2
				style={{
					direction: UILanguage === "ar" ? "rtl" : "ltr",
				}}
			>
				<span className="ar-text" style={{ display: UILanguage === "ar" ? "inline-block" : "none" }}>
					إعدادات الإضافة:
				</span>
				<span className="en-text" style={{ display: UILanguage === "ar" ? "none" : "inline-block" }}>
					Extensions Settings:
				</span>{" "}
			</h2>
			<ToggleButton setFunction={setSettingsVisibility} UILanguage={UILanguage} />
			<div className="settings-options">
				<UILanguageSettings UILanguage={UILanguage} setUILanguage={setUILanguage} />
				<Divider />
				<QuranLanguageSettings
					QLanguage={QLanguage}
					setQLanguage={setQLanguage}
					UILanguage={UILanguage}
					getRandomSnippet={getRandomSnippet}
				/>
				<Divider />
				<FrequencyOfNewAyahs UILanguage={UILanguage} />
			</div>
		</div>
	);
}

export default Settings;
