import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { createProject, deleteProject, getProjects, updateProject } from "../../../lib/adminApi.js";
import DataTable from "../../../components/admin/tables/DataTable.js";
import ProjectForm from "../../../components/admin/forms/ProjectForm.js";
//#region src/pages/admin/projects/ProjectManager.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
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
export { ProjectManager as default };
