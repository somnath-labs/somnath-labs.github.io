import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import "../../../lib/supabase.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import Plus from "../../../../node_modules/lucide-react/dist/esm/icons/plus.js";
import { create, getAll, update } from "../../../lib/adminApi.js";
import Toggle from "../../../components/admin/common/Toggle.js";
import EducationForm from "../../../components/admin/forms/EducationForm.js";
import CertificationForm from "../../../components/admin/forms/CertificationForm.js";
//#region src/pages/admin/education/EducationManager.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function EducationManager() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("education");
	const [educations, setEducations] = (0, import_react.useState)([]);
	const [certifications, setCertifications] = (0, import_react.useState)([]);
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [editingEducation, setEditingEducation] = (0, import_react.useState)(null);
	const [editingCertification, setEditingCertification] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			setLoading(true);
			setError(null);
			const [eduData, certData] = await Promise.all([getAll("educations"), getAll("certifications")]);
			setEducations(eduData);
			setCertifications(certData);
		} catch (err) {
			setError(err.message || "Failed to load data");
		} finally {
			setLoading(false);
		}
	};
	const handleDelete = async (table, id) => {
		if (!window.confirm("Are you sure you want to delete this record?")) return;
		try {
			setLoading(true);
			throw new Error("Supabase not configured");
		} catch (err) {
			setError(err.message || "Failed to delete record");
			setLoading(false);
		}
	};
	const handleToggle = async (table, id, current) => {
		try {
			setError(null);
			await update(table, id, { show_on_website: !current });
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to toggle visibility");
		}
	};
	const handleSaveEducation = async (data) => {
		try {
			setSaving(true);
			setError(null);
			if (editingEducation?.id) throw new Error("Supabase not configured");
			else await create("educations", data);
			setIsEditing(false);
			setEditingEducation(null);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save education");
		} finally {
			setSaving(false);
		}
	};
	const handleSaveCertification = async (data) => {
		try {
			setSaving(true);
			setError(null);
			if (editingCertification?.id) throw new Error("Supabase not configured");
			else await create("certifications", data);
			setIsEditing(false);
			setEditingCertification(null);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save certification");
		} finally {
			setSaving(false);
		}
	};
	if (isEditing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hyper-glass rounded-2xl border line-soft p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold text-strong tracking-tight mb-6",
				children: activeTab === "education" ? editingEducation ? "Edit Education" : "Add New Education" : editingCertification ? "Edit Certification" : "Add New Certification"
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 p-4 bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-md",
				children: error
			}),
			activeTab === "education" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationForm, {
				initialData: editingEducation,
				onSubmit: handleSaveEducation,
				onCancel: () => {
					setIsEditing(false);
					setEditingEducation(null);
				},
				isLoading: saving
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationForm, {
				initialData: editingCertification,
				onSubmit: handleSaveCertification,
				onCancel: () => {
					setIsEditing(false);
					setEditingCertification(null);
				},
				isLoading: saving
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab("education"),
						className: `px-5 py-2.5 font-bold rounded-xl transition-all duration-300 ${activeTab === "education" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]" : "text-soft border border-transparent hover:text-strong hover:bg-white/5 dark:hover:bg-slate-800/40"}`,
						children: "Education"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab("certifications"),
						className: `px-5 py-2.5 font-bold rounded-xl transition-all duration-300 ${activeTab === "certifications" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]" : "text-soft border border-transparent hover:text-strong hover:bg-white/5 dark:hover:bg-slate-800/40"}`,
						children: "Certifications"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						setIsEditing(true);
						if (activeTab === "education") setEditingEducation(null);
						else setEditingCertification(null);
					},
					className: "flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 }),
						"Add ",
						activeTab === "education" ? "Education" : "Certification"
					]
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-md",
				children: error
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hyper-glass rounded-2xl border line-soft overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "min-w-full divide-y line-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-white/5 dark:bg-slate-900/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
								children: activeTab === "education" ? "Degree & Field" : "Certification"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
								children: "Institution"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
								children: activeTab === "education" ? "Duration" : "Issue Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-right text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
								children: "Actions"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y line-soft bg-transparent",
						children: activeTab === "education" ? educations.map((edu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-white/5 dark:hover:bg-slate-800/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-strong",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold",
										children: edu.degree
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-faint",
										children: edu.field
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap text-strong",
									children: edu.institution
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-sm text-faint",
									children: [
										new Date(edu.start_date).getFullYear(),
										" - ",
										new Date(edu.end_date).getFullYear()
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
											size: "sm",
											checked: edu.show_on_website !== false,
											onChange: () => handleToggle("educations", edu.id, edu.show_on_website !== false)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[11px] font-semibold ${edu.show_on_website !== false ? "text-emerald-500" : "text-faint"}`,
											children: edu.show_on_website !== false ? "Visible" : "Hidden"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setEditingEducation(edu);
											setIsEditing(true);
										},
										className: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 mr-4 transition-colors",
										children: "Edit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelete("educations", edu.id),
										className: "text-red-500 hover:text-red-400 transition-colors",
										children: "Delete"
									})]
								})
							]
						}, edu.id)) : certifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-white/5 dark:hover:bg-slate-800/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-strong",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold",
										children: cert.certification
									}), cert.credential_id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-sm text-faint",
										children: ["ID: ", cert.credential_id]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap text-strong",
									children: cert.organization
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap text-sm text-faint",
									children: new Date(cert.issue_date).getFullYear()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
											size: "sm",
											checked: cert.show_on_website !== false,
											onChange: () => handleToggle("certifications", cert.id, cert.show_on_website !== false)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[11px] font-semibold ${cert.show_on_website !== false ? "text-emerald-500" : "text-faint"}`,
											children: cert.show_on_website !== false ? "Visible" : "Hidden"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setEditingCertification(cert);
											setIsEditing(true);
										},
										className: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 mr-4 transition-colors",
										children: "Edit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelete("certifications", cert.id),
										className: "text-red-500 hover:text-red-400 transition-colors",
										children: "Delete"
									})]
								})
							]
						}, cert.id))
					})]
				}), activeTab === "education" && educations.length === 0 || activeTab === "certifications" && certifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 text-center text-faint",
					children: [
						"No ",
						activeTab,
						" records found."
					]
				}) : null]
			})
		]
	});
}
//#endregion
export { EducationManager as default };
