import { require_jsx_runtime } from "../../node_modules/react/jsx-runtime.js";
import About from "../pages/public/About.js";
import Experience from "../pages/public/Experience.js";
import Contact from "../pages/public/Contact.js";
import Projects from "../pages/public/Projects.js";
import Home from "../pages/public/Home.js";
import ProjectDetail from "../pages/public/ProjectDetail.js";
import Resume from "../pages/public/Resume.js";
//#region src/routes/publicRoutes.tsx
var import_jsx_runtime = require_jsx_runtime();
var publicRoutes = [
	{
		path: "/",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, {})
	},
	{
		path: "/about",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {})
	},
	{
		path: "/experience",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {})
	},
	{
		path: "/projects",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {})
	},
	{
		path: "/projects/:slug",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectDetail, {})
	},
	{
		path: "/resume",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resume, {})
	},
	{
		path: "/contact",
		element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	}
];
//#endregion
export { publicRoutes };
