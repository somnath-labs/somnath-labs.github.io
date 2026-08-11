import { require_jsx_runtime } from "../../node_modules/react/jsx-runtime.js";
import AdminLogin from "../pages/admin/AdminLogin.js";
import AdminDashboard from "../pages/admin/AdminDashboard.js";
import ProtectedRoute from "../components/admin/ProtectedRoute.js";
//#region src/routes/adminRoutes.tsx
var import_jsx_runtime = require_jsx_runtime();
var ADMIN_ROUTE = "/x8k2m5n7-studio-console";
var adminRoutes = [{
	path: `${ADMIN_ROUTE}/login`,
	element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLogin, {})
}, {
	path: ADMIN_ROUTE,
	element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, {}) })
}];
//#endregion
export { adminRoutes };
