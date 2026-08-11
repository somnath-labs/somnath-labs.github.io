import { A as require_jsx_runtime, a as Cpu, c as motion, r as Sparkles } from "./component-agenticaisection.js";
import { dt as Cloud, ot as Layers } from "./component-dashboardstats.js";
import { n as Database } from "./component-pegasection.js";
import { r as CodeXml } from "./component-floatingdock.js";
//#region src/components/public/workspace/TechStackHexGrid.tsx
var import_jsx_runtime = require_jsx_runtime();
var techNodes = [
	{
		id: "ai",
		name: "Agentic AI",
		category: "AI & LLM Orchestration",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-6 h-6" }),
		gradient: "from-purple-500 via-fuchsia-500 to-indigo-600",
		glowColor: "rgba(168, 85, 247, 0.6)",
		borderColor: "border-purple-400/80"
	},
	{
		id: "pega",
		name: "PEGA",
		category: "Enterprise BPM Platform",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-6 h-6" }),
		gradient: "from-blue-600 via-indigo-600 to-cyan-400",
		glowColor: "rgba(6, 182, 212, 0.6)",
		borderColor: "border-cyan-400/80"
	},
	{
		id: "cloud",
		name: "Cloud",
		category: "AWS & Azure Cloud Native",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "w-6 h-6" }),
		gradient: "from-sky-400 via-blue-500 to-indigo-600",
		glowColor: "rgba(56, 189, 248, 0.6)",
		borderColor: "border-sky-400/80"
	},
	{
		id: "react",
		name: "React",
		category: "Modern UI Architecture",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-5 h-5" }),
		gradient: "from-cyan-400 to-teal-400",
		glowColor: "rgba(45, 212, 191, 0.6)",
		borderColor: "border-teal-400/80"
	},
	{
		id: "nodejs",
		name: "Node.js",
		category: "High-Perf Microservices",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5" }),
		gradient: "from-emerald-400 to-green-500",
		glowColor: "rgba(52, 211, 153, 0.6)",
		borderColor: "border-emerald-400/80"
	},
	{
		id: "sql",
		name: "SQL",
		category: "Database Management",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "w-5 h-5" }),
		gradient: "from-blue-500 to-indigo-600",
		glowColor: "rgba(99, 102, 241, 0.6)",
		borderColor: "border-indigo-400/80"
	}
];
function TechStackHexGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative py-12 px-4 max-w-xl mx-auto flex flex-col items-center select-none w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: 360 },
				transition: {
					duration: 60,
					repeat: Infinity,
					ease: "linear"
				},
				className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-cyan-500/20 border-dashed pointer-events-none opacity-50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: -360 },
				transition: {
					duration: 80,
					repeat: Infinity,
					ease: "linear"
				},
				className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple-500/20 border-dotted pointer-events-none opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
							node: techNodes[0],
							isFeatured: true,
							delay: 0
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-20 flex justify-center gap-4 sm:gap-6 -mt-6 sm:-mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
							node: techNodes[1],
							delay: .2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
							node: techNodes[2],
							delay: .4
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex justify-center gap-2 sm:gap-4 -mt-6 sm:-mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
								node: techNodes[3],
								delay: .6
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
								node: techNodes[4],
								delay: .8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
								node: techNodes[5],
								delay: 1
							})
						]
					})
				]
			})
		]
	});
}
function HexNode({ node, isFeatured = false, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { y: 0 },
		animate: { y: [
			0,
			-10,
			0
		] },
		transition: {
			duration: 4,
			repeat: Infinity,
			ease: "easeInOut",
			delay
		},
		className: "group relative flex flex-col items-center cursor-pointer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			whileHover: {
				scale: 1.15,
				rotateZ: 2
			},
			whileTap: { scale: .95 },
			transition: {
				type: "spring",
				stiffness: 350,
				damping: 18
			},
			className: `relative flex items-center justify-center transition-all duration-300 ${isFeatured ? "w-24 h-24 sm:w-28 sm:h-28" : "w-20 h-20 sm:w-24 sm:h-24"}`,
			style: { filter: `drop-shadow(0 0 20px ${node.glowColor})` },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `absolute inset-0 bg-white/80 dark:bg-slate-950/80 border-[3px] ${node.borderColor} backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400 dark:group-hover:border-cyan-300 group-hover:bg-slate-50 dark:group-hover:bg-slate-900`,
					style: { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `absolute inset-1 bg-gradient-to-br ${node.gradient} opacity-20 group-hover:opacity-70 transition-opacity duration-300`,
					style: { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center z-10 p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-slate-800 dark:text-white drop-shadow-md dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform",
						children: node.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-white mt-1 tracking-wider leading-none group-hover:text-cyan-600 dark:group-hover:text-cyan-200",
						children: node.name
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -bottom-10 px-3 py-1.5 rounded-lg surface-deep border border-cyan-500/30 text-[11px] text-cyan-300 font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl z-50",
			children: node.category
		})]
	});
}
//#endregion
export { TechStackHexGrid as t };
