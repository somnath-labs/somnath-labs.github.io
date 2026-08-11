import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import Building from "../../../node_modules/lucide-react/dist/esm/icons/building.js";
import Mail from "../../../node_modules/lucide-react/dist/esm/icons/mail.js";
import MessageSquare from "../../../node_modules/lucide-react/dist/esm/icons/message-square.js";
import Phone from "../../../node_modules/lucide-react/dist/esm/icons/phone.js";
import Send from "../../../node_modules/lucide-react/dist/esm/icons/send.js";
import ShieldCheck from "../../../node_modules/lucide-react/dist/esm/icons/shield-check.js";
import User from "../../../node_modules/lucide-react/dist/esm/icons/user.js";
import ContactFormPopup from "./ContactFormPopup.js";
//#region src/components/public/ContactForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ContactForm({ emailAddress = "", linkedInUrl = "" }) {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		mobile: "",
		email: "",
		company: "",
		note: ""
	});
	const [showPopup, setShowPopup] = (0, import_react.useState)(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setShowPopup(true);
	};
	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hyper-glass rounded-3xl p-6 sm:p-8 lg:p-10 border border-purple-500/30 relative overflow-hidden h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-600" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 mb-8 pb-6 border-b line-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-2xl bg-cyan-500/20 blur-lg pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative p-3 rounded-2xl bg-gradient-to-br from-purple-600/40 to-cyan-500/30 border border-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-6 h-6 accent-cyan" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl sm:text-3xl font-black text-strong tracking-tight",
					children: "Send a Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-faint font-light mt-0.5",
					children: "Fill out the form and I'll get back to you shortly"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "name",
							className: "block text-xs font-semibold text-soft mb-2",
							children: ["Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "accent-cyan",
								children: "*"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
								className: "absolute left-4 top-1/2 -translate-y-1/2 text-faint",
								size: 17
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								id: "name",
								name: "name",
								value: formData.name,
								onChange: handleChange,
								required: true,
								className: "glass-input pl-11 pr-4 py-3.5 text-sm",
								placeholder: "Your name"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "mobile",
							className: "block text-xs font-semibold text-soft mb-2",
							children: ["Mobile Number ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint font-normal",
								children: "(optional)"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "absolute left-4 top-1/2 -translate-y-1/2 text-faint",
								size: 17
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								id: "mobile",
								name: "mobile",
								value: formData.mobile,
								onChange: handleChange,
								className: "glass-input pl-11 pr-4 py-3.5 text-sm",
								placeholder: "Your mobile number"
							})]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "email",
							className: "block text-xs font-semibold text-soft mb-2",
							children: ["Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint font-normal",
								children: "(optional)"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "absolute left-4 top-1/2 -translate-y-1/2 text-faint",
								size: 17
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								id: "email",
								name: "email",
								value: formData.email,
								onChange: handleChange,
								className: "glass-input pl-11 pr-4 py-3.5 text-sm",
								placeholder: "your.email@example.com"
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "company",
							className: "block text-xs font-semibold text-soft mb-2",
							children: ["Company Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-faint font-normal",
								children: "(optional)"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {
								className: "absolute left-4 top-1/2 -translate-y-1/2 text-faint",
								size: 17
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								id: "company",
								name: "company",
								value: formData.company,
								onChange: handleChange,
								className: "glass-input pl-11 pr-4 py-3.5 text-sm",
								placeholder: "Your company"
							})]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "note",
						className: "block text-xs font-semibold text-soft mb-2",
						children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-cyan",
							children: "*"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "note",
						name: "note",
						value: formData.note,
						onChange: handleChange,
						required: true,
						rows: 6,
						className: "glass-input px-4 py-3.5 text-sm resize-none",
						placeholder: "Tell me about your opportunity, collaboration idea, or just say hello..."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3 pt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "flex-1 neon-btn-primary !py-3.5 !rounded-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 18 }), "Send Message"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 pt-2 text-xs text-faint font-light",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
							size: 14,
							className: "accent-emerald"
						}), "Your information is never shared. I respond within 24-48 hours."]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactFormPopup, {
				isOpen: showPopup,
				onClose: () => setShowPopup(false),
				formData,
				emailAddress,
				linkedInUrl
			})
		]
	});
}
//#endregion
export { ContactForm as default };
