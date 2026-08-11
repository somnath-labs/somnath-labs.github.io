import { A as require_jsx_runtime } from "./component-agenticaisection.js";
//#region src/components/public/AiLoader.tsx
var import_jsx_runtime = require_jsx_runtime();
function AiLoader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[100dvh] flex flex-col items-center justify-center bg-[#06070b] z-[100]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .ai-core-react {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ai-ring-outer-react {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #0891b2;
          border-bottom-color: #9333ea;
          animation: spin 2s linear infinite;
          box-shadow: 0 0 20px rgba(8, 145, 178, 0.4);
        }
        .ai-ring-inner-react {
          position: absolute;
          inset: 12px;
          border-radius: 50%;
          border: 2px dashed #0284c7;
          animation: spin-reverse 3s linear infinite;
        }
        .ai-core-dot-react {
          width: 16px;
          height: 16px;
          background: #0891b2;
          border-radius: 50%;
          box-shadow: 0 0 15px #0891b2, 0 0 30px #0891b2;
          animation: pulse 1.5s ease-in-out infinite alternate;
        }
        .ai-text-react {
          margin-top: 30px;
          font-size: 14px;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: 600;
          background: linear-gradient(90deg, #0891b2, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: pulse-text 2s ease-in-out infinite;
        }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ai-core-react",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ai-ring-outer-react" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ai-ring-inner-react" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ai-core-dot-react" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ai-text-react",
				children: "Loading Module..."
			})
		]
	});
}
//#endregion
export { AiLoader as t };
