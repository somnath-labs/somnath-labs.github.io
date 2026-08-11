import { Link } from "../../../../node_modules/react-router/dist/development/chunk-62JRHF6Z.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import ArrowRight from "../../../../node_modules/lucide-react/dist/esm/icons/arrow-right.js";
import Bot from "../../../../node_modules/lucide-react/dist/esm/icons/bot.js";
import Cloud from "../../../../node_modules/lucide-react/dist/esm/icons/cloud.js";
import Layers from "../../../../node_modules/lucide-react/dist/esm/icons/layers.js";
import Plug from "../../../../node_modules/lucide-react/dist/esm/icons/plug.js";
import Sparkles from "../../../../node_modules/lucide-react/dist/esm/icons/sparkles.js";
//#region src/components/public/workspace/ExpertiseShowcase.tsx
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		title: "Pega Platform",
		description: "Enterprise case management, decisioning and BPM built on Pega Infinity.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-5 h-5" }),
		chips: [
			"Case Management",
			"Decisioning",
			"Cosmos UI"
		],
		gradient: "from-purple-500/25 to-indigo-500/10",
		iconColor: "accent-purple",
		borderColor: "hover:border-purple-500/50"
	},
	{
		title: "Agentic AI",
		description: "Autonomous agents, RAG pipelines and LLM orchestration for smart workflows.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "w-5 h-5" }),
		chips: [
			"AI Agents",
			"RAG",
			"Tool Calling"
		],
		gradient: "from-fuchsia-500/25 to-pink-500/10",
		iconColor: "accent-fuchsia",
		borderColor: "hover:border-fuchsia-500/50"
	},
	{
		title: "Cloud-Native",
		description: "Pega Cloud, AWS & Azure architectures with automated delivery pipelines.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "w-5 h-5" }),
		chips: [
			"Pega Cloud",
			"AWS / Azure",
			"CI/CD"
		],
		gradient: "from-cyan-500/25 to-blue-500/10",
		iconColor: "accent-cyan",
		borderColor: "hover:border-cyan-500/50"
	},
	{
		title: "Integrations & APIs",
		description: "REST APIs, connectors and modern React / Node.js services that glue systems.",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plug, { className: "w-5 h-5" }),
		chips: [
			"REST APIs",
			"React",
			"Node.js"
		],
		gradient: "from-emerald-500/25 to-teal-500/10",
		iconColor: "accent-emerald",
		borderColor: "hover:border-emerald-500/50"
	}
];
function ExpertiseShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 25
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: { duration: .6 },
		className: "relative w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-2.5 rounded-xl bg-gradient-to-br from-purple-600/10 dark:from-purple-600/30 to-cyan-500/10 dark:to-cyan-500/20 border border-slate-200 dark:border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.1)] dark:shadow-[0_0_15px_rgba(168,85,247,0.2)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-6 h-6 accent-purple" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl font-black text-strong tracking-tight",
					children: "What I Build"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-soft font-light mt-1",
					children: "Enterprise platforms, intelligent agents and cloud-native solutions"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projects",
				className: "neon-btn-secondary py-2 px-5 text-xs font-semibold",
				children: ["View Projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
			children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: index * .1
				},
				className: `group relative hyper-glass rounded-2xl p-5 border border-slate-200/50 dark:border-white/5 ${feature.borderColor} hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 overflow-hidden flex flex-col h-full`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-80 dark:opacity-50 group-hover:opacity-100 transition-opacity` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} border border-slate-200 dark:border-white/10 mb-4 self-start shadow-sm dark:shadow-lg`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: feature.iconColor,
							children: feature.icon
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-base font-bold text-strong tracking-wide mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors",
						children: feature.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] text-soft font-light leading-relaxed mb-5 flex-grow",
						children: feature.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5 mt-auto",
						children: feature.chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2 py-1 rounded-md surface-deep border line-soft text-[10px] font-medium text-faint group-hover:border-cyan-400/50 dark:group-hover:border-cyan-500/30 group-hover:text-cyan-700 dark:group-hover:text-cyan-100 transition-colors bg-white/50 dark:bg-transparent",
							children: chip
						}, chip))
					})
				]
			}, feature.title))
		})]
	});
}
//#endregion
export { ExpertiseShowcase as default };
