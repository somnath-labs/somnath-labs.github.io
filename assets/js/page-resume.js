import { n as __exportAll } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, T as Sparkles } from "./component-agenticaisection.js";
import { n as FileText, t as ResumeDisplay } from "./component-resumedisplay.js";
//#region src/pages/public/Resume.tsx
var Resume_exports = /* @__PURE__ */ __exportAll({ default: () => Resume });
var import_jsx_runtime = require_jsx_runtime();
function Resume() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative min-h-screen py-12 px-4 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-purple-500/30 text-xs font-medium accent-purple mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-3.5 h-3.5" }), "Resume"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "cyber-section-title text-4xl sm:text-5xl font-black tracking-tight mb-4",
						children: "Professional Resume"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg text-soft font-light max-w-2xl mx-auto flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 accent-cyan" }), "My experience, skills and certifications at a glance"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeDisplay, {})]
		})
	});
}
//#endregion
export { Resume_exports as t };
