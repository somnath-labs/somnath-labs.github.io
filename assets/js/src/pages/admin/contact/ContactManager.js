import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import { createSocialLink, deleteSocialLink, getContactInfo, getSocialLinks, updateContactInfo, updateSocialLink } from "../../../lib/adminApi.js";
import FormField from "../../../components/admin/forms/FormField.js";
import ContactInfoForm from "../../../components/admin/forms/ContactInfoForm.js";
//#region src/pages/admin/contact/ContactManager.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
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
export { ContactManager as default };
