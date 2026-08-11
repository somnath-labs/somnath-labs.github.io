import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import Check from "../../../node_modules/lucide-react/dist/esm/icons/check.js";
import Copy from "../../../node_modules/lucide-react/dist/esm/icons/copy.js";
import Mail from "../../../node_modules/lucide-react/dist/esm/icons/mail.js";
import X from "../../../node_modules/lucide-react/dist/esm/icons/x.js";
//#region src/components/public/ContactFormPopup.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var LinkedInIcon = ({ size = 20 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "currentColor",
	className: "shrink-0",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
});
function ContactFormPopup({ isOpen, onClose, formData, emailAddress, linkedInUrl }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	if (!isOpen) return null;
	const draftMessage = `Hi Somnath,

${formData.note}

Best regards,
${formData.name}
${formData.company ? `${formData.company}` : ""}
Email: ${formData.email}
Mobile: ${formData.mobile}`;
	const handleMail = () => {
		const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
		const body = encodeURIComponent(draftMessage);
		window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
		onClose();
	};
	const handleLinkedIn = () => {
		navigator.clipboard.writeText(draftMessage);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
			window.open(linkedInUrl, "_blank");
			onClose();
		}, 1500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hyper-glass w-full max-w-md rounded-2xl p-6 border border-cyan-500/30 relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute top-4 right-4 text-faint hover:text-strong transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong mb-2",
					children: "Send Message via"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-soft mb-6",
					children: "Choose how you'd like to send your message. A draft will be prepared for you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleMail,
						className: "w-full flex items-center gap-3 p-4 rounded-xl surface-soft border line-soft hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 20 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-left flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold text-strong",
								children: "Email Client"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-faint",
								children: "Opens your default mail app"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleLinkedIn,
						className: "w-full flex items-center gap-3 p-4 rounded-xl surface-soft border line-soft hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform",
								children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 20,
									className: "text-emerald-400"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInIcon, { size: 20 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-strong",
									children: "LinkedIn"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-faint",
									children: copied ? "Message copied! Opening LinkedIn..." : "Copies draft & opens LinkedIn"
								})]
							}),
							!copied && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
								size: 16,
								className: "text-faint group-hover:text-blue-400"
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
export { ContactFormPopup as default };
