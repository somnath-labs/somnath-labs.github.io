import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import FormField from "./FormField.js";
//#region src/components/admin/forms/LanguageForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var proficiencyOptions = [
	{
		value: "Beginner",
		label: "Beginner"
	},
	{
		value: "Conversational",
		label: "Conversational"
	},
	{
		value: "Fluent",
		label: "Fluent"
	},
	{
		value: "Professional",
		label: "Professional"
	},
	{
		value: "Native",
		label: "Native"
	}
];
function LanguageForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		language: "",
		speaking: "",
		writing: "",
		reading: "",
		listening: "",
		overall_proficiency: "Fluent",
		native: false,
		show_on_website: true,
		show_on_resume: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({ ...initialData });
		else setFormData({
			language: "",
			speaking: "",
			writing: "",
			reading: "",
			listening: "",
			overall_proficiency: "Fluent",
			native: false,
			show_on_website: true,
			show_on_resume: true
		});
	}, [initialData]);
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await onSubmit(formData);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "hyper-glass rounded-2xl border line-soft p-6 mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-base font-bold text-strong mb-5 tracking-tight",
				children: initialData ? "Edit Language" : "Add Language"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Language",
						name: "language",
						value: formData.language || "",
						onChange: (v) => handleChange("language", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Overall Proficiency",
						name: "overall_proficiency",
						type: "select",
						value: formData.overall_proficiency || "Fluent",
						onChange: (v) => handleChange("overall_proficiency", v),
						options: proficiencyOptions
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Speaking",
						name: "speaking",
						type: "select",
						value: formData.speaking || "",
						onChange: (v) => handleChange("speaking", v),
						options: proficiencyOptions
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Writing",
						name: "writing",
						type: "select",
						value: formData.writing || "",
						onChange: (v) => handleChange("writing", v),
						options: proficiencyOptions
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Reading",
						name: "reading",
						type: "select",
						value: formData.reading || "",
						onChange: (v) => handleChange("reading", v),
						options: proficiencyOptions
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Listening",
						name: "listening",
						type: "select",
						value: formData.listening || "",
						onChange: (v) => handleChange("listening", v),
						options: proficiencyOptions
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-6 mt-2 mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.native || false,
							onChange: (e) => handleChange("native", e.target.checked),
							className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
						}), "Native language"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_website ?? true,
							onChange: (e) => handleChange("show_on_website", e.target.checked),
							className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
						}), "Show on Website"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_resume ?? true,
							onChange: (e) => handleChange("show_on_resume", e.target.checked),
							className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
						}), "Show on Resume"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-4 py-2 border line-strong rounded-xl text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium disabled:opacity-50",
					children: isLoading ? "Saving..." : initialData ? "Update Language" : "Add Language"
				})]
			})
		]
	});
}
//#endregion
export { LanguageForm as default };
