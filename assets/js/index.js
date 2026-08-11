const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/page-home.js","assets/js/rolldown-runtime.js","assets/js/component-agenticaisection.js","assets/js/component-expertiseshowcase.js","assets/js/component-resumedisplay.js","assets/js/component-protectedroute.js","assets/js/component-pegacloudsection.js","assets/js/component-floatingdock.js","assets/js/component-contactform.js","assets/js/component-projectcard.js","assets/js/component-pegasection.js","assets/js/component-techstackhexgrid.js","assets/js/page-projectdetail.js","assets/js/page-resume.js"])))=>i.map(i=>d[i]);
import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react } from "./component-agenticaisection.js";
import { t as require_client } from "./vendor-react.js";
import { a as HashRouter, c as Routes, f as __vitePreload, s as Route } from "./component-expertiseshowcase.js";
import { t as AuthProvider } from "./component-protectedroute.js";
import { t as FloatingDock } from "./component-floatingdock.js";
import { t as Navigation } from "./component-navigation.js";
import { t as Footer } from "./component-footer.js";
import { t as CyberBackground } from "./component-cyberbackground.js";
import { t as NotFound } from "./page-notfound.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/index.css
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = require_client();
//#endregion
//#region src/routes/publicRoutes.tsx
var import_jsx_runtime = require_jsx_runtime();
var Home = (0, import_react.lazy)(() => __vitePreload(() => import("./page-home.js").then((n) => n.t), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));
var About = (0, import_react.lazy)(() => __vitePreload(() => import("./component-resumedisplay.js").then((n) => n.d), __vite__mapDeps([4,1,2,3,5,6,7,8,9])));
var Experience = (0, import_react.lazy)(() => __vitePreload(() => import("./component-resumedisplay.js").then((n) => n.s), __vite__mapDeps([4,1,2,3,5,6,7,8,9])));
var Projects = (0, import_react.lazy)(() => __vitePreload(() => import("./component-resumedisplay.js").then((n) => n.r), __vite__mapDeps([4,1,2,3,5,6,7,8,9])));
var ProjectDetail = (0, import_react.lazy)(() => __vitePreload(() => import("./page-projectdetail.js").then((n) => n.t), __vite__mapDeps([12,1,2,3,4,5,6,7,8,9,10])));
var Resume = (0, import_react.lazy)(() => __vitePreload(() => import("./page-resume.js").then((n) => n.t), __vite__mapDeps([13,1,2,4,3,5,6,7,8,9])));
var Contact = (0, import_react.lazy)(() => __vitePreload(() => import("./component-resumedisplay.js").then((n) => n.l), __vite__mapDeps([4,1,2,3,5,6,7,8,9])));
var publicRoutes = [
	{
		path: "/",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, {})
	},
	{
		path: "/about",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {})
	},
	{
		path: "/experience",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {})
	},
	{
		path: "/projects",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {})
	},
	{
		path: "/projects/:slug",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectDetail, {})
	},
	{
		path: "/resume",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resume, {})
	},
	{
		path: "/contact",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	}
];
//#endregion
//#region src/App.tsx
function PublicLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[100dvh] cyber-bg-scene text-body flex flex-col overflow-x-hidden",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-screen flex items-center justify-center text-cyan-400",
			children: "Loading..."
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [
			publicRoutes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
				path: route.path,
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: route.element })
			}, route.path)),
			false,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
				path: "*",
				element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}) })
			})
		] })
	}) }) });
}
//#endregion
//#region src/main.tsx
var storedTheme = localStorage.getItem("theme");
var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (storedTheme === "dark" || !storedTheme && prefersDark) document.documentElement.classList.add("dark");
else document.documentElement.classList.remove("dark");
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) }));
//#endregion
