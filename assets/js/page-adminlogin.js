import { n as __exportAll, r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
import { Dt as useNavigate } from "./component-dashboardstats.js";
import { r as useAuth } from "./component-protectedroute.js";
import { t as CyberBackground } from "./component-cyberbackground.js";
//#region src/pages/admin/AdminLogin.tsx
var AdminLogin_exports = /* @__PURE__ */ __exportAll({ default: () => AdminLogin });
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { signIn } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await signIn(email, password);
			navigate("/x8k2m5n7-studio-console");
		} catch (err) {
			setError(err.message || "Failed to sign in");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen cyber-bg-scene flex items-center justify-center px-4 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyberBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-md w-full relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hyper-glass rounded-[2rem] border line-soft p-8 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.2)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-black mb-8 neon-subtitle-gradient tracking-tight text-center",
						children: "Admin Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 p-4 bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800 rounded-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-cyan-800 dark:text-cyan-300 font-medium mb-1",
							children: "Demo Mode Active"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-cyan-700 dark:text-cyan-400",
							children: [
								"Use ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "admin@somnath.dev" }),
								" / ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "admin123" }),
								" to login. Data will be saved to your browser's local storage."
							]
						})]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "block text-sm font-semibold text-strong mb-2 tracking-wide",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								required: true,
								className: "w-full px-4 py-3 bg-white/5 dark:bg-slate-900/40 border line-strong rounded-xl text-strong focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "password",
								className: "block text-sm font-semibold text-strong mb-2 tracking-wide",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "password",
								type: "password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								required: true,
								className: "w-full px-4 py-3 bg-white/5 dark:bg-slate-900/40 border line-strong rounded-xl text-strong focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: "w-full py-3 px-4 mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5",
								children: loading ? "Authenticating..." : "Access Console"
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
export { AdminLogin_exports as t };
