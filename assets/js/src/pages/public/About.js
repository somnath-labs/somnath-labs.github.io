import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import Award from "../../../node_modules/lucide-react/dist/esm/icons/award.js";
import BadgeCheck from "../../../node_modules/lucide-react/dist/esm/icons/badge-check.js";
import Briefcase from "../../../node_modules/lucide-react/dist/esm/icons/briefcase.js";
import Cpu from "../../../node_modules/lucide-react/dist/esm/icons/cpu.js";
import GraduationCap from "../../../node_modules/lucide-react/dist/esm/icons/graduation-cap.js";
import Heart from "../../../node_modules/lucide-react/dist/esm/icons/heart.js";
import Languages from "../../../node_modules/lucide-react/dist/esm/icons/languages.js";
import Mail from "../../../node_modules/lucide-react/dist/esm/icons/mail.js";
import MapPin from "../../../node_modules/lucide-react/dist/esm/icons/map-pin.js";
import Sparkles from "../../../node_modules/lucide-react/dist/esm/icons/sparkles.js";
import Target from "../../../node_modules/lucide-react/dist/esm/icons/target.js";
import User from "../../../node_modules/lucide-react/dist/esm/icons/user.js";
import format from "../../../node_modules/date-fns/format.js";
import { getPublicCertifications, getPublicEducation, getPublicLanguages, getPublicProfile } from "../../lib/publicApi.js";
import ExpertiseShowcase from "../../components/public/workspace/ExpertiseShowcase.js";
//#region src/pages/public/About.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var fallbackProfile = {
	id: "fallback",
	email: "",
	first_name: "Somnath",
	last_name: "Haldar",
	full_name: "Somnath Haldar",
	short_bio: "Pega Developer & Software Engineer exploring the intersection of enterprise applications, cloud infrastructure, and Agentic AI.",
	long_bio: "I am a Pega Developer with 5+ years of experience building intelligent, scalable, cloud-native enterprise solutions. My journey spans the full spectrum of the Pega Platform — case management, decisioning, integrations and Pega Cloud — and has recently expanded into the exciting frontier of Agentic AI.\n\nI believe great software is built at the intersection of deep platform expertise and modern engineering craft. I spend my days automating complex enterprise workflows, and my nights exploring autonomous agents, RAG systems, and how AI can amplify human productivity.\n\nWhen I am not coding, you will find me diving into AI research, exploring new cloud architectures, or sharing knowledge with the developer community.",
	career_summary: "Pega Developer with 5+ years of experience in building enterprise applications on Pega Platform. Exploring the power of Agentic AI and Cloud to build the next generation of intelligent solutions.",
	professional_interests: [
		"Agentic AI",
		"Pega Platform",
		"Cloud Architecture",
		"Enterprise Automation",
		"Generative AI"
	],
	personal_interests: [
		"AI Research",
		"Open Source",
		"Tech Blogging",
		"Photography",
		"Travel"
	],
	current_focus: "Building autonomous AI agents that orchestrate enterprise workflows on Pega Cloud, and exploring RAG systems for knowledge-rich enterprise applications.",
	future_interests: [
		"Multi-Agent Systems",
		"Edge AI",
		"Autonomous Enterprise Platforms"
	],
	profile_image: "/avatar.png",
	show_on_website: true,
	created_at: (/* @__PURE__ */ new Date()).toISOString(),
	updated_at: (/* @__PURE__ */ new Date()).toISOString()
};
var fallbackEducation = [{
	id: "e1",
	degree: "Bachelor of Technology",
	field: "Computer Science and Engineering",
	institution: "Haldia Institute of Technology",
	location: "Haldia, India",
	start_date: "2017-01-01",
	end_date: "2021-12-31",
	grade: "",
	description: "",
	achievements: [],
	website: "",
	show_on_website: true,
	show_on_resume: true,
	order: 1,
	created_at: "",
	updated_at: ""
}];
var fallbackCertifications = [{
	id: "c1",
	certification: "Pega Certified System Architect",
	organization: "Pegasystems",
	credential_id: "",
	credential_url: "",
	issue_date: "2020-01-01",
	expiry_date: null,
	certificate_image: "",
	description: "",
	show_on_website: true,
	show_on_resume: true,
	order: 1,
	created_at: "",
	updated_at: ""
}, {
	id: "c2",
	certification: "Pega Certified Senior System Architect",
	organization: "Pegasystems",
	credential_id: "",
	credential_url: "",
	issue_date: "2021-01-01",
	expiry_date: null,
	certificate_image: "",
	description: "",
	show_on_website: true,
	show_on_resume: true,
	order: 2,
	created_at: "",
	updated_at: ""
}];
var fallbackLanguages = [
	{
		id: "l1",
		language: "Bengali",
		speaking: "Native",
		writing: "Native",
		reading: "Native",
		listening: "Native",
		overall_proficiency: "Native",
		native: true,
		show_on_website: true,
		show_on_resume: true,
		order: 1,
		created_at: "",
		updated_at: ""
	},
	{
		id: "l2",
		language: "English",
		speaking: "Fluent",
		writing: "Fluent",
		reading: "Fluent",
		listening: "Fluent",
		overall_proficiency: "Fluent",
		native: false,
		show_on_website: true,
		show_on_resume: true,
		order: 2,
		created_at: "",
		updated_at: ""
	},
	{
		id: "l3",
		language: "Hindi",
		speaking: "Fluent",
		writing: "Fluent",
		reading: "Fluent",
		listening: "Fluent",
		overall_proficiency: "Fluent",
		native: false,
		show_on_website: true,
		show_on_resume: true,
		order: 3,
		created_at: "",
		updated_at: ""
	}
];
var fallbackAwards = [{
	id: "a1",
	award: "Employee of the Quarter",
	organization: "Previous Employer",
	date: "2022-06-01",
	description: "Recognized for outstanding delivery and leadership on enterprise Pega implementations.",
	image: "",
	credential: "",
	related_project_id: null,
	featured: true,
	show_on_website: true,
	show_on_resume: true,
	order: 1,
	created_at: "",
	updated_at: ""
}];
function About() {
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [education, setEducation] = (0, import_react.useState)([]);
	const [certifications, setCertifications] = (0, import_react.useState)([]);
	const [languages, setLanguages] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			const [p, e, c, l] = await Promise.all([
				getPublicProfile(),
				getPublicEducation(),
				getPublicCertifications(),
				getPublicLanguages()
			]);
			setProfile(p ?? fallbackProfile);
			setEducation(e.length > 0 ? e : fallbackEducation);
			setCertifications(c.length > 0 ? c : fallbackCertifications);
			setLanguages(l.length > 0 ? l : fallbackLanguages);
		} catch {
			setProfile(fallbackProfile);
			setEducation(fallbackEducation);
			setCertifications(fallbackCertifications);
			setLanguages(fallbackLanguages);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-purple-500/30 text-xs font-medium accent-purple mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-3.5 h-3.5" }), "About Me"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "cyber-section-title text-4xl sm:text-5xl font-black tracking-tight mb-4",
							children: "The Developer Behind the Code"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-soft font-light max-w-2xl mx-auto",
							children: profile?.short_bio || fallbackProfile.short_bio
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 25
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .1
						},
						className: "lg:col-span-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hyper-glass rounded-2xl p-6 border border-cyan-500/30 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center text-center mb-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: profile?.profile_image || "/avatar.png",
												alt: profile?.full_name || "Somnath Haldar",
												className: "w-28 h-28 rounded-full object-cover border-2 border-cyan-400/90 shadow-lg shadow-cyan-500/30"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-[0_0_12px_#34d399]" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-4 text-2xl font-black text-strong tracking-tight",
											children: profile?.full_name || "Somnath Haldar"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm font-bold neon-subtitle-gradient tracking-wide",
											children: "Pega Developer • Agentic AI Explorer • Cloud Enthusiast"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex flex-wrap justify-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "cyber-chip accent-cyan border-cyan-500/40",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 12 }), " Stockholm, Sweden"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "cyber-chip accent-emerald border-emerald-500/40",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }), " Open to work"]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-2.5 pb-5 border-b line-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-soft p-2.5 rounded-xl border line-soft text-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-lg font-black accent-cyan",
												children: "5+"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-faint",
												children: "Years Exp."
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-soft p-2.5 rounded-xl border line-soft text-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-lg font-black accent-purple",
												children: "10+"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-faint",
												children: "Projects"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "surface-soft p-2.5 rounded-xl border line-soft text-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-lg font-black accent-emerald",
												children: "CSSA"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] text-faint",
												children: "Certified"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-5 space-y-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "mailto:somnathhaldar14@gmail.com",
										className: "flex items-center gap-3 text-xs text-soft hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "p-2 rounded-lg surface-soft border line-soft",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
												size: 14,
												className: "accent-cyan"
											})
										}), "somnathhaldar14@gmail.com"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 text-xs text-soft",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "p-2 rounded-lg surface-soft border line-soft",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
												size: 14,
												className: "accent-purple"
											})
										}), "Open to Pega / AI / Cloud roles"]
									})]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 25
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .2
							},
							className: "hyper-glass rounded-2xl p-6 border border-purple-500/30 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-bold text-strong tracking-wide mb-4 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 accent-purple" }), " My Story"]
								}),
								(profile?.long_bio || fallbackProfile.long_bio).split("\n").filter(Boolean).map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-soft font-light leading-relaxed mb-3 last:mb-0",
									children: para
								}, i))
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 25
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .3
							},
							className: "hyper-glass rounded-2xl p-6 border border-cyan-500/30 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-bold text-strong tracking-wide mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "w-4 h-4 accent-cyan" }), " Current Focus"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-soft font-light leading-relaxed",
									children: profile?.current_focus || fallbackProfile.current_focus
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 mt-4",
									children: (profile?.future_interests?.length ? profile.future_interests : fallbackProfile.future_interests).map((interest) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "cyber-chip accent-fuchsia border-fuchsia-500/40",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { size: 12 }),
											" ",
											interest
										]
									}, interest))
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 25
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: .1
						},
						className: "group relative p-6 sm:p-8 rounded-[2rem] hyper-glass hover:bg-white/60 dark:hover:bg-slate-900/40 border hover:border-blue-400/30 dark:hover:border-blue-500/20 transition-all duration-500 overflow-hidden flex flex-col h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "relative z-10 text-base font-black text-slate-800 dark:text-white tracking-wide mb-6 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-500",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "w-4 h-4" })
								}), "Professional Interests"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 flex flex-wrap gap-3 mt-auto",
								children: (profile?.professional_interests?.length ? profile.professional_interests : fallbackProfile.professional_interests).map((interest) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "px-4 py-2 rounded-full bg-white dark:bg-blue-500/5 border border-slate-200 dark:border-blue-500/10 text-[13px] font-medium text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-500/40 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default flex items-center gap-2 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400/80 shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_8px_rgba(96,165,250,0.8)]" }), interest]
								}, interest))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 25
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: .2
						},
						className: "group relative p-6 sm:p-8 rounded-[2rem] hyper-glass hover:bg-white/60 dark:hover:bg-slate-900/40 border hover:border-emerald-400/30 dark:hover:border-emerald-500/20 transition-all duration-500 overflow-hidden flex flex-col h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "relative z-10 text-base font-black text-slate-800 dark:text-white tracking-wide mb-6 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-4 h-4" })
								}), "Personal Interests"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 flex flex-wrap gap-3 mt-auto",
								children: (profile?.personal_interests?.length ? profile.personal_interests : fallbackProfile.personal_interests).map((interest) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "px-4 py-2 rounded-full bg-white dark:bg-emerald-500/5 border border-slate-200 dark:border-emerald-500/10 text-[13px] font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-300 dark:hover:border-emerald-500/40 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default flex items-center gap-2 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400/80 shadow-[0_0_8px_rgba(16,185,129,0.5)] dark:shadow-[0_0_8px_rgba(52,211,153,0.8)]" }), interest]
								}, interest))
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpertiseShowcase, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						className: "hyper-glass rounded-2xl p-6 border border-blue-500/30 relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-bold text-strong tracking-wide mb-5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "w-4 h-4 accent-blue" }), " Education"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-6",
								children: education.map((edu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative pl-5 border-l-2 line-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
											className: "text-sm font-bold text-strong",
											children: [
												edu.degree,
												" in ",
												edu.field
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-faint font-light mt-0.5",
											children: [
												edu.institution,
												" • ",
												edu.location
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] accent-cyan font-mono mt-1",
											children: [
												format(new Date(edu.start_date), "MMM yyyy"),
												" — ",
												format(new Date(edu.end_date), "MMM yyyy")
											]
										}),
										edu.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-faint font-light mt-2 leading-relaxed",
											children: edu.description
										})
									]
								}, edu.id))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 25
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: .1
						},
						className: "hyper-glass rounded-2xl p-6 border border-purple-500/30 relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-bold text-strong tracking-wide mb-5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-4 h-4 accent-purple" }), " Certifications"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: certifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-gradient-to-r from-purple-50/80 dark:from-purple-950/60 via-indigo-50/80 dark:via-indigo-950/60 to-white dark:to-slate-950/60 p-4 rounded-xl border border-purple-200 dark:border-purple-500/40 shadow-lg shadow-purple-500/5 dark:shadow-purple-500/10 flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "w-7 h-7 text-purple-600 dark:text-purple-400 flex-shrink-0 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-sm font-bold text-strong",
											children: cert.certification
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] accent-purple font-medium mt-0.5",
											children: cert.organization
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-faint font-mono mt-1",
											children: format(new Date(cert.issue_date), "MMM yyyy")
										}),
										cert.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-faint font-light mt-2 leading-relaxed",
											children: cert.description
										})
									] })]
								}, cert.id))
							})
						]
					})]
				}),
				languages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "hyper-glass rounded-2xl p-6 border border-emerald-500/30 relative overflow-hidden mt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold text-strong tracking-wide mb-5 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "w-4 h-4 accent-emerald" }), " Languages"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
							children: languages.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-soft p-4 rounded-xl border line-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-bold text-strong",
										children: lang.language
									}), lang.native && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-2 py-0.5 rounded-full text-[10px] font-semibold border border-emerald-500/40 bg-emerald-500/10 accent-emerald",
										children: "Native"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-faint font-light",
									children: lang.overall_proficiency
								})]
							}, lang.id))
						})
					]
				})
			]
		})
	});
}
//#endregion
export { About as default, fallbackAwards, fallbackCertifications, fallbackEducation, fallbackLanguages, fallbackProfile };
