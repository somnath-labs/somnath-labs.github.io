import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import Award from "../../../node_modules/lucide-react/dist/esm/icons/award.js";
import Calendar from "../../../node_modules/lucide-react/dist/esm/icons/calendar.js";
import Download from "../../../node_modules/lucide-react/dist/esm/icons/download.js";
import FileText from "../../../node_modules/lucide-react/dist/esm/icons/file-text.js";
import GraduationCap from "../../../node_modules/lucide-react/dist/esm/icons/graduation-cap.js";
import Mail from "../../../node_modules/lucide-react/dist/esm/icons/mail.js";
import MapPin from "../../../node_modules/lucide-react/dist/esm/icons/map-pin.js";
import User from "../../../node_modules/lucide-react/dist/esm/icons/user.js";
import Wrench from "../../../node_modules/lucide-react/dist/esm/icons/wrench.js";
import { getPublicAwards, getPublicCertifications, getPublicEducation, getPublicExperiences, getPublicProfile, getPublicProjects, getPublicSkills } from "../../lib/publicApi.js";
import { fallbackAwards, fallbackCertifications, fallbackEducation, fallbackProfile } from "../../pages/public/About.js";
import { cvSkills } from "../../pages/public/SkillsSection.js";
import { fallbackExperiences } from "../../pages/public/Experience.js";
import { fallbackProjects } from "../../pages/public/Projects.js";
import { pdf } from "../../../node_modules/@react-pdf/renderer/lib/react-pdf.browser.js";
import ResumePDF from "./ResumePDF.js";
//#region src/components/public/ResumeDisplay.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function ResumeDisplay() {
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [experiences, setExperiences] = (0, import_react.useState)([]);
	const [skills, setSkills] = (0, import_react.useState)([]);
	const [education, setEducation] = (0, import_react.useState)([]);
	const [certifications, setCertifications] = (0, import_react.useState)([]);
	const [awards, setAwards] = (0, import_react.useState)([]);
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [downloading, setDownloading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		loadResumeData();
	}, []);
	const loadResumeData = async () => {
		try {
			const [profileData, expData, skillsData, eduData, certData, awardData, projData] = await Promise.all([
				getPublicProfile(),
				getPublicExperiences(),
				getPublicSkills(),
				getPublicEducation(),
				getPublicCertifications(),
				getPublicAwards(),
				getPublicProjects()
			]);
			setProfile(profileData ?? fallbackProfile);
			setExperiences(expData.length > 0 ? expData : fallbackExperiences);
			setSkills(skillsData.length > 0 ? skillsData : cvSkills);
			setEducation(eduData.length > 0 ? eduData : fallbackEducation);
			setCertifications(certData.length > 0 ? certData : fallbackCertifications);
			setAwards(awardData.length > 0 ? awardData : fallbackAwards);
			setProjects(projData.length > 0 ? projData : fallbackProjects);
		} catch (error) {
			console.error("Error loading resume data:", error);
			setProfile(fallbackProfile);
			setExperiences(fallbackExperiences);
			setSkills(cvSkills);
			setEducation(fallbackEducation);
			setCertifications(fallbackCertifications);
			setAwards(fallbackAwards);
			setProjects(fallbackProjects);
		} finally {
			setLoading(false);
		}
	};
	const handleDownload = async () => {
		try {
			setDownloading(true);
			const blob = await pdf(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumePDF, {
				profile,
				experiences,
				skills,
				education,
				certifications,
				awards,
				projects
			})).toBlob();
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = `${(profile?.full_name || "Somnath Haldar").replace(/\s+/g, "-")}-Resume.pdf`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		} catch (error) {
			console.error("Error generating PDF:", error);
			alert("Sorry, the PDF could not be generated. Please try again.");
		} finally {
			setDownloading(false);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400" })
	});
	const primarySkills = skills.filter((s) => s.level === "primary");
	const secondarySkills = skills.filter((s) => s.level === "secondary");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-4xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-end mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleDownload,
				disabled: downloading,
				className: "neon-btn-primary rounded-xl! disabled:opacity-60 disabled:cursor-wait",
				children: downloading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-current" }), "Generating PDF..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 18 }), "Download PDF"] })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hyper-glass rounded-2xl p-8 border line-soft relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-600" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-8 border-b line-soft pb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center gap-4 mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile?.profile_image || "/avatar.png",
								alt: `${profile?.first_name || "Somnath"} ${profile?.last_name || "Haldar"}`,
								className: "w-20 h-20 rounded-full object-cover border-2 border-cyan-400/90 shadow-lg shadow-cyan-500/30"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "cyber-section-title text-3xl font-black tracking-tight mb-2",
							children: [
								profile?.first_name || "Somnath",
								" ",
								profile?.last_name || "Haldar"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base text-soft font-light mb-4",
							children: profile?.short_bio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap justify-center gap-4 text-sm text-faint",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									size: 14,
									className: "accent-cyan"
								}), profile?.email || "somnathhaldar14@gmail.com"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									size: 14,
									className: "accent-purple"
								}), "Stockholm, Sweden"]
							})]
						})
					]
				}),
				profile?.long_bio && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-lg font-bold text-strong mb-3 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
							size: 17,
							className: "accent-cyan"
						}), "Professional Summary"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-soft font-light leading-relaxed whitespace-pre-line",
						children: profile.long_bio
					})]
				}),
				experiences.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-lg font-bold text-strong mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							size: 17,
							className: "accent-purple"
						}), "Experience"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: experiences.map((exp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative pl-5 border-l-2 line-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between items-start flex-wrap gap-1 mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold text-strong",
										children: exp.role
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-faint flex items-center gap-1.5 font-mono",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
												size: 12,
												className: "accent-cyan"
											}),
											new Date(exp.start_date).toLocaleDateString(),
											" - ",
											exp.current ? "Present" : new Date(exp.end_date).toLocaleDateString()
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-soft font-light mb-2 text-sm",
									children: exp.description
								}),
								exp.technologies && exp.technologies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5",
									children: exp.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "cyber-chip text-[11px]! px-2.5! py-1!",
										children: tech
									}, tech))
								})
							]
						}, exp.id))
					})]
				}),
				(primarySkills.length > 0 || secondarySkills.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-lg font-bold text-strong mb-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, {
								size: 17,
								className: "accent-blue"
							}), "Skills"]
						}),
						primarySkills.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-semibold accent-cyan tracking-wider uppercase mb-2",
								children: "Primary Skills"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: primarySkills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 dark:from-purple-600/30 to-indigo-100 dark:to-indigo-600/20 border border-purple-200 dark:border-purple-500/40 text-purple-800 dark:text-purple-200",
									children: skill.name
								}, skill.id))
							})]
						}),
						secondarySkills.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold accent-cyan tracking-wider uppercase mb-2",
							children: "Secondary Skills"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: secondarySkills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 dark:from-blue-600/30 to-cyan-100 dark:to-cyan-600/20 border border-blue-200 dark:border-blue-500/40 text-blue-800 dark:text-blue-200",
								children: skill.name
							}, skill.id))
						})] })
					]
				}),
				education.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-lg font-bold text-strong mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
							size: 17,
							className: "accent-emerald"
						}), "Education"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: education.map((edu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative pl-5 border-l-2 line-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-base font-bold text-strong",
									children: [
										edu.degree,
										" in ",
										edu.field
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-soft font-light text-sm",
									children: edu.institution
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-faint flex items-center gap-1.5 mt-1 font-mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
											size: 12,
											className: "accent-cyan"
										}),
										new Date(edu.start_date).toLocaleDateString(),
										" - ",
										new Date(edu.end_date).toLocaleDateString()
									]
								})
							]
						}, edu.id))
					})]
				}),
				certifications.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-lg font-bold text-strong mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
						size: 17,
						className: "accent-amber"
					}), "Certifications"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: certifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative pl-5 border-l-2 line-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-bold text-strong",
								children: cert.certification
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-soft font-light text-sm",
								children: cert.organization
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-faint flex items-center gap-1.5 mt-1 font-mono",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
									size: 12,
									className: "accent-cyan"
								}), new Date(cert.issue_date).toLocaleDateString()]
							})
						]
					}, cert.id))
				})] })
			]
		})]
	});
}
//#endregion
export { ResumeDisplay as default };
