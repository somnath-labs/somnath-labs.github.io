import { r as __toESM } from "./rolldown-runtime-DC62tzP2.js";
import { $ as require_jsx_runtime, E as Briefcase, S as Layers, _ as User, at as useLocation, ct as require_react, et as HashRouter, it as Routes, j as motion, nt as Navigate, ot as useNavigate, rt as Route, t as About, tt as Link, x as Mail } from "./tab-about-C7I1RF7V.js";
import { a as require_client, i as Moon, n as Sun, r as Plus, t as Trash2 } from "./vendor-react-z-nbV2cj.js";
import { t as Resume } from "./tab-resume-BcmTQgHY.js";
import { A as getSocialLinks, B as updateSocialLink, C as getDashboardStats, D as getProjects, F as updateExperience, H as FolderGit2, I as updateLanguage, K as CodeXml, L as updateProject, M as updateAward, N as updateCertification, O as getSiteSettings, P as updateContactInfo, R as updateSiteSettings, S as getContactInfo, T as getLanguages, _ as deleteSkill, a as createAward, b as getAwards, c as createLanguage, d as createSocialLink, f as deleteAward, g as deleteProject, h as deleteLanguage, i as create, j as update, k as getSkills, l as createProject, m as deleteExperience, n as Projects, o as createCertification, p as deleteCertification, s as createExperience, t as Home, u as createSkill, v as deleteSocialLink, w as getExperiences, x as getCertifications, y as getAll, z as updateSkill } from "./tab-home-C32PrTFn.js";
import { t as ProjectDetail } from "./tab-projectdetail-BiXpRk9O.js";
import { o as Clock, t as Contact } from "./tab-contact-DefzAKA7.js";
import { t as Experience } from "./tab-experience-Dabb1ck2.js";
import { n as House, t as NotFound } from "./tab-notfound-C-XZvmCE.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/index.css
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = require_client();
//#endregion
//#region src/contexts/AuthContext.tsx
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [session, setSession] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (localStorage.getItem("demo_auth") === "true") {
			const demoUser = {
				id: "demo-admin",
				email: "admin@somnath.dev"
			};
			setUser(demoUser);
			setSession({ user: demoUser });
			setIsAdmin(true);
		}
		setLoading(false);
	}, []);
	const signIn = async (email, password) => {
		if (email === "admin@somnath.dev" && password === "admin123") {
			localStorage.setItem("demo_auth", "true");
			const demoUser = {
				id: "demo-admin",
				email: "admin@somnath.dev"
			};
			setUser(demoUser);
			setSession({ user: demoUser });
			setIsAdmin(true);
			return;
		}
		throw new Error("Supabase not configured. Use demo credentials to login.");
	};
	const signOut = async () => {
		localStorage.removeItem("demo_auth");
		setUser(null);
		setSession(null);
		setIsAdmin(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			session,
			loading,
			isAdmin,
			signIn,
			signOut
		},
		children
	});
}
function useAuth() {
	const context = (0, import_react.useContext)(AuthContext);
	if (context === void 0) throw new Error("useAuth must be used within an AuthProvider");
	return context;
}
//#endregion
//#region src/routes/publicRoutes.tsx
var publicRoutes = [
	{
		path: "/",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, {})
	},
	{
		path: "/about",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {})
	},
	{
		path: "/experience",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {})
	},
	{
		path: "/projects",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {})
	},
	{
		path: "/projects/:slug",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectDetail, {})
	},
	{
		path: "/resume",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resume, {})
	},
	{
		path: "/contact",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	}
];
//#endregion
//#region src/components/public/CyberBackground.tsx
var PARTICLES = Array.from({ length: 32 }, (_, i) => ({
	x: (i * 37 + 11) % 100,
	y: (i * 53 + 7) % 100,
	size: (i * 13 + 3) % 4 + 2,
	delay: i * .4 % 7,
	dur: 6 + i % 5,
	opacity: .15 + i % 5 * .07
}));
/**
* Global animated cyberpunk background:
* - drifting aurora gradient blobs (CSS)
* - subtle blueprint grid (CSS)
* - live canvas particle network (connections light up)
*/
function CyberBackground() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let width = 0;
		let height = 0;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		let particles = [];
		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const count = Math.min(90, Math.floor(width * height / 22e3));
			particles = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - .5) * .35,
				vy: (Math.random() - .5) * .35,
				r: Math.random() * 1.6 + .6,
				hue: Math.random() > .5 ? "#22d3ee" : "#a78bfa"
			}));
		};
		const linkDistance = 130;
		const draw = () => {
			ctx.clearRect(0, 0, width, height);
			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < -20) p.x = width + 20;
				if (p.x > width + 20) p.x = -20;
				if (p.y < -20) p.y = height + 20;
				if (p.y > height + 20) p.y = -20;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fillStyle = p.hue;
				ctx.globalAlpha = .5;
				ctx.fill();
			}
			ctx.globalAlpha = .14;
			ctx.lineWidth = 1;
			for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
				const a = particles[i];
				const b = particles[j];
				const dx = a.x - b.x;
				const dy = a.y - b.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < linkDistance) {
					const t = 1 - dist / linkDistance;
					ctx.strokeStyle = `rgba(129, 140, 248, ${t * .55})`;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
				}
			}
			ctx.globalAlpha = 1;
			raf = requestAnimationFrame(draw);
		};
		resize();
		draw();
		window.addEventListener("resize", resize);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-0 pointer-events-none overflow-hidden",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-[130px] animate-aurora-a",
				style: { background: "color-mix(in srgb, var(--acc-purple) 26%, transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/3 -right-32 w-[620px] h-[620px] rounded-full blur-[150px] animate-aurora-b",
				style: { background: "color-mix(in srgb, var(--acc-cyan) 22%, transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-1/4 w-[560px] h-[560px] rounded-full blur-[140px] animate-aurora-c",
				style: { background: "color-mix(in srgb, var(--acc-blue) 20%, transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 cyber-grid" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "absolute inset-0",
				style: { opacity: "var(--particle-opacity)" }
			}),
			PARTICLES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute rounded-full",
				style: {
					left: `${p.x}%`,
					top: `${p.y}%`,
					width: p.size,
					height: p.size,
					background: i % 3 === 0 ? "var(--acc-purple)" : i % 3 === 1 ? "var(--acc-cyan)" : "var(--acc-pink)",
					opacity: p.opacity
				},
				animate: {
					y: [
						0,
						-28,
						0
					],
					opacity: [
						p.opacity,
						p.opacity * 2.2,
						p.opacity
					]
				},
				transition: {
					duration: p.dur,
					delay: p.delay,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-0.5 h-24 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-star-1 opacity-0 top-[8%] left-[20%] rotate-45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-0.5 h-16 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-star-2 opacity-0 top-[30%] left-[60%] rotate-45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-pink-400/40 to-transparent animate-star-3 opacity-0 top-[55%] left-[40%] rotate-45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(ellipse 120% 90% at 50% 40%, transparent 55%, color-mix(in srgb, var(--bg-bottom) 55%, transparent) 100%)" }
			})
		]
	});
}
//#endregion
//#region src/pages/admin/AdminLogin.tsx
function AdminLogin() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { signIn } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await signIn(email, password);
			navigate("/x8k2m5n7-studio-console");
		} catch (err) {
			setError(err.message || "Failed to sign in");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen cyber-bg-scene flex items-center justify-center px-4 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyberBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-md w-full relative z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hyper-glass rounded-[2rem] border line-soft p-8 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.2)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-black mb-8 neon-subtitle-gradient tracking-tight text-center",
						children: "Admin Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 p-4 bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800 rounded-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-cyan-800 dark:text-cyan-300 font-medium mb-1",
							children: "Demo Mode Active"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-cyan-700 dark:text-cyan-400",
							children: [
								"Use ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "admin@somnath.dev" }),
								" / ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "admin123" }),
								" to login. Data will be saved to your browser's local storage."
							]
						})]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "block text-sm font-semibold text-strong mb-2 tracking-wide",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								required: true,
								className: "w-full px-4 py-3 bg-white/5 dark:bg-slate-900/40 border line-strong rounded-xl text-strong focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "password",
								className: "block text-sm font-semibold text-strong mb-2 tracking-wide",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "password",
								type: "password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								required: true,
								className: "w-full px-4 py-3 bg-white/5 dark:bg-slate-900/40 border line-strong rounded-xl text-strong focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: "w-full py-3 px-4 mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5",
								children: loading ? "Authenticating..." : "Access Console"
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/admin/dashboard/DashboardStats.tsx
function DashboardStats() {
	const [stats, setStats] = (0, import_react.useState)({
		projects: 0,
		experiences: 0,
		skills: 0,
		inquiries: 0
	});
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		loadStats();
	}, []);
	const loadStats = async () => {
		try {
			const data = await getDashboardStats();
			setStats(data);
		} catch (error) {
			console.error("Error loading stats:", error);
		} finally {
			setLoading(false);
		}
	};
	const statCards = [
		{
			label: "Projects",
			value: stats.projects,
			icon: "🚀"
		},
		{
			label: "Experiences",
			value: stats.experiences,
			icon: "💼"
		},
		{
			label: "Skills",
			value: stats.skills,
			icon: "⚙️"
		},
		{
			label: "Inquiries",
			value: stats.inquiries,
			icon: "✉️"
		}
	];
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
		children: [...Array(4)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6 animate-pulse",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" })]
		}, i))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
		children: statCards.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-gray-600 dark:text-gray-300",
					children: stat.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-3xl font-bold text-gray-900 dark:text-white mt-1",
					children: stat.value
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-4xl",
					children: stat.icon
				})]
			})
		}, stat.label))
	});
}
//#endregion
//#region src/components/admin/common/Toggle.tsx
/**
* Reusable enable/disable switch. When on, the item is visible on the site.
*/
function Toggle({ checked, onChange, label, disabled = false, size = "md" }) {
	const dims = size === "sm" ? "w-8 h-[18px]" : "w-11 h-6";
	const knob = size === "sm" ? "w-3.5 h-3.5" : "w-5 h-5";
	const translate = size === "sm" ? "translate-x-[14px]" : "translate-x-5";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		"aria-label": label || (checked ? "Disable" : "Enable"),
		disabled,
		onClick: () => onChange(!checked),
		className: `relative inline-flex items-center ${dims} rounded-full transition-colors duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${checked ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" : "bg-slate-400/40 dark:bg-slate-700/60"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-0.5 ${knob} bg-white rounded-full shadow-md transform transition-transform duration-300 ${checked ? translate : "translate-x-0"}` })
	});
}
//#endregion
//#region src/components/admin/tables/DataTable.tsx
function DataTable({ data, columns, onEdit, onDelete, onToggleVisibility, loading = false }) {
	const [sortField, setSortField] = (0, import_react.useState)(null);
	const [sortDirection, setSortDirection] = (0, import_react.useState)("asc");
	const handleSort = (field) => {
		if (sortField === field) setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		else {
			setSortField(field);
			setSortDirection("asc");
		}
	};
	const sortedData = [...data].sort((a, b) => {
		if (!sortField) return 0;
		const aVal = a[sortField];
		const bVal = b[sortField];
		if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
		if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
		return 0;
	});
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hyper-glass rounded-2xl border line-soft p-4 animate-pulse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 bg-white/10 dark:bg-slate-700/50 rounded w-3/4" })
		}, i))
	});
	if (data.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hyper-glass rounded-2xl border line-soft p-8 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-faint font-light",
			children: "No data available"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hyper-glass rounded-2xl border line-soft overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "min-w-full divide-y line-soft",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-white/5 dark:bg-slate-900/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
						onClick: () => handleSort(column.key),
						className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider cursor-pointer hover:bg-white/10 dark:hover:bg-slate-800/60 transition-colors",
						children: [column.label, sortField === column.key && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1",
							children: sortDirection === "asc" ? "↑" : "↓"
						})]
					}, String(column.key))),
					onToggleVisibility && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
						children: "Status"
					}),
					(onEdit || onDelete) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-6 py-4 text-right text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
						children: "Actions"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
				className: "divide-y line-soft bg-transparent",
				children: sortedData.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "hover:bg-white/5 dark:hover:bg-slate-800/40 transition-colors",
					children: [
						columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-4 whitespace-nowrap text-sm text-strong",
							children: column.render ? column.render(row[column.key], row) : String(row[column.key])
						}, String(column.key))),
						onToggleVisibility && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-6 py-4 whitespace-nowrap text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
									size: "sm",
									checked: Boolean(row.show_on_website),
									onChange: () => onToggleVisibility(row)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[11px] font-semibold ${row.show_on_website ? "text-emerald-500" : "text-faint"}`,
									children: row.show_on_website ? "Visible" : "Hidden"
								})]
							})
						}),
						(onEdit || onDelete) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
							children: [onEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onEdit(row),
								className: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 mr-4 transition-colors",
								children: "Edit"
							}), onDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onDelete(row.id),
								className: "text-red-500 hover:text-red-400 transition-colors",
								children: "Delete"
							})]
						})
					]
				}, row.id))
			})]
		})
	});
}
//#endregion
//#region src/components/admin/forms/FormField.tsx
function FormField({ label, name, type = "text", value, onChange, required = false, placeholder, options, error }) {
	const inputClassName = `w-full px-4 py-3 bg-white/5 dark:bg-slate-900/40 border rounded-xl text-strong focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 ${error ? "border-red-500" : "line-strong"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: name,
				className: "block text-sm font-semibold text-strong mb-2 tracking-wide",
				children: [
					label,
					" ",
					required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-red-500",
						children: "*"
					})
				]
			}),
			type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: name,
				value,
				onChange: (e) => onChange(e.target.value),
				required,
				placeholder,
				rows: 4,
				className: inputClassName
			}) : type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				id: name,
				value,
				onChange: (e) => onChange(e.target.value),
				required,
				className: inputClassName,
				children: options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: option.value,
					children: option.label
				}, option.value))
			}) : type === "checkbox" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: name,
				type: "checkbox",
				checked: value,
				onChange: (e) => onChange(e.target.checked),
				className: "w-5 h-5 bg-white/5 dark:bg-slate-900/40 border line-strong rounded focus:ring-cyan-400 text-cyan-500"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: name,
				type,
				value,
				onChange: (e) => onChange(e.target.value),
				required,
				placeholder,
				className: inputClassName
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-red-500",
				children: error
			})
		]
	});
}
//#endregion
//#region src/components/admin/common/Modal.tsx
function Modal({ isOpen, onClose, title, children }) {
	(0, import_react.useEffect)(() => {
		if (isOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen items-center justify-center p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 bg-black bg-opacity-50",
				onClick: onClose
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold text-gray-900 dark:text-white",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "text-gray-400 hover:text-gray-500 dark:hover:text-gray-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "h-6 w-6",
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M6 18L18 6M6 6l12 12"
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-6",
					children
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/admin/forms/ExperienceForm.tsx
function ExperienceForm({ isOpen, onClose, onSubmit, initialData }) {
	const [formData, setFormData] = (0, import_react.useState)(initialData || {
		role: "",
		location: "",
		start_date: "",
		end_date: "",
		current: false,
		description: "",
		responsibilities: [],
		achievements: [],
		technologies: [],
		show_on_website: true,
		show_on_resume: true,
		featured: false
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData(initialData);
		else setFormData({
			role: "",
			location: "",
			start_date: "",
			end_date: "",
			current: false,
			description: "",
			responsibilities: [],
			achievements: [],
			technologies: [],
			show_on_website: true,
			show_on_resume: true,
			featured: false
		});
	}, [initialData]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await onSubmit(formData);
			onClose();
		} catch (err) {
			setError(err.message || "Failed to save experience");
		} finally {
			setLoading(false);
		}
	};
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		isOpen,
		onClose,
		title: initialData ? "Edit Experience" : "Add Experience",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "space-y-4",
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Role",
					name: "role",
					value: formData.role,
					onChange: (v) => handleChange("role", v),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Location",
					name: "location",
					value: formData.location,
					onChange: (v) => handleChange("location", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Start Date",
					name: "start_date",
					type: "date",
					value: formData.start_date,
					onChange: (v) => handleChange("start_date", v),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "End Date",
					name: "end_date",
					type: "date",
					value: formData.end_date,
					onChange: (v) => handleChange("end_date", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
						children: "Current Position"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: formData.current,
						onChange: (e) => handleChange("current", e.target.checked),
						className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Description",
					name: "description",
					type: "textarea",
					value: formData.description,
					onChange: (v) => handleChange("description", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
						children: "Technologies (comma-separated)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: formData.technologies?.join(", "),
						onChange: (e) => handleChange("technologies", e.target.value.split(",").map((t) => t.trim())),
						className: "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Show on Website"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.show_on_website,
								onChange: (e) => handleChange("show_on_website", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Show on Resume"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.show_on_resume,
								onChange: (e) => handleChange("show_on_resume", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Featured"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.featured,
								onChange: (e) => handleChange("featured", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "flex-1 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:opacity-90 disabled:opacity-50",
						children: loading ? "Saving..." : "Save"
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/pages/admin/career/ExperienceManager.tsx
function ExperienceManager() {
	const [experiences, setExperiences] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editingExperience, setEditingExperience] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadExperiences();
	}, []);
	const loadExperiences = async () => {
		try {
			const data = await getExperiences();
			setExperiences(data);
		} catch (error) {
			console.error("Error loading experiences:", error);
		} finally {
			setLoading(false);
		}
	};
	const handleCreate = async (data) => {
		await createExperience(data);
		loadExperiences();
	};
	const handleUpdate = async (data) => {
		if (editingExperience?.id) {
			await updateExperience(editingExperience.id, data);
			loadExperiences();
		}
	};
	const handleDelete = async (id) => {
		if (confirm("Are you sure you want to delete this experience?")) {
			await deleteExperience(id);
			loadExperiences();
		}
	};
	const handleToggleVisibility = async (experience) => {
		try {
			await updateExperience(experience.id, { show_on_website: !experience.show_on_website });
			await loadExperiences();
		} catch (error) {
			console.error("Error toggling experience visibility:", error);
		}
	};
	const handleEdit = (experience) => {
		setEditingExperience(experience);
		setIsFormOpen(true);
	};
	const handleAddNew = () => {
		setEditingExperience(null);
		setIsFormOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Work Experience"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleAddNew,
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Experience"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: experiences,
				columns: [
					{
						key: "role",
						label: "Role"
					},
					{
						key: "location",
						label: "Location"
					},
					{
						key: "start_date",
						label: "Start Date",
						render: (value) => new Date(value).toLocaleDateString()
					},
					{
						key: "end_date",
						label: "End Date",
						render: (value) => value ? new Date(value).toLocaleDateString() : "Present"
					},
					{
						key: "current",
						label: "Current",
						render: (value) => value ? "✓" : ""
					}
				],
				onEdit: handleEdit,
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceForm, {
				isOpen: isFormOpen,
				onClose: () => {
					setIsFormOpen(false);
					setEditingExperience(null);
				},
				onSubmit: editingExperience ? handleUpdate : handleCreate,
				initialData: editingExperience || void 0
			})
		]
	});
}
//#endregion
//#region src/components/admin/forms/SkillForm.tsx
function SkillForm({ isOpen, onClose, onSubmit, initialData }) {
	const [formData, setFormData] = (0, import_react.useState)(initialData || {
		name: "",
		description: "",
		experience: "",
		level: "exploring",
		featured: false,
		show_on_website: true,
		show_on_resume: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData(initialData);
		else setFormData({
			name: "",
			description: "",
			level: "primary",
			category_id: "",
			experience: "",
			featured: false,
			show_on_website: true,
			show_on_resume: true
		});
	}, [initialData]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await onSubmit(formData);
			onClose();
		} catch (err) {
			setError(err.message || "Failed to save skill");
		} finally {
			setLoading(false);
		}
	};
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		isOpen,
		onClose,
		title: initialData ? "Edit Skill" : "Add Skill",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "space-y-4",
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Skill Name",
					name: "name",
					value: formData.name,
					onChange: (v) => handleChange("name", v),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Description",
					name: "description",
					type: "textarea",
					value: formData.description,
					onChange: (v) => handleChange("description", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Experience Level",
					name: "level",
					type: "select",
					value: formData.level,
					onChange: (v) => handleChange("level", v),
					options: [
						{
							value: "primary",
							label: "Primary"
						},
						{
							value: "secondary",
							label: "Secondary"
						},
						{
							value: "exploring",
							label: "Exploring"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Experience Description",
					name: "experience",
					type: "textarea",
					value: formData.experience,
					onChange: (v) => handleChange("experience", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Featured"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.featured,
								onChange: (e) => handleChange("featured", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Show on Website"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.show_on_website ?? true,
								onChange: (e) => handleChange("show_on_website", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Show on Resume"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.show_on_resume,
								onChange: (e) => handleChange("show_on_resume", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "flex-1 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:opacity-90 disabled:opacity-50",
						children: loading ? "Saving..." : "Save"
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/pages/admin/technology/SkillManager.tsx
function SkillManager() {
	const [skills, setSkills] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editingSkill, setEditingSkill] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadSkills();
	}, []);
	const loadSkills = async () => {
		try {
			const data = await getSkills();
			setSkills(data);
		} catch (error) {
			console.error("Error loading skills:", error);
		} finally {
			setLoading(false);
		}
	};
	const handleCreate = async (data) => {
		await createSkill(data);
		loadSkills();
	};
	const handleUpdate = async (data) => {
		if (editingSkill?.id) {
			await updateSkill(editingSkill.id, data);
			loadSkills();
		}
	};
	const handleDelete = async (id) => {
		if (confirm("Are you sure you want to delete this skill?")) {
			await deleteSkill(id);
			loadSkills();
		}
	};
	const handleToggleVisibility = async (skill) => {
		try {
			await updateSkill(skill.id, { show_on_website: !skill.show_on_website });
			await loadSkills();
		} catch (error) {
			console.error("Error toggling skill visibility:", error);
		}
	};
	const handleEdit = (skill) => {
		setEditingSkill(skill);
		setIsFormOpen(true);
	};
	const handleAddNew = () => {
		setEditingSkill(null);
		setIsFormOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Skills"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleAddNew,
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Skill"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: skills,
				columns: [
					{
						key: "name",
						label: "Skill Name"
					},
					{
						key: "level",
						label: "Level",
						render: (value) => {
							const colors = {
								primary: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
								secondary: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
								exploring: "bg-slate-500/10 text-slate-300 border border-slate-500/20"
							};
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `px-2 py-1 rounded-md text-xs font-bold tracking-wide ${colors[value] || colors.exploring}`,
								children: value
							});
						}
					},
					{
						key: "experience",
						label: "Experience"
					},
					{
						key: "featured",
						label: "Featured",
						render: (value) => value ? "⭐" : ""
					}
				],
				onEdit: handleEdit,
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillForm, {
				isOpen: isFormOpen,
				onClose: () => {
					setIsFormOpen(false);
					setEditingSkill(null);
				},
				onSubmit: editingSkill ? handleUpdate : handleCreate,
				initialData: editingSkill || void 0
			})
		]
	});
}
//#endregion
//#region src/components/admin/forms/ProjectForm.tsx
function ProjectForm({ isOpen, onClose, onSubmit, initialData }) {
	const [formData, setFormData] = (0, import_react.useState)(initialData || {
		slug: "",
		name: "",
		description: "",
		problem: "",
		solution: "",
		my_role: "",
		architecture: "",
		features: [],
		technologies: [],
		challenges: [],
		what_learned: "",
		results: "",
		category: "other",
		featured: false,
		show_on_website: true,
		show_on_resume: true,
		demo_url: "",
		github_url: "",
		documentation_url: ""
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData(initialData);
		else setFormData({
			slug: "",
			name: "",
			description: "",
			solution: "",
			category: "pega",
			technologies: [],
			features: [],
			featured: false,
			show_on_website: true,
			show_on_resume: true
		});
	}, [initialData]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await onSubmit(formData);
			onClose();
		} catch (err) {
			setError(err.message || "Failed to save project");
		} finally {
			setLoading(false);
		}
	};
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal, {
		isOpen,
		onClose,
		title: initialData ? "Edit Project" : "Add Project",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "space-y-4 max-h-[70vh] overflow-y-auto",
			children: [
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md text-sm",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Project Name",
					name: "name",
					value: formData.name,
					onChange: (v) => handleChange("name", v),
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Slug (URL-friendly)",
					name: "slug",
					value: formData.slug,
					onChange: (v) => handleChange("slug", v),
					required: true,
					placeholder: "my-awesome-project"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Category",
					name: "category",
					type: "select",
					value: formData.category,
					onChange: (v) => handleChange("category", v),
					options: [
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
						},
						{
							value: "pega",
							label: "Pega"
						},
						{
							value: "pega_cloud",
							label: "Pega Cloud"
						},
						{
							value: "agentic_ai",
							label: "Agentic AI"
						},
						{
							value: "ai",
							label: "AI"
						},
						{
							value: "software_engineering",
							label: "Software Engineering"
						},
						{
							value: "personal",
							label: "Personal"
						},
						{
							value: "sample",
							label: "Sample"
						},
						{
							value: "open_source",
							label: "Open Source"
						},
						{
							value: "other",
							label: "Other"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Description",
					name: "description",
					type: "textarea",
					value: formData.description,
					onChange: (v) => handleChange("description", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Problem",
					name: "problem",
					type: "textarea",
					value: formData.problem,
					onChange: (v) => handleChange("problem", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Solution",
					name: "solution",
					type: "textarea",
					value: formData.solution,
					onChange: (v) => handleChange("solution", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "My Role",
					name: "my_role",
					value: formData.my_role,
					onChange: (v) => handleChange("my_role", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Technologies (comma-separated)",
					name: "technologies",
					value: formData.technologies?.join(", "),
					onChange: (v) => handleChange("technologies", v.split(",").map((t) => t.trim()))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "GitHub URL",
					name: "github_url",
					value: formData.github_url,
					onChange: (v) => handleChange("github_url", v),
					placeholder: "https://github.com/username/repo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Demo URL",
					name: "demo_url",
					value: formData.demo_url,
					onChange: (v) => handleChange("demo_url", v),
					placeholder: "https://demo.example.com"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Featured"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.featured,
								onChange: (e) => handleChange("featured", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Show on Website"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.show_on_website,
								onChange: (e) => handleChange("show_on_website", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
								children: "Show on Resume"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: formData.show_on_resume,
								onChange: (e) => handleChange("show_on_resume", e.target.checked),
								className: "w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "flex-1 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-md hover:opacity-90 disabled:opacity-50",
						children: loading ? "Saving..." : "Save"
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/pages/admin/projects/ProjectManager.tsx
function ProjectManager() {
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editingProject, setEditingProject] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadProjects();
	}, []);
	const loadProjects = async () => {
		try {
			const data = await getProjects();
			setProjects(data);
		} catch (error) {
			console.error("Error loading projects:", error);
		} finally {
			setLoading(false);
		}
	};
	const handleCreate = async (data) => {
		await createProject(data);
		loadProjects();
	};
	const handleUpdate = async (data) => {
		if (editingProject?.id) {
			await updateProject(editingProject.id, data);
			loadProjects();
		}
	};
	const handleDelete = async (id) => {
		if (confirm("Are you sure you want to delete this project?")) {
			await deleteProject(id);
			loadProjects();
		}
	};
	const handleToggleVisibility = async (project) => {
		try {
			await updateProject(project.id, { show_on_website: !project.show_on_website });
			await loadProjects();
		} catch (error) {
			console.error("Error toggling project visibility:", error);
		}
	};
	const handleEdit = (project) => {
		setEditingProject(project);
		setIsFormOpen(true);
	};
	const handleAddNew = () => {
		setEditingProject(null);
		setIsFormOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Projects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleAddNew,
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Project"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: projects,
				columns: [
					{
						key: "name",
						label: "Project Name"
					},
					{
						key: "category",
						label: "Category",
						render: (value) => {
							const colors = {
								client_served: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
								poc: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
								component: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
								project_build: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
								technology: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
								pega: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
								pega_cloud: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
								agentic_ai: "bg-green-500/10 text-green-400 border border-green-500/20",
								ai: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
								software_engineering: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
								personal: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
								sample: "bg-gray-500/10 text-gray-400 border border-gray-500/20",
								open_source: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
								other: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
							};
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `px-2 py-1 rounded-md text-xs font-bold tracking-wide ${colors[value] || colors.other}`,
								children: {
									client_served: "Client Served",
									poc: "PoC",
									component: "Component",
									project_build: "Project Build",
									technology: "Technology"
								}[value] || value.replace("_", " ")
							});
						}
					},
					{
						key: "featured",
						label: "Featured",
						render: (value) => value ? "⭐" : ""
					}
				],
				onEdit: handleEdit,
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectForm, {
				isOpen: isFormOpen,
				onClose: () => {
					setIsFormOpen(false);
					setEditingProject(null);
				},
				onSubmit: editingProject ? handleUpdate : handleCreate,
				initialData: editingProject || void 0
			})
		]
	});
}
//#endregion
//#region src/components/admin/forms/ProfileForm.tsx
function ProfileForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		first_name: "",
		last_name: "",
		email: "",
		short_bio: "",
		long_bio: "",
		career_summary: "",
		professional_interests: [],
		personal_interests: [],
		current_focus: "",
		profile_image: "",
		show_on_website: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData(initialData);
	}, [initialData]);
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await onSubmit(formData);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "hyper-glass border line-soft rounded-2xl p-6 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "First Name",
					name: "first_name",
					value: formData.first_name || "",
					onChange: (v) => handleChange("first_name", v),
					required: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Last Name",
					name: "last_name",
					value: formData.last_name || "",
					onChange: (v) => handleChange("last_name", v),
					required: true
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Email",
				name: "email",
				type: "email",
				value: formData.email || "",
				onChange: (v) => handleChange("email", v),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-20 h-20 rounded-xl overflow-hidden hyper-glass border line-strong shadow-lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: formData.profile_image || "/avatar.png",
							alt: "Profile Preview",
							className: "w-full h-full object-cover",
							onError: (e) => {
								e.target.src = "/avatar.png";
							}
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-grow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Profile Image URL",
						name: "profile_image",
						value: formData.profile_image || "",
						onChange: (v) => handleChange("profile_image", v),
						placeholder: "/avatar.png or https://example.com/image.jpg"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Short Bio",
				name: "short_bio",
				value: formData.short_bio || "",
				onChange: (v) => handleChange("short_bio", v),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Long Bio",
				name: "long_bio",
				type: "textarea",
				value: formData.long_bio || "",
				onChange: (v) => handleChange("long_bio", v),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Career Summary",
				name: "career_summary",
				type: "textarea",
				value: formData.career_summary || "",
				onChange: (v) => handleChange("career_summary", v),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Current Focus",
				name: "current_focus",
				type: "textarea",
				value: formData.current_focus || "",
				onChange: (v) => handleChange("current_focus", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Professional Interests (comma-separated)",
				name: "professional_interests",
				value: formData.professional_interests?.join(", ") || "",
				onChange: (v) => handleChange("professional_interests", v.split(",").map((t) => t.trim()).filter(Boolean))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Personal Interests (comma-separated)",
				name: "personal_interests",
				value: formData.personal_interests?.join(", ") || "",
				onChange: (v) => handleChange("personal_interests", v.split(",").map((t) => t.trim()).filter(Boolean))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm font-semibold text-strong mb-2 tracking-wide",
						children: "Show on Website"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: formData.show_on_website || false,
						onChange: (e) => handleChange("show_on_website", e.target.checked),
						className: "w-5 h-5 bg-white/5 dark:bg-slate-900/40 border line-strong rounded focus:ring-cyan-400 text-cyan-500"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex justify-end gap-4",
				children: [onCancel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-5 py-2.5 font-bold rounded-xl transition-all duration-300 text-soft border border-transparent hover:text-strong hover:bg-white/5 dark:hover:bg-slate-800/40",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-bold disabled:opacity-50",
					children: isLoading ? "Saving..." : "Save Profile"
				})]
			})
		]
	});
}
//#endregion
//#region src/pages/admin/profile/ProfileManager.tsx
function ProfileManager() {
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [success, setSuccess] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadProfile();
	}, []);
	const loadProfile = async () => {
		try {
			setLoading(true);
			setError(null);
			const profiles = await getAll("profiles");
			if (profiles && profiles.length > 0) setProfile(profiles[0]);
		} catch (err) {
			setError(err.message || "Failed to load profile");
		} finally {
			setLoading(false);
		}
	};
	const handleSave = async (data) => {
		try {
			setSaving(true);
			setError(null);
			setSuccess(null);
			if (profile?.id) await update("profiles", profile.id, data);
			else await create("profiles", data);
			setSuccess("Profile saved successfully!");
			await loadProfile();
		} catch (err) {
			setError(err.message || "Failed to save profile");
		} finally {
			setSaving(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-between items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Manage Profile"
				})
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			success && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl",
				children: success
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileForm, {
				initialData: profile,
				onSubmit: handleSave,
				isLoading: saving
			})
		]
	});
}
//#endregion
//#region src/components/admin/forms/EducationForm.tsx
function EducationForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		degree: "",
		field: "",
		institution: "",
		location: "",
		start_date: "",
		end_date: "",
		grade: "",
		description: "",
		achievements: [],
		show_on_website: true,
		show_on_resume: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({
			...initialData,
			start_date: initialData.start_date.split("T")[0],
			end_date: initialData.end_date.split("T")[0]
		});
	}, [initialData]);
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await onSubmit(formData);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Degree",
						name: "degree",
						value: formData.degree || "",
						onChange: (v) => handleChange("degree", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Field of Study",
						name: "field",
						value: formData.field || "",
						onChange: (v) => handleChange("field", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Institution",
						name: "institution",
						value: formData.institution || "",
						onChange: (v) => handleChange("institution", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Location",
						name: "location",
						value: formData.location || "",
						onChange: (v) => handleChange("location", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Start Date",
						name: "start_date",
						type: "date",
						value: formData.start_date || "",
						onChange: (v) => handleChange("start_date", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "End Date",
						name: "end_date",
						type: "date",
						value: formData.end_date || "",
						onChange: (v) => handleChange("end_date", v),
						required: true
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Grade/GPA",
				name: "grade",
				value: formData.grade || "",
				onChange: (v) => handleChange("grade", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Description",
				name: "description",
				type: "textarea",
				value: formData.description || "",
				onChange: (v) => handleChange("description", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Achievements (comma-separated)",
				name: "achievements",
				value: formData.achievements?.join(", ") || "",
				onChange: (v) => handleChange("achievements", v.split(",").map((t) => t.trim()).filter(Boolean))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_website || false,
							onChange: (e) => handleChange("show_on_website", e.target.checked),
							className: "rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
						}), "Show on Website"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_resume || false,
							onChange: (e) => handleChange("show_on_resume", e.target.checked),
							className: "rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
						}), "Show on Resume"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 disabled:opacity-50",
					children: isLoading ? "Saving..." : "Save Education"
				})]
			})
		]
	});
}
//#endregion
//#region src/components/admin/forms/CertificationForm.tsx
function CertificationForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		certification: "",
		organization: "",
		credential_id: "",
		credential_url: "",
		issue_date: "",
		expiry_date: "",
		description: "",
		show_on_website: true,
		show_on_resume: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({
			...initialData,
			issue_date: initialData.issue_date.split("T")[0],
			expiry_date: initialData.expiry_date ? initialData.expiry_date.split("T")[0] : ""
		});
	}, [initialData]);
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await onSubmit(formData);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "bg-white dark:bg-gray-800 rounded-lg shadow p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Certification Name",
						name: "certification",
						value: formData.certification || "",
						onChange: (v) => handleChange("certification", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Organization",
						name: "organization",
						value: formData.organization || "",
						onChange: (v) => handleChange("organization", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Credential ID",
						name: "credential_id",
						value: formData.credential_id || "",
						onChange: (v) => handleChange("credential_id", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Credential URL",
						name: "credential_url",
						value: formData.credential_url || "",
						onChange: (v) => handleChange("credential_url", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Issue Date",
						name: "issue_date",
						type: "date",
						value: formData.issue_date || "",
						onChange: (v) => handleChange("issue_date", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Expiry Date",
						name: "expiry_date",
						type: "date",
						value: formData.expiry_date || "",
						onChange: (v) => handleChange("expiry_date", v)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Description",
				name: "description",
				type: "textarea",
				value: formData.description || "",
				onChange: (v) => handleChange("description", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_website || false,
							onChange: (e) => handleChange("show_on_website", e.target.checked),
							className: "rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
						}), "Show on Website"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_resume || false,
							onChange: (e) => handleChange("show_on_resume", e.target.checked),
							className: "rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
						}), "Show on Resume"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 disabled:opacity-50",
					children: isLoading ? "Saving..." : "Save Certification"
				})]
			})
		]
	});
}
//#endregion
//#region src/pages/admin/education/EducationManager.tsx
function EducationManager() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("education");
	const [educations, setEducations] = (0, import_react.useState)([]);
	const [certifications, setCertifications] = (0, import_react.useState)([]);
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [editingEducation, setEditingEducation] = (0, import_react.useState)(null);
	const [editingCertification, setEditingCertification] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			setLoading(true);
			setError(null);
			const [eduData, certData] = await Promise.all([getAll("educations"), getAll("certifications")]);
			setEducations(eduData);
			setCertifications(certData);
		} catch (err) {
			setError(err.message || "Failed to load data");
		} finally {
			setLoading(false);
		}
	};
	const handleDelete = async (table, id) => {
		if (!window.confirm("Are you sure you want to delete this record?")) return;
		try {
			setLoading(true);
			throw new Error("Supabase not configured");
		} catch (err) {
			setError(err.message || "Failed to delete record");
			setLoading(false);
		}
	};
	const handleToggle = async (table, id, current) => {
		try {
			setError(null);
			await update(table, id, { show_on_website: !current });
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to toggle visibility");
		}
	};
	const handleSaveEducation = async (data) => {
		try {
			setSaving(true);
			setError(null);
			if (editingEducation?.id) throw new Error("Supabase not configured");
			else await create("educations", data);
			setIsEditing(false);
			setEditingEducation(null);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save education");
		} finally {
			setSaving(false);
		}
	};
	const handleSaveCertification = async (data) => {
		try {
			setSaving(true);
			setError(null);
			if (editingCertification?.id) throw new Error("Supabase not configured");
			else await create("certifications", data);
			setIsEditing(false);
			setEditingCertification(null);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save certification");
		} finally {
			setSaving(false);
		}
	};
	if (isEditing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hyper-glass rounded-2xl border line-soft p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold text-strong tracking-tight mb-6",
				children: activeTab === "education" ? editingEducation ? "Edit Education" : "Add New Education" : editingCertification ? "Edit Certification" : "Add New Certification"
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 p-4 bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-md",
				children: error
			}),
			activeTab === "education" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationForm, {
				initialData: editingEducation,
				onSubmit: handleSaveEducation,
				onCancel: () => {
					setIsEditing(false);
					setEditingEducation(null);
				},
				isLoading: saving
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationForm, {
				initialData: editingCertification,
				onSubmit: handleSaveCertification,
				onCancel: () => {
					setIsEditing(false);
					setEditingCertification(null);
				},
				isLoading: saving
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab("education"),
						className: `px-5 py-2.5 font-bold rounded-xl transition-all duration-300 ${activeTab === "education" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]" : "text-soft border border-transparent hover:text-strong hover:bg-white/5 dark:hover:bg-slate-800/40"}`,
						children: "Education"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab("certifications"),
						className: `px-5 py-2.5 font-bold rounded-xl transition-all duration-300 ${activeTab === "certifications" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]" : "text-soft border border-transparent hover:text-strong hover:bg-white/5 dark:hover:bg-slate-800/40"}`,
						children: "Certifications"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						setIsEditing(true);
						if (activeTab === "education") setEditingEducation(null);
						else setEditingCertification(null);
					},
					className: "flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 18 }),
						"Add ",
						activeTab === "education" ? "Education" : "Certification"
					]
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-md",
				children: error
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hyper-glass rounded-2xl border line-soft overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "min-w-full divide-y line-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-white/5 dark:bg-slate-900/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
								children: activeTab === "education" ? "Degree & Field" : "Certification"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
								children: "Institution"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
								children: activeTab === "education" ? "Duration" : "Issue Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-6 py-4 text-right text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
								children: "Actions"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y line-soft bg-transparent",
						children: activeTab === "education" ? educations.map((edu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-white/5 dark:hover:bg-slate-800/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-strong",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold",
										children: edu.degree
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-faint",
										children: edu.field
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap text-strong",
									children: edu.institution
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-sm text-faint",
									children: [
										new Date(edu.start_date).getFullYear(),
										" - ",
										new Date(edu.end_date).getFullYear()
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
											size: "sm",
											checked: edu.show_on_website !== false,
											onChange: () => handleToggle("educations", edu.id, edu.show_on_website !== false)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[11px] font-semibold ${edu.show_on_website !== false ? "text-emerald-500" : "text-faint"}`,
											children: edu.show_on_website !== false ? "Visible" : "Hidden"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setEditingEducation(edu);
											setIsEditing(true);
										},
										className: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 mr-4 transition-colors",
										children: "Edit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelete("educations", edu.id),
										className: "text-red-500 hover:text-red-400 transition-colors",
										children: "Delete"
									})]
								})
							]
						}, edu.id)) : certifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-white/5 dark:hover:bg-slate-800/40 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-strong",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold",
										children: cert.certification
									}), cert.credential_id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-sm text-faint",
										children: ["ID: ", cert.credential_id]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap text-strong",
									children: cert.organization
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap text-sm text-faint",
									children: new Date(cert.issue_date).getFullYear()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-6 py-4 whitespace-nowrap",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
											size: "sm",
											checked: cert.show_on_website !== false,
											onChange: () => handleToggle("certifications", cert.id, cert.show_on_website !== false)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[11px] font-semibold ${cert.show_on_website !== false ? "text-emerald-500" : "text-faint"}`,
											children: cert.show_on_website !== false ? "Visible" : "Hidden"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setEditingCertification(cert);
											setIsEditing(true);
										},
										className: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 mr-4 transition-colors",
										children: "Edit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleDelete("certifications", cert.id),
										className: "text-red-500 hover:text-red-400 transition-colors",
										children: "Delete"
									})]
								})
							]
						}, cert.id))
					})]
				}), activeTab === "education" && educations.length === 0 || activeTab === "certifications" && certifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 text-center text-faint",
					children: [
						"No ",
						activeTab,
						" records found."
					]
				}) : null]
			})
		]
	});
}
//#endregion
//#region src/pages/admin/education/CertificationManager.tsx
function CertificationManager() {
	const [certifications, setCertifications] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			const data = await getCertifications();
			setCertifications(data);
		} catch (err) {
			setError(err.message || "Failed to load certifications");
		} finally {
			setLoading(false);
		}
	};
	const handleSubmit = async (data) => {
		try {
			setSaving(true);
			setError(null);
			if (editing?.id) await updateCertification(editing.id, data);
			else await createCertification({
				...data,
				order: certifications.length + 1
			});
			setIsFormOpen(false);
			setEditing(null);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save certification");
		} finally {
			setSaving(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this certification?")) return;
		try {
			await deleteCertification(id);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to delete certification");
		}
	};
	const handleToggleVisibility = async (item) => {
		try {
			setError(null);
			await updateCertification(item.id, { show_on_website: !item.show_on_website });
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to toggle visibility");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Certifications"
				}), !isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setEditing(null);
						setIsFormOpen(true);
					},
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Certification"
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: certifications,
				columns: [
					{
						key: "certification",
						label: "Certification"
					},
					{
						key: "organization",
						label: "Organization"
					},
					{
						key: "issue_date",
						label: "Issue Date",
						render: (value) => value ? new Date(value).toLocaleDateString() : ""
					}
				],
				onEdit: (item) => {
					setEditing(item);
					setIsFormOpen(true);
				},
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificationForm, {
				initialData: editing,
				onSubmit: handleSubmit,
				onCancel: () => {
					setIsFormOpen(false);
					setEditing(null);
				},
				isLoading: saving
			})
		]
	});
}
//#endregion
//#region src/components/admin/forms/AwardForm.tsx
function AwardForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		award: "",
		organization: "",
		date: "",
		description: "",
		credential: "",
		featured: false,
		show_on_website: true,
		show_on_resume: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({
			...initialData,
			date: initialData.date ? initialData.date.split("T")[0] : ""
		});
		else setFormData({
			award: "",
			organization: "",
			date: "",
			description: "",
			credential: "",
			featured: false,
			show_on_website: true,
			show_on_resume: true
		});
	}, [initialData]);
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await onSubmit(formData);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "hyper-glass rounded-2xl border line-soft p-6 mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-base font-bold text-strong mb-5 tracking-tight",
				children: initialData ? "Edit Award" : "Add Award"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Award Title",
						name: "award",
						value: formData.award || "",
						onChange: (v) => handleChange("award", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Organization",
						name: "organization",
						value: formData.organization || "",
						onChange: (v) => handleChange("organization", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Date",
						name: "date",
						type: "date",
						value: formData.date || "",
						onChange: (v) => handleChange("date", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Credential / Link",
						name: "credential",
						value: formData.credential || "",
						onChange: (v) => handleChange("credential", v)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Description",
				name: "description",
				type: "textarea",
				value: formData.description || "",
				onChange: (v) => handleChange("description", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-6 mt-2 mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.featured || false,
							onChange: (e) => handleChange("featured", e.target.checked),
							className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
						}), "Featured"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_website ?? true,
							onChange: (e) => handleChange("show_on_website", e.target.checked),
							className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
						}), "Show on Website"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_resume ?? true,
							onChange: (e) => handleChange("show_on_resume", e.target.checked),
							className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
						}), "Show on Resume"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-4 py-2 border line-strong rounded-xl text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium disabled:opacity-50",
					children: isLoading ? "Saving..." : initialData ? "Update Award" : "Add Award"
				})]
			})
		]
	});
}
//#endregion
//#region src/pages/admin/awards/AwardManager.tsx
function AwardManager() {
	const [awards, setAwards] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			const data = await getAwards();
			setAwards(data);
		} catch (err) {
			setError(err.message || "Failed to load awards");
		} finally {
			setLoading(false);
		}
	};
	const handleSubmit = async (data) => {
		try {
			setSaving(true);
			setError(null);
			if (editing?.id) await updateAward(editing.id, data);
			else await createAward({
				...data,
				order: awards.length + 1
			});
			setIsFormOpen(false);
			setEditing(null);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save award");
		} finally {
			setSaving(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this award?")) return;
		try {
			await deleteAward(id);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to delete award");
		}
	};
	const handleToggleVisibility = async (item) => {
		try {
			setError(null);
			await updateAward(item.id, { show_on_website: !item.show_on_website });
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to toggle visibility");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Awards & Recognition"
				}), !isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setEditing(null);
						setIsFormOpen(true);
					},
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Award"
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: awards,
				columns: [
					{
						key: "award",
						label: "Award"
					},
					{
						key: "organization",
						label: "Organization"
					},
					{
						key: "date",
						label: "Date",
						render: (value) => value ? new Date(value).toLocaleDateString() : ""
					},
					{
						key: "featured",
						label: "Featured",
						render: (value) => value ? "⭐" : ""
					}
				],
				onEdit: (item) => {
					setEditing(item);
					setIsFormOpen(true);
				},
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardForm, {
				initialData: editing,
				onSubmit: handleSubmit,
				onCancel: () => {
					setIsFormOpen(false);
					setEditing(null);
				},
				isLoading: saving
			})
		]
	});
}
//#endregion
//#region src/components/admin/forms/LanguageForm.tsx
var proficiencyOptions = [
	{
		value: "Beginner",
		label: "Beginner"
	},
	{
		value: "Conversational",
		label: "Conversational"
	},
	{
		value: "Fluent",
		label: "Fluent"
	},
	{
		value: "Professional",
		label: "Professional"
	},
	{
		value: "Native",
		label: "Native"
	}
];
function LanguageForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		language: "",
		speaking: "",
		writing: "",
		reading: "",
		listening: "",
		overall_proficiency: "Fluent",
		native: false,
		show_on_website: true,
		show_on_resume: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({ ...initialData });
		else setFormData({
			language: "",
			speaking: "",
			writing: "",
			reading: "",
			listening: "",
			overall_proficiency: "Fluent",
			native: false,
			show_on_website: true,
			show_on_resume: true
		});
	}, [initialData]);
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await onSubmit(formData);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "hyper-glass rounded-2xl border line-soft p-6 mt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-base font-bold text-strong mb-5 tracking-tight",
				children: initialData ? "Edit Language" : "Add Language"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Language",
						name: "language",
						value: formData.language || "",
						onChange: (v) => handleChange("language", v),
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Overall Proficiency",
						name: "overall_proficiency",
						type: "select",
						value: formData.overall_proficiency || "Fluent",
						onChange: (v) => handleChange("overall_proficiency", v),
						options: proficiencyOptions
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Speaking",
						name: "speaking",
						type: "select",
						value: formData.speaking || "",
						onChange: (v) => handleChange("speaking", v),
						options: proficiencyOptions
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Writing",
						name: "writing",
						type: "select",
						value: formData.writing || "",
						onChange: (v) => handleChange("writing", v),
						options: proficiencyOptions
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Reading",
						name: "reading",
						type: "select",
						value: formData.reading || "",
						onChange: (v) => handleChange("reading", v),
						options: proficiencyOptions
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Listening",
						name: "listening",
						type: "select",
						value: formData.listening || "",
						onChange: (v) => handleChange("listening", v),
						options: proficiencyOptions
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-6 mt-2 mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.native || false,
							onChange: (e) => handleChange("native", e.target.checked),
							className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
						}), "Native language"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_website ?? true,
							onChange: (e) => handleChange("show_on_website", e.target.checked),
							className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
						}), "Show on Website"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 text-sm font-medium text-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: formData.show_on_resume ?? true,
							onChange: (e) => handleChange("show_on_resume", e.target.checked),
							className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
						}), "Show on Resume"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-4 py-2 border line-strong rounded-xl text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium disabled:opacity-50",
					children: isLoading ? "Saving..." : initialData ? "Update Language" : "Add Language"
				})]
			})
		]
	});
}
//#endregion
//#region src/pages/admin/languages/LanguageManager.tsx
function LanguageManager() {
	const [languages, setLanguages] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			const data = await getLanguages();
			setLanguages(data);
		} catch (err) {
			setError(err.message || "Failed to load languages");
		} finally {
			setLoading(false);
		}
	};
	const handleSubmit = async (data) => {
		try {
			setSaving(true);
			setError(null);
			if (editing?.id) await updateLanguage(editing.id, data);
			else await createLanguage({
				...data,
				order: languages.length + 1
			});
			setIsFormOpen(false);
			setEditing(null);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save language");
		} finally {
			setSaving(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Delete this language?")) return;
		try {
			await deleteLanguage(id);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to delete language");
		}
	};
	const handleToggleVisibility = async (item) => {
		try {
			setError(null);
			await updateLanguage(item.id, { show_on_website: !item.show_on_website });
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to toggle visibility");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong tracking-tight",
					children: "Languages"
				}), !isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setEditing(null);
						setIsFormOpen(true);
					},
					className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
					children: "Add Language"
				})]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				data: languages,
				columns: [
					{
						key: "language",
						label: "Language"
					},
					{
						key: "overall_proficiency",
						label: "Proficiency"
					},
					{
						key: "native",
						label: "Native",
						render: (value) => value ? "✅" : ""
					}
				],
				onEdit: (item) => {
					setEditing(item);
					setIsFormOpen(true);
				},
				onDelete: handleDelete,
				onToggleVisibility: handleToggleVisibility,
				loading
			}),
			isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageForm, {
				initialData: editing,
				onSubmit: handleSubmit,
				onCancel: () => {
					setIsFormOpen(false);
					setEditing(null);
				},
				isLoading: saving
			})
		]
	});
}
//#endregion
//#region src/pages/admin/communication/MessageManager.tsx
function MessageManager() {
	const [inquiries, setInquiries] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedInquiry, setSelectedInquiry] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadInquiries();
	}, []);
	const loadInquiries = async () => {
		try {
			setLoading(true);
			const data = await getAll("inquiries");
			setInquiries(data);
		} catch (err) {
			console.error(err.message || "Failed to load messages");
		} finally {
			setLoading(false);
		}
	};
	const handleStatusChange = async (id, newStatus) => {
		try {
			throw new Error("Supabase not configured");
		} catch (err) {
			console.error(err.message || "Failed to update status");
		}
	};
	const handleDelete = async (id) => {
		if (!window.confirm("Are you sure you want to delete this message?")) return;
		try {
			throw new Error("Supabase not configured");
		} catch (err) {
			console.error(err.message || "Failed to delete message");
		}
	};
	const getStatusBadge = (status) => {
		switch (status) {
			case "NEW": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-2 py-1 rounded-md text-[10px] font-black bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 tracking-wider",
				children: "NEW"
			});
			case "CONTACTED": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-2 py-1 rounded-md text-[10px] font-black bg-purple-500/20 text-purple-400 border border-purple-500/30 tracking-wider",
				children: "CONTACTED"
			});
			case "CLOSED": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-2 py-1 rounded-md text-[10px] font-black bg-slate-500/20 text-slate-400 border border-slate-500/30 tracking-wider",
				children: "CLOSED"
			});
			default: return null;
		}
	};
	if (loading && inquiries.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-6 h-[calc(100vh-12rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-1/3 hyper-glass rounded-2xl border line-soft flex flex-col overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-5 border-b line-soft bg-white/5 dark:bg-slate-900/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "font-bold text-strong flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							size: 18,
							className: "text-cyan-500"
						}),
						" Inbox (",
						inquiries.length,
						")"
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto custom-scrollbar",
				children: inquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-8 text-center text-faint font-light",
					children: "No messages yet"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y line-soft",
					children: inquiries.map((inquiry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setSelectedInquiry(inquiry),
						className: `w-full text-left p-5 transition-all duration-300 hover:bg-white/5 dark:hover:bg-slate-800/40 ${selectedInquiry?.id === inquiry.id ? "bg-cyan-500/10 border-l-4 border-cyan-500" : "border-l-4 border-transparent"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-strong truncate pr-2",
									children: inquiry.name
								}), getStatusBadge(inquiry.status)]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-soft truncate font-medium",
								children: inquiry.company || inquiry.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-faint mt-3 flex items-center gap-1.5 font-light",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									size: 12,
									className: "text-cyan-500/50"
								}), new Date(inquiry.created_at).toLocaleDateString()]
							})
						]
					}, inquiry.id))
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 hyper-glass rounded-2xl border line-soft flex flex-col overflow-hidden",
			children: selectedInquiry ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8 border-b line-soft bg-white/5 dark:bg-slate-900/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-start mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black text-strong mb-2 tracking-tight",
						children: selectedInquiry.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 text-sm text-soft font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${selectedInquiry.email}`,
							className: "hover:text-cyan-400 transition-colors",
							children: selectedInquiry.email
						}), selectedInquiry.mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${selectedInquiry.mobile}`,
							className: "hover:text-cyan-400 transition-colors",
							children: selectedInquiry.mobile
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedInquiry.status,
							onChange: (e) => handleStatusChange(selectedInquiry.id, e.target.value),
							className: "px-4 py-2 text-sm bg-white/5 dark:bg-slate-900/60 border line-strong rounded-xl text-strong focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "NEW",
									children: "New"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "CONTACTED",
									children: "Contacted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "CLOSED",
									children: "Closed"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleDelete(selectedInquiry.id),
							className: "p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-all duration-300",
							title: "Delete Message",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 18 })
						})]
					})]
				}), selectedInquiry.company && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-strong tracking-wide",
							children: "COMPANY:"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-soft",
							children: selectedInquiry.company
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8 flex-1 overflow-y-auto custom-scrollbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-bold text-strong mb-4 tracking-wider",
					children: "MESSAGE"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white/5 dark:bg-slate-900/40 border line-soft p-6 rounded-2xl whitespace-pre-wrap text-soft leading-relaxed",
					children: selectedInquiry.note
				})]
			})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex flex-col items-center justify-center text-faint",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
					size: 64,
					className: "mb-6 opacity-20 text-cyan-500"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-light tracking-wide",
					children: "Select a message to view details"
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/admin/forms/ContactInfoForm.tsx
function ContactInfoForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		heading: "Let's Build Something Great",
		subtitle: "Have a question, opportunity, or just want to say hello?",
		email: "",
		phone: "",
		location: "",
		availability: "Open to opportunities",
		response_time: "I typically respond within 24-48 hours.",
		show_on_website: true
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({ ...initialData });
	}, [initialData]);
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await onSubmit(formData);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "hyper-glass rounded-2xl border line-soft p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-base font-bold text-strong mb-5 tracking-tight",
				children: "Contact Page Details"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Heading",
						name: "heading",
						value: formData.heading || "",
						onChange: (v) => handleChange("heading", v),
						required: true,
						placeholder: "Let's Build Something Great"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Email",
						name: "email",
						type: "email",
						value: formData.email || "",
						onChange: (v) => handleChange("email", v),
						required: true,
						placeholder: "contact@somnath.dev"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Phone",
						name: "phone",
						value: formData.phone || "",
						onChange: (v) => handleChange("phone", v),
						placeholder: "+46 70 000 00 00"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Location",
						name: "location",
						value: formData.location || "",
						onChange: (v) => handleChange("location", v),
						placeholder: "Stockholm, Sweden"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Availability",
						name: "availability",
						value: formData.availability || "",
						onChange: (v) => handleChange("availability", v),
						placeholder: "Open to opportunities"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Subtitle",
				name: "subtitle",
				type: "textarea",
				value: formData.subtitle || "",
				onChange: (v) => handleChange("subtitle", v),
				placeholder: "Have a question, opportunity, or just want to say hello?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Response Time Note",
				name: "response_time",
				type: "textarea",
				value: formData.response_time || "",
				onChange: (v) => handleChange("response_time", v),
				placeholder: "I typically respond within 24-48 hours."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-sm font-medium text-strong",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: formData.show_on_website ?? true,
						onChange: (e) => handleChange("show_on_website", e.target.checked),
						className: "w-4 h-4 rounded border line-strong focus:ring-cyan-400 text-cyan-500"
					}), "Show contact info on website"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-4 py-2 border line-strong rounded-xl text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium disabled:opacity-50",
					children: isLoading ? "Saving..." : "Save Contact Info"
				})]
			})
		]
	});
}
//#endregion
//#region src/pages/admin/contact/ContactManager.tsx
function ContactManager() {
	const [contact, setContact] = (0, import_react.useState)(null);
	const [socialLinks, setSocialLinks] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [success, setSuccess] = (0, import_react.useState)(null);
	const [socialFormOpen, setSocialFormOpen] = (0, import_react.useState)(false);
	const [editingSocial, setEditingSocial] = (0, import_react.useState)(null);
	const [socialForm, setSocialForm] = (0, import_react.useState)({
		platform: "",
		url: "",
		username: ""
	});
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			setLoading(true);
			setError(null);
			const [info, links] = await Promise.all([getContactInfo(), getSocialLinks()]);
			setContact(info);
			setSocialLinks(links);
		} catch (err) {
			setError(err.message || "Failed to load contact data");
		} finally {
			setLoading(false);
		}
	};
	const handleSaveContact = async (data) => {
		try {
			setSaving(true);
			setError(null);
			setSuccess(null);
			await updateContactInfo(data);
			setSuccess("Contact details saved successfully!");
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save contact details");
		} finally {
			setSaving(false);
		}
	};
	const openAddSocial = () => {
		setEditingSocial(null);
		setSocialForm({
			platform: "",
			url: "",
			username: ""
		});
		setSocialFormOpen(true);
	};
	const openEditSocial = (link) => {
		setEditingSocial(link);
		setSocialForm({
			platform: link.platform,
			url: link.url,
			username: link.username || ""
		});
		setSocialFormOpen(true);
	};
	const handleSaveSocial = async (e) => {
		e.preventDefault();
		try {
			setError(null);
			setSuccess(null);
			if (editingSocial?.id) await updateSocialLink(editingSocial.id, {
				...socialForm,
				show_on_website: editingSocial.show_on_website
			});
			else await createSocialLink({
				...socialForm,
				show_on_website: true,
				order: socialLinks.length + 1
			});
			setSocialFormOpen(false);
			setEditingSocial(null);
			setSuccess("Social link saved!");
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save social link");
		}
	};
	const handleDeleteSocial = async (id) => {
		if (!confirm("Delete this social link?")) return;
		try {
			await deleteSocialLink(id);
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to delete social link");
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			success && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl",
				children: success
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold text-strong tracking-tight mb-4",
				children: "Contact Details"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactInfoForm, {
				initialData: contact,
				onSubmit: handleSaveContact,
				onCancel: () => loadData(),
				isLoading: saving
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between items-center mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold text-strong tracking-tight",
						children: "Social Links"
					}), !socialFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: openAddSocial,
						className: "px-5 py-2.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
						children: "Add Social Link"
					})]
				}),
				socialFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSaveSocial,
					className: "hyper-glass rounded-2xl border line-soft p-6 mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-base font-bold text-strong mb-5 tracking-tight",
							children: editingSocial ? "Edit Social Link" : "Add Social Link"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Platform",
									name: "platform",
									value: socialForm.platform,
									onChange: (v) => setSocialForm((p) => ({
										...p,
										platform: v
									})),
									required: true,
									placeholder: "GitHub, LinkedIn, X..."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "URL",
									name: "url",
									value: socialForm.url,
									onChange: (v) => setSocialForm((p) => ({
										...p,
										url: v
									})),
									required: true,
									placeholder: "https://..."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Username",
									name: "username",
									value: socialForm.username,
									onChange: (v) => setSocialForm((p) => ({
										...p,
										username: v
									})),
									placeholder: "optional"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex justify-end gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setSocialFormOpen(false);
									setEditingSocial(null);
								},
								className: "px-4 py-2 border line-strong rounded-xl text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium",
								children: editingSocial ? "Update" : "Add"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hyper-glass rounded-2xl border line-soft overflow-hidden",
					children: socialLinks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "p-8 text-center text-faint font-light",
						children: "No social links yet"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "min-w-full divide-y line-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-white/5 dark:bg-slate-900/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
									children: "Platform"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
									children: "URL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-left text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
									children: "Visible"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-6 py-4 text-right text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y line-soft bg-transparent",
							children: socialLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-white/5 dark:hover:bg-slate-800/40 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 whitespace-nowrap text-sm text-strong",
										children: link.platform
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-sm text-soft truncate max-w-[280px]",
										children: link.url
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 whitespace-nowrap text-sm",
										children: link.show_on_website ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2 py-1 rounded-md text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
											children: "Visible"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2 py-1 rounded-md text-xs font-bold bg-slate-500/10 text-slate-400 border border-slate-500/20",
											children: "Hidden"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => openEditSocial(link),
												className: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 mr-4 transition-colors",
												children: "Edit"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													const next = {
														...link,
														show_on_website: !link.show_on_website
													};
													updateSocialLink(link.id, { show_on_website: next.show_on_website }).then(loadData);
												},
												className: "text-purple-500 hover:text-purple-400 mr-4 transition-colors",
												children: link.show_on_website ? "Hide" : "Show"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDeleteSocial(link.id),
												className: "text-red-500 hover:text-red-400 transition-colors",
												children: "Delete"
											})
										]
									})
								]
							}, link.id))
						})]
					})
				})
			] })
		]
	});
}
//#endregion
//#region src/components/admin/forms/SiteSettingsForm.tsx
function SiteSettingsForm({ initialData, onSubmit, onCancel, isLoading }) {
	const [formData, setFormData] = (0, import_react.useState)({
		site_title: "",
		site_description: "",
		contact_heading: "Let's Connect",
		projects_heading: "Things I've Built",
		hero_highlight_1: "Pega Developer",
		hero_highlight_2: "Pega Cloud",
		hero_highlight_3: "Agentic AI",
		hero_highlight_4: "Software Engineering",
		theme: "system"
	});
	(0, import_react.useEffect)(() => {
		if (initialData) setFormData({ ...initialData });
	}, [initialData]);
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		await onSubmit(formData);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "hyper-glass rounded-2xl border line-soft p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-base font-bold text-strong mb-5 tracking-tight",
				children: "Website Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Site Title",
				name: "site_title",
				value: formData.site_title || "",
				onChange: (v) => handleChange("site_title", v),
				required: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				label: "Site Description",
				name: "site_description",
				type: "textarea",
				value: formData.site_description || "",
				onChange: (v) => handleChange("site_description", v)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Contact Page Heading",
						name: "contact_heading",
						value: formData.contact_heading || "",
						onChange: (v) => handleChange("contact_heading", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Projects Page Heading",
						name: "projects_heading",
						value: formData.projects_heading || "",
						onChange: (v) => handleChange("projects_heading", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Hero Highlight 1",
						name: "hero_highlight_1",
						value: formData.hero_highlight_1 || "",
						onChange: (v) => handleChange("hero_highlight_1", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Hero Highlight 2",
						name: "hero_highlight_2",
						value: formData.hero_highlight_2 || "",
						onChange: (v) => handleChange("hero_highlight_2", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Hero Highlight 3",
						name: "hero_highlight_3",
						value: formData.hero_highlight_3 || "",
						onChange: (v) => handleChange("hero_highlight_3", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Hero Highlight 4",
						name: "hero_highlight_4",
						value: formData.hero_highlight_4 || "",
						onChange: (v) => handleChange("hero_highlight_4", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Default Theme",
						name: "theme",
						type: "select",
						value: formData.theme || "system",
						onChange: (v) => handleChange("theme", v),
						options: [
							{
								value: "system",
								label: "System"
							},
							{
								value: "light",
								label: "Light"
							},
							{
								value: "dark",
								label: "Dark"
							}
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex justify-end gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "px-4 py-2 border line-strong rounded-xl text-soft hover:text-strong hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: isLoading,
					className: "px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all duration-300 font-medium disabled:opacity-50",
					children: isLoading ? "Saving..." : "Save Website Settings"
				})]
			})
		]
	});
}
//#endregion
//#region src/pages/admin/website/WebsiteManager.tsx
function WebsiteManager() {
	const [settings, setSettings] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [success, setSuccess] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await getSiteSettings();
			setSettings(data);
		} catch (err) {
			setError(err.message || "Failed to load website settings");
		} finally {
			setLoading(false);
		}
	};
	const handleSave = async (data) => {
		try {
			setSaving(true);
			setError(null);
			setSuccess(null);
			await updateSiteSettings(data);
			setSuccess("Website settings saved successfully!");
			await loadData();
		} catch (err) {
			setError(err.message || "Failed to save website settings");
		} finally {
			setSaving(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl",
				children: error
			}),
			success && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl",
				children: success
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold text-strong tracking-tight mb-4",
				children: "Website Settings"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteSettingsForm, {
				initialData: settings,
				onSubmit: handleSave,
				onCancel: () => loadData(),
				isLoading: saving
			})] })
		]
	});
}
//#endregion
//#region src/pages/admin/AdminDashboard.tsx
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
//#region src/components/admin/ProtectedRoute.tsx
function ProtectedRoute({ children }) {
	const { user, isAdmin, loading } = useAuth();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100" })
	});
	if (!user || !isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/x8k2m5n7-studio-console/login",
		replace: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
//#endregion
//#region src/routes/adminRoutes.tsx
var ADMIN_ROUTE = "/x8k2m5n7-studio-console";
var adminRoutes = [{
	path: `${ADMIN_ROUTE}/login`,
	element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLogin, {})
}, {
	path: ADMIN_ROUTE,
	element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, {}) })
}];
//#endregion
//#region src/components/public/ThemeToggle.tsx
function getInitialTheme() {
	const stored = localStorage.getItem("theme");
	if (stored === "dark" || stored === "light") return stored;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)(getInitialTheme);
	(0, import_react.useEffect)(() => {
		if (theme === "dark") document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", theme);
	}, [theme]);
	const toggle = () => {
		setTheme((prev) => prev === "dark" ? "light" : "dark");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		title: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		className: "relative p-2.5 rounded-xl surface-glass border border-transparent text-soft hover:text-strong transition-all duration-300 shadow-sm cursor-pointer group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
			style: { boxShadow: "0 0 18px color-mix(in srgb, var(--acc-cyan) 40%, transparent)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative block h-5 w-5 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute inset-0 flex items-center justify-center transition-all duration-500 ${theme === "dark" ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
					size: 18,
					className: "accent-cyan"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute inset-0 flex items-center justify-center transition-all duration-500 ${theme === "light" ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
					size: 18,
					className: "accent-amber"
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/public/Navigation.tsx
function Navigation() {
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const nav = document.getElementById("main-nav");
			if (nav) {
				if (window.scrollY > 20) nav.classList.add("nav-scrolled");
				else nav.classList.remove("nav-scrolled");
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		id: "main-nav",
		className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
		style: { background: "transparent" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        #main-nav.nav-scrolled {
          background: var(--surface-glass) !important;
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border-bottom: 1px solid var(--line-strong);
          box-shadow: 0 8px 32px var(--shadow-strong);
        }
      ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between h-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: -20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .6,
						ease: "easeOut"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 blur-md opacity-60 group-hover:opacity-100 transition-opacity" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative p-2 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-lg group-hover:scale-105 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { size: 16 })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-black tracking-tight text-strong group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400 transition-all duration-300",
							children: "Somnath"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: 20
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .6,
						ease: "easeOut"
					},
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/public/Footer.tsx
function Footer() {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "surface-deep border-t border-slate-200/70 dark:border-slate-800/80 pt-12 pb-28 relative z-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-strong mb-3 tracking-wide",
						children: "Somnath"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-faint text-xs sm:text-sm leading-relaxed max-w-sm",
						children: "Pega Developer & Software Engineer exploring the intersection of enterprise applications, cloud infrastructure, and Agentic AI."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-soft mb-3 tracking-wider uppercase",
						children: "Quick Links"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-xs sm:text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "text-faint hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors",
								children: "About"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/experience",
								className: "text-faint hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors",
								children: "Experience"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projects",
								className: "text-faint hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors",
								children: "Projects"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/resume",
								className: "text-faint hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors",
								children: "Resume"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-soft mb-3 tracking-wider uppercase",
						children: "Connect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex space-x-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "p-2.5 rounded-xl surface-soft text-soft hover:text-strong hover:border-cyan-500/50 transition-all",
								"aria-label": "GitHub",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-4 h-4 fill-current",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://linkedin.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "p-2.5 rounded-xl surface-soft text-soft hover:text-strong hover:border-cyan-500/50 transition-all",
								"aria-label": "LinkedIn",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "w-4 h-4 fill-current",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "p-2.5 rounded-xl surface-soft text-soft hover:text-strong hover:border-cyan-500/50 transition-all",
								"aria-label": "Email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 })
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 text-center flex flex-col sm:flex-row items-center justify-between text-xs text-faint gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					currentYear,
					" Somnath Haldar. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] text-faint",
					children: "Built with React, TypeScript & Cyber Glassmorphism"
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/public/workspace/FloatingDock.tsx
var dockItems = [
	{
		id: "home",
		label: "Home",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { size: 19 }),
		path: "/"
	},
	{
		id: "about",
		label: "About",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { size: 19 }),
		path: "#about"
	},
	{
		id: "skills",
		label: "Skills",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { size: 19 }),
		path: "#skills"
	},
	{
		id: "pega",
		label: "Pega",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { size: 19 }),
		path: "#pega"
	},
	{
		id: "experience",
		label: "Experience",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { size: 19 }),
		path: "#experience"
	},
	{
		id: "projects",
		label: "Projects",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { size: 19 }),
		path: "#projects"
	},
	{
		id: "contact",
		label: "Contact",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 19 }),
		path: "#contact"
	}
];
function FloatingDock() {
	const navigate = useNavigate();
	const location = useLocation();
	const [activeSection, setActiveSection] = import_react.useState("home");
	import_react.useEffect(() => {
		if (location.pathname !== "/") return;
		const observers = /* @__PURE__ */ new Map();
		const sectionsToObserve = dockItems.filter((item) => item.path.startsWith("#"));
		const handleScroll = () => {
			if (window.scrollY < 100) setActiveSection("home");
		};
		window.addEventListener("scroll", handleScroll);
		const timeoutId = setTimeout(() => {
			sectionsToObserve.forEach((item) => {
				const elementId = item.path.substring(1);
				const element = document.getElementById(elementId);
				if (element) {
					const observer = new IntersectionObserver((entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) setActiveSection(item.id);
						});
					}, {
						root: null,
						rootMargin: "-30% 0px -60% 0px",
						threshold: 0
					});
					observer.observe(element);
					observers.set(item.id, observer);
				}
			});
		}, 500);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(timeoutId);
			observers.forEach((observer) => observer.disconnect());
		};
	}, [location.pathname]);
	import_react.useEffect(() => {
		if (location.pathname !== "/") {
			const match = dockItems.find((item) => item.path === location.pathname);
			if (match) setActiveSection(match.id);
		} else if (location.hash) {
			const match = dockItems.find((item) => item.path === location.hash);
			if (match) setActiveSection(match.id);
		}
	}, [location.pathname, location.hash]);
	const handleNavClick = (item) => {
		setActiveSection(item.id);
		if (item.path.startsWith("#")) {
			if (location.pathname !== "/") navigate("/");
			setTimeout(() => {
				const elementId = item.path.substring(1);
				const element = document.getElementById(elementId);
				if (element) {
					const y = element.getBoundingClientRect().top + window.scrollY - 40;
					window.scrollTo({
						top: y,
						behavior: "smooth"
					});
				}
			}, 100);
		} else if (item.path === "/") {
			if (location.pathname !== "/") navigate("/");
			else window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		} else navigate(item.path);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 px-2 w-[95%] sm:w-auto max-w-full flex justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				y: 60,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			transition: {
				duration: .6,
				type: "spring",
				damping: 20
			},
			className: "hyper-dock px-3 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center justify-center gap-1.5 sm:gap-3 shadow-2xl overflow-x-auto no-scrollbar",
			children: dockItems.map((item) => {
				const isActive = activeSection === item.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					whileHover: {
						scale: 1.22,
						y: -6
					},
					whileTap: { scale: .92 },
					onClick: () => handleNavClick(item),
					className: `group relative flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl transition-all duration-300 ${isActive ? "bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-purple-500/40" : "text-soft hover:text-strong hover:bg-slate-200/60 dark:hover:bg-slate-800/70"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative z-10",
							children: item.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-semibold mt-1 tracking-tight hidden sm:block",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-10 px-2.5 py-1 surface-deep accent-cyan text-[10px] font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border line-soft shadow-xl",
							children: item.label
						}),
						isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300 shadow-[0_0_8px_#06b6d4] dark:shadow-[0_0_10px_#38bdf8]" })
					]
				}, item.id);
			})
		})
	});
}
//#endregion
//#region src/App.tsx
function PublicLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen cyber-bg-scene text-body flex flex-col overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyberBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-16 relative z-10",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDock, {})
		]
	});
}
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Routes, { children: [
		publicRoutes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: route.path,
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: route.element })
		}, route.path)),
		adminRoutes.map((route) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: route.path,
			element: route.element
		}, route.path)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, {
			path: "*",
			element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublicLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}) })
		})
	] }) }) });
}
//#endregion
//#region src/main.tsx
var storedTheme = localStorage.getItem("theme");
var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (storedTheme === "dark" || !storedTheme && prefersDark) document.documentElement.classList.add("dark");
else document.documentElement.classList.remove("dark");
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) }));
//#endregion
