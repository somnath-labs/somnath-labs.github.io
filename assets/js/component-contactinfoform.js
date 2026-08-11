import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
import { n as FormField } from "./component-awardform.js";
//#region src/components/admin/forms/ContactInfoForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ContactInfoForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		heading: "Let's Build Something Great",
		subtitle: "Have a question, opportunity, or just want to say hello?",
		email: "",
		phone: "",
		location: "",
		availability: "Open to opportunities",
		response_time: "I typically respond within 24-48 hours.",
		show_on_website: true
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
				children: "Contact Page Details"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Heading",
						name: "heading",
						value: formData.heading || "",
						onChange: (v) => handleChange("heading", v),
						required: true,
						placeholder: "Let's Build Something Great"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Email",
						name: "email",
						type: "email",
						value: formData.email || "",
						onChange: (v) => handleChange("email", v),
						required: true,
						placeholder: "somnathhaldar14@gmail.com"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Phone",
						name: "phone",
						value: formData.phone || "",
						onChange: (v) => handleChange("phone", v),
						placeholder: "+46 70 000 00 00"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Location",
						name: "location",
						value: formData.location || "",
						onChange: (v) => handleChange("location", v),
						placeholder: "Stockholm, Sweden"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Availability",
						name: "availability",
						value: formData.availability || "",
						onChange: (v) => handleChange("availability", v),
						placeholder: "Open to opportunities"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Subtitle",
				name: "subtitle",
				type: "textarea",
				value: formData.subtitle || "",
				onChange: (v) => handleChange("subtitle", v),
				placeholder: "Have a question, opportunity, or just want to say hello?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Response Time Note",
				name: "response_time",
				type: "textarea",
				value: formData.response_time || "",
				onChange: (v) => handleChange("response_time", v),
				placeholder: "I typically respond within 24-48 hours."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm font-medium text-strong",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: formData.show_on_website ?? true,
						onChange: (e) => handleChange("show_on_website", e.target.checked),
						className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
					}), "Show contact info on website"]
				})
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
					children: isLoading ? "Saving..." : "Save Contact Info"
				})]
			})
		]
	});
}
//#endregion
export { ContactInfoForm as t };
