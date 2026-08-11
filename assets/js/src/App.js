import { HashRouter, Route, Routes } from "../node_modules/react-router/dist/development/chunk-62JRHF6Z.js";
import { require_jsx_runtime } from "../node_modules/react/jsx-runtime.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import { publicRoutes } from "./routes/publicRoutes.js";
import CyberBackground from "./components/public/CyberBackground.js";
import { adminRoutes } from "./routes/adminRoutes.js";
import Navigation from "./components/public/Navigation.js";
import Footer from "./components/public/Footer.js";
import FloatingDock from "./components/public/workspace/FloatingDock.js";
import NotFound from "./pages/public/NotFound.js";
//#region src/App.tsx
var import_jsx_runtime = require_jsx_runtime();
function PublicLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen cyber-bg-scene text-body flex flex-col overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyberBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-16 relative z-10",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDock, {})
		]
	});
}
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [
		publicRoutes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: route.path,
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: route.element })
		}, route.path)),
		adminRoutes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: route.path,
			element: route.element
		}, route.path)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "*",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}) })
		})
	] }) }) });
}
//#endregion
export { App as default };
