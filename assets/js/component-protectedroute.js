import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
import { Ct as Navigate } from "./component-dashboardstats.js";
//#region src/contexts/AuthContext.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (localStorage.getItem("demo_auth") === "true") {
			const demoUser = {
				id: "demo-admin",
				email: "admin@somnath.dev"
			};
			setUser(demoUser);
			setSession({ user: demoUser });
			setIsAdmin(true);
		}
		setLoading(false);
	}, []);
	const signIn = async (email, password) => {
		if (email === "admin@somnath.dev" && password === "admin123") {
			localStorage.setItem("demo_auth", "true");
			const demoUser = {
				id: "demo-admin",
				email: "admin@somnath.dev"
			};
			setUser(demoUser);
			setSession({ user: demoUser });
			setIsAdmin(true);
			return;
		}
		throw new Error("Supabase not configured. Use demo credentials to login.");
	};
	const signOut = async () => {
		localStorage.removeItem("demo_auth");
		setUser(null);
		setSession(null);
		setIsAdmin(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			session,
			loading,
			isAdmin,
			signIn,
			signOut
		},
		children
	});
}
function useAuth() {
	const context = (0, import_react.useContext)(AuthContext);
	if (context === void 0) throw new Error("useAuth must be used within an AuthProvider");
	return context;
}
//#endregion
//#region src/components/admin/ProtectedRoute.tsx
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
export { AuthProvider as n, useAuth as r, ProtectedRoute as t };
