import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { getSiteSettings, updateSiteSettings } from "../../../lib/adminApi.js";
import SiteSettingsForm from "../../../components/admin/forms/SiteSettingsForm.js";
//#region src/pages/admin/website/WebsiteManager.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
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
export { WebsiteManager as default };
