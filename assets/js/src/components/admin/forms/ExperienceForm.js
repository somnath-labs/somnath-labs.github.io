import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import FormField from "./FormField.js";
import Modal from "../common/Modal.js";
//#region src/components/admin/forms/ExperienceForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ExperienceForm({ isOpen, onClose, onSubmit, initialData }) {
	const [formData, setFormData] = (0, import_react.useState)(initialData || {
		role: "",
		location: "",
		start_date: "",
		end_date: "",
		current: false,
		description: "",
		responsibilities: [],
		achievements: [],
		technologies: [],
		show_on_website: true,
		show_on_resume: true,
		featured: false
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData(initialData);
		else setFormData({
			role: "",
			location: "",
			start_date: "",
			end_date: "",
			current: false,
			description: "",
			responsibilities: [],
			achievements: [],
			technologies: [],
			show_on_website: true,
			show_on_resume: true,
			featured: false
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
			setError(err.message || "Failed to save experience");
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
		title: initialData ? "Edit Experience" : "Add Experience",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "space-y-4",
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Role",
					name: "role",
					value: formData.role,
					onChange: (v) => handleChange("role", v),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Location",
					name: "location",
					value: formData.location,
					onChange: (v) => handleChange("location", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Start Date",
					name: "start_date",
					type: "date",
					value: formData.start_date,
					onChange: (v) => handleChange("start_date", v),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "End Date",
					name: "end_date",
					type: "date",
					value: formData.end_date,
					onChange: (v) => handleChange("end_date", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
						children: "Current Position"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: formData.current,
						onChange: (e) => handleChange("current", e.target.checked),
						className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Description",
					name: "description",
					type: "textarea",
					value: formData.description,
					onChange: (v) => handleChange("description", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
						children: "Technologies (comma-separated)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: formData.technologies?.join(", "),
						onChange: (e) => handleChange("technologies", e.target.value.split(",").map((t) => t.trim())),
						className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Show on Website"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.show_on_website,
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
						}),
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
export { ExperienceForm as default };
