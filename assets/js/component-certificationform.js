import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
import { n as FormField } from "./component-awardform.js";
//#region src/components/admin/forms/CertificationForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function CertificationForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		certification: "",
		organization: "",
		credential_id: "",
		credential_url: "",
		issue_date: "",
		expiry_date: "",
		description: "",
		show_on_website: true,
		show_on_resume: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({
			...initialData,
			issue_date: initialData.issue_date.split("T")[0],
			expiry_date: initialData.expiry_date ? initialData.expiry_date.split("T")[0] : ""
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
						label: "Certification Name",
						name: "certification",
						value: formData.certification || "",
						onChange: (v) => handleChange("certification", v),
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
						label: "Credential ID",
						name: "credential_id",
						value: formData.credential_id || "",
						onChange: (v) => handleChange("credential_id", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Credential URL",
						name: "credential_url",
						value: formData.credential_url || "",
						onChange: (v) => handleChange("credential_url", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Issue Date",
						name: "issue_date",
						type: "date",
						value: formData.issue_date || "",
						onChange: (v) => handleChange("issue_date", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Expiry Date",
						name: "expiry_date",
						type: "date",
						value: formData.expiry_date || "",
						onChange: (v) => handleChange("expiry_date", v)
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
					children: isLoading ? "Saving..." : "Save Certification"
				})]
			})
		]
	});
}
//#endregion
export { CertificationForm as t };
