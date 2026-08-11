import { __toESM } from "../../../_virtual/_rolldown/runtime.js";
import { require_react } from "../../../node_modules/react/index.js";
import { require_jsx_runtime } from "../../../node_modules/react/jsx-runtime.js";
import { motion } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
//#region src/components/public/CyberBackground.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var PARTICLES = Array.from({ length: 32 }, (_, i) => ({
	x: (i * 37 + 11) % 100,
	y: (i * 53 + 7) % 100,
	size: (i * 13 + 3) % 4 + 2,
	delay: i * .4 % 7,
	dur: 6 + i % 5,
	opacity: .15 + i % 5 * .07
}));
/**
* Global animated cyberpunk background:
* - drifting aurora gradient blobs (CSS)
* - subtle blueprint grid (CSS)
* - live canvas particle network (connections light up)
*/
function CyberBackground() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let width = 0;
		let height = 0;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		let particles = [];
		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const count = Math.min(90, Math.floor(width * height / 22e3));
			particles = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - .5) * .35,
				vy: (Math.random() - .5) * .35,
				r: Math.random() * 1.6 + .6,
				hue: Math.random() > .5 ? "#22d3ee" : "#a78bfa"
			}));
		};
		const linkDistance = 130;
		const draw = () => {
			ctx.clearRect(0, 0, width, height);
			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < -20) p.x = width + 20;
				if (p.x > width + 20) p.x = -20;
				if (p.y < -20) p.y = height + 20;
				if (p.y > height + 20) p.y = -20;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fillStyle = p.hue;
				ctx.globalAlpha = .5;
				ctx.fill();
			}
			ctx.globalAlpha = .14;
			ctx.lineWidth = 1;
			for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
				const a = particles[i];
				const b = particles[j];
				const dx = a.x - b.x;
				const dy = a.y - b.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < linkDistance) {
					const t = 1 - dist / linkDistance;
					ctx.strokeStyle = `rgba(129, 140, 248, ${t * .55})`;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(b.x, b.y);
					ctx.stroke();
				}
			}
			ctx.globalAlpha = 1;
			raf = requestAnimationFrame(draw);
		};
		resize();
		draw();
		window.addEventListener("resize", resize);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-0 pointer-events-none overflow-hidden",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-[130px] animate-aurora-a",
				style: { background: "color-mix(in srgb, var(--acc-purple) 26%, transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/3 -right-32 w-[620px] h-[620px] rounded-full blur-[150px] animate-aurora-b",
				style: { background: "color-mix(in srgb, var(--acc-cyan) 22%, transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-1/4 w-[560px] h-[560px] rounded-full blur-[140px] animate-aurora-c",
				style: { background: "color-mix(in srgb, var(--acc-blue) 20%, transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 cyber-grid" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "absolute inset-0",
				style: { opacity: "var(--particle-opacity)" }
			}),
			PARTICLES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute rounded-full",
				style: {
					left: `${p.x}%`,
					top: `${p.y}%`,
					width: p.size,
					height: p.size,
					background: i % 3 === 0 ? "var(--acc-purple)" : i % 3 === 1 ? "var(--acc-cyan)" : "var(--acc-pink)",
					opacity: p.opacity
				},
				animate: {
					y: [
						0,
						-28,
						0
					],
					opacity: [
						p.opacity,
						p.opacity * 2.2,
						p.opacity
					]
				},
				transition: {
					duration: p.dur,
					delay: p.delay,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-0.5 h-24 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-star-1 opacity-0 top-[8%] left-[20%] rotate-45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-0.5 h-16 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-star-2 opacity-0 top-[30%] left-[60%] rotate-45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-0.5 h-20 bg-gradient-to-b from-transparent via-pink-400/40 to-transparent animate-star-3 opacity-0 top-[55%] left-[40%] rotate-45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(ellipse 120% 90% at 50% 40%, transparent 55%, color-mix(in srgb, var(--bg-bottom) 55%, transparent) 100%)" }
			})
		]
	});
}
//#endregion
export { CyberBackground as default };
