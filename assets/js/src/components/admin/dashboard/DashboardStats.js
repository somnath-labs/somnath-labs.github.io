import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { getDashboardStats } from "../../../lib/adminApi.js";
//#region src/components/admin/dashboard/DashboardStats.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function DashboardStats() {
	const [stats, setStats] = (0, import_react.useState)({
		projects: 0,
		experiences: 0,
		skills: 0,
		inquiries: 0
	});
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		loadStats();
	}, []);
	const loadStats = async () => {
		try {
			const data = await getDashboardStats();
			setStats(data);
		} catch (error) {
			console.error("Error loading stats:", error);
		} finally {
			setLoading(false);
		}
	};
	const statCards = [
		{
			label: "Projects",
			value: stats.projects,
			icon: "🚀"
		},
		{
			label: "Experiences",
			value: stats.experiences,
			icon: "💼"
		},
		{
			label: "Skills",
			value: stats.skills,
			icon: "⚙️"
		},
		{
			label: "Inquiries",
			value: stats.inquiries,
			icon: "✉️"
		}
	];
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
		children: [...Array(4)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6 animate-pulse",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" })]
		}, i))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
		children: statCards.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-gray-600 dark:text-gray-300",
					children: stat.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-3xl font-bold text-gray-900 dark:text-white mt-1",
					children: stat.value
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl",
					children: stat.icon
				})]
			})
		}, stat.label))
	});
}
//#endregion
export { DashboardStats as default };
