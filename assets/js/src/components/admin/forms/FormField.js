import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
//#region src/components/admin/forms/FormField.tsx
var import_jsx_runtime = require_jsx_runtime();
function FormField({ label, name, type = "text", value, onChange, required = false, placeholder, options, error }) {
	const inputClassName = `w-full px-4 py-3 bg-white/5 dark:bg-slate-900/40 border rounded-xl text-strong focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 ${error ? "border-red-500" : "line-strong"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: name,
				className: "block text-sm font-semibold text-strong mb-2 tracking-wide",
				children: [
					label,
					" ",
					required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-red-500",
						children: "*"
					})
				]
			}),
			type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: name,
				value,
				onChange: (e) => onChange(e.target.value),
				required,
				placeholder,
				rows: 4,
				className: inputClassName
			}) : type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				id: name,
				value,
				onChange: (e) => onChange(e.target.value),
				required,
				className: inputClassName,
				children: options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: option.value,
					children: option.label
				}, option.value))
			}) : type === "checkbox" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: name,
				type: "checkbox",
				checked: value,
				onChange: (e) => onChange(e.target.checked),
				className: "w-5 h-5 bg-white/5 dark:bg-slate-900/40 border line-strong rounded focus:ring-cyan-400 text-cyan-500"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: name,
				type,
				value,
				onChange: (e) => onChange(e.target.value),
				required,
				placeholder,
				className: inputClassName
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-red-500",
				children: error
			})
		]
	});
}
//#endregion
export { FormField as default };
