import React from "react";
import ToggleButton from "../shared/ToggleButton";
import "../../App.scss";

import { zImportant, zRegular } from "../../style/_variables.module.scss";

function Feedback({ feedbackVisibility, setFeedbackVisibility }) {
	return (
		<div
			className="feedback popup-css popup-css-full-height"
			style={{
				visibility: feedbackVisibility ? "visible" : "hidden",
				display: feedbackVisibility ? "block" : "none",
				pointerEvents: feedbackVisibility ? "auto" : "none",
				zIndex: feedbackVisibility ? zImportant : zRegular,
			}}
		>
			<ToggleButton setFunction={setFeedbackVisibility} />
			<div className="feedback-forms">
				<h3>هل لديك شكوى ما حول الإضافة هذه؟ أو أقتراح لإضافة ميزة أو تحسين طريقة عمل ميزة ما؟ رجاءاً تواصل معنا أدناه:</h3>
				<form action="">
					<input type="text" placeholder="إسمك (غير إلزامي)" />
					<input type="email" placeholder="الإيميل الخاص فيك (غير إلزامي)" />
					<textarea placeholder="رسالتك..."></textarea>
					<button type="submit">أرسل</button>
				</form>
			</div>
		</div>
	);
}

export default Feedback;
