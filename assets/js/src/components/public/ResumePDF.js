import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { Document, Page, Text, View } from "../../../node_modules/@react-pdf/primitives/lib/index.js";
import { Font, StyleSheet } from "../../../node_modules/@react-pdf/renderer/lib/react-pdf.browser.js";
//#region src/components/public/ResumePDF.tsx
var import_jsx_runtime = require_jsx_runtime();
var baseUrl = "/";
Font.register({
	family: "PTSerif",
	fonts: [
		{
			src: `${baseUrl}fonts/ptserif-regular.ttf`,
			fontWeight: 400
		},
		{
			src: `${baseUrl}fonts/ptserif-bold.ttf`,
			fontWeight: 700
		},
		{
			src: `${baseUrl}fonts/ptserif-italic.ttf`,
			fontWeight: 400,
			fontStyle: "italic"
		},
		{
			src: `${baseUrl}fonts/ptserif-bolditalic.ttf`,
			fontWeight: 700,
			fontStyle: "italic"
		}
	]
});
var COMPANY_NAMES = {
	c1: "Capgemini Sverige AB",
	c2: "Cognizant Technology Solutions India Private Ltd",
	c3: "Capgemini Technology Services India Ltd."
};
var styles = StyleSheet.create({
	page: {
		backgroundColor: "#ffffff",
		fontFamily: "PTSerif",
		fontSize: 10.5,
		color: "#000000",
		lineHeight: 1.38,
		paddingTop: 36,
		paddingBottom: 32,
		paddingLeft: 45,
		paddingRight: 45
	},
	header: {
		alignItems: "center",
		marginBottom: 6
	},
	name: {
		fontSize: 22.5,
		fontWeight: 700
	},
	title: {
		fontSize: 15.5,
		fontStyle: "italic",
		marginTop: 3
	},
	contactLine: {
		fontSize: 10.5,
		marginTop: 10,
		textAlign: "center"
	},
	contactLine2: {
		fontSize: 10.5,
		marginTop: 2,
		textAlign: "center"
	},
	sectionTitle: {
		fontSize: 12,
		fontWeight: 700,
		textAlign: "center",
		marginTop: 18,
		marginBottom: 11
	},
	expBlock: { marginBottom: 11 },
	expTopRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "baseline"
	},
	expCompany: {
		fontSize: 11,
		fontWeight: 700
	},
	expDates: { fontSize: 10.5 },
	expBottomRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "baseline",
		marginTop: 1
	},
	expRole: {
		fontSize: 10.5,
		fontStyle: "italic"
	},
	expLocation: {
		fontSize: 10.5,
		fontStyle: "italic"
	},
	expDesc: {
		fontSize: 10.5,
		marginTop: 4,
		textAlign: "left"
	},
	skillsRow: {
		flexDirection: "row",
		width: "100%"
	},
	skillCol: { width: "33.33%" },
	skillItem: {
		fontSize: 10.5,
		marginBottom: 6
	},
	projBlock: { marginBottom: 10 },
	projName: {
		fontSize: 11,
		fontWeight: 700
	},
	projRole: {
		fontSize: 10.5,
		fontStyle: "italic",
		marginTop: 1,
		marginBottom: 3
	},
	projDesc: {
		fontSize: 10.5,
		textAlign: "left"
	},
	pocName: {
		fontSize: 11,
		fontWeight: 700,
		marginBottom: 3
	},
	bulletRow: {
		flexDirection: "row",
		marginBottom: 2
	},
	bulletDot: {
		width: 14,
		fontSize: 10.5
	},
	bulletText: {
		flex: 1,
		fontSize: 10.5
	},
	twoCol: {
		flexDirection: "row",
		width: "100%",
		marginTop: 16
	},
	leftCol: {
		width: "47%",
		paddingRight: 14
	},
	rightCol: {
		width: "53%",
		paddingLeft: 10
	},
	colHeader: {
		fontSize: 12,
		fontWeight: 700,
		textAlign: "center",
		marginBottom: 11,
		marginTop: 2
	},
	awardBlock: { marginBottom: 10 },
	awardTitle: {
		fontSize: 11,
		fontWeight: 700
	},
	awardOrg: {
		fontSize: 10.5,
		fontStyle: "italic",
		marginTop: 1
	},
	awardDate: {
		fontSize: 10.5,
		marginTop: 1
	},
	awardDesc: {
		fontSize: 10.5,
		marginTop: 2
	},
	certBlock: { marginBottom: 8 },
	eduBlock: { marginBottom: 10 },
	eduSchool: {
		fontSize: 11,
		fontWeight: 700
	},
	eduMeta: {
		fontSize: 10.5,
		marginTop: 1
	},
	langItem: {
		fontSize: 10.5,
		marginBottom: 5
	}
});
var fmtDate = (d) => {
	if (!d) return "";
	try {
		return new Date(d).toLocaleDateString("en-US", {
			month: "short",
			year: "numeric"
		});
	} catch {
		return d;
	}
};
var fullName = (p) => `${p?.first_name || "Somnath"} ${p?.last_name || "Haldar"}`.trim();
/** Split a block of text into paragraphs (on blank lines). */
var paragraphs = (text) => (text || "").split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
function ResumePDF({ profile, experiences, skills, education, certifications, awards, projects }) {
	const primarySkills = skills.filter((s) => s.level === "primary");
	const secondarySkills = skills.filter((s) => s.level === "secondary");
	const allSkills = [...primarySkills, ...secondarySkills].slice(0, 15);
	const colSize = Math.ceil(allSkills.length / 3);
	const skillCols = [
		allSkills.slice(0, colSize),
		allSkills.slice(colSize, colSize * 2),
		allSkills.slice(colSize * 2)
	];
	const clientProjects = projects.filter((p) => p.category === "client_served");
	const pocProjects = projects.filter((p) => p.category === "poc" || p.category === "component");
	const email = profile?.email || "somnathhaldar14@gmail.com";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Document, {
		title: `${fullName(profile)} - Resume`,
		author: fullName(profile),
		subject: "Professional Resume",
		creator: "Portfolio",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, {
			size: "A4",
			style: styles.page,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: styles.header,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: styles.name,
							children: fullName(profile)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: styles.title,
							children: "Applications Consultant"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
							style: styles.contactLine,
							children: [email, " \xA0|\xA0 +46 703314437 \xA0|\xA0 Stockholm, Sweden"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: styles.contactLine2,
							children: "06 Feb 2000 \xA0|\xA0 Male"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: styles.contactLine2,
							children: "linkedin.com/in/somnath-haldar-43Oa3b151 \xA0|\xA0 Pega PDN - somnath.a.haldar@capgemini.com"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
					style: styles.sectionTitle,
					children: "PROFESSIONAL EXPERIENCE"
				}),
				experiences.map((exp) => {
					const company = COMPANY_NAMES[exp.company_id] || exp.role;
					const role = exp.company_id && COMPANY_NAMES[exp.company_id] ? exp.role : null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: styles.expBlock,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: styles.expTopRow,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: styles.expCompany,
									children: company
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
									style: styles.expDates,
									children: [
										fmtDate(exp.start_date),
										" – ",
										exp.current ? "Present" : fmtDate(exp.end_date || "")
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: styles.expBottomRow,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: styles.expRole,
									children: role || exp.location
								}), role ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: styles.expLocation,
									children: exp.location
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: styles.expDesc,
								children: exp.description
							})
						]
					}, exp.id);
				}),
				allSkills.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
					style: styles.sectionTitle,
					children: "SKILLS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("VIEW", {
					style: styles.skillsRow,
					children: skillCols.map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("VIEW", {
						style: styles.skillCol,
						children: col.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
							style: styles.skillItem,
							children: skill.name
						}, skill.id))
					}, i))
				})] }),
				clientProjects.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
					style: styles.sectionTitle,
					children: "PROJECTS"
				}), clientProjects.map((proj) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("VIEW", {
					style: styles.projBlock,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
							style: styles.projName,
							children: proj.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
							style: styles.projRole,
							children: proj.my_role
						}),
						paragraphs(proj.solution || proj.description).map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
							style: styles.projDesc,
							children: para
						}, i))
					]
				}, proj.id))] }),
				pocProjects.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
					style: styles.sectionTitle,
					children: "POC'S & COMPONENTS"
				}), pocProjects.map((proj) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("VIEW", {
					style: styles.projBlock,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
						style: styles.pocName,
						children: proj.name
					}), paragraphs(proj.solution || proj.description).map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("VIEW", {
						style: styles.bulletRow,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
							style: styles.bulletDot,
							children: "•"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
							style: styles.bulletText,
							children: para
						})]
					}, i))]
				}, proj.id))] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
					style: styles.twoCol,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: styles.leftCol,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: styles.colHeader,
							children: "AWARDS"
						}), awards.map((award) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
							style: styles.awardBlock,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: styles.awardTitle,
									children: award.award
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: styles.awardOrg,
									children: award.organization
								}),
								award.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
									style: styles.awardDate,
									children: fmtDate(award.date)
								}),
								award.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("TEXT", {
									style: styles.awardDesc,
									children: award.description
								})
							]
						}, award.id))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
						style: styles.rightCol,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: styles.colHeader,
								children: "CERTIFICATES"
							}),
							certifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {
								style: styles.certBlock,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
									style: styles.awardTitle,
									children: cert.certification
								})
							}, cert.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: [styles.colHeader, { marginTop: 16 }],
								children: "EDUCATION"
							}),
							education.map((edu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(View, {
								style: styles.eduBlock,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
										style: styles.eduSchool,
										children: edu.institution
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
										style: styles.eduMeta,
										children: [
											edu.degree,
											" (",
											edu.field,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
										style: styles.eduMeta,
										children: [
											fmtDate(edu.start_date),
											" – ",
											fmtDate(edu.end_date),
											" \xA0|\xA0 ",
											edu.location
										]
									})
								]
							}, edu.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: [styles.colHeader, { marginTop: 16 }],
								children: "LANGUAGES"
							}),
							[
								"Bengali",
								"English",
								"Hindi"
							].map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
								style: styles.langItem,
								children: lang
							}, lang))
						]
					})]
				})
			]
		})
	});
}
//#endregion
export { ResumePDF as default };
