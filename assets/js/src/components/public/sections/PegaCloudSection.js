import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import Activity from "../../../../node_modules/lucide-react/dist/esm/icons/activity.js";
import Cloud from "../../../../node_modules/lucide-react/dist/esm/icons/cloud.js";
import Globe from "../../../../node_modules/lucide-react/dist/esm/icons/globe.js";
import Server from "../../../../node_modules/lucide-react/dist/esm/icons/server.js";
import Settings from "../../../../node_modules/lucide-react/dist/esm/icons/settings.js";
import Shield from "../../../../node_modules/lucide-react/dist/esm/icons/shield.js";
import Sparkles from "../../../../node_modules/lucide-react/dist/esm/icons/sparkles.js";
//#region src/components/public/sections/PegaCloudSection.tsx
var import_jsx_runtime = require_jsx_runtime();
function PegaCloudSection() {
	const cloudExperiences = [
		{
			title: "Pega Cloud Deployment",
			description: "Deploying and managing Pega applications in cloud environments",
			technology: "Pega Cloud",
			iconColor: "accent-cyan",
			gradient: "from-cyan-500/25 to-sky-500/10",
			borderColor: "border-cyan-500/30 hover:border-cyan-400/70"
		},
		{
			title: "Environment Management",
			description: "Managing development, test, and production environments",
			technology: "Environment Management",
			iconColor: "accent-blue",
			gradient: "from-blue-500/25 to-indigo-500/10",
			borderColor: "border-blue-500/30 hover:border-blue-400/70"
		},
		{
			title: "Cloud Integration",
			description: "Integrating Pega with cloud services and APIs",
			technology: "Cloud Integration",
			iconColor: "accent-emerald",
			gradient: "from-emerald-500/25 to-teal-500/10",
			borderColor: "border-emerald-500/30 hover:border-emerald-400/70"
		},
		{
			title: "Performance Optimization",
			description: "Optimizing application performance in cloud infrastructure",
			technology: "Performance",
			iconColor: "accent-amber",
			gradient: "from-amber-500/25 to-orange-500/10",
			borderColor: "border-amber-500/30 hover:border-amber-400/70"
		},
		{
			title: "Security & Compliance",
			description: "Implementing security measures and compliance standards",
			technology: "Security",
			iconColor: "accent-rose",
			gradient: "from-rose-500/25 to-pink-500/10",
			borderColor: "border-rose-500/30 hover:border-rose-400/70"
		},
		{
			title: "Automation",
			description: "Automating deployment and operational tasks",
			technology: "Automation",
			iconColor: "accent-purple",
			gradient: "from-purple-500/25 to-fuchsia-500/10",
			borderColor: "border-purple-500/30 hover:border-purple-400/70"
		}
	];
	const icons = {
		"Pega Cloud Deployment": Cloud,
		"Environment Management": Server,
		"Cloud Integration": Globe,
		"Performance Optimization": Activity,
		"Security & Compliance": Shield,
		"Automation": Settings
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-20 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 right-0 w-[500px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cyber-divider absolute top-0 left-10 right-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-cyan-500/30 text-xs font-medium accent-cyan mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), "Cloud-Native Operations"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "cyber-section-title text-4xl font-black tracking-tight mb-4",
							children: "Pega Cloud Experience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-soft font-light max-w-2xl mx-auto",
							children: "Hands-on experience with Pega Cloud deployment and management"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: cloudExperiences.map((exp, index) => {
						const Icon = icons[exp.title] || Cloud;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
								delay: index * .1
							},
							whileHover: { y: -6 },
							className: `hyper-glass cyber-card-hover rounded-2xl p-6 border ${exp.borderColor} relative overflow-hidden`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.gradient}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `p-4 rounded-2xl bg-gradient-to-br ${exp.gradient} border border-white/10 mb-4`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: exp.iconColor,
											size: 28
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold text-strong mb-2 tracking-wide",
										children: exp.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-soft text-sm font-light mb-4",
										children: exp.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-3 py-1 rounded-full text-xs font-medium surface-soft border line-soft accent-cyan",
										children: exp.technology
									})
								]
							})]
						}, exp.title);
					})
				})]
			})
		]
	});
}
//#endregion
export { PegaCloudSection as default };
