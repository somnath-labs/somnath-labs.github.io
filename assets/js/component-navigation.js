import { r as __toESM } from "./rolldown-runtime.js";
import { A as require_jsx_runtime, j as require_react, k as createLucideIcon, n as motion } from "./component-agenticaisection.js";
import { o as Link } from "./component-expertiseshowcase.js";
import { i as CodeXml } from "./component-floatingdock.js";
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Moon = createLucideIcon("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sun = createLucideIcon("sun", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "m17.66 17.66 1.41 1.41",
		key: "ptbguv"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m6.34 17.66-1.41 1.41",
		key: "1m8zz5"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}]
]);
//#endregion
//#region src/components/public/ThemeToggle.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function getInitialTheme() {
	const stored = localStorage.getItem("theme");
	if (stored === "dark" || stored === "light") return stored;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)(getInitialTheme);
	(0, import_react.useEffect)(() => {
		if (theme === "dark") document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", theme);
	}, [theme]);
	const toggle = () => {
		setTheme((prev) => prev === "dark" ? "light" : "dark");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		title: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		className: "relative p-2.5 rounded-xl surface-glass border border-transparent text-soft hover:text-strong transition-all duration-300 shadow-sm cursor-pointer group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
			style: { boxShadow: "0 0 18px color-mix(in srgb, var(--acc-cyan) 40%, transparent)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative block h-5 w-5 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute inset-0 flex items-center justify-center transition-all duration-500 ${theme === "dark" ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
					size: 18,
					className: "accent-cyan"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute inset-0 flex items-center justify-center transition-all duration-500 ${theme === "light" ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
					size: 18,
					className: "accent-amber"
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/public/Navigation.tsx
function Navigation() {
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const nav = document.getElementById("main-nav");
			if (nav) {
				if (window.scrollY > 20) nav.classList.add("nav-scrolled");
				else nav.classList.remove("nav-scrolled");
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		id: "main-nav",
		className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
		style: { background: "transparent" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        #main-nav.nav-scrolled {
          background: var(--surface-glass) !important;
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border-bottom: 1px solid var(--line-strong);
          box-shadow: 0 8px 32px var(--shadow-strong);
        }
      ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between h-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .6,
						ease: "easeOut"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative p-2 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-lg group-hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { size: 16 })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-black tracking-tight text-strong group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-300",
							children: "Somnath"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: 20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .6,
						ease: "easeOut"
					},
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
				})]
			})
		})]
	});
}
//#endregion
export { Navigation as t };
