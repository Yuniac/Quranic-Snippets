import React from "react";
//
import { zImportant, zRegular } from "../../style/_variables.module.scss";
import Divider from "../shared/Divider";
//
import ToggleButton from "../shared/ToggleButton";
function About({ aboutVisibility, setAboutVisibility, UILanguage }) {
	return (
		<div
			className="popup-css popup-css-infinite about"
			style={{
				visibility: aboutVisibility ? "visible" : "hidden",
				pointerEvents: aboutVisibility ? "auto" : "none",
				zIndex: aboutVisibility ? zImportant : zRegular,
			}}
		>
			<h2
				style={{
					direction: UILanguage === "ar" ? "rtl" : "ltr",
				}}
			>
				<span className="ar-text" style={{ display: UILanguage === "ar" ? "inline-block" : "none" }}>
					حول قصاصات قرأنية:
				</span>
				<span className="en-text" style={{ display: UILanguage === "ar" ? "none" : "inline-block" }}>
					About Quranic Snippets:
				</span>
			</h2>
			<ToggleButton setFunction={setAboutVisibility} UILanguage={UILanguage} />
			<div className="about-body">
				<div className="about-body-arabic" style={{ display: UILanguage === "ar" ? "block" : "none", direction: "rtl" }}>
					<div className="about-body-arabic-settings">
						<p>
							قصاصات قرأنية هي إضافة متصفح تهدف إلى تمكين المستخدم من قرائة أية عشوائية من القرآن الكريم في أوقات عشوائية
							المستخدم بإمكانه التحكم بها. تقوم قصاصات قرأنية بإستخدام ذاكرة المتصفح الخاصة بك لتسجيل تفضيلاتك و الأيات، من
							خلال الأسفل بإمكانك الوصول إلى الإعدادات التي تمكنك من تعديل و جعل تجربتك ملائمة لك.
						</p>
						<h3>حول إعدادات ق ص:</h3>
						<Divider />
						<p>
							بإمكانك تغيير لغة واجهة البرنامج لكلا اللغتين العربية و الإنجليزية على حد سواء. <br />
							بإمكانك أيضاً تحديد لغة القرآن بشكل منصفل لتكون العربية أو الإنجليزية. <br />
							بإمكانك تغيير المدة الزمنية بين كل أية من نصف ساعة بين كل أية إلى ساعة، ساعتين... إلى حد ٢٤ ساعة
						</p>
					</div>
					<div className="about-body-arabic-bookmarks">
						<h3>حول تعليم الأيات (إضافة إشارة مرجعية):</h3>
						<Divider />
						<p>
							.إلى جانب كل أية سوف تجد زر لإضافة إشارة مرجعية للأية الظاهرة حالياً، تفضيل أية ما يسمح لك بالوصول لها لاحقاً في
							قسم المحفوظات الذي يمكنك الوصول إليه إيضاً من شريط المهام في الأسفل
							<br />
							بعد حفظ أية ما سوف يكون بإمكانك قرأتها متى شئت و إزالة لاحقاً أيضاً من خلال الضغط على زر إزالة الإشارة المرجعية
							الذي سوف يظهر بجانب كل أية
						</p>
						<p>
							ملحوظة مهمة: عندما تحفظ أية ما في اللغة العربية سوف تكون دائماً باللغة العربية، لحفظ الأية ذاتها في اللغة
							الإنجليزية يجيب عليك إزالة النسخة العربية أولاً. الأيات المحفوظة بلغة ما سوف تظهر زر إضافة إشارة مرجعية مملوء
							عندما يتم قرأتها في اللغة الأُخرى.
						</p>
					</div>
					<div className="about-body-arabic-why-qs">
						<h3>لماذا صنعت قصاصات قرأنية؟</h3>
						<Divider />
						<p>
							أنا شخص أتعلم تطوير الويب، فقررت أن أُنشاً شيء ما مفيد و أن أتعلم أثناء إنشائه أيضاً. و عندما بحثت عن إضافة
							متصفح تقوم بما تقوم به الأن قصاصات قرأنية لم أجد أي إضافة فعندها قررت إنشاء واحد بنفسي.
							<br />و الحقيقة أيضاً أني أردتُ إنشاء شيء ما ذا قيمة و شيء ما مفيد لمن يستخدمه. هذه الإضافة هي الأن و سوف تكون
							دائماً إن شاء الله مجانية بشكل كامل و أي شخص بإمكانها إستخدامها، الشيء الوحيد الذي بإمكانك فعله من أجلي هو
							الأستمتاع و الإستفادة من إضافة المتصفح هذه و القيام بالدعاء لي.
						</p>
					</div>
					<div className="about-body-arabic-contact-me">
						<h3>كيفية التواصل معي:</h3>
						<Divider />
						<p>
							إذا كان لديك أقتراح ما أو تريد التبليغ عن مشكلة في الإضافة أو طلب ميزة جديدة بإمكانك مراسلتي عن طريق الإيميل
							التالي:&nbsp;
							<em>
								<a className="highlight-link" href="mailto:yusuffathisabbag@gmail.com">
									yusuffathisabbag@gmail.com
								</a>
							</em>
						</p>
					</div>
				</div>
				<div className="about-body-english" style={{ display: UILanguage === "ar" ? "none" : "block", direction: "ltr" }}>
					<div className="about-body-english-settings">
						<p>
							Quranic Snippets is a browser extension that aims to allow its user to read random Quranic verse (ayah) from the
							Noble Quran at random times which can be customized by the user. QS uses your browser storage memory to store
							your preferences and to store verses, etc., from down below, you can access the settings which allows to edit
							and customize the behavior of QS and make the experience yours.
						</p>
						<h3>About QS settings:</h3>
						<Divider />
						<p>
							User can change the interface language from Arabic to English and vice versa <br />
							User can also change the Quran language independantly from the interface language, the Quran can be read in
							either Arabic or English. <br />
							User can change the frequency of which new ayahs are being provided, the frequency can be customized from half
							an hour to 1 hour, 2 hour... till 24 hours which is the current max amount of time between new ayahs.
						</p>
					</div>
					<div className="about-body-english-bookmarks">
						<h3>About Bookmarks:</h3>
						<Divider />
						<p>
							Next to each ayah you will find a "Add to bookmarks" button, when click it will bookmarks the current ayah.
							Bookmarking an ayah allows you to read it at any time later on from the bookmarks section which can be accessed
							from down below also.
							<br />
							After bookmarking an ayah, it can be viewed any time and read any time and can be also removed from the "Remove
							from bookmarks" button next to it.
						</p>
						<p>
							An important note regarding bookmarking: When you bookmark an ayah in, say English for example, it will always
							be in English and to bookmark the same ayah in Arabic you have to remove the English version first. Bookmarked
							ayahs in one language will have the bookmark sign checked next to them even when viewed in the other langauge.
						</p>
					</div>
					<div className="about-body-english-why-qs">
						<h3>Why Quranic Snippets?</h3>
						<Divider />
						<p>
							I'm a person who's learning web development, so I thought why not make something useful while I'm learning and I
							also wanted some sort of an extension that does what Quranic-Snippets do because I couldn't find any browser
							extension that does this. <br />I wanted to create something useful and meaningful, this extension and this
							project is and will always be free to use and for the sake of Allah, only thing you can do in return is to enjoy
							using it and do Dua for me.
						</p>
					</div>
					<div className="about-body-english-contact-me">
						<h3>How to contact me:</h3>
						<Divider />
						<p>
							If you have a suggestion or would like to report a bug or request a feature, or would like to get in touch with
							me then please feel free to email on this email:&nbsp;
							<em>
								<a className="highlight-link" href="mailto:yusuffathisabbag@gmail.com">
									yusuffathisabbag@gmail.com
								</a>
							</em>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
