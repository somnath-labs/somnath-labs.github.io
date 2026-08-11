import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
//#region src/components/admin/common/Toggle.tsx
var import_jsx_runtime = require_jsx_runtime();
/**
* Reusable enable/disable switch. When on, the item is visible on the site.
*/
function Toggle({ checked, onChange, label, disabled = false, size = "md" }) {
	const dims = size === "sm" ? "w-8 h-[18px]" : "w-11 h-6";
	const knob = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
	const translate = size === "sm" ? "translate-x-[14px]" : "translate-x-5";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		"aria-label": label || (checked ? "Disable" : "Enable"),
		disabled,
		onClick: () => onChange(!checked),
		className: `relative inline-flex items-center ${dims} rounded-full transition-colors duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${checked ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" : "bg-slate-400/40 dark:bg-slate-700/60"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-0.5 ${knob} bg-white rounded-full shadow-md transform transition-transform duration-300 ${checked ? translate : "translate-x-0"}` })
	});
}
//#endregion
export { Toggle as default };
