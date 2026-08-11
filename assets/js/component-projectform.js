import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
import { n as FormField } from "./component-awardform.js";
import { n as Modal } from "./component-experienceform.js";
//#region src/components/admin/forms/ProjectForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ProjectForm({ isOpen, onClose, onSubmit, initialData }) {
	const [formData, setFormData] = (0, import_react.useState)(initialData || {
		slug: "",
		name: "",
		description: "",
		problem: "",
		solution: "",
		my_role: "",
		architecture: "",
		features: [],
		technologies: [],
		challenges: [],
		what_learned: "",
		results: "",
		category: "other",
		featured: false,
		show_on_website: true,
		show_on_resume: true,
		demo_url: "",
		github_url: "",
		documentation_url: ""
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData(initialData);
		else setFormData({
			slug: "",
			name: "",
			description: "",
			solution: "",
			category: "pega",
			technologies: [],
			features: [],
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
			setError(err.message || "Failed to save project");
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
		title: initialData ? "Edit Project" : "Add Project",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "space-y-4 max-h-[70vh] overflow-y-auto",
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Project Name",
					name: "name",
					value: formData.name,
					onChange: (v) => handleChange("name", v),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Slug (URL-friendly)",
					name: "slug",
					value: formData.slug,
					onChange: (v) => handleChange("slug", v),
					required: true,
					placeholder: "my-awesome-project"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Category",
					name: "category",
					type: "select",
					value: formData.category,
					onChange: (v) => handleChange("category", v),
					options: [
						{
							value: "client_served",
							label: "Client Served"
						},
						{
							value: "poc",
							label: "PoC"
						},
						{
							value: "component",
							label: "Component"
						},
						{
							value: "project_build",
							label: "Project Build"
						},
						{
							value: "technology",
							label: "Technology"
						},
						{
							value: "pega",
							label: "Pega"
						},
						{
							value: "pega_cloud",
							label: "Pega Cloud"
						},
						{
							value: "agentic_ai",
							label: "Agentic AI"
						},
						{
							value: "ai",
							label: "AI"
						},
						{
							value: "software_engineering",
							label: "Software Engineering"
						},
						{
							value: "personal",
							label: "Personal"
						},
						{
							value: "sample",
							label: "Sample"
						},
						{
							value: "open_source",
							label: "Open Source"
						},
						{
							value: "other",
							label: "Other"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Description",
					name: "description",
					type: "textarea",
					value: formData.description,
					onChange: (v) => handleChange("description", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Problem",
					name: "problem",
					type: "textarea",
					value: formData.problem,
					onChange: (v) => handleChange("problem", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Solution",
					name: "solution",
					type: "textarea",
					value: formData.solution,
					onChange: (v) => handleChange("solution", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "My Role",
					name: "my_role",
					value: formData.my_role,
					onChange: (v) => handleChange("my_role", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Technologies (comma-separated)",
					name: "technologies",
					value: formData.technologies?.join(", "),
					onChange: (v) => handleChange("technologies", v.split(",").map((t) => t.trim()))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "GitHub URL",
					name: "github_url",
					value: formData.github_url,
					onChange: (v) => handleChange("github_url", v),
					placeholder: "https://github.com/username/repo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Demo URL",
					name: "demo_url",
					value: formData.demo_url,
					onChange: (v) => handleChange("demo_url", v),
					placeholder: "https://demo.example.com"
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
export { ProjectForm as t };
