import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import "../../../lib/supabase.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
import Clock from "../../../../node_modules/lucide-react/dist/esm/icons/clock.js";
import Mail from "../../../../node_modules/lucide-react/dist/esm/icons/mail.js";
import Trash2 from "../../../../node_modules/lucide-react/dist/esm/icons/trash-2.js";
import { getAll } from "../../../lib/adminApi.js";
//#region src/pages/admin/communication/MessageManager.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
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
export { MessageManager as default };
