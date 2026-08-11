import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
//#region src/components/admin/common/Toggle.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
/**
* Reusable enable/disable switch. When on, the item is visible on the site.
*/
function Toggle({ checked, onChange, label, disabled = false, size = "md" }) {
	const dims = size === "sm" ? "w-8 h-[18px]" : "w-11 h-6";
	const knob = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
	const translate = size === "sm" ? "translate-x-[14px]" : "translate-x-5";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		"aria-label": label || (checked ? "Disable" : "Enable"),
		disabled,
		onClick: () => onChange(!checked),
		className: `relative inline-flex items-center ${dims} rounded-full transition-colors duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${checked ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" : "bg-slate-400/40 dark:bg-slate-700/60"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-0.5 ${knob} bg-white rounded-full shadow-md transform transition-transform duration-300 ${checked ? translate : "translate-x-0"}` })
	});
}
//#endregion
//#region src/components/admin/tables/DataTable.tsx
function DataTable({ data, columns, onEdit, onDelete, onToggleVisibility, loading = false }) {
	const [sortField, setSortField] = (0, import_react.useState)(null);
	const [sortDirection, setSortDirection] = (0, import_react.useState)("asc");
	const handleSort = (field) => {
		if (sortField === field) setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		else {
			setSortField(field);
			setSortDirection("asc");
		}
	};
	const sortedData = [...data].sort((a, b) => {
		if (!sortField) return 0;
		const aVal = a[sortField];
		const bVal = b[sortField];
		if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
		if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
		return 0;
	});
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hyper-glass rounded-2xl border line-soft p-4 animate-pulse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 bg-white/10 dark:bg-slate-700/50 rounded w-3/4" })
		}, i))
	});
	if (data.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hyper-glass rounded-2xl border line-soft p-8 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-faint font-light",
			children: "No data available"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hyper-glass rounded-2xl border line-soft overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "min-w-full divide-y line-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-white/5 dark:bg-slate-900/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
						onClick: () => handleSort(column.key),
						className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider cursor-pointer hover:bg-white/10 dark:hover:bg-slate-800/60 transition-colors",
						children: [column.label, sortField === column.key && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1",
							children: sortDirection === "asc" ? "↑" : "↓"
						})]
					}, String(column.key))),
					onToggleVisibility && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
						children: "Status"
					}),
					(onEdit || onDelete) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-4 text-right text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
						children: "Actions"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
				className: "divide-y line-soft bg-transparent",
				children: sortedData.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "hover:bg-white/5 dark:hover:bg-slate-800/40 transition-colors",
					children: [
						columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-4 whitespace-nowrap text-sm text-strong",
							children: column.render ? column.render(row[column.key], row) : String(row[column.key])
						}, String(column.key))),
						onToggleVisibility && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-4 whitespace-nowrap text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									size: "sm",
									checked: Boolean(row.show_on_website),
									onChange: () => onToggleVisibility(row)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[11px] font-semibold ${row.show_on_website ? "text-emerald-500" : "text-faint"}`,
									children: row.show_on_website ? "Visible" : "Hidden"
								})]
							})
						}),
						(onEdit || onDelete) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
							children: [onEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onEdit(row),
								className: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 mr-4 transition-colors",
								children: "Edit"
							}), onDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onDelete(row.id),
								className: "text-red-500 hover:text-red-400 transition-colors",
								children: "Delete"
							})]
						})
					]
				}, row.id))
			})]
		})
	});
}
//#endregion
export { Toggle as n, DataTable as t };
