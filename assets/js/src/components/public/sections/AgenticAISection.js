import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import Bot from "../../../../node_modules/lucide-react/dist/esm/icons/bot.js";
import Brain from "../../../../node_modules/lucide-react/dist/esm/icons/brain.js";
import Cpu from "../../../../node_modules/lucide-react/dist/esm/icons/cpu.js";
import MessageSquare from "../../../../node_modules/lucide-react/dist/esm/icons/message-square.js";
import Network from "../../../../node_modules/lucide-react/dist/esm/icons/network.js";
import Sparkles from "../../../../node_modules/lucide-react/dist/esm/icons/sparkles.js";
import Zap from "../../../../node_modules/lucide-react/dist/esm/icons/zap.js";
//#region src/components/public/sections/AgenticAISection.tsx
var import_jsx_runtime = require_jsx_runtime();
function AgenticAISection() {
	const aiTopics = [
		{
			topic: "Agentic AI",
			description: "Building autonomous AI agents that can reason and act",
			technologies: [
				"AI Agents",
				"Tool Calling",
				"LLM Orchestration"
			],
			iconColor: "accent-purple",
			gradient: "from-purple-500/25 to-fuchsia-500/10",
			borderColor: "border-purple-500/30 hover:border-purple-400/70"
		},
		{
			topic: "Tool Calling",
			description: "Enabling AI to interact with external tools and APIs",
			technologies: [
				"Function Calling",
				"API Integration",
				"MCP"
			],
			iconColor: "accent-cyan",
			gradient: "from-cyan-500/25 to-sky-500/10",
			borderColor: "border-cyan-500/30 hover:border-cyan-400/70"
		},
		{
			topic: "RAG Systems",
			description: "Retrieval-Augmented Generation for knowledge-rich responses",
			technologies: [
				"Vector Search",
				"Embeddings",
				"Knowledge Base"
			],
			iconColor: "accent-emerald",
			gradient: "from-emerald-500/25 to-teal-500/10",
			borderColor: "border-emerald-500/30 hover:border-emerald-400/70"
		},
		{
			topic: "Multi-Agent Systems",
			description: "Coordinating multiple AI agents for complex tasks",
			technologies: [
				"Agent Collaboration",
				"Task Distribution",
				"Workflow"
			],
			iconColor: "accent-blue",
			gradient: "from-blue-500/25 to-indigo-500/10",
			borderColor: "border-blue-500/30 hover:border-blue-400/70"
		},
		{
			topic: "Local AI",
			description: "Running AI models locally for privacy and control",
			technologies: [
				"Local LLMs",
				"Ollama",
				"Privacy"
			],
			iconColor: "accent-amber",
			gradient: "from-amber-500/25 to-orange-500/10",
			borderColor: "border-amber-500/30 hover:border-amber-400/70"
		},
		{
			topic: "AI Workflows",
			description: "Designing and implementing AI-powered automation workflows",
			technologies: [
				"Automation",
				"Chains",
				"Memory"
			],
			iconColor: "accent-rose",
			gradient: "from-rose-500/25 to-pink-500/10",
			borderColor: "border-rose-500/30 hover:border-rose-400/70"
		}
	];
	const icons = {
		"Agentic AI": Bot,
		"Tool Calling": Zap,
		"RAG Systems": Brain,
		"Multi-Agent Systems": Network,
		"Local AI": Cpu,
		"AI Workflows": MessageSquare
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-20 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-10 left-0 w-[500px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cyber-divider absolute top-0 left-10 right-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .6 },
						className: "text-center mb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-fuchsia-500/30 text-xs font-medium accent-fuchsia mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), "Frontier Exploration"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "cyber-section-title text-4xl font-black tracking-tight mb-4",
								children: "Agentic AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-soft font-light max-w-2xl mx-auto",
								children: "Exploring the frontier of autonomous AI agents and intelligent systems"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: aiTopics.map((topic, index) => {
							const Icon = icons[topic.topic] || Bot;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									scale: .9
								},
								whileInView: {
									opacity: 1,
									scale: 1
								},
								viewport: { once: true },
								transition: {
									duration: .6,
									delay: index * .1
								},
								whileHover: {
									scale: 1.03,
									y: -6
								},
								className: `hyper-glass cyber-card-hover rounded-2xl p-6 border ${topic.borderColor} relative overflow-hidden`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${topic.gradient}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col h-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `p-4 rounded-2xl bg-gradient-to-br ${topic.gradient} border border-white/10 mb-4 inline-flex w-fit`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: topic.iconColor,
												size: 32
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-strong mb-2 tracking-wide",
											children: topic.topic
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-soft text-sm font-light mb-4 flex-1",
											children: topic.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: topic.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-2 py-1 rounded-full text-xs font-medium surface-soft border line-soft text-strong",
												children: tech
											}, tech))
										})
									]
								})]
							}, topic.topic);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
							duration: .6,
							delay: .4
						},
						className: "mt-12 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-6 py-3 rounded-full hyper-glass border border-fuchsia-500/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
								className: "accent-fuchsia",
								size: 20
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "accent-fuchsia font-medium",
								children: "Actively exploring and building with AI agents"
							})]
						})
					})
				]
			})
		]
	});
}
//#endregion
export { AgenticAISection as default };
