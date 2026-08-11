import { __toESM } from "../_virtual/_rolldown/runtime.js";
import { require_react } from "../node_modules/react/index.js";
import { require_client } from "../node_modules/react-dom/client.js";
/* empty css      */
import { require_jsx_runtime } from "../node_modules/react/jsx-runtime.js";
import App from "./App.js";
//#region src/main.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = require_client();
var import_jsx_runtime = require_jsx_runtime();
var storedTheme = localStorage.getItem("theme");
var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (storedTheme === "dark" || !storedTheme && prefersDark) document.documentElement.classList.add("dark");
else document.documentElement.classList.remove("dark");
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) }));
//#endregion
