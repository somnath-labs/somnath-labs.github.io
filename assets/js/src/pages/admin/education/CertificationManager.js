import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { createCertification, deleteCertification, getCertifications, updateCertification } from "../../../lib/adminApi.js";
import DataTable from "../../../components/admin/tables/DataTable.js";
import CertificationForm from "../../../components/admin/forms/CertificationForm.js";
//#region src/pages/admin/education/CertificationManager.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
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
export { CertificationManager as default };
