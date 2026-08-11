import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { create, getAll, update } from "../../../lib/adminApi.js";
import ProfileForm from "../../../components/admin/forms/ProfileForm.js";
//#region src/pages/admin/profile/ProfileManager.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
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
export { ProfileManager as default };
