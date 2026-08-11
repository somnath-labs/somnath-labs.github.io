import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import Moon from "../../../node_modules/lucide-react/dist/esm/icons/moon.js";
import Sun from "../../../node_modules/lucide-react/dist/esm/icons/sun.js";
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
export { ThemeToggle as default };
