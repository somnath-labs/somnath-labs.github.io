import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import FormField from "./FormField.js";
//#region src/components/admin/forms/EducationForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function EducationForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		degree: "",
		field: "",
		institution: "",
		location: "",
		start_date: "",
		end_date: "",
		grade: "",
		description: "",
		achievements: [],
		show_on_website: true,
		show_on_resume: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({
			...initialData,
			start_date: initialData.start_date.split("T")[0],
			end_date: initialData.end_date.split("T")[0]
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
		className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Degree",
						name: "degree",
						value: formData.degree || "",
						onChange: (v) => handleChange("degree", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Field of Study",
						name: "field",
						value: formData.field || "",
						onChange: (v) => handleChange("field", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Institution",
						name: "institution",
						value: formData.institution || "",
						onChange: (v) => handleChange("institution", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Location",
						name: "location",
						value: formData.location || "",
						onChange: (v) => handleChange("location", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Start Date",
						name: "start_date",
						type: "date",
						value: formData.start_date || "",
						onChange: (v) => handleChange("start_date", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "End Date",
						name: "end_date",
						type: "date",
						value: formData.end_date || "",
						onChange: (v) => handleChange("end_date", v),
						required: true
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Grade/GPA",
				name: "grade",
				value: formData.grade || "",
				onChange: (v) => handleChange("grade", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Description",
				name: "description",
				type: "textarea",
				value: formData.description || "",
				onChange: (v) => handleChange("description", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Achievements (comma-separated)",
				name: "achievements",
				value: formData.achievements?.join(", ") || "",
				onChange: (v) => handleChange("achievements", v.split(",").map((t) => t.trim()).filter(Boolean))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_website || false,
							onChange: (e) => handleChange("show_on_website", e.target.checked),
							className: "rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
						}), "Show on Website"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_resume || false,
							onChange: (e) => handleChange("show_on_resume", e.target.checked),
							className: "rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
						}), "Show on Resume"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 disabled:opacity-50",
					children: isLoading ? "Saving..." : "Save Education"
				})]
			})
		]
	});
}
//#endregion
export { EducationForm as default };
