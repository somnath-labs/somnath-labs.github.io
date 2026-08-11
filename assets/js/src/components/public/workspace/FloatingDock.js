import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { useLocation, useNavigate } from "../../../../node_modules/react-router/dist/development/chunk-62JRHF6Z.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import Briefcase from "../../../../node_modules/lucide-react/dist/esm/icons/briefcase.js";
import CodeXml from "../../../../node_modules/lucide-react/dist/esm/icons/code-xml.js";
import FolderGit2 from "../../../../node_modules/lucide-react/dist/esm/icons/folder-git-2.js";
import House from "../../../../node_modules/lucide-react/dist/esm/icons/house.js";
import Layers from "../../../../node_modules/lucide-react/dist/esm/icons/layers.js";
import Mail from "../../../../node_modules/lucide-react/dist/esm/icons/mail.js";
import User from "../../../../node_modules/lucide-react/dist/esm/icons/user.js";
//#region src/components/public/workspace/FloatingDock.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var dockItems = [
	{
		id: "home",
		label: "Home",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { size: 19 }),
		path: "/"
	},
	{
		id: "about",
		label: "About",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 19 }),
		path: "#about"
	},
	{
		id: "skills",
		label: "Skills",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { size: 19 }),
		path: "#skills"
	},
	{
		id: "pega",
		label: "Pega",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { size: 19 }),
		path: "#pega"
	},
	{
		id: "experience",
		label: "Experience",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { size: 19 }),
		path: "#experience"
	},
	{
		id: "projects",
		label: "Projects",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { size: 19 }),
		path: "#projects"
	},
	{
		id: "contact",
		label: "Contact",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 19 }),
		path: "#contact"
	}
];
function FloatingDock() {
	const navigate = useNavigate();
	const location = useLocation();
	const [activeSection, setActiveSection] = import_react.useState("home");
	import_react.useEffect(() => {
		if (location.pathname !== "/") return;
		const observers = /* @__PURE__ */ new Map();
		const sectionsToObserve = dockItems.filter((item) => item.path.startsWith("#"));
		const handleScroll = () => {
			if (window.scrollY < 100) setActiveSection("home");
		};
		window.addEventListener("scroll", handleScroll);
		const timeoutId = setTimeout(() => {
			sectionsToObserve.forEach((item) => {
				const elementId = item.path.substring(1);
				const element = document.getElementById(elementId);
				if (element) {
					const observer = new IntersectionObserver((entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) setActiveSection(item.id);
						});
					}, {
						root: null,
						rootMargin: "-30% 0px -60% 0px",
						threshold: 0
					});
					observer.observe(element);
					observers.set(item.id, observer);
				}
			});
		}, 500);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(timeoutId);
			observers.forEach((observer) => observer.disconnect());
		};
	}, [location.pathname]);
	import_react.useEffect(() => {
		if (location.pathname !== "/") {
			const match = dockItems.find((item) => item.path === location.pathname);
			if (match) setActiveSection(match.id);
		} else if (location.hash) {
			const match = dockItems.find((item) => item.path === location.hash);
			if (match) setActiveSection(match.id);
		}
	}, [location.pathname, location.hash]);
	const handleNavClick = (item) => {
		setActiveSection(item.id);
		if (item.path.startsWith("#")) {
			if (location.pathname !== "/") navigate("/");
			setTimeout(() => {
				const elementId = item.path.substring(1);
				const element = document.getElementById(elementId);
				if (element) {
					const y = element.getBoundingClientRect().top + window.scrollY - 40;
					window.scrollTo({
						top: y,
						behavior: "smooth"
					});
				}
			}, 100);
		} else if (item.path === "/") {
			if (location.pathname !== "/") navigate("/");
			else window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} else navigate(item.path);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 px-2 w-[95%] sm:w-auto max-w-full flex justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				y: 60,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			transition: {
				duration: .6,
				type: "spring",
				damping: 20
			},
			className: "hyper-dock px-3 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center justify-center gap-1.5 sm:gap-3 shadow-2xl overflow-x-auto no-scrollbar",
			children: dockItems.map((item) => {
				const isActive = activeSection === item.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					whileHover: {
						scale: 1.22,
						y: -6
					},
					whileTap: { scale: .92 },
					onClick: () => handleNavClick(item),
					className: `group relative flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl transition-all duration-300 ${isActive ? "bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-purple-500/40" : "text-soft hover:text-strong hover:bg-slate-200/60 dark:hover:bg-slate-800/70"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative z-10",
							children: item.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-semibold mt-1 tracking-tight hidden sm:block",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-10 px-2.5 py-1 surface-deep accent-cyan text-[10px] font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border line-soft shadow-xl",
							children: item.label
						}),
						isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300 shadow-[0_0_8px_#06b6d4] dark:shadow-[0_0_10px_#38bdf8]" })
					]
				}, item.id);
			})
		})
	});
}
//#endregion
export { FloatingDock as default };
