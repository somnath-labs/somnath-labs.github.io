import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
//#region src/lib/supabase.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
console.warn("Supabase environment variables not set. Some features may not work.");
//#endregion
//#region src/contexts/AuthContext.tsx
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
//#endregion
export { AuthProvider as t };
