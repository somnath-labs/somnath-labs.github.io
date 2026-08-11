import { n as __exportAll, r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react, k as createLucideIcon } from "./component-agenticaisection.js";
import { A as updateCertification, D as getSocialLinks, E as getSkills, F as updateSiteSettings, I as updateSkill, L as updateSocialLink, M as updateExperience, N as updateLanguage, O as update, P as updateProject, S as getLanguages, T as getSiteSettings, _ as getAll, a as createExperience, b as getContactInfo, c as createSkill, d as deleteCertification, f as deleteExperience, g as deleteSocialLink, gt as Clock, h as deleteSkill, i as createCertification, j as updateContactInfo, k as updateAward, l as createSocialLink, m as deleteProject, n as create, o as createLanguage, p as deleteLanguage, r as createAward, s as createProject, t as DashboardStats, u as deleteAward, v as getAwards, w as getProjects, x as getExperiences, y as getCertifications } from "./component-dashboardstats.js";
import { r as useAuth } from "./component-protectedroute.js";
import { r as Mail } from "./component-contactform.js";
import { t as CyberBackground } from "./component-cyberbackground.js";
import { n as Toggle, t as DataTable } from "./component-datatable.js";
import { n as FormField, t as AwardForm } from "./component-awardform.js";
import { t as ExperienceForm } from "./component-experienceform.js";
import { t as SkillForm } from "./component-skillform.js";
import { t as ProjectForm } from "./component-projectform.js";
import { t as ProfileForm } from "./component-profileform.js";
import { t as EducationForm } from "./component-educationform.js";
import { t as CertificationForm } from "./component-certificationform.js";
import { t as LanguageForm } from "./component-languageform.js";
import { t as ContactInfoForm } from "./component-contactinfoform.js";
import { t as SiteSettingsForm } from "./component-sitesettingsform.js";
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Plus = createLucideIcon("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
//#endregion
//#region src/pages/admin/career/ExperienceManager.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ExperienceManager() {
	const [experiences, setExperiences] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editingExperience, setEditingExperience] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadExperiences();
	}, []);
	const loadExperiences = async () => {
		try {
			const data = await getExperiences();
			setExperiences(data);
		} catch (error) {
			console.error("Error loading experiences:", error);
		} finally {
			setLoading(false);
		}
	};
	const handleCreate = async (data) => {
		await createExperience(data);
		loadExperiences();
	};
	const handleUpdate = async (data) => {
		if (editingExperience?.id) {
			await updateExperience(editingExperience.id, data);
			loadExperiences();
		}
	};
	const handleDelete = async (id) => {
		if (confirm("Are you sure you want to delete this experience?")) {
			await deleteExperience(id);
			loadExperiences();
		}
	};
	const handleToggleVisibility = async (experience) => {
		try {
			await updateExperience(experience.id, { show_on_website: !experience.show_on_website });
			await loadExperiences();
		} catch (error) {
			console.error("Error toggling experience visibility:", error);
		}
	};
	const handleEdit = (experience) => {
		setEditingExperience(experience);
		setIsFormOpen(true);
	};
	const handleAddNew = () => {
		setEditingExperience(null);
		setIsFormOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Work Experience"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleAddNew,
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Experience"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: experiences,
				columns: [
					{
						key: "role",
						label: "Role"
					},
					{
						key: "location",
						label: "Location"
					},
					{
						key: "start_date",
						label: "Start Date",
						render: (value) => new Date(value).toLocaleDateString()
					},
					{
						key: "end_date",
						label: "End Date",
						render: (value) => value ? new Date(value).toLocaleDateString() : "Present"
					},
					{
						key: "current",
						label: "Current",
						render: (value) => value ? "✓" : ""
					}
				],
				onEdit: handleEdit,
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceForm, {
				isOpen: isFormOpen,
				onClose: () => {
					setIsFormOpen(false);
					setEditingExperience(null);
				},
				onSubmit: editingExperience ? handleUpdate : handleCreate,
				initialData: editingExperience || void 0
			})
		]
	});
}
//#endregion
//#region src/pages/admin/technology/SkillManager.tsx
function SkillManager() {
	const [skills, setSkills] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editingSkill, setEditingSkill] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadSkills();
	}, []);
	const loadSkills = async () => {
		try {
			const data = await getSkills();
			setSkills(data);
		} catch (error) {
			console.error("Error loading skills:", error);
		} finally {
			setLoading(false);
		}
	};
	const handleCreate = async (data) => {
		await createSkill(data);
		loadSkills();
	};
	const handleUpdate = async (data) => {
		if (editingSkill?.id) {
			await updateSkill(editingSkill.id, data);
			loadSkills();
		}
	};
	const handleDelete = async (id) => {
		if (confirm("Are you sure you want to delete this skill?")) {
			await deleteSkill(id);
			loadSkills();
		}
	};
	const handleToggleVisibility = async (skill) => {
		try {
			await updateSkill(skill.id, { show_on_website: !skill.show_on_website });
			await loadSkills();
		} catch (error) {
			console.error("Error toggling skill visibility:", error);
		}
	};
	const handleEdit = (skill) => {
		setEditingSkill(skill);
		setIsFormOpen(true);
	};
	const handleAddNew = () => {
		setEditingSkill(null);
		setIsFormOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Skills"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleAddNew,
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Skill"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: skills,
				columns: [
					{
						key: "name",
						label: "Skill Name"
					},
					{
						key: "level",
						label: "Level",
						render: (value) => {
							const colors = {
								primary: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
								secondary: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
								exploring: "bg-slate-500/10 text-slate-300 border border-slate-500/20"
							};
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `px-2 py-1 rounded-md text-xs font-bold tracking-wide ${colors[value] || colors.exploring}`,
								children: value
							});
						}
					},
					{
						key: "experience",
						label: "Experience"
					},
					{
						key: "featured",
						label: "Featured",
						render: (value) => value ? "⭐" : ""
					}
				],
				onEdit: handleEdit,
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillForm, {
				isOpen: isFormOpen,
				onClose: () => {
					setIsFormOpen(false);
					setEditingSkill(null);
				},
				onSubmit: editingSkill ? handleUpdate : handleCreate,
				initialData: editingSkill || void 0
			})
		]
	});
}
//#endregion
//#region src/pages/admin/projects/ProjectManager.tsx
function ProjectManager() {
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editingProject, setEditingProject] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadProjects();
	}, []);
	const loadProjects = async () => {
		try {
			const data = await getProjects();
			setProjects(data);
		} catch (error) {
			console.error("Error loading projects:", error);
		} finally {
			setLoading(false);
		}
	};
	const handleCreate = async (data) => {
		await createProject(data);
		loadProjects();
	};
	const handleUpdate = async (data) => {
		if (editingProject?.id) {
			await updateProject(editingProject.id, data);
			loadProjects();
		}
	};
	const handleDelete = async (id) => {
		if (confirm("Are you sure you want to delete this project?")) {
			await deleteProject(id);
			loadProjects();
		}
	};
	const handleToggleVisibility = async (project) => {
		try {
			await updateProject(project.id, { show_on_website: !project.show_on_website });
			await loadProjects();
		} catch (error) {
			console.error("Error toggling project visibility:", error);
		}
	};
	const handleEdit = (project) => {
		setEditingProject(project);
		setIsFormOpen(true);
	};
	const handleAddNew = () => {
		setEditingProject(null);
		setIsFormOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Projects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleAddNew,
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Project"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: projects,
				columns: [
					{
						key: "name",
						label: "Project Name"
					},
					{
						key: "category",
						label: "Category",
						render: (value) => {
							const colors = {
								client_served: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
								poc: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
								component: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
								project_build: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
								technology: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
								pega: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
								pega_cloud: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
								agentic_ai: "bg-green-500/10 text-green-400 border border-green-500/20",
								ai: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
								software_engineering: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
								personal: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
								sample: "bg-gray-500/10 text-gray-400 border border-gray-500/20",
								open_source: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
								other: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
							};
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `px-2 py-1 rounded-md text-xs font-bold tracking-wide ${colors[value] || colors.other}`,
								children: {
									client_served: "Client Served",
									poc: "PoC",
									component: "Component",
									project_build: "Project Build",
									technology: "Technology"
								}[value] || value.replace("_", " ")
							});
						}
					},
					{
						key: "featured",
						label: "Featured",
						render: (value) => value ? "⭐" : ""
					}
				],
				onEdit: handleEdit,
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectForm, {
				isOpen: isFormOpen,
				onClose: () => {
					setIsFormOpen(false);
					setEditingProject(null);
				},
				onSubmit: editingProject ? handleUpdate : handleCreate,
				initialData: editingProject || void 0
			})
		]
	});
}
//#endregion
//#region src/pages/admin/profile/ProfileManager.tsx
function ProfileManager() {
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [success, setSuccess] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadProfile();
	}, []);
	const loadProfile = async () => {
		try {
			setLoading(true);
			setError(null);
			const profiles = await getAll("profiles");
			if (profiles && profiles.length > 0) setProfile(profiles[0]);
		} catch (err) {
			setError(err.message || "Failed to load profile");
		} finally {
			setLoading(false);
		}
	};
	const handleSave = async (data) => {
		try {
			setSaving(true);
			setError(null);
			setSuccess(null);
			if (profile?.id) await update("profiles", profile.id, data);
			else await create("profiles", data);
			setSuccess("Profile saved successfully!");
			await loadProfile();
		} catch (err) {
			setError(err.message || "Failed to save profile");
		} finally {
			setSaving(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-between items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Manage Profile"
				})
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			success && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl",
				children: success
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileForm, {
				initialData: profile,
				onSubmit: handleSave,
				isLoading: saving
			})
		]
	});
}
//#endregion
//#region src/pages/admin/education/EducationManager.tsx
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
//#region src/pages/admin/education/CertificationManager.tsx
function CertificationManager() {
	const [certifications, setCertifications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			const data = await getCertifications();
			setCertifications(data);
		} catch (err) {
			setError(err.message || "Failed to load certifications");
		} finally {
			setLoading(false);
		}
	};
	const handleSubmit = async (data) => {
		try {
			setSaving(true);
			setError(null);
			if (editing?.id) await updateCertification(editing.id, data);
			else await createCertification({
				...data,
				order: certifications.length + 1
			});
			setIsFormOpen(false);
			setEditing(null);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save certification");
		} finally {
			setSaving(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this certification?")) return;
		try {
			await deleteCertification(id);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to delete certification");
		}
	};
	const handleToggleVisibility = async (item) => {
		try {
			setError(null);
			await updateCertification(item.id, { show_on_website: !item.show_on_website });
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to toggle visibility");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Certifications"
				}), !isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setEditing(null);
						setIsFormOpen(true);
					},
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Certification"
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: certifications,
				columns: [
					{
						key: "certification",
						label: "Certification"
					},
					{
						key: "organization",
						label: "Organization"
					},
					{
						key: "issue_date",
						label: "Issue Date",
						render: (value) => value ? new Date(value).toLocaleDateString() : ""
					}
				],
				onEdit: (item) => {
					setEditing(item);
					setIsFormOpen(true);
				},
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationForm, {
				initialData: editing,
				onSubmit: handleSubmit,
				onCancel: () => {
					setIsFormOpen(false);
					setEditing(null);
				},
				isLoading: saving
			})
		]
	});
}
//#endregion
//#region src/pages/admin/awards/AwardManager.tsx
function AwardManager() {
	const [awards, setAwards] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			const data = await getAwards();
			setAwards(data);
		} catch (err) {
			setError(err.message || "Failed to load awards");
		} finally {
			setLoading(false);
		}
	};
	const handleSubmit = async (data) => {
		try {
			setSaving(true);
			setError(null);
			if (editing?.id) await updateAward(editing.id, data);
			else await createAward({
				...data,
				order: awards.length + 1
			});
			setIsFormOpen(false);
			setEditing(null);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save award");
		} finally {
			setSaving(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this award?")) return;
		try {
			await deleteAward(id);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to delete award");
		}
	};
	const handleToggleVisibility = async (item) => {
		try {
			setError(null);
			await updateAward(item.id, { show_on_website: !item.show_on_website });
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to toggle visibility");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Awards & Recognition"
				}), !isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setEditing(null);
						setIsFormOpen(true);
					},
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Award"
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: awards,
				columns: [
					{
						key: "award",
						label: "Award"
					},
					{
						key: "organization",
						label: "Organization"
					},
					{
						key: "date",
						label: "Date",
						render: (value) => value ? new Date(value).toLocaleDateString() : ""
					},
					{
						key: "featured",
						label: "Featured",
						render: (value) => value ? "⭐" : ""
					}
				],
				onEdit: (item) => {
					setEditing(item);
					setIsFormOpen(true);
				},
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardForm, {
				initialData: editing,
				onSubmit: handleSubmit,
				onCancel: () => {
					setIsFormOpen(false);
					setEditing(null);
				},
				isLoading: saving
			})
		]
	});
}
//#endregion
//#region src/pages/admin/languages/LanguageManager.tsx
function LanguageManager() {
	const [languages, setLanguages] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			const data = await getLanguages();
			setLanguages(data);
		} catch (err) {
			setError(err.message || "Failed to load languages");
		} finally {
			setLoading(false);
		}
	};
	const handleSubmit = async (data) => {
		try {
			setSaving(true);
			setError(null);
			if (editing?.id) await updateLanguage(editing.id, data);
			else await createLanguage({
				...data,
				order: languages.length + 1
			});
			setIsFormOpen(false);
			setEditing(null);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save language");
		} finally {
			setSaving(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this language?")) return;
		try {
			await deleteLanguage(id);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to delete language");
		}
	};
	const handleToggleVisibility = async (item) => {
		try {
			setError(null);
			await updateLanguage(item.id, { show_on_website: !item.show_on_website });
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to toggle visibility");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Languages"
				}), !isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setEditing(null);
						setIsFormOpen(true);
					},
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Language"
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: languages,
				columns: [
					{
						key: "language",
						label: "Language"
					},
					{
						key: "overall_proficiency",
						label: "Proficiency"
					},
					{
						key: "native",
						label: "Native",
						render: (value) => value ? "✅" : ""
					}
				],
				onEdit: (item) => {
					setEditing(item);
					setIsFormOpen(true);
				},
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageForm, {
				initialData: editing,
				onSubmit: handleSubmit,
				onCancel: () => {
					setIsFormOpen(false);
					setEditing(null);
				},
				isLoading: saving
			})
		]
	});
}
//#endregion
//#region src/pages/admin/communication/MessageManager.tsx
function MessageManager() {
	const [inquiries, setInquiries] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedInquiry, setSelectedInquiry] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadInquiries();
	}, []);
	const loadInquiries = async () => {
		try {
			setLoading(true);
			const data = await getAll("inquiries");
			setInquiries(data);
		} catch (err) {
			console.error(err.message || "Failed to load messages");
		} finally {
			setLoading(false);
		}
	};
	const handleStatusChange = async (id, newStatus) => {
		try {
			throw new Error("Supabase not configured");
		} catch (err) {
			console.error(err.message || "Failed to update status");
		}
	};
	const handleDelete = async (id) => {
		if (!window.confirm("Are you sure you want to delete this message?")) return;
		try {
			throw new Error("Supabase not configured");
		} catch (err) {
			console.error(err.message || "Failed to delete message");
		}
	};
	const getStatusBadge = (status) => {
		switch (status) {
			case "NEW": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-2 py-1 rounded-md text-[10px] font-black bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 tracking-wider",
				children: "NEW"
			});
			case "CONTACTED": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-2 py-1 rounded-md text-[10px] font-black bg-purple-500/20 text-purple-400 border border-purple-500/30 tracking-wider",
				children: "CONTACTED"
			});
			case "CLOSED": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-2 py-1 rounded-md text-[10px] font-black bg-slate-500/20 text-slate-400 border border-slate-500/30 tracking-wider",
				children: "CLOSED"
			});
			default: return null;
		}
	};
	if (loading && inquiries.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-6 h-[calc(100vh-12rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-1/3 hyper-glass rounded-2xl border line-soft flex flex-col overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-5 border-b line-soft bg-white/5 dark:bg-slate-900/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-bold text-strong flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							size: 18,
							className: "text-cyan-500"
						}),
						" Inbox (",
						inquiries.length,
						")"
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto custom-scrollbar",
				children: inquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-8 text-center text-faint font-light",
					children: "No messages yet"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y line-soft",
					children: inquiries.map((inquiry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setSelectedInquiry(inquiry),
						className: `w-full text-left p-5 transition-all duration-300 hover:bg-white/5 dark:hover:bg-slate-800/40 ${selectedInquiry?.id === inquiry.id ? "bg-cyan-500/10 border-l-4 border-cyan-500" : "border-l-4 border-transparent"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-strong truncate pr-2",
									children: inquiry.name
								}), getStatusBadge(inquiry.status)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-soft truncate font-medium",
								children: inquiry.company || inquiry.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-faint mt-3 flex items-center gap-1.5 font-light",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									size: 12,
									className: "text-cyan-500/50"
								}), new Date(inquiry.created_at).toLocaleDateString()]
							})
						]
					}, inquiry.id))
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 hyper-glass rounded-2xl border line-soft flex flex-col overflow-hidden",
			children: selectedInquiry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8 border-b line-soft bg-white/5 dark:bg-slate-900/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-start mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black text-strong mb-2 tracking-tight",
						children: selectedInquiry.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 text-sm text-soft font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${selectedInquiry.email}`,
							className: "hover:text-cyan-400 transition-colors",
							children: selectedInquiry.email
						}), selectedInquiry.mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${selectedInquiry.mobile}`,
							className: "hover:text-cyan-400 transition-colors",
							children: selectedInquiry.mobile
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedInquiry.status,
							onChange: (e) => handleStatusChange(selectedInquiry.id, e.target.value),
							className: "px-4 py-2 text-sm bg-white/5 dark:bg-slate-900/60 border line-strong rounded-xl text-strong focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "NEW",
									children: "New"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "CONTACTED",
									children: "Contacted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "CLOSED",
									children: "Closed"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleDelete(selectedInquiry.id),
							className: "p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-all duration-300",
							title: "Delete Message",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 18 })
						})]
					})]
				}), selectedInquiry.company && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-strong tracking-wide",
							children: "COMPANY:"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-soft",
							children: selectedInquiry.company
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8 flex-1 overflow-y-auto custom-scrollbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-bold text-strong mb-4 tracking-wider",
					children: "MESSAGE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white/5 dark:bg-slate-900/40 border line-soft p-6 rounded-2xl whitespace-pre-wrap text-soft leading-relaxed",
					children: selectedInquiry.note
				})]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col items-center justify-center text-faint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
					size: 64,
					className: "mb-6 opacity-20 text-cyan-500"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-light tracking-wide",
					children: "Select a message to view details"
				})]
			})
		})]
	});
}
//#endregion
//#region src/pages/admin/contact/ContactManager.tsx
function ContactManager() {
	const [contact, setContact] = (0, import_react.useState)(null);
	const [socialLinks, setSocialLinks] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [success, setSuccess] = (0, import_react.useState)(null);
	const [socialFormOpen, setSocialFormOpen] = (0, import_react.useState)(false);
	const [editingSocial, setEditingSocial] = (0, import_react.useState)(null);
	const [socialForm, setSocialForm] = (0, import_react.useState)({
		platform: "",
		url: "",
		username: ""
	});
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			setLoading(true);
			setError(null);
			const [info, links] = await Promise.all([getContactInfo(), getSocialLinks()]);
			setContact(info);
			setSocialLinks(links);
		} catch (err) {
			setError(err.message || "Failed to load contact data");
		} finally {
			setLoading(false);
		}
	};
	const handleSaveContact = async (data) => {
		try {
			setSaving(true);
			setError(null);
			setSuccess(null);
			await updateContactInfo(data);
			setSuccess("Contact details saved successfully!");
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save contact details");
		} finally {
			setSaving(false);
		}
	};
	const openAddSocial = () => {
		setEditingSocial(null);
		setSocialForm({
			platform: "",
			url: "",
			username: ""
		});
		setSocialFormOpen(true);
	};
	const openEditSocial = (link) => {
		setEditingSocial(link);
		setSocialForm({
			platform: link.platform,
			url: link.url,
			username: link.username || ""
		});
		setSocialFormOpen(true);
	};
	const handleSaveSocial = async (e) => {
		e.preventDefault();
		try {
			setError(null);
			setSuccess(null);
			if (editingSocial?.id) await updateSocialLink(editingSocial.id, {
				...socialForm,
				show_on_website: editingSocial.show_on_website
			});
			else await createSocialLink({
				...socialForm,
				show_on_website: true,
				order: socialLinks.length + 1
			});
			setSocialFormOpen(false);
			setEditingSocial(null);
			setSuccess("Social link saved!");
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save social link");
		}
	};
	const handleDeleteSocial = async (id) => {
		if (!confirm("Delete this social link?")) return;
		try {
			await deleteSocialLink(id);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to delete social link");
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			success && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl",
				children: success
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold text-strong tracking-tight mb-4",
				children: "Contact Details"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactInfoForm, {
				initialData: contact,
				onSubmit: handleSaveContact,
				onCancel: () => loadData(),
				isLoading: saving
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold text-strong tracking-tight",
						children: "Social Links"
					}), !socialFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: openAddSocial,
						className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
						children: "Add Social Link"
					})]
				}),
				socialFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSaveSocial,
					className: "hyper-glass rounded-2xl border line-soft p-6 mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-base font-bold text-strong mb-5 tracking-tight",
							children: editingSocial ? "Edit Social Link" : "Add Social Link"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Platform",
									name: "platform",
									value: socialForm.platform,
									onChange: (v) => setSocialForm((p) => ({
										...p,
										platform: v
									})),
									required: true,
									placeholder: "GitHub, LinkedIn, X..."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "URL",
									name: "url",
									value: socialForm.url,
									onChange: (v) => setSocialForm((p) => ({
										...p,
										url: v
									})),
									required: true,
									placeholder: "https://..."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Username",
									name: "username",
									value: socialForm.username,
									onChange: (v) => setSocialForm((p) => ({
										...p,
										username: v
									})),
									placeholder: "optional"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex justify-end gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setSocialFormOpen(false);
									setEditingSocial(null);
								},
								className: "px-4 py-2 border line-strong rounded-xl text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
								children: editingSocial ? "Update" : "Add"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hyper-glass rounded-2xl border line-soft overflow-hidden",
					children: socialLinks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "p-8 text-center text-faint font-light",
						children: "No social links yet"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "min-w-full divide-y line-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-white/5 dark:bg-slate-900/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
									children: "Platform"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
									children: "URL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
									children: "Visible"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-right text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y line-soft bg-transparent",
							children: socialLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-white/5 dark:hover:bg-slate-800/40 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 whitespace-nowrap text-sm text-strong",
										children: link.platform
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-sm text-soft truncate max-w-[280px]",
										children: link.url
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 whitespace-nowrap text-sm",
										children: link.show_on_website ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2 py-1 rounded-md text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
											children: "Visible"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2 py-1 rounded-md text-xs font-bold bg-slate-500/10 text-slate-400 border border-slate-500/20",
											children: "Hidden"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => openEditSocial(link),
												className: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 mr-4 transition-colors",
												children: "Edit"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													const next = {
														...link,
														show_on_website: !link.show_on_website
													};
													updateSocialLink(link.id, { show_on_website: next.show_on_website }).then(loadData);
												},
												className: "text-purple-500 hover:text-purple-400 mr-4 transition-colors",
												children: link.show_on_website ? "Hide" : "Show"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDeleteSocial(link.id),
												className: "text-red-500 hover:text-red-400 transition-colors",
												children: "Delete"
											})
										]
									})
								]
							}, link.id))
						})]
					})
				})
			] })
		]
	});
}
//#endregion
//#region src/pages/admin/website/WebsiteManager.tsx
function WebsiteManager() {
	const [settings, setSettings] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [success, setSuccess] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await getSiteSettings();
			setSettings(data);
		} catch (err) {
			setError(err.message || "Failed to load website settings");
		} finally {
			setLoading(false);
		}
	};
	const handleSave = async (data) => {
		try {
			setSaving(true);
			setError(null);
			setSuccess(null);
			await updateSiteSettings(data);
			setSuccess("Website settings saved successfully!");
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save website settings");
		} finally {
			setSaving(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			success && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl",
				children: success
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold text-strong tracking-tight mb-4",
				children: "Website Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteSettingsForm, {
				initialData: settings,
				onSubmit: handleSave,
				onCancel: () => loadData(),
				isLoading: saving
			})] })
		]
	});
}
//#endregion
//#region src/pages/admin/AdminDashboard.tsx
var AdminDashboard_exports = /* @__PURE__ */ __exportAll({ default: () => AdminDashboard });
function AdminDashboard() {
	const { signOut } = useAuth();
	const [activeSection, setActiveSection] = (0, import_react.useState)("dashboard");
	const sidebarItems = [
		{
			id: "dashboard",
			label: "Dashboard",
			icon: "📊",
			group: "OVERVIEW"
		},
		{
			id: "profile",
			label: "Profile",
			icon: "👤",
			group: "PROFILE"
		},
		{
			id: "career",
			label: "Career",
			icon: "💼",
			group: "CAREER"
		},
		{
			id: "education",
			label: "Education",
			icon: "🎓",
			group: "CAREER"
		},
		{
			id: "certifications",
			label: "Certifications",
			icon: "🏅",
			group: "CAREER"
		},
		{
			id: "awards",
			label: "Awards",
			icon: "🏆",
			group: "CAREER"
		},
		{
			id: "languages",
			label: "Languages",
			icon: "🌍",
			group: "CAREER"
		},
		{
			id: "technology",
			label: "Technology",
			icon: "⚙️",
			group: "TECHNOLOGY"
		},
		{
			id: "projects",
			label: "Projects",
			icon: "🚀",
			group: "PROJECTS"
		},
		{
			id: "resume",
			label: "Resume",
			icon: "📄",
			group: "RESUME"
		},
		{
			id: "website",
			label: "Website",
			icon: "🌐",
			group: "WEBSITE"
		},
		{
			id: "contact",
			label: "Contact",
			icon: "✉️",
			group: "WEBSITE"
		},
		{
			id: "communication",
			label: "Messages",
			icon: "💬",
			group: "COMMUNICATION"
		},
		{
			id: "media",
			label: "Media",
			icon: "🖼️",
			group: "SYSTEM"
		},
		{
			id: "system",
			label: "System",
			icon: "⚡",
			group: "SYSTEM"
		}
	];
	const handleSignOut = async () => {
		await signOut();
	};
	const renderContent = () => {
		switch (activeSection) {
			case "dashboard": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardStats, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hyper-glass rounded-2xl border line-soft p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-strong mb-4",
						children: "Recent Activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-faint font-light",
						children: "Recent activity feed coming soon"
					})]
				})]
			});
			case "career": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceManager, {});
			case "technology": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillManager, {});
			case "projects": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectManager, {});
			case "profile": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileManager, {});
			case "education": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationManager, {});
			case "certifications": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationManager, {});
			case "awards": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardManager, {});
			case "languages": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageManager, {});
			case "communication": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageManager, {});
			case "website": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebsiteManager, {});
			case "contact": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactManager, {});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hyper-glass rounded-2xl border line-soft p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-faint font-light",
					children: [activeSection.replace("_", " "), " content - coming soon"]
				})
			});
		}
	};
	const renderSidebar = () => {
		let currentGroup = "";
		return sidebarItems.map((item) => {
			const showHeader = item.group !== currentGroup;
			currentGroup = item.group;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pt-4 pb-1 text-[10px] font-bold tracking-widest text-faint uppercase",
				children: item.group
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setActiveSection(item.id),
				className: `w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-all duration-300 ${activeSection === item.id ? "bg-cyan-500/10 border border-cyan-400/30 text-cyan-500 dark:text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]" : "border border-transparent text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-sm tracking-wide",
					children: item.label
				})]
			})] }, item.id);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-screen cyber-bg-scene text-body flex overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyberBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "w-64 h-full hyper-glass border-r line-subtle flex flex-col relative z-10 shadow-[4px_0_24px_rgba(0,0,0,0.1)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 border-b line-subtle flex-shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-black neon-subtitle-gradient tracking-tight",
							children: "Admin Studio"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-1 custom-scrollbar overscroll-contain",
						children: renderSidebar()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 border-t line-subtle flex-shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleSignOut,
							className: "w-full px-4 py-2.5 text-left text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40 rounded-xl transition-all duration-300 font-medium text-sm",
							children: "Sign Out"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 h-full overflow-y-auto overflow-x-hidden relative z-10 custom-scrollbar overscroll-contain",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black text-strong mb-8 capitalize tracking-tight",
						children: activeSection.replace("_", " ")
					}), renderContent()]
				})
			})
		]
	});
}
//#endregion
export { AdminDashboard_exports as t };
