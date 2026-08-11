import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import Briefcase from "../../../node_modules/lucide-react/dist/esm/icons/briefcase.js";
import Calendar from "../../../node_modules/lucide-react/dist/esm/icons/calendar.js";
import CircleCheck from "../../../node_modules/lucide-react/dist/esm/icons/circle-check.js";
import MapPin from "../../../node_modules/lucide-react/dist/esm/icons/map-pin.js";
import Sparkles from "../../../node_modules/lucide-react/dist/esm/icons/sparkles.js";
import Trophy from "../../../node_modules/lucide-react/dist/esm/icons/trophy.js";
import format from "../../../node_modules/date-fns/format.js";
import { getPublicExperiences } from "../../lib/publicApi.js";
//#region src/pages/public/Experience.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var fallbackExperiences = [
	{
		id: "x1",
		company_id: "c1",
		role: "Applications Consultant",
		location: "Stockholm, Sweden",
		start_date: "2026-04-01",
		end_date: null,
		current: true,
		description: "Working as an Applications Consultant, contributing to enterprise application development and support initiatives within BPM/Pega environments.",
		responsibilities: [
			"Involved in understanding business requirements, application enhancement, issue resolution, and implementation of scalable solutions",
			"Collaborating with cross-functional teams to support end-to-end development activities including workflows, integrations, data handling, and process optimization",
			"Continuously adapting to new technologies, client requirements, and best practices while contributing to efficient and high-quality project delivery"
		],
		achievements: [],
		technologies: [
			"Pega Platform",
			"BPM",
			"Integrations"
		],
		show_on_website: true,
		show_on_resume: true,
		featured: true,
		order: 1,
		created_at: "",
		updated_at: ""
	},
	{
		id: "x2",
		company_id: "c2",
		role: "Associate",
		location: "Kolkata, India",
		start_date: "2025-05-01",
		end_date: "2026-04-30",
		current: false,
		description: "Pega Developer with 4+ years of experience in software development, specializing in BPM – Pega PRPC. Worked as a core team member contributing to multiple project modules.",
		responsibilities: ["Skilled in end-to-end application development, including Activities, Data Transforms, Flow Actions, Declarative Rules, Integrations, Queue Processors, Job Schedulers, Routing, Reports, Data Flows, and Component development", "Delivered Pega training for freshers and provided mentorship to junior team members to support their technical growth"],
		achievements: ["Recognized for Extraordinary Performance by client Global Insurance Company Based on UK"],
		technologies: [
			"Pega PRPC",
			"Case Management",
			"Integration",
			"Job Schedulers"
		],
		show_on_website: true,
		show_on_resume: true,
		featured: true,
		order: 2,
		created_at: "",
		updated_at: ""
	},
	{
		id: "x3",
		company_id: "c3",
		role: "Associate Consultant",
		location: "Kolkata, India",
		start_date: "2021-12-01",
		end_date: "2025-05-31",
		current: false,
		description: "Worked as a Pega Developer with over 3.5 years of hands-on experience in application development, enhancement, and defect resolution within BPM– Pega/PRPC environments.",
		responsibilities: [
			"Contributed to end-to-end solution design and implementation across multiple modules of the Pega platform",
			"Experienced in developing various PRPC components including Activities, Data Transforms, Flow Actions, Decision Rules, Integrations, Queue Processors, Job Schedulers, Reports, Data Flows, and Components",
			"Actively participated in building reusable assets as part of the Center of Excellence (COE) team to improve development efficiency across projects",
			"Provided mentorship and guidance to junior team members, supported knowledge-sharing initiatives, and contributed to best practice adoption"
		],
		achievements: ["Award for Outstanding Performance (Capgemini L&D India)", "Customer Delight Award (DCX, Capgemini)"],
		technologies: [
			"Pega PRPC",
			"Data Transforms",
			"COE",
			"Reports"
		],
		show_on_website: true,
		show_on_resume: true,
		featured: false,
		order: 3,
		created_at: "",
		updated_at: ""
	}
];
function Experience() {
	const [experiences, setExperiences] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			const data = await getPublicExperiences();
			setExperiences(data.length > 0 ? data : fallbackExperiences);
		} catch {
			setExperiences(fallbackExperiences);
		} finally {
			setLoading(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .5 },
				className: "text-center mb-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-cyan-500/30 text-xs font-medium accent-cyan mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-3.5 h-3.5" }), "Career Journey"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "cyber-section-title text-4xl sm:text-5xl font-black tracking-tight mb-4",
						children: "Professional Experience"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-soft font-light max-w-2xl mx-auto",
						children: "5+ years of building intelligent enterprise solutions — from web apps to Pega Cloud and Agentic AI"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-4xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-emerald-500/20 -translate-x-1/2 rounded-full" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-emerald-500/20 -translate-x-1/2 blur-[8px]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-10",
						children: experiences.map((exp) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: { once: true },
								transition: {
									duration: .6,
									delay: .05
								},
								className: "relative flex flex-col gap-4 pl-12 sm:pl-20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-4 sm:left-8 top-5 -translate-x-1/2 z-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-400/80 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-110 group-hover:border-cyan-500 dark:group-hover:border-cyan-300 transition-all duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
											size: 16,
											className: "text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors"
										})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group relative hyper-glass hover:bg-white/90 dark:hover:bg-slate-900/50 rounded-3xl p-6 sm:p-8 border hover:border-cyan-400/30 dark:hover:border-cyan-500/30 transition-all duration-500 overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${exp.current ? "from-cyan-500/5 to-blue-500/5" : "from-purple-500/5 to-indigo-500/5"}` }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${exp.current ? "from-cyan-400 via-sky-500 to-blue-600" : "from-purple-500 via-fuchsia-500 to-indigo-500"}` }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative z-10 flex items-start justify-between flex-wrap gap-4 mb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-xl font-black text-slate-800 dark:text-white tracking-tight group-hover:text-cyan-700 dark:group-hover:text-cyan-100 transition-colors",
													children: exp.role
												}) }), exp.current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "px-3 py-1 rounded-full text-[10px] font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)] dark:shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" }), "CURRENT"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative z-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-600 dark:text-slate-400 font-medium mb-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
															size: 14,
															className: "text-cyan-600 dark:text-cyan-400"
														}),
														format(new Date(exp.start_date), "MMM yyyy"),
														" — ",
														exp.current ? "Present" : format(new Date(exp.end_date), "MMM yyyy")
													]
												}), exp.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
														size: 14,
														className: "text-purple-600 dark:text-purple-400"
													}), exp.location]
												})]
											}),
											exp.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "relative z-10 text-[14px] text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-6",
												children: exp.description
											}),
											exp.responsibilities && exp.responsibilities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "relative z-10 space-y-3 mb-6",
												children: exp.responsibilities.map((resp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-3 text-[13.5px] text-slate-600 dark:text-slate-300 font-light leading-relaxed",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
														size: 16,
														className: "text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-0.5 opacity-80"
													}), resp]
												}, i))
											}),
											exp.achievements && exp.achievements.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative z-10 mb-6 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-[11px] font-black text-amber-600 dark:text-amber-400 tracking-widest uppercase mb-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { size: 14 }), " Key Achievements"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "space-y-2",
													children: exp.achievements.map((ach, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex items-start gap-2.5 text-[13px] text-amber-900/80 dark:text-amber-100/80 font-light leading-relaxed",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
															size: 14,
															className: "text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5 opacity-80"
														}), ach]
													}, i))
												})]
											}),
											exp.technologies && exp.technologies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative z-10 flex flex-wrap gap-2 pt-5 border-t border-slate-200 dark:border-white/5",
												children: exp.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-300 cursor-default",
													children: tech
												}, tech))
											})
										]
									})
								})]
							}, exp.id);
						})
					})
				]
			})]
		})
	});
}
//#endregion
export { Experience as default, fallbackExperiences };
