import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
import { n as FormField } from "./component-awardform.js";
//#region src/components/admin/forms/SiteSettingsForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function SiteSettingsForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		site_title: "",
		site_description: "",
		contact_heading: "Let's Connect",
		projects_heading: "Things I've Built",
		hero_highlight_1: "Pega Developer",
		hero_highlight_2: "Pega Cloud",
		hero_highlight_3: "Agentic AI",
		hero_highlight_4: "Software Engineering",
		theme: "system"
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({ ...initialData });
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
		className: "hyper-glass rounded-2xl border line-soft p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-base font-bold text-strong mb-5 tracking-tight",
				children: "Website Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Site Title",
				name: "site_title",
				value: formData.site_title || "",
				onChange: (v) => handleChange("site_title", v),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Site Description",
				name: "site_description",
				type: "textarea",
				value: formData.site_description || "",
				onChange: (v) => handleChange("site_description", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Contact Page Heading",
						name: "contact_heading",
						value: formData.contact_heading || "",
						onChange: (v) => handleChange("contact_heading", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Projects Page Heading",
						name: "projects_heading",
						value: formData.projects_heading || "",
						onChange: (v) => handleChange("projects_heading", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Hero Highlight 1",
						name: "hero_highlight_1",
						value: formData.hero_highlight_1 || "",
						onChange: (v) => handleChange("hero_highlight_1", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Hero Highlight 2",
						name: "hero_highlight_2",
						value: formData.hero_highlight_2 || "",
						onChange: (v) => handleChange("hero_highlight_2", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Hero Highlight 3",
						name: "hero_highlight_3",
						value: formData.hero_highlight_3 || "",
						onChange: (v) => handleChange("hero_highlight_3", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Hero Highlight 4",
						name: "hero_highlight_4",
						value: formData.hero_highlight_4 || "",
						onChange: (v) => handleChange("hero_highlight_4", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Default Theme",
						name: "theme",
						type: "select",
						value: formData.theme || "system",
						onChange: (v) => handleChange("theme", v),
						options: [
							{
								value: "system",
								label: "System"
							},
							{
								value: "light",
								label: "Light"
							},
							{
								value: "dark",
								label: "Dark"
							}
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-4 py-2 border line-strong rounded-xl text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium disabled:opacity-50",
					children: isLoading ? "Saving..." : "Save Website Settings"
				})]
			})
		]
	});
}
//#endregion
export { SiteSettingsForm as t };
