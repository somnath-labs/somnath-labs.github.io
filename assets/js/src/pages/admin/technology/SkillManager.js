import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { createSkill, deleteSkill, getSkills, updateSkill } from "../../../lib/adminApi.js";
import DataTable from "../../../components/admin/tables/DataTable.js";
import SkillForm from "../../../components/admin/forms/SkillForm.js";
//#region src/pages/admin/technology/SkillManager.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
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
export { SkillManager as default };
