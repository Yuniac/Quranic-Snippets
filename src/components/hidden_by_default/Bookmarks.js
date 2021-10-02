import React from "react";
import ToggleButton from "../shared/ToggleButton";
import "../../App.scss";

import { zImportant, zRegular } from "../../style/_variables.module.scss";

function Bookmarks({ bookmarksVisibility, setBookmarksVisibility }) {
	const form = React.useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		const name = form.current.elements.user_name;
		const email = form.current.elements.user_email;
		const message = form.current.elements.user_message;

		const url = form.current.action;

		const data = {};
		data.name = name.value;
		data.email = email.value;
		data.message = message.value;

		const dataAsJson = JSON.stringify(data);
		// console.log(dataAsJson)
		fetch(dataAsJson, {
			method: "POST",
			url: url,
			contentType: "application/json",
			headers: {
				Accept: "application/json",
			},
		})
			.then(() => {
				console.log("done");
			})
			.catch((e) => {
				console.log(e);
			});
	}
	return (
		<div
			className="feedback popup-css popup-css-full-height"
			style={{
				visibility: bookmarksVisibility ? "visible" : "hidden",
				display: bookmarksVisibility ? "block" : "none",
				pointerEvents: bookmarksVisibility ? "auto" : "none",
				zIndex: bookmarksVisibility ? zImportant : zRegular,
			}}
		>
			<ToggleButton setFunction={setBookmarksVisibility} />
			<div className="feedback-forms">
				<h3>هل لديك شكوى ما حول الإضافة هذه؟ أو أقتراح لإضافة ميزة أو تحسين طريقة عمل ميزة ما؟ رجاءاً تواصل معنا أدناه:</h3>
				<form action="https://getform.io/f/171f81a8-0cb4-40a7-94a2-61fa94365a26" method="POST" onSubmit={handleSubmit} ref={form}>
					<input type="text" placeholder="إسمك (غير إلزامي)" name="user_name" />
					<input type="email" placeholder="الإيميل الخاص فيك (غير إلزامي)" name="user_email" />
					<textarea placeholder="رسالتك..." name="user_message"></textarea>
					<button type="submit">أرسل</button>
				</form>
			</div>
		</div>
	);
}

export default Bookmarks;
