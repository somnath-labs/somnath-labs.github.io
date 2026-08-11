import { r as __toESM } from "./rolldown-runtime-DC62tzP2.js";
import { $ as require_jsx_runtime, A as createLucideIcon, O as Award, S as Layers, ct as require_react, j as motion, st as useParams, tt as Link, v as Target } from "./tab-about-C7I1RF7V.js";
import { E as getProjectBySlug, G as Code, U as ExternalLink } from "./tab-home-B91RtgWt.js";
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowLeft = createLucideIcon("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var GitBranch = createLucideIcon("git-branch", [
	["path", {
		d: "M15 6a9 9 0 0 0-9 9V3",
		key: "1cii5b"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}],
	["circle", {
		cx: "6",
		cy: "18",
		r: "3",
		key: "fqmcym"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Lightbulb = createLucideIcon("lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Rocket = createLucideIcon("rocket", [
	["path", {
		d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
		key: "qeys4"
	}],
	["path", {
		d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
		key: "u4xsad"
	}],
	["path", {
		d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
		key: "676m9"
	}],
	["path", {
		d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
		key: "92ym6u"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
//#endregion
//#region src/pages/public/ProjectDetail.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const { slug } = useParams();
	const [project, setProject] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (slug) loadProject(slug);
	}, [slug]);
	const loadProject = async (projectSlug) => {
		try {
			const data = await getProjectBySlug(projectSlug);
			setProject(data);
		} catch (error) {
			console.error("Error loading project:", error);
		} finally {
			setLoading(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400" })
	});
	if (!project) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "cyber-section-title text-4xl font-black mb-4",
				children: "Project Not Found"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/projects",
				className: "neon-btn-secondary",
				children: "Back to Projects"
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative min-h-screen py-12 px-4 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/projects",
				className: "inline-flex items-center gap-2 text-faint hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors mb-8 neon-btn-secondary rounded-full! py-2! px-4!",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }), "Back to Projects"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .6 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hyper-glass rounded-2xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between flex-wrap gap-3 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "cyber-chip accent-cyan border-cyan-500/40",
									children: {
										client_served: "Client Served",
										poc: "PoC",
										component: "Component",
										project_build: "Project Build",
										technology: "Technology"
									}[project.category] || project.category.replace("_", " ")
								}), project.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "cyber-chip accent-amber border-amber-500/40",
									children: "★ Featured"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "cyber-section-title text-3xl sm:text-4xl font-black tracking-tight mb-3",
								children: project.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base text-soft font-light leading-relaxed",
								children: project.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3 mt-6",
								children: [project.github_url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.github_url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "neon-btn-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { size: 16 }), "GitHub"]
								}), project.demo_url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.demo_url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "neon-btn-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 16 }), "Live Demo"]
								})]
							})
						]
					}),
					(project.problem || project.solution) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
						children: [project.problem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hyper-glass rounded-2xl p-6 border border-rose-500/30 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-lg font-bold text-strong mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
										size: 18,
										className: "accent-rose"
									}), "Problem"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-soft font-light leading-relaxed",
									children: project.problem
								})
							]
						}), project.solution && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hyper-glass rounded-2xl p-6 border border-emerald-500/30 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-lg font-bold text-strong mb-3 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
										size: 18,
										className: "accent-emerald"
									}), "Solution"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-soft font-light leading-relaxed",
									children: project.solution
								})
							]
						})]
					}),
					project.technologies && project.technologies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold text-strong tracking-wide mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
								size: 16,
								className: "accent-cyan"
							}), "Technologies Used"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: project.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cyber-chip accent-cyan border-cyan-500/40",
								children: tech
							}, tech))
						})]
					}),
					project.my_role && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hyper-glass rounded-2xl p-6 border border-purple-500/30 relative overflow-hidden mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-lg font-bold text-strong mb-3 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
									size: 18,
									className: "accent-purple"
								}), "My Role"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-soft font-light leading-relaxed",
								children: project.my_role
							})
						]
					}),
					project.features && project.features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold text-strong tracking-wide mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, {
								size: 16,
								className: "accent-blue"
							}), "Key Features"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-3",
							children: project.features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hyper-glass rounded-xl p-4 border line-soft flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, {
									size: 14,
									className: "accent-cyan flex-shrink-0 mt-0.5"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-soft font-light",
									children: feature
								})]
							}, index))
						})]
					}),
					project.architecture && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hyper-glass rounded-2xl p-6 border border-blue-500/30 relative overflow-hidden mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-lg font-bold text-strong mb-3 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
									size: 18,
									className: "accent-blue"
								}), "Architecture"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-soft font-light leading-relaxed",
								children: project.architecture
							})
						]
					}),
					project.what_learned && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hyper-glass rounded-2xl p-6 border border-amber-500/30 relative overflow-hidden mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-lg font-bold text-strong mb-3 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
									size: 18,
									className: "accent-amber"
								}), "What I Learned"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-soft font-light leading-relaxed",
								children: project.what_learned
							})
						]
					}),
					project.challenges && project.challenges.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold text-strong tracking-wide mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
								size: 16,
								className: "accent-rose"
							}), "Challenges Overcome"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: project.challenges.map((challenge, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hyper-glass rounded-xl p-4 border line-soft flex items-start gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-bold accent-rose mt-0.5",
									children: ["0", index + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-soft font-light",
									children: challenge
								})]
							}, index))
						})]
					}),
					project.results && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hyper-glass rounded-2xl p-6 border border-emerald-500/30 relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-lg font-bold text-strong mb-3 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
									size: 18,
									className: "accent-emerald"
								}), "Results"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-soft font-light leading-relaxed",
								children: project.results
							})
						]
					})
				]
			})]
		})
	});
}
//#endregion
export { ProjectDetail as t };
