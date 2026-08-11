import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { createExperience, deleteExperience, getExperiences, updateExperience } from "../../../lib/adminApi.js";
import DataTable from "../../../components/admin/tables/DataTable.js";
import ExperienceForm from "../../../components/admin/forms/ExperienceForm.js";
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
export { ExperienceManager as default };
