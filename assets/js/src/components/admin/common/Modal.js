import { __toESM } from "../../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../../node_modules/react/jsx-runtime.js";
//#region src/components/admin/common/Modal.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
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
export { Modal as default };
