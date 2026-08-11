import { Link } from "../../../node_modules/react-router/dist/development/chunk-62JRHF6Z.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import ExternalLink from "../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import FolderGit2 from "../../../node_modules/lucide-react/dist/esm/icons/folder-git-2.js";
import Star from "../../../node_modules/lucide-react/dist/esm/icons/star.js";
//#region src/components/public/ProjectCard.tsx
var import_jsx_runtime = require_jsx_runtime();
var categoryColors = {
	client_served: "accent-emerald border-emerald-500/40 bg-emerald-500/10",
	poc: "accent-amber border-amber-500/40 bg-amber-500/10",
	component: "accent-cyan border-cyan-500/40 bg-cyan-500/10",
	project_build: "accent-purple border-purple-500/40 bg-purple-500/10",
	technology: "accent-blue border-blue-500/40 bg-blue-500/10",
	pega: "accent-purple border-purple-500/40 bg-purple-500/10",
	pega_cloud: "accent-cyan border-cyan-500/40 bg-cyan-500/10",
	agentic_ai: "accent-fuchsia border-fuchsia-500/40 bg-fuchsia-500/10",
	ai: "accent-emerald border-emerald-500/40 bg-emerald-500/10",
	software_engineering: "accent-amber border-amber-500/40 bg-amber-500/10",
	personal: "text-pink-300 border-pink-500/40 bg-pink-500/10",
	sample: "text-soft border-slate-500/40 bg-slate-500/10",
	open_source: "text-yellow-300 border-yellow-500/40 bg-yellow-500/10",
	other: "text-indigo-300 border-indigo-500/40 bg-indigo-500/10"
};
var categoryLabels = {
	client_served: "Client Served",
	poc: "PoC",
	component: "Component",
	project_build: "Project Build",
	technology: "Technology"
};
function ProjectCard({ project }) {
	const technologies = project.technologies || [];
	const category = project.category || "other";
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
		transition: { duration: .5 },
		whileHover: { y: -8 },
		className: "hyper-glass rounded-2xl border line-soft cyber-card-hover relative overflow-hidden flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 flex flex-col flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[category] || categoryColors.other}`,
						children: categoryLabels[category] || category.replace("_", " ")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [project.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 text-[10px] font-bold accent-amber",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								className: "text-yellow-400 fill-yellow-400",
								size: 14
							}), "Featured"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, {
							size: 16,
							className: "text-faint"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong mb-2 tracking-wide",
					children: project.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-faint font-light mb-4 line-clamp-2",
					children: project.description
				}),
				technologies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] font-bold text-faint uppercase tracking-widest mb-2 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" }), "Technologies"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1.5",
						children: [technologies.slice(0, 5).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cyber-chip text-[11px]! px-2.5! py-1!",
							children: tech
						}, tech)), technologies.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "cyber-chip text-[11px]! px-2.5! py-1!",
							children: ["+", technologies.length - 5]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mt-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/projects/${project.slug}`,
							className: "neon-btn-primary flex-1 py-2.5! rounded-xl! text-sm!",
							children: "View Details"
						}),
						project.github_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: project.github_url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "p-2.5 rounded-xl border line-soft surface-soft text-soft hover:text-strong hover:border-cyan-500/50 transition-colors",
							"aria-label": "GitHub",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-4 h-4 fill-current",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
							})
						}),
						project.demo_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: project.demo_url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "p-2.5 rounded-xl border line-soft surface-soft text-soft hover:text-strong hover:border-cyan-500/50 transition-colors",
							"aria-label": "Live Demo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 16 })
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { ProjectCard as default };
