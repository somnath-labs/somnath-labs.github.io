import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import FormField from "./FormField.js";
//#region src/components/admin/forms/AwardForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function AwardForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		award: "",
		organization: "",
		date: "",
		description: "",
		credential: "",
		featured: false,
		show_on_website: true,
		show_on_resume: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({
			...initialData,
			date: initialData.date ? initialData.date.split("T")[0] : ""
		});
		else setFormData({
			award: "",
			organization: "",
			date: "",
			description: "",
			credential: "",
			featured: false,
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
				children: initialData ? "Edit Award" : "Add Award"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Award Title",
						name: "award",
						value: formData.award || "",
						onChange: (v) => handleChange("award", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Organization",
						name: "organization",
						value: formData.organization || "",
						onChange: (v) => handleChange("organization", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Date",
						name: "date",
						type: "date",
						value: formData.date || "",
						onChange: (v) => handleChange("date", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Credential / Link",
						name: "credential",
						value: formData.credential || "",
						onChange: (v) => handleChange("credential", v)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Description",
				name: "description",
				type: "textarea",
				value: formData.description || "",
				onChange: (v) => handleChange("description", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-6 mt-2 mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.featured || false,
							onChange: (e) => handleChange("featured", e.target.checked),
							className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
						}), "Featured"]
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
					children: isLoading ? "Saving..." : initialData ? "Update Award" : "Add Award"
				})]
			})
		]
	});
}
//#endregion
export { AwardForm as default };
