import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import FormField from "./FormField.js";
//#region src/components/admin/forms/ProfileForm.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ProfileForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		first_name: "",
		last_name: "",
		email: "",
		short_bio: "",
		long_bio: "",
		career_summary: "",
		professional_interests: [],
		personal_interests: [],
		current_focus: "",
		profile_image: "",
		show_on_website: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData(initialData);
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
		className: "hyper-glass border line-soft rounded-2xl p-6 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "First Name",
					name: "first_name",
					value: formData.first_name || "",
					onChange: (v) => handleChange("first_name", v),
					required: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Last Name",
					name: "last_name",
					value: formData.last_name || "",
					onChange: (v) => handleChange("last_name", v),
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Email",
				name: "email",
				type: "email",
				value: formData.email || "",
				onChange: (v) => handleChange("email", v),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-20 h-20 rounded-xl overflow-hidden hyper-glass border line-strong shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: formData.profile_image || "/avatar.png",
							alt: "Profile Preview",
							className: "w-full h-full object-cover",
							onError: (e) => {
								e.target.src = "/avatar.png";
							}
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-grow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Profile Image URL",
						name: "profile_image",
						value: formData.profile_image || "",
						onChange: (v) => handleChange("profile_image", v),
						placeholder: "/avatar.png or https://example.com/image.jpg"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Short Bio",
				name: "short_bio",
				value: formData.short_bio || "",
				onChange: (v) => handleChange("short_bio", v),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Long Bio",
				name: "long_bio",
				type: "textarea",
				value: formData.long_bio || "",
				onChange: (v) => handleChange("long_bio", v),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Career Summary",
				name: "career_summary",
				type: "textarea",
				value: formData.career_summary || "",
				onChange: (v) => handleChange("career_summary", v),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Current Focus",
				name: "current_focus",
				type: "textarea",
				value: formData.current_focus || "",
				onChange: (v) => handleChange("current_focus", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Professional Interests (comma-separated)",
				name: "professional_interests",
				value: formData.professional_interests?.join(", ") || "",
				onChange: (v) => handleChange("professional_interests", v.split(",").map((t) => t.trim()).filter(Boolean))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Personal Interests (comma-separated)",
				name: "personal_interests",
				value: formData.personal_interests?.join(", ") || "",
				onChange: (v) => handleChange("personal_interests", v.split(",").map((t) => t.trim()).filter(Boolean))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-semibold text-strong mb-2 tracking-wide",
						children: "Show on Website"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: formData.show_on_website || false,
						onChange: (e) => handleChange("show_on_website", e.target.checked),
						className: "w-5 h-5 bg-white/5 dark:bg-slate-900/40 border line-strong rounded focus:ring-cyan-400 text-cyan-500"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex justify-end gap-4",
				children: [onCancel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-5 py-2.5 font-bold rounded-xl transition-all duration-300 text-soft border border-transparent hover:text-strong hover:bg-white/5 dark:hover:bg-slate-800/40",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-bold disabled:opacity-50",
					children: isLoading ? "Saving..." : "Save Profile"
				})]
			})
		]
	});
}
//#endregion
export { ProfileForm as default };
