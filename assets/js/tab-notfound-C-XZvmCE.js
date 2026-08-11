import { $ as require_jsx_runtime, A as createLucideIcon, tt as Link } from "./tab-about-C7I1RF7V.js";
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var House = createLucideIcon("house", [["path", {
	d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
	key: "5wwlr5"
}], ["path", {
	d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
	key: "r6nss1"
}]]);
//#endregion
//#region src/pages/public/NotFound.tsx
var import_jsx_runtime = require_jsx_runtime();
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-lg mx-auto text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative inline-flex mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-gradient-to-r from-purple-600/30 via-cyan-500/25 to-blue-600/30 rounded-3xl blur-2xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative hyper-glass rounded-3xl px-10 py-8 border border-purple-500/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-6xl font-black cyber-section-title",
							children: "404"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-mono text-xs accent-cyan",
							children: "// error: page_not_found"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "cyber-section-title text-3xl font-black mb-3",
					children: "Page Not Found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-soft font-light mb-8",
					children: "The page you're looking for doesn't exist or has been moved to a new address."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "neon-btn-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { size: 16 }), "Back to Home"]
				})
			]
		})
	});
}
//#endregion
export { House as n, NotFound as t };
