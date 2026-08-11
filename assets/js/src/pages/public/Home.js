import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { Link } from "../../../node_modules/react-router/dist/development/chunk-62JRHF6Z.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useScroll } from "../../../node_modules/framer-motion/dist/es/value/use-scroll.js";
import { useTransform } from "../../../node_modules/framer-motion/dist/es/value/use-transform.js";
import ArrowRight from "../../../node_modules/lucide-react/dist/esm/icons/arrow-right.js";
import Download from "../../../node_modules/lucide-react/dist/esm/icons/download.js";
import Globe from "../../../node_modules/lucide-react/dist/esm/icons/globe.js";
import Layers from "../../../node_modules/lucide-react/dist/esm/icons/layers.js";
import Sparkles from "../../../node_modules/lucide-react/dist/esm/icons/sparkles.js";
import Star from "../../../node_modules/lucide-react/dist/esm/icons/star.js";
import Zap from "../../../node_modules/lucide-react/dist/esm/icons/zap.js";
import TechStackHexGrid from "../../components/public/workspace/TechStackHexGrid.js";
import PegaSection from "../../components/public/sections/PegaSection.js";
import PegaCloudSection from "../../components/public/sections/PegaCloudSection.js";
import AgenticAISection from "../../components/public/sections/AgenticAISection.js";
import About from "./About.js";
import SkillsSection from "./SkillsSection.js";
import Experience from "./Experience.js";
import Contact from "./Contact.js";
import Projects from "./Projects.js";
//#region src/pages/public/Home.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var stats = [
	{
		value: "5+",
		label: "Years Exp.",
		accent: "border-l-purple-500",
		glow: "rgba(168,85,247,0.4)"
	},
	{
		value: "10+",
		label: "Projects",
		accent: "border-l-cyan-400",
		glow: "rgba(34,211,238,0.4)"
	},
	{
		value: "4+",
		label: "Clients",
		accent: "border-l-blue-500",
		glow: "rgba(96,165,250,0.4)"
	},
	{
		value: "100%",
		label: "Dedication",
		accent: "border-l-emerald-400",
		glow: "rgba(52,211,153,0.4)"
	}
];
var EASE = [
	.22,
	1,
	.36,
	1
];
function Home() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const containerVariants = {
		hidden: {},
		show: { transition: { staggerChildren: .12 } }
	};
	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 28
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .65,
				ease: EASE
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen text-strong overflow-x-hidden pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "absolute top-20 left-8 font-mono text-[11px] opacity-0 text-faint hidden xl:block pointer-events-none leading-relaxed z-10",
				initial: {
					opacity: 0,
					x: -20
				},
				animate: {
					opacity: .65,
					x: 0
				},
				transition: {
					duration: 1.2,
					delay: 1
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "import"
						}),
						" pega ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-emerald",
							children: "'pega'"
						}),
						";"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "import"
						}),
						" { ai } ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-emerald",
							children: "'agentic-ai'"
						}),
						";"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "import"
						}),
						" { cloud } ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-emerald",
							children: "'aws'"
						}),
						";"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-faint mt-1",
						children: ["// building impact", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "animate-cursor",
							children: "▌"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: heroRef,
				className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "lg:col-span-6 space-y-6",
						variants: containerVariants,
						initial: "hidden",
						animate: "show",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: itemVariants,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full hyper-glass border line-soft text-xs font-semibold text-soft shadow-lg animate-float-smooth",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "accent-amber text-base",
											children: "👋"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Welcome to my digital space" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemVariants,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-strong block",
										children: "Hi, I'm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "neon-title-gradient block mt-1",
										children: "Somnath"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 mt-4",
									children: [
										"Pega Developer",
										"Agentic AI Explorer",
										"Cloud Enthusiast"
									].map((role, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
										initial: {
											opacity: 0,
											scale: .85
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										transition: {
											delay: .5 + i * .15,
											duration: .4
										},
										className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold hyper-glass border line-soft",
										children: [
											i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
												size: 11,
												className: "accent-cyan"
											}),
											i === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
												size: 11,
												className: "accent-purple"
											}),
											i === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
												size: 11,
												className: "accent-blue"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "neon-shimmer-text",
												children: role
											})
										]
									}, role))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: itemVariants,
								className: "text-sm sm:text-base text-soft leading-relaxed",
								children: "I build intelligent, scalable and cloud-native solutions using Pega Platform, Agentic AI and modern technologies. Passionate about solving complex problems and creating impactful digital experiences."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemVariants,
								className: "flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/projects",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
										whileHover: {
											scale: 1.05,
											boxShadow: "0 0 35px rgba(6,182,212,0.55)"
										},
										whileTap: { scale: .96 },
										className: "neon-btn-primary cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 15 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore My Work" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/resume",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
										whileHover: { scale: 1.05 },
										whileTap: { scale: .96 },
										className: "neon-btn-secondary cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 15 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download Resume" })]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemVariants,
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-emerald-400 animate-glow-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ripple" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold accent-emerald",
									children: "Available for new opportunities"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: itemVariants,
								className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
								children: stats.map(({ value, label, accent, glow }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									whileHover: {
										scale: 1.06,
										boxShadow: `0 0 22px ${glow}`
									},
									transition: {
										type: "spring",
										stiffness: 300
									},
									className: `hyper-glass p-3 rounded-xl text-center border-l-2 ${accent} stat-card-glow cursor-default`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-2xl font-black text-strong animate-number-flicker",
										children: value
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-faint font-medium mt-0.5",
										children: label
									})]
								}, label))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "lg:col-span-6 flex flex-col items-center gap-10 w-full mt-8 lg:mt-0",
						initial: {
							opacity: 0,
							x: 40
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .9,
							delay: .25,
							ease: EASE
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							whileInView: {
								scale: [.96, 1],
								opacity: [0, 1]
							},
							viewport: { once: true },
							transition: { duration: .7 },
							className: "w-full flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStackHexGrid, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: 1,
								duration: .6
							},
							className: "space-y-3 w-full max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								whileHover: {
									scale: 1.02,
									borderColor: "var(--acc-cyan)"
								},
								className: "hyper-glass p-4 rounded-xl font-mono text-[13px] text-soft border border-cyan-500/20 flex items-center justify-between shadow-lg shadow-cyan-500/5 bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-purple-400 font-semibold",
										children: "while"
									}),
									" ",
									"(learn && build) {",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-cyan-400 font-semibold",
										children: "impact++"
									}),
									"; }"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base animate-pulse",
									children: "🚀"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								whileHover: {
									scale: 1.02,
									borderColor: "var(--acc-purple)"
								},
								className: "hyper-glass p-4 rounded-xl text-xs font-mono border border-purple-500/20 flex items-center justify-between shadow-lg shadow-purple-500/5 bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm",
								children: [
									"PLAN",
									"CODE",
									"TEST",
									"DEPLOY",
									"IMPACT"
								].map((step, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: [
											"text-purple-400",
											"text-cyan-400",
											"text-blue-400",
											"text-emerald-400",
											"text-pink-400"
										][i] + " font-extrabold tracking-wider",
										children: step
									}), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 8,
										className: "text-slate-400 dark:text-slate-600"
									})]
								}, step))
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity },
				className: "relative z-10 mt-20 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cyber-divider mx-auto max-w-4xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							opacity: 0,
							y: 10
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "inline-block px-6 py-2 rounded-full hyper-glass border line-soft text-xs font-semibold text-faint tracking-widest uppercase",
						children: "Expertise Deep Dive"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 space-y-24 pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "about",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "skills",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "pega",
						className: "space-y-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PegaSection, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PegaCloudSection, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgenticAISection, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "experience",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "projects",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
					})
				]
			})
		]
	});
}
//#endregion
export { Home as default };
