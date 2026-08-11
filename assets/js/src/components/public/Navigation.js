import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { Link } from "../../../node_modules/react-router/dist/development/chunk-62JRHF6Z.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import CodeXml from "../../../node_modules/lucide-react/dist/esm/icons/code-xml.js";
import ThemeToggle from "./ThemeToggle.js";
//#region src/components/public/Navigation.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
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
export { Navigation as default };
