import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
//#region src/components/admin/forms/FormField.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
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
//#region src/components/admin/forms/AwardForm.tsx
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
export { FormField as n, AwardForm as t };
