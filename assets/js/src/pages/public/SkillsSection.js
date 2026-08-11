import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import Cpu from "../../../node_modules/lucide-react/dist/esm/icons/cpu.js";
import { getPublicSkills } from "../../lib/publicApi.js";
//#region src/pages/public/SkillsSection.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var cvSkills = [
	{
		id: "s1",
		category_id: "c1",
		name: "Pega PRPC",
		icon: "",
		description: "Enterprise BPM & case management",
		experience: "4+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 1,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s2",
		category_id: "c1",
		name: "Pega Constellation",
		icon: "",
		description: "Modern UI architecture",
		experience: "2+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 2,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s3",
		category_id: "c1",
		name: "Pega CRM Framework",
		icon: "",
		description: "Customer relationship management",
		experience: "3+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 3,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s4",
		category_id: "c1",
		name: "Pega Sales Automation",
		icon: "",
		description: "Sales platform automation",
		experience: "2+ years",
		level: "secondary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 4,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s5",
		category_id: "c1",
		name: "Pega DX-API",
		icon: "",
		description: "Headless Pega applications",
		experience: "2+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 5,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s6",
		category_id: "c3",
		name: "React Js",
		icon: "",
		description: "Frontend development",
		experience: "2+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 6,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s7",
		category_id: "c3",
		name: "HTML, CSS",
		icon: "",
		description: "Web fundamentals",
		experience: "4+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 7,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s8",
		category_id: "c3",
		name: "DX Custom Component",
		icon: "",
		description: "Custom Constellation components",
		experience: "2+ years",
		level: "secondary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 8,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s9",
		category_id: "c2",
		name: "SQL Server",
		icon: "",
		description: "Relational database management",
		experience: "3+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 9,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s10",
		category_id: "c2",
		name: "Service Now",
		icon: "",
		description: "ITSM platform",
		experience: "2+ years",
		level: "secondary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 10,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s11",
		category_id: "c2",
		name: "ALM / JIRA / Confluence",
		icon: "",
		description: "Agile lifecycle management",
		experience: "4+ years",
		level: "secondary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 11,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s12",
		category_id: "c2",
		name: "Agile Methodology",
		icon: "",
		description: "Scrum and Kanban frameworks",
		experience: "4+ years",
		level: "exploring",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 12,
		created_at: "",
		updated_at: ""
	}
];
var skillLevelColor = {
	primary: "accent-cyan border-cyan-500/40 bg-cyan-500/10",
	secondary: "accent-blue border-blue-500/40 bg-blue-500/10",
	exploring: "accent-fuchsia border-fuchsia-500/40 bg-fuchsia-500/10"
};
function SkillsSection() {
	const [skills, setSkills] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			const s = await getPublicSkills();
			setSkills(s.length > 0 ? s : cvSkills);
		} catch {
			setSkills(cvSkills);
		}
	};
	const primarySkills = skills.filter((s) => s.level === "primary");
	const secondarySkills = skills.filter((s) => s.level === "secondary");
	const exploringSkills = skills.filter((s) => s.level === "exploring");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2.5 rounded-xl bg-gradient-to-br from-purple-600/30 to-cyan-500/20 border border-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-5 h-5 accent-cyan" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "cyber-section-title text-2xl sm:text-3xl font-black tracking-tight",
						children: "Skills & Toolbox"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-faint font-light mt-0.5",
						children: "Technologies I build with every day"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [
						...primarySkills,
						...secondarySkills,
						...exploringSkills
					].map((skill, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							delay: index * .05
						},
						whileHover: { y: -5 },
						className: "hyper-glass rounded-xl p-5 border line-soft cyber-card-hover",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-strong tracking-wide",
									children: skill.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `px-2 py-0.5 rounded-full text-[10px] font-semibold border ${skillLevelColor[skill.level] || skillLevelColor.exploring}`,
									children: skill.level
								})]
							}),
							skill.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-faint font-light mb-3",
								children: skill.description
							}),
							skill.experience && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-[11px] accent-cyan font-mono",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" }), skill.experience]
							})
						]
					}, skill.id))
				})]
			})
		})
	});
}
//#endregion
export { cvSkills, SkillsSection as default };
