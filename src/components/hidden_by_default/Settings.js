import React from "react";
import ToggleButton from "../shared/ToggleButton";
import { zImportant, zRegular } from "../../style/_variables.module.scss";
function Settings({ settingsVisibility, setSettingsVisibility }) {
	return (
		<div
			className="settings popup-css"
			style={{
				visibility: settingsVisibility ? "visible" : "hidden",
				pointerEvents: settingsVisibility ? "auto" : "none",
				zIndex: settingsVisibility ? zImportant : zRegular,
			}}
		>
			<ToggleButton setFunction={setSettingsVisibility} />
			{/* <div>Background stays here</div> */}
			<div className="settings-options">
				<h2>بعض المزايا القادمة للتطبيق في المستقبل:</h2>
				<ul>
					{/* <li>The UI language</li>
					<li>The verses languge</li>
					<li>The UI theme</li>\<li>The frequency of getting a new verse</li>
					<li>Bookmark verses</li>
					<li>Get additional information about verses</li>
					<li>And more to come</li> */}
					<li>لغة الواجهة</li>
					<li>القرآن باللغة الإنجليزية</li>
					<li>إمكانية تغيير لون الواجهة</li>
					<li>حفظ السور لتصفحها لاحقاً</li>
					<li>الحصول على معلومات إضافية حول بعض السور</li>
					<li>و المزيد!</li>
				</ul>
			</div>
		</div>
	);
}

export default Settings;
