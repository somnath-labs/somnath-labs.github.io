import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import FolderGit2 from "../../../node_modules/lucide-react/dist/esm/icons/folder-git-2.js";
import ProjectCard from "../../components/public/ProjectCard.js";
import { getProjects } from "../../lib/adminApi.js";
//#region src/pages/public/Projects.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var fallbackProjects = [
	{
		id: "p1",
		name: "Global Insurance Company Based on UK",
		slug: "aegon-customer-service",
		description: "Streamlined customer issue handling and ticket lifecycle management for a leading insurance client.",
		problem: "",
		solution: "Contributed to the development of new features across standalone applications such as Customer Service, Low-Code Platform for citizen developers, and Back-Office operations. The objective of the project was to streamline customer issue handling, enhance ticket lifecycle management, and enable efficient case processing.\n\nKey responsibilities included designing and implementing Pega solutions, integrating data from multiple enterprise systems, automating case creation, and routing information to downstream applications. Played a major role in improving platform efficiency and ensuring a smooth interaction between Pega workflows and external systems.",
		my_role: "Senior Pega Developer",
		architecture: "",
		features: [],
		technologies: [
			"Pega",
			"Pega Component",
			"Client Service",
			"Integrations"
		],
		challenges: [],
		what_learned: "",
		results: "",
		category: "client_served",
		demo_url: "",
		github_url: "",
		documentation_url: "",
		architecture_diagram: "",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 1,
		created_at: "",
		updated_at: ""
	},
	{
		id: "p2",
		name: "Car Rental and Insurance Company based on Italy",
		slug: "unipol-rental-platform",
		description: "Developed 3 separate applications for an insurance-based client to manage customer service and sales automation.",
		problem: "",
		solution: "The project is to develop 3 separate application (Customer service, Sales Automation and Agent Portal) platform for the Insurance based client to deal with their customers and provide solutions and track the tickets. It includes integration of data from various systems.",
		my_role: "Pega Developer",
		architecture: "",
		features: [],
		technologies: [
			"Pega",
			"Sales Automation",
			"Agent Portal",
			"Integration"
		],
		challenges: [],
		what_learned: "",
		results: "",
		category: "client_served",
		demo_url: "",
		github_url: "",
		documentation_url: "",
		architecture_diagram: "",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 2,
		created_at: "",
		updated_at: ""
	},
	{
		id: "p3",
		name: "Agent To Job Scheduler Convert",
		slug: "agent-to-job-scheduler",
		description: "Component wizard that converts advanced agents to job schedulers for operational efficiency.",
		problem: "",
		solution: "Created a component for a new wizard that converts advanced agents to job schedulers. This component is utilized for two different clients, enhancing operational efficiency.",
		my_role: "Pega Developer",
		architecture: "",
		features: [],
		technologies: [
			"Pega Component",
			"Pega",
			"Job Schedulers",
			"Vibe Coding"
		],
		challenges: [],
		what_learned: "",
		results: "",
		category: "component",
		demo_url: "",
		github_url: "",
		documentation_url: "",
		architecture_diagram: "",
		featured: false,
		show_on_website: true,
		show_on_resume: true,
		order: 3,
		created_at: "",
		updated_at: ""
	},
	{
		id: "p4",
		name: "Connector Management Component",
		slug: "connector-management",
		description: "Reusable component for seamless integration with external systems.",
		problem: "",
		solution: "Developed a reusable component to integrate with external systems for fetching and sending data, enabling seamless plug-and-play usage across multiple applications. The component can also run independently based on project requirements.",
		my_role: "Pega Developer",
		architecture: "",
		features: [],
		technologies: [
			"Pega Component",
			"Integration",
			"Reusable Assets"
		],
		challenges: [],
		what_learned: "",
		results: "",
		category: "component",
		demo_url: "",
		github_url: "",
		documentation_url: "",
		architecture_diagram: "",
		featured: false,
		show_on_website: true,
		show_on_resume: true,
		order: 4,
		created_at: "",
		updated_at: ""
	},
	{
		id: "p5",
		name: "Log Analyzer Using Gen AI",
		slug: "log-analyzer-gen-ai",
		description: "AI-driven log analyzer using Pega Gen AI for simplifying complex log reviews.",
		problem: "",
		solution: "Designed and developed a Log Analyzer using Pega Gen AI to assist developers by simplifying complex log reviews. Unlike traditional tracer tools that require checking multiple rule execution logs, this solution captures logs during scenario replication and analyzes them automatically when paused. It generates a concise, AI-driven summary highlighting key insights and potential issues, significantly improving debugging efficiency.",
		my_role: "Pega Developer",
		architecture: "",
		features: [],
		technologies: [
			"Agentic AI",
			"Pega Gen AI",
			"Debugging",
			"Vibe Coding"
		],
		challenges: [],
		what_learned: "",
		results: "",
		category: "poc",
		demo_url: "",
		github_url: "",
		documentation_url: "",
		architecture_diagram: "",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 5,
		created_at: "",
		updated_at: ""
	}
];
function Projects() {
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [filter, setFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		loadProjects();
	}, []);
	const loadProjects = async () => {
		try {
			const activeProjects = (await getProjects()).filter((p) => p.show_on_website);
			setProjects(activeProjects.length > 0 ? activeProjects : fallbackProjects);
		} catch {
			setProjects(fallbackProjects);
		} finally {
			setLoading(false);
		}
	};
	const categories = [
		{
			value: "all",
			label: "All Projects"
		},
		{
			value: "client_served",
			label: "Client Served"
		},
		{
			value: "poc",
			label: "PoC"
		},
		{
			value: "component",
			label: "Component"
		},
		{
			value: "project_build",
			label: "Project Build"
		},
		{
			value: "technology",
			label: "Technology"
		}
	];
	const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative pb-20 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
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
					transition: { duration: .6 },
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-purple-500/30 text-xs font-medium accent-purple mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { className: "w-3.5 h-3.5" }), "Portfolio"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "cyber-section-title text-4xl sm:text-5xl font-black tracking-tight mb-4",
							children: "Things I've Built"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-soft font-light max-w-2xl mx-auto",
							children: "A collection of my work — from client-served builds and proof-of-concepts to reusable components, full project builds with vibe coding, and technology experiments."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2 mb-10",
					children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": filter === category.value,
						onClick: () => setFilter(category.value),
						className: `px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${filter === category.value ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30 scale-105" : "cyber-chip px-4! py-2! text-soft hover:border-cyan-500/50"}`,
						children: category.label
					}, category.value))
				}),
				filteredProjects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-6 py-3 rounded-full hyper-glass border line-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, {
							className: "accent-cyan",
							size: 18
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-soft font-light",
							children: "No projects found in this category yet."
						})]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .4 },
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: filteredProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project }, project.id))
				}, filter)
			]
		})
	});
}
//#endregion
export { Projects as default, fallbackProjects };
