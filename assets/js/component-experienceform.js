import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
import { n as FormField } from "./component-awardform.js";
//#region src/components/admin/common/Modal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Modal({ isOpen, onClose, title, children }) {
	(0, import_react.useEffect)(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen items-center justify-center p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 bg-black bg-opacity-50",
				onClick: onClose
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold text-gray-900 dark:text-white",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "text-gray-400 hover:text-gray-500 dark:hover:text-gray-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-6 w-6",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M6 18L18 6M6 6l12 12"
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-6",
					children
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/admin/forms/ExperienceForm.tsx
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
export { Modal as n, ExperienceForm as t };
