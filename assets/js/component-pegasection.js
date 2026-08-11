import { A as require_jsx_runtime, c as motion, n as Zap, r as Sparkles, s as createLucideIcon } from "./component-agenticaisection.js";
import { dt as Cloud } from "./component-dashboardstats.js";
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChartNoAxesColumnIncreasing = createLucideIcon("chart-no-axes-column-increasing", [
	["path", {
		d: "M5 21v-6",
		key: "1hz6c0"
	}],
	["path", {
		d: "M12 21V9",
		key: "uvy0l4"
	}],
	["path", {
		d: "M19 21V3",
		key: "11j9sm"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Code = createLucideIcon("code", [["path", {
	d: "m16 18 6-6-6-6",
	key: "eg8j8"
}], ["path", {
	d: "m8 6-6 6 6 6",
	key: "ppft3o"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Database = createLucideIcon("database", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 21 19V5",
		key: "1wlel7"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}]
]);
//#endregion
//#region src/components/public/sections/PegaSection.tsx
var import_jsx_runtime = require_jsx_runtime();
function PegaSection() {
	const expertiseAreas = [
		{
			area: "Pega Development",
			description: "Building enterprise applications with Pega platform",
			technologies: [
				"Pega",
				"Case Management",
				"Data Pages",
				"Integration"
			],
			accent: "from-purple-500/25 to-indigo-500/10",
			iconColor: "accent-purple",
			borderColor: "border-purple-500/30 hover:border-purple-400/70"
		},
		{
			area: "Pega Cloud",
			description: "Cloud deployment and environment management",
			technologies: [
				"Pega Cloud",
				"Deployment",
				"Environment Management"
			],
			accent: "from-cyan-500/25 to-sky-500/10",
			iconColor: "accent-cyan",
			borderColor: "border-cyan-500/30 hover:border-cyan-400/70"
		},
		{
			area: "Pega Integration",
			description: "REST APIs and system integrations",
			technologies: [
				"REST APIs",
				"Connectors",
				"Data Transforms"
			],
			accent: "from-amber-500/25 to-orange-500/10",
			iconColor: "accent-amber",
			borderColor: "border-amber-500/30 hover:border-amber-400/70"
		},
		{
			area: "Pega Decisioning",
			description: "Business rules and decision management",
			technologies: [
				"Decision Tables",
				"Decision Trees",
				"When Rules"
			],
			accent: "from-emerald-500/25 to-teal-500/10",
			iconColor: "accent-emerald",
			borderColor: "border-emerald-500/30 hover:border-emerald-400/70"
		}
	];
	const icons = {
		"Pega Development": Database,
		"Pega Cloud": Cloud,
		"Pega Integration": Zap,
		"Pega Decisioning": ChartNoAxesColumnIncreasing
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-20 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" }),
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
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-purple-500/30 text-xs font-medium accent-purple mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), "Enterprise Platform Expertise"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "cyber-section-title text-4xl font-black tracking-tight mb-4",
							children: "Pega Expertise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-soft font-light max-w-2xl mx-auto",
							children: "Specialized experience in Pega platform development and cloud deployment"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6",
					children: expertiseAreas.map((area, index) => {
						const Icon = icons[area.area] || Code;
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
							className: `hyper-glass cyber-card-hover rounded-2xl p-6 border ${area.borderColor} relative overflow-hidden`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${area.accent}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `p-3 rounded-xl bg-gradient-to-br ${area.accent} border border-white/10 flex-shrink-0`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: area.iconColor,
										size: 24
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-strong mb-2 tracking-wide",
											children: area.area
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-soft text-sm font-light mb-4",
											children: area.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: area.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-3 py-1 rounded-full text-xs font-medium surface-soft border line-soft text-strong",
												children: tech
											}, tech))
										})
									]
								})]
							})]
						}, area.area);
					})
				})]
			})
		]
	});
}
//#endregion
export { Database as n, Code as r, PegaSection as t };
