import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import ArrowUpRight from "../../../node_modules/lucide-react/dist/esm/icons/arrow-up-right.js";
import Clock from "../../../node_modules/lucide-react/dist/esm/icons/clock.js";
import Globe from "../../../node_modules/lucide-react/dist/esm/icons/globe.js";
import Mail from "../../../node_modules/lucide-react/dist/esm/icons/mail.js";
import MapPin from "../../../node_modules/lucide-react/dist/esm/icons/map-pin.js";
import MessageSquare from "../../../node_modules/lucide-react/dist/esm/icons/message-square.js";
import Sparkles from "../../../node_modules/lucide-react/dist/esm/icons/sparkles.js";
import { getPublicContactInfo, getPublicSocialLinks } from "../../lib/publicApi.js";
import ContactForm from "../../components/public/ContactForm.js";
//#region src/pages/public/Contact.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var GitHubIcon = ({ size = 20 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "currentColor",
	className: "shrink-0",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
});
var LinkedInIcon = ({ size = 20 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "currentColor",
	className: "shrink-0",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
});
var fallbackContactInfo = {
	id: "fallback-contact",
	heading: "Let's Build Something Great",
	subtitle: "Have a question, opportunity, or just want to say hello? I'd love to hear from you — let's start a conversation.",
	email: "somnathhaldar14@gmail.com",
	phone: "+46 70 000 00 00",
	location: "Stockholm, Sweden",
	availability: "Open to opportunities",
	response_time: "I typically respond within 24-48 hours. For urgent opportunities, mention it in your message and I'll prioritize it.",
	show_on_website: true,
	created_at: "",
	updated_at: ""
};
var fallbackSocialLinks = [{
	id: "s-github",
	platform: "GitHub",
	url: "https://github.com/somnath-labs",
	username: "",
	show_on_website: true,
	order: 1,
	created_at: "",
	updated_at: ""
}, {
	id: "s-linkedin",
	platform: "LinkedIn",
	url: "https://www.linkedin.com/in/somnath-haldar-430a3b151/",
	username: "",
	show_on_website: true,
	order: 2,
	created_at: "",
	updated_at: ""
}];
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .55,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function socialIcon(platform, size = 20) {
	const p = platform.toLowerCase();
	if (p.includes("github")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubIcon, { size });
	if (p.includes("linkedin")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInIcon, { size });
	if (p.includes("mail") || p.includes("email")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { size });
}
function Contact() {
	const [contact, setContact] = (0, import_react.useState)(null);
	const [socialLinks, setSocialLinks] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		loadContact();
	}, []);
	const loadContact = async () => {
		try {
			const [info, links] = await Promise.all([getPublicContactInfo(), getPublicSocialLinks()]);
			setContact(info ?? fallbackContactInfo);
			setSocialLinks(links.length > 0 ? links : fallbackSocialLinks);
		} catch {
			setContact(fallbackContactInfo);
			setSocialLinks(fallbackSocialLinks);
		}
	};
	const info = contact ?? fallbackContactInfo;
	const socials = socialLinks.length > 0 ? socialLinks : fallbackSocialLinks;
	const contactRows = [
		{
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }),
			label: "Email",
			value: info.email,
			href: `mailto:${info.email}`,
			accent: "accent-cyan",
			gradient: "from-cyan-500/30 to-sky-500/10"
		},
		{
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }),
			label: "Location",
			value: info.location,
			href: null,
			accent: "accent-emerald",
			gradient: "from-emerald-500/30 to-teal-500/10"
		},
		{
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 18 }),
			label: "Availability",
			value: info.availability,
			href: null,
			accent: "accent-amber",
			gradient: "from-amber-500/30 to-orange-500/10"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative pb-24 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto pt-10 lg:pt-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: "hidden",
				animate: "show",
				variants: fadeUp,
				className: "text-center mb-12 lg:mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-cyan-500/30 text-xs font-medium accent-cyan mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "w-3.5 h-3.5" }), "Get In Touch"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "cyber-section-title text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5",
						children: info.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base sm:text-lg text-soft font-light max-w-2xl mx-auto",
						children: info.subtitle
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: "hidden",
							animate: "show",
							variants: fadeUp,
							transition: { delay: .1 },
							className: "hyper-glass rounded-3xl p-6 sm:p-7 border border-purple-500/30 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex-shrink-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute inset-0 rounded-full animate-spin-ring opacity-50",
												style: { border: "2px dashed var(--acc-cyan)" }
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/avatar.png",
												alt: "Somnath Haldar",
												className: "w-20 h-20 rounded-full object-cover border-2 shadow-lg animate-glow-ring",
												style: { borderColor: "var(--acc-cyan)" }
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute bottom-0.5 right-0.5 w-5 h-5 rounded-full bg-emerald-400 border-2 shadow-md",
												style: { borderColor: "var(--bg-top)" }
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-xl font-black text-strong tracking-tight",
												children: "Somnath Haldar"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold neon-subtitle-gradient mt-0.5",
												children: "Pega Developer • AI Builder"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full surface-soft border line-soft text-[10px] font-semibold accent-emerald",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" }), info.availability]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 mt-5 pt-5 border-t line-soft",
									children: [
										"Full-time",
										"Contract",
										"Freelance",
										"Remote"
									].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "cyber-chip text-[11px]! px-2.5! py-1!",
										children: chip
									}, chip))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: "hidden",
							animate: "show",
							variants: fadeUp,
							transition: { delay: .18 },
							className: "hyper-glass rounded-3xl p-6 sm:p-7 border border-cyan-500/30 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-bold text-strong tracking-wide mb-5 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 accent-cyan" }), " Contact Info"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-4",
									children: contactRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3.5 group",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `p-2.5 rounded-xl bg-gradient-to-br ${row.gradient} border border-white/10 flex-shrink-0`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: row.accent,
												children: row.icon
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] font-semibold text-faint uppercase tracking-wider",
												children: row.label
											}), row.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: row.href,
												className: "text-sm font-medium text-soft hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 truncate",
												children: [row.value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
													size: 12,
													className: "opacity-0 group-hover:opacity-100 transition-opacity"
												})]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-medium text-strong truncate",
												children: row.value
											})]
										})]
									}, row.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 pt-4 border-t line-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-faint font-light leading-relaxed flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
											size: 13,
											className: "accent-cyan flex-shrink-0 mt-0.5"
										}), info.response_time]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: "hidden",
							animate: "show",
							variants: fadeUp,
							transition: { delay: .26 },
							className: "hyper-glass rounded-3xl p-6 sm:p-7 border border-emerald-500/30 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-bold text-strong tracking-wide mb-5 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 accent-emerald" }), " Find Me Online"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
									children: socials.filter((s) => s.show_on_website).map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: social.url,
										target: social.url.startsWith("http") ? "_blank" : void 0,
										rel: social.url.startsWith("http") ? "noopener noreferrer" : void 0,
										className: `flex flex-col items-center gap-2 p-3.5 rounded-2xl surface-soft border line-soft text-soft hover:text-strong hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300`,
										children: [socialIcon(social.platform), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-semibold",
											children: social.platform
										})]
									}, social.id))
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					animate: "show",
					variants: fadeUp,
					transition: { delay: .2 },
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {
						emailAddress: info.email,
						linkedInUrl: socials.find((s) => s.platform.toLowerCase().includes("linkedin"))?.url && socials.find((s) => s.platform.toLowerCase().includes("linkedin"))?.url !== "https://linkedin.com" ? socials.find((s) => s.platform.toLowerCase().includes("linkedin"))?.url : "https://www.linkedin.com/in/somnath-haldar-430a3b151/"
					})
				})]
			})]
		})
	});
}
//#endregion
export { Contact as default, fallbackContactInfo, fallbackSocialLinks };
