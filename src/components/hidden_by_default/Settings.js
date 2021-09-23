import React from "react";
import UILanguageSettings from "../mini-components/UILanguageSettings";
import { zImportant, zRegular } from "../../style/_variables.module.scss";

import ToggleButton from "../shared/ToggleButton";
import Divider from "../shared/Divider";
import QuranLanguageSettings from "../mini-components/QuranLanguageSetting";

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
			{/* <div>Background stays here</div> */}
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
				{/* <ul> */}
				{/* <li>The freq of which new verses display</li>
					<li>The UI language</li>
					<li>The verses languge</li>
					<li>Next snippt in {nextSnippetTimer}</li>
					<li>The UI theme</li>\<li>The frequency of getting a new verse</li>
					<li>Bookmark verses</li>
					<li>Get additional information about verses</li>
					<li>And more to come</li> */}
				{/* <li>لغة الواجهة</li>
					<li>القرآن باللغة الإنجليزية</li>
					<li>إمكانية تغيير لون الواجهة</li>
					<li>حفظ السور لتصفحها لاحقاً</li>
					<li>الحصول على معلومات إضافية حول بعض السور</li>
					<li>و المزيد!</li> */}
				{/* </ul> */}
			</div>
		</div>
	);
}

export default Settings;
