import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
import { n as FormField } from "./component-awardform.js";
import { n as Modal } from "./component-experienceform.js";
//#region src/components/admin/forms/SkillForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function SkillForm({ isOpen, onClose, onSubmit, initialData }) {
	const [formData, setFormData] = (0, import_react.useState)(initialData || {
		name: "",
		description: "",
		experience: "",
		level: "exploring",
		featured: false,
		show_on_website: true,
		show_on_resume: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData(initialData);
		else setFormData({
			name: "",
			description: "",
			level: "primary",
			category_id: "",
			experience: "",
			featured: false,
			show_on_website: true,
			show_on_resume: true
		});
	}, [initialData]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await onSubmit(formData);
			onClose();
		} catch (err) {
			setError(err.message || "Failed to save skill");
		} finally {
			setLoading(false);
		}
	};
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		isOpen,
		onClose,
		title: initialData ? "Edit Skill" : "Add Skill",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "space-y-4",
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Skill Name",
					name: "name",
					value: formData.name,
					onChange: (v) => handleChange("name", v),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Description",
					name: "description",
					type: "textarea",
					value: formData.description,
					onChange: (v) => handleChange("description", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Experience Level",
					name: "level",
					type: "select",
					value: formData.level,
					onChange: (v) => handleChange("level", v),
					options: [
						{
							value: "primary",
							label: "Primary"
						},
						{
							value: "secondary",
							label: "Secondary"
						},
						{
							value: "exploring",
							label: "Exploring"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Experience Description",
					name: "experience",
					type: "textarea",
					value: formData.experience,
					onChange: (v) => handleChange("experience", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Featured"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.featured,
								onChange: (e) => handleChange("featured", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Show on Website"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.show_on_website ?? true,
								onChange: (e) => handleChange("show_on_website", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Show on Resume"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.show_on_resume,
								onChange: (e) => handleChange("show_on_resume", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "flex-1 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:opacity-90 disabled:opacity-50",
						children: loading ? "Saving..." : "Save"
					})]
				})
			]
		})
	});
}
//#endregion
export { SkillForm as t };
