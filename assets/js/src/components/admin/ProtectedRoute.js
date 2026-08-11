import { Navigate } from "../../../node_modules/react-router/dist/development/chunk-62JRHF6Z.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { useAuth } from "../../contexts/AuthContext.js";
//#region src/components/admin/ProtectedRoute.tsx
var import_jsx_runtime = require_jsx_runtime();
function ProtectedRoute({ children }) {
	const { user, isAdmin, loading } = useAuth();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100" })
	});
	if (!user || !isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/x8k2m5n7-studio-console/login",
		replace: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
//#endregion
export { ProtectedRoute as default };
