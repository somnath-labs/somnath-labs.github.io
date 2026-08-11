import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { useAuth } from "../../contexts/AuthContext.js";
import CyberBackground from "../../components/public/CyberBackground.js";
import DashboardStats from "../../components/admin/dashboard/DashboardStats.js";
import ExperienceManager from "./career/ExperienceManager.js";
import SkillManager from "./technology/SkillManager.js";
import ProjectManager from "./projects/ProjectManager.js";
import ProfileManager from "./profile/ProfileManager.js";
import EducationManager from "./education/EducationManager.js";
import CertificationManager from "./education/CertificationManager.js";
import AwardManager from "./awards/AwardManager.js";
import LanguageManager from "./languages/LanguageManager.js";
import MessageManager from "./communication/MessageManager.js";
import ContactManager from "./contact/ContactManager.js";
import WebsiteManager from "./website/WebsiteManager.js";
//#region src/pages/admin/AdminDashboard.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const { signOut } = useAuth();
	const [activeSection, setActiveSection] = (0, import_react.useState)("dashboard");
	const sidebarItems = [
		{
			id: "dashboard",
			label: "Dashboard",
			icon: "📊",
			group: "OVERVIEW"
		},
		{
			id: "profile",
			label: "Profile",
			icon: "👤",
			group: "PROFILE"
		},
		{
			id: "career",
			label: "Career",
			icon: "💼",
			group: "CAREER"
		},
		{
			id: "education",
			label: "Education",
			icon: "🎓",
			group: "CAREER"
		},
		{
			id: "certifications",
			label: "Certifications",
			icon: "🏅",
			group: "CAREER"
		},
		{
			id: "awards",
			label: "Awards",
			icon: "🏆",
			group: "CAREER"
		},
		{
			id: "languages",
			label: "Languages",
			icon: "🌍",
			group: "CAREER"
		},
		{
			id: "technology",
			label: "Technology",
			icon: "⚙️",
			group: "TECHNOLOGY"
		},
		{
			id: "projects",
			label: "Projects",
			icon: "🚀",
			group: "PROJECTS"
		},
		{
			id: "resume",
			label: "Resume",
			icon: "📄",
			group: "RESUME"
		},
		{
			id: "website",
			label: "Website",
			icon: "🌐",
			group: "WEBSITE"
		},
		{
			id: "contact",
			label: "Contact",
			icon: "✉️",
			group: "WEBSITE"
		},
		{
			id: "communication",
			label: "Messages",
			icon: "💬",
			group: "COMMUNICATION"
		},
		{
			id: "media",
			label: "Media",
			icon: "🖼️",
			group: "SYSTEM"
		},
		{
			id: "system",
			label: "System",
			icon: "⚡",
			group: "SYSTEM"
		}
	];
	const handleSignOut = async () => {
		await signOut();
	};
	const renderContent = () => {
		switch (activeSection) {
			case "dashboard": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardStats, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hyper-glass rounded-2xl border line-soft p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-strong mb-4",
						children: "Recent Activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-faint font-light",
						children: "Recent activity feed coming soon"
					})]
				})]
			});
			case "career": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceManager, {});
			case "technology": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillManager, {});
			case "projects": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectManager, {});
			case "profile": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileManager, {});
			case "education": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationManager, {});
			case "certifications": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationManager, {});
			case "awards": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardManager, {});
			case "languages": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageManager, {});
			case "communication": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageManager, {});
			case "website": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebsiteManager, {});
			case "contact": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactManager, {});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hyper-glass rounded-2xl border line-soft p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-faint font-light",
					children: [activeSection.replace("_", " "), " content - coming soon"]
				})
			});
		}
	};
	const renderSidebar = () => {
		let currentGroup = "";
		return sidebarItems.map((item) => {
			const showHeader = item.group !== currentGroup;
			currentGroup = item.group;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [showHeader && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 pt-4 pb-1 text-[10px] font-bold tracking-widest text-faint uppercase",
				children: item.group
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setActiveSection(item.id),
				className: `w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-all duration-300 ${activeSection === item.id ? "bg-cyan-500/10 border border-cyan-400/30 text-cyan-500 dark:text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]" : "border border-transparent text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-sm tracking-wide",
					children: item.label
				})]
			})] }, item.id);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-screen cyber-bg-scene text-body flex overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyberBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "w-64 h-full hyper-glass border-r line-subtle flex flex-col relative z-10 shadow-[4px_0_24px_rgba(0,0,0,0.1)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 border-b line-subtle flex-shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-black neon-subtitle-gradient tracking-tight",
							children: "Admin Studio"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-1 custom-scrollbar overscroll-contain",
						children: renderSidebar()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 border-t line-subtle flex-shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleSignOut,
							className: "w-full px-4 py-2.5 text-left text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40 rounded-xl transition-all duration-300 font-medium text-sm",
							children: "Sign Out"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 h-full overflow-y-auto overflow-x-hidden relative z-10 custom-scrollbar overscroll-contain",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black text-strong mb-8 capitalize tracking-tight",
						children: activeSection.replace("_", " ")
					}), renderContent()]
				})
			})
		]
	});
}
//#endregion
export { AdminDashboard as default };
