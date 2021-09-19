import React from "react";
import LanguageSettings from "../mini-compoenents/LanguageSettings";
import ToggleButton from "../shared/ToggleButton";
import { zImportant, zRegular } from "../../style/_variables.module.scss";
function Settings({ settingsVisibility, setSettingsVisibility, language, setLanguage }) {
	return (
		<div
			className="settings popup-css"
			style={{
				visibility: settingsVisibility ? "visible" : "hidden",
				pointerEvents: settingsVisibility ? "auto" : "none",
				zIndex: settingsVisibility ? zImportant : zRegular,
			}}
		>
			<ToggleButton setFunction={setSettingsVisibility} language={language} />
			{/* <div>Background stays here</div> */}
			<div className="settings-options">
				<h2
					style={{
						direction: language === "ar" ? "rtl" : "ltr",
					}}
				>
					<span className="ar-text" style={{ display: language === "ar" ? "inline-block" : "none" }}>
						إعدادات الإضافة:
					</span>
					<span className="en-text" style={{ display: language === "ar" ? "none" : "inline-block" }}>
						Extensions Settings:
					</span>{" "}
				</h2>
				<LanguageSettings language={language} setLanguage={setLanguage} />
				{/* <ul> */}
				{/* <li>The freq of which new verses display</li>
					<li>The UI language</li>
					<li>The verses languge</li>
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
