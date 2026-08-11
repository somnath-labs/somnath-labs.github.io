import { r as __toESM } from "./rolldown-runtime-DC62tzP2.js";
import { $ as require_jsx_runtime, A as createLucideIcon, B as supportsViewTimeline, D as Bot, F as microtask, G as frameData, H as interpolate, I as isHTMLElement, J as noop, K as velocityPerSecond, L as collectMotionValues, M as MotionConfigContext, N as resize, P as cancelMicrotask, Q as useConstant, R as motionValue, S as Layers, T as Cloud, U as cancelFrame, V as defaultOffset$1, W as frame, X as clamp, Y as invariant, Z as useIsomorphicLayoutEffect, a as fallbackLanguages, ct as require_react, i as fallbackEducation, j as motion, k as ArrowRight, m as getPublicSkills, n as fallbackAwards, o as fallbackProfile, q as progress, r as fallbackCertifications, t as About, tt as Link, w as Cpu, y as Sparkles, z as supportsScrollTimeline } from "./tab-about-C7I1RF7V.js";
import { a as Globe, i as MessageSquare, n as fallbackContactInfo, r as fallbackSocialLinks, t as Contact } from "./tab-contact-BMS7bVZw.js";
import { n as fallbackExperiences, t as Experience } from "./tab-experience-p5XJdvQs.js";
//#region node_modules/motion-dom/dist/es/scroll/observe.mjs
function observeTimeline(update, timeline) {
	let prevProgress;
	const onFrame = () => {
		const { currentTime } = timeline;
		const progress = (currentTime === null ? 0 : currentTime.value) / 100;
		if (prevProgress !== progress) update(progress);
		prevProgress = progress;
	};
	frame.preUpdate(onFrame, true);
	return () => cancelFrame(onFrame);
}
//#endregion
//#region node_modules/motion-dom/dist/es/utils/transform.mjs
function transform(...args) {
	const useImmediate = !Array.isArray(args[0]);
	const argOffset = useImmediate ? 0 : -1;
	const inputValue = args[0 + argOffset];
	const inputRange = args[1 + argOffset];
	const outputRange = args[2 + argOffset];
	const options = args[3 + argOffset];
	const interpolator = interpolate(inputRange, outputRange, options);
	return useImmediate ? interpolator(inputValue) : interpolator;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function canUseNativeTimeline(target) {
	if (typeof window === "undefined") return false;
	return target ? supportsViewTimeline() : supportsScrollTimeline();
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs
/**
* A time in milliseconds, beyond which we consider the scroll velocity to be 0.
*/
var maxElapsed = 50;
var createAxisInfo = () => ({
	current: 0,
	offset: [],
	progress: 0,
	scrollLength: 0,
	targetOffset: 0,
	targetLength: 0,
	containerLength: 0,
	velocity: 0
});
var createScrollInfo = () => ({
	time: 0,
	x: createAxisInfo(),
	y: createAxisInfo()
});
var keys = {
	x: {
		length: "Width",
		position: "Left"
	},
	y: {
		length: "Height",
		position: "Top"
	}
};
function updateAxisInfo(element, axisName, info, time) {
	const axis = info[axisName];
	const { length, position } = keys[axisName];
	const prev = axis.current;
	const prevTime = info.time;
	axis.current = Math.abs(element[`scroll${position}`]);
	axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
	axis.offset.length = 0;
	axis.offset[0] = 0;
	axis.offset[1] = axis.scrollLength;
	axis.progress = progress(0, axis.scrollLength, axis.current);
	const elapsed = time - prevTime;
	axis.velocity = elapsed > maxElapsed ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
	updateAxisInfo(element, "x", info, time);
	updateAxisInfo(element, "y", info, time);
	info.time = time;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function calcInset(element, container) {
	const inset = {
		x: 0,
		y: 0
	};
	let current = element;
	while (current && current !== container) if (isHTMLElement(current)) {
		inset.x += current.offsetLeft;
		inset.y += current.offsetTop;
		current = current.offsetParent;
	} else if (current.tagName === "svg") {
		/**
		* This isn't an ideal approach to measuring the offset of <svg /> tags.
		* It would be preferable, given they behave like HTMLElements in most ways
		* to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
		* can't use .getBBox() like most SVG elements as these provide the offset
		* relative to the SVG itself, which for <svg /> is usually 0x0.
		*/
		const svgBoundingBox = current.getBoundingClientRect();
		current = current.parentElement;
		const parentBoundingBox = current.getBoundingClientRect();
		inset.x += svgBoundingBox.left - parentBoundingBox.left;
		inset.y += svgBoundingBox.top - parentBoundingBox.top;
	} else if (current instanceof SVGGraphicsElement) {
		const { x, y } = current.getBBox();
		inset.x += x;
		inset.y += y;
		let svg = null;
		let parent = current.parentNode;
		while (!svg) {
			if (parent.tagName === "svg") svg = parent;
			parent = current.parentNode;
		}
		current = svg;
	} else break;
	return inset;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var namedEdges = {
	start: 0,
	center: .5,
	end: 1
};
function resolveEdge(edge, length, inset = 0) {
	let delta = 0;
	/**
	* If we have this edge defined as a preset, replace the definition
	* with the numerical value.
	*/
	if (edge in namedEdges) edge = namedEdges[edge];
	/**
	* Handle unit values
	*/
	if (typeof edge === "string") {
		const asNumber = parseFloat(edge);
		if (edge.endsWith("px")) delta = asNumber;
		else if (edge.endsWith("%")) edge = asNumber / 100;
		else if (edge.endsWith("vw")) delta = asNumber / 100 * document.documentElement.clientWidth;
		else if (edge.endsWith("vh")) delta = asNumber / 100 * document.documentElement.clientHeight;
		else edge = asNumber;
	}
	/**
	* If the edge is defined as a number, handle as a progress value.
	*/
	if (typeof edge === "number") delta = length * edge;
	return inset + delta;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
	let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
	let targetPoint = 0;
	let containerPoint = 0;
	if (typeof offset === "number")
 /**
	* If we're provided offset: [0, 0.5, 1] then each number x should become
	* [x, x], so we default to the behaviour of mapping 0 => 0 of both target
	* and container etc.
	*/
	offsetDefinition = [offset, offset];
	else if (typeof offset === "string") {
		offset = offset.trim();
		if (offset.includes(" ")) offsetDefinition = offset.split(" ");
		else
 /**
		* If we're provided a definition like "100px" then we want to apply
		* that only to the top of the target point, leaving the container at 0.
		* Whereas a named offset like "end" should be applied to both.
		*/
		offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
	}
	targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
	containerPoint = resolveEdge(offsetDefinition[1], containerLength);
	return targetPoint - containerPoint;
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var ScrollOffset = {
	Enter: [[0, 1], [1, 1]],
	Exit: [[0, 0], [1, 0]],
	Any: [[1, 0], [0, 1]],
	All: [[0, 0], [1, 1]]
};
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
var point = {
	x: 0,
	y: 0
};
function getTargetSize(target) {
	return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
		width: target.clientWidth,
		height: target.clientHeight
	};
}
function resolveOffsets(container, info, options) {
	const { offset: offsetDefinition = ScrollOffset.All } = options;
	const { target = container, axis = "y" } = options;
	const lengthLabel = axis === "y" ? "height" : "width";
	const inset = target !== container ? calcInset(target, container) : point;
	/**
	* Measure the target and container. If they're the same thing then we
	* use the container's scrollWidth/Height as the target, from there
	* all other calculations can remain the same.
	*/
	const targetSize = target === container ? {
		width: container.scrollWidth,
		height: container.scrollHeight
	} : getTargetSize(target);
	const containerSize = {
		width: container.clientWidth,
		height: container.clientHeight
	};
	/**
	* Reset the length of the resolved offset array rather than creating a new one.
	* TODO: More reusable data structures for targetSize/containerSize would also be good.
	*/
	info[axis].offset.length = 0;
	/**
	* Populate the offset array by resolving the user's offset definition into
	* a list of pixel scroll offets.
	*/
	let hasChanged = !info[axis].interpolate;
	const numOffsets = offsetDefinition.length;
	for (let i = 0; i < numOffsets; i++) {
		const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
		if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) hasChanged = true;
		info[axis].offset[i] = offset;
	}
	/**
	* If the pixel scroll offsets have changed, create a new interpolator function
	* to map scroll value into a progress.
	*/
	if (hasChanged) {
		info[axis].interpolate = interpolate(info[axis].offset, defaultOffset$1(offsetDefinition), { clamp: false });
		info[axis].interpolatorOffsets = [...info[axis].offset];
	}
	info[axis].progress = clamp(0, 1, info[axis].interpolate(info[axis].current));
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs
function measure(container, target = container, info) {
	/**
	* Find inset of target within scrollable container
	*/
	info.x.targetOffset = 0;
	info.y.targetOffset = 0;
	if (target !== container) {
		let node = target;
		while (node && node !== container) {
			info.x.targetOffset += node.offsetLeft;
			info.y.targetOffset += node.offsetTop;
			node = node.offsetParent;
		}
	}
	info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
	info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
	info.x.containerLength = container.clientWidth;
	info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
	return {
		measure: (time) => {
			measure(element, options.target, info);
			updateScrollInfo(element, info, time);
			if (options.offset || options.target) resolveOffsets(element, info, options);
		},
		notify: () => onScroll(info)
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var scrollListeners = /* @__PURE__ */ new WeakMap();
var resizeListeners = /* @__PURE__ */ new WeakMap();
var onScrollHandlers = /* @__PURE__ */ new WeakMap();
var scrollSize = /* @__PURE__ */ new WeakMap();
var dimensionCheckProcesses = /* @__PURE__ */ new WeakMap();
var getEventTarget = (element) => element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
	if (!container) return noop;
	let containerHandlers = onScrollHandlers.get(container);
	/**
	* Get the onScroll handlers for this container.
	* If one isn't found, create a new one.
	*/
	if (!containerHandlers) {
		containerHandlers = /* @__PURE__ */ new Set();
		onScrollHandlers.set(container, containerHandlers);
	}
	const containerHandler = createOnScrollHandler(container, onScroll, createScrollInfo(), options);
	containerHandlers.add(containerHandler);
	/**
	* Check if there's a scroll event listener for this container.
	* If not, create one.
	*/
	if (!scrollListeners.has(container)) {
		const measureAll = () => {
			for (const handler of containerHandlers) handler.measure(frameData.timestamp);
			frame.preUpdate(notifyAll);
		};
		const notifyAll = () => {
			for (const handler of containerHandlers) handler.notify();
		};
		const listener = () => frame.read(measureAll);
		scrollListeners.set(container, listener);
		const target = getEventTarget(container);
		window.addEventListener("resize", listener);
		if (container !== document.documentElement) resizeListeners.set(container, resize(container, listener));
		target.addEventListener("scroll", listener);
		listener();
	}
	/**
	* Enable content size tracking if requested and not already enabled.
	*/
	if (trackContentSize && !dimensionCheckProcesses.has(container)) {
		const listener = scrollListeners.get(container);
		const size = {
			width: container.scrollWidth,
			height: container.scrollHeight
		};
		scrollSize.set(container, size);
		const checkScrollDimensions = () => {
			const newWidth = container.scrollWidth;
			const newHeight = container.scrollHeight;
			if (size.width !== newWidth || size.height !== newHeight) {
				listener();
				size.width = newWidth;
				size.height = newHeight;
			}
		};
		const dimensionCheckProcess = frame.read(checkScrollDimensions, true);
		dimensionCheckProcesses.set(container, dimensionCheckProcess);
	}
	const listener = scrollListeners.get(container);
	frame.read(listener, false, true);
	return () => {
		cancelFrame(listener);
		/**
		* Check if we even have any handlers for this container.
		*/
		const currentHandlers = onScrollHandlers.get(container);
		if (!currentHandlers) return;
		currentHandlers.delete(containerHandler);
		if (currentHandlers.size) return;
		/**
		* If no more handlers, remove the scroll listener too.
		*/
		const scrollListener = scrollListeners.get(container);
		scrollListeners.delete(container);
		if (scrollListener) {
			getEventTarget(container).removeEventListener("scroll", scrollListener);
			resizeListeners.get(container)?.();
			window.removeEventListener("resize", scrollListener);
		}
		const dimensionCheckProcess = dimensionCheckProcesses.get(container);
		if (dimensionCheckProcess) {
			cancelFrame(dimensionCheckProcess);
			dimensionCheckProcesses.delete(container);
		}
		scrollSize.delete(container);
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs
/**
* Maps from ProgressIntersection pairs used by Motion's preset offsets to
* ViewTimeline named ranges. Returns undefined for unrecognised patterns,
* which signals the caller to fall back to JS-based scroll tracking.
*/
var presets = [
	[ScrollOffset.Enter, "entry"],
	[ScrollOffset.Exit, "exit"],
	[ScrollOffset.Any, "cover"],
	[ScrollOffset.All, "contain"]
];
var stringToProgress = {
	start: 0,
	end: 1
};
function parseStringOffset(s) {
	const parts = s.trim().split(/\s+/);
	if (parts.length !== 2) return void 0;
	const a = stringToProgress[parts[0]];
	const b = stringToProgress[parts[1]];
	if (a === void 0 || b === void 0) return void 0;
	return [a, b];
}
function normaliseOffset(offset) {
	if (offset.length !== 2) return void 0;
	const result = [];
	for (const item of offset) if (Array.isArray(item)) result.push(item);
	else if (typeof item === "string") {
		const parsed = parseStringOffset(item);
		if (!parsed) return void 0;
		result.push(parsed);
	} else return;
	return result;
}
function matchesPreset(offset, preset) {
	const normalised = normaliseOffset(offset);
	if (!normalised) return false;
	for (let i = 0; i < 2; i++) {
		const o = normalised[i];
		const p = preset[i];
		if (o[0] !== p[0] || o[1] !== p[1]) return false;
	}
	return true;
}
function offsetToViewTimelineRange(offset) {
	if (!offset) return {
		rangeStart: "contain 0%",
		rangeEnd: "contain 100%"
	};
	for (const [preset, name] of presets) if (matchesPreset(offset, preset)) return {
		rangeStart: `${name} 0%`,
		rangeEnd: `${name} 100%`
	};
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs
var timelineCache = /* @__PURE__ */ new Map();
function scrollTimelineFallback(options) {
	const currentTime = { value: 0 };
	return {
		currentTime,
		cancel: scrollInfo((info) => {
			currentTime.value = info[options.axis].progress * 100;
		}, options)
	};
}
function getTimeline({ source, container, ...options }) {
	const { axis } = options;
	if (source) container = source;
	let containerCache = timelineCache.get(container);
	if (!containerCache) {
		containerCache = /* @__PURE__ */ new Map();
		timelineCache.set(container, containerCache);
	}
	const targetKey = options.target ?? "self";
	let targetCache = containerCache.get(targetKey);
	if (!targetCache) {
		targetCache = {};
		containerCache.set(targetKey, targetCache);
	}
	const axisKey = axis + (options.offset ?? []).join(",");
	if (!targetCache[axisKey]) {
		if (options.target && canUseNativeTimeline(options.target)) {
			if (offsetToViewTimelineRange(options.offset)) targetCache[axisKey] = new ViewTimeline({
				subject: options.target,
				axis
			});
			else targetCache[axisKey] = scrollTimelineFallback({
				container,
				...options
			});
		} else if (canUseNativeTimeline()) targetCache[axisKey] = new ScrollTimeline({
			source: container,
			axis
		});
		else targetCache[axisKey] = scrollTimelineFallback({
			container,
			...options
		});
	}
	return targetCache[axisKey];
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs
function attachToAnimation(animation, options) {
	const timeline = getTimeline(options);
	const range = options.target ? offsetToViewTimelineRange(options.offset) : void 0;
	/**
	* Use native timeline when:
	* - No target: ScrollTimeline (existing behaviour)
	* - Target with mappable offset: ViewTimeline with named range
	* - Target with unmappable offset: fall back to JS observe
	*/
	const useNative = options.target ? canUseNativeTimeline(options.target) && !!range : canUseNativeTimeline();
	return animation.attachTimeline({
		timeline: useNative ? timeline : void 0,
		...range && useNative && {
			rangeStart: range.rangeStart,
			rangeEnd: range.rangeEnd
		},
		observe: (valueAnimation) => {
			valueAnimation.pause();
			return observeTimeline((progress) => {
				valueAnimation.time = valueAnimation.iterationDuration * progress;
			}, timeline);
		}
	});
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/utils/is-element-tracking.mjs
/**
* Currently, we only support element tracking with `scrollInfo`, though in
* the future we can also offer ViewTimeline support.
*/
function isElementTracking(options) {
	return options && (options.target || options.offset);
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs
/**
* If the onScroll function has two arguments, it's expecting
* more specific information about the scroll from scrollInfo.
*/
function isOnScrollWithInfo(onScroll) {
	return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
	if (isOnScrollWithInfo(onScroll) || isElementTracking(options)) return scrollInfo((info) => {
		onScroll(info[options.axis].progress, info);
	}, options);
	else return observeTimeline(onScroll, getTimeline(options));
}
//#endregion
//#region node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
	if (!container) return noop;
	const optionsWithDefaults = {
		axis,
		container,
		...options
	};
	return typeof onScroll === "function" ? attachToFunction(onScroll, optionsWithDefaults) : attachToAnimation(onScroll, optionsWithDefaults);
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-scroll.mjs
var createScrollMotionValues = () => ({
	scrollX: motionValue(0),
	scrollY: motionValue(0),
	scrollXProgress: motionValue(0),
	scrollYProgress: motionValue(0)
});
var isRefPending = (ref) => {
	if (!ref) return false;
	return !ref.current;
};
function makeAccelerateConfig(axis, options, container, target) {
	return {
		factory: (animation) => {
			let cleanup;
			const start = () => {
				if (isRefPending(container) || isRefPending(target)) {
					microtask.read(start);
					return;
				}
				cleanup = scroll(animation, {
					...options,
					axis,
					container: container?.current || void 0,
					target: target?.current || void 0
				});
			};
			microtask.read(start);
			return () => {
				cancelMicrotask(start);
				cleanup?.();
			};
		},
		times: [0, 1],
		keyframes: [0, 1],
		ease: (v) => v,
		duration: 1
	};
}
function canAccelerateScroll(target, offset) {
	if (typeof window === "undefined") return false;
	return target ? supportsViewTimeline() && !!offsetToViewTimelineRange(offset) : supportsScrollTimeline();
}
function useScroll({ container, target, ...options } = {}) {
	const values = useConstant(createScrollMotionValues);
	if (canAccelerateScroll(target, options.offset)) {
		values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
		values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
	}
	const scrollAnimation = (0, import_react.useRef)(null);
	const needsStart = (0, import_react.useRef)(false);
	const start = (0, import_react.useCallback)(() => {
		scrollAnimation.current = scroll((_progress, { x, y }) => {
			values.scrollX.set(x.current);
			values.scrollXProgress.set(x.progress);
			values.scrollY.set(y.current);
			values.scrollYProgress.set(y.progress);
		}, {
			...options,
			container: container?.current || void 0,
			target: target?.current || void 0
		});
		return () => {
			scrollAnimation.current?.();
		};
	}, [
		container,
		target,
		JSON.stringify(options.offset)
	]);
	useIsomorphicLayoutEffect(() => {
		needsStart.current = false;
		if (isRefPending(container) || isRefPending(target)) {
			needsStart.current = true;
			return;
		} else return start();
	}, [start]);
	(0, import_react.useEffect)(() => {
		if (!needsStart.current) return;
		let cleanup;
		const tryStart = () => {
			const containerPending = isRefPending(container);
			const targetPending = isRefPending(target);
			invariant(!containerPending, "Container ref is defined but not hydrated", "use-scroll-ref");
			invariant(!targetPending, "Target ref is defined but not hydrated", "use-scroll-ref");
			if (!containerPending && !targetPending) cleanup = start();
		};
		microtask.read(tryStart);
		return () => {
			cancelMicrotask(tryStart);
			cleanup?.();
		};
	}, [start]);
	return values;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-motion-value.mjs
/**
* Creates a `MotionValue` to track the state and velocity of a value.
*
* Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
*
* ```jsx
* export const MyComponent = () => {
*   const scale = useMotionValue(1)
*
*   return <motion.div style={{ scale }} />
* }
* ```
*
* @param initial - The initial state.
*
* @public
*/
function useMotionValue(initial) {
	const value = useConstant(() => motionValue(initial));
	/**
	* If this motion value is being used in static mode, like on
	* the Framer canvas, force components to rerender when the motion
	* value is updated.
	*/
	const { isStatic } = (0, import_react.useContext)(MotionConfigContext);
	if (isStatic) {
		const [, setLatest] = (0, import_react.useState)(initial);
		(0, import_react.useEffect)(() => value.on("change", setLatest), []);
	}
	return value;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
	/**
	* Initialise the returned motion value. This remains the same between renders.
	*/
	const value = useMotionValue(combineValues());
	/**
	* Create a function that will update the template motion value with the latest values.
	* This is pre-bound so whenever a motion value updates it can schedule its
	* execution in Framesync. If it's already been scheduled it won't be fired twice
	* in a single frame.
	*/
	const updateValue = () => value.set(combineValues());
	/**
	* Synchronously update the motion value with the latest values during the render.
	* This ensures that within a React render, the styles applied to the DOM are up-to-date.
	*/
	updateValue();
	/**
	* Subscribe to all motion values found within the template. Whenever any of them change,
	* schedule an update.
	*/
	useIsomorphicLayoutEffect(() => {
		const scheduleUpdate = () => frame.preRender(updateValue, false, true);
		const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
		return () => {
			subscriptions.forEach((unsubscribe) => unsubscribe());
			cancelFrame(updateValue);
		};
	});
	return value;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-computed.mjs
function useComputed(compute) {
	/**
	* Open session of collectMotionValues. Any MotionValue that calls get()
	* will be saved into this array.
	*/
	collectMotionValues.current = [];
	compute();
	const value = useCombineMotionValues(collectMotionValues.current, compute);
	/**
	* Synchronously close session of collectMotionValues.
	*/
	collectMotionValues.current = void 0;
	return value;
}
//#endregion
//#region node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
	if (typeof input === "function") return useComputed(input);
	if (outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function") return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
	const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRangeOrMap, options);
	const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
	const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
	if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) result.accelerate = {
		...inputAccelerate,
		times: inputRangeOrTransformer,
		keyframes: outputRangeOrMap,
		isTransformed: true,
		...options?.ease ? { ease: options.ease } : {}
	};
	return result;
}
function useListTransform(values, transformer) {
	const latest = useConstant(() => []);
	return useCombineMotionValues(values, () => {
		latest.length = 0;
		const numValues = values.length;
		for (let i = 0; i < numValues; i++) latest[i] = values[i].get();
		return transformer(latest);
	});
}
function useMapTransform(inputValue, inputRange, outputMap, options) {
	/**
	* Capture keys once to ensure hooks are called in consistent order.
	*/
	const keys = useConstant(() => Object.keys(outputMap));
	const output = useConstant(() => ({}));
	for (const key of keys) output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
	return output;
}
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Activity = createLucideIcon("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Binary = createLucideIcon("binary", [
	["rect", {
		x: "14",
		y: "14",
		width: "4",
		height: "6",
		rx: "2",
		key: "p02svl"
	}],
	["rect", {
		x: "6",
		y: "4",
		width: "4",
		height: "6",
		rx: "2",
		key: "xm4xkj"
	}],
	["path", {
		d: "M6 20h4",
		key: "1i6q5t"
	}],
	["path", {
		d: "M14 10h4",
		key: "ru81e7"
	}],
	["path", {
		d: "M6 14h2v6",
		key: "16z9wg"
	}],
	["path", {
		d: "M14 4h2v6",
		key: "1idq9u"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Brain = createLucideIcon("brain", [
	["path", {
		d: "M12 18V5",
		key: "adv99a"
	}],
	["path", {
		d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",
		key: "1e3is1"
	}],
	["path", {
		d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",
		key: "1gqd8o"
	}],
	["path", {
		d: "M17.997 5.125a4 4 0 0 1 2.526 5.77",
		key: "iwvgf7"
	}],
	["path", {
		d: "M18 18a4 4 0 0 0 2-7.464",
		key: "efp6ie"
	}],
	["path", {
		d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
		key: "1gq6am"
	}],
	["path", {
		d: "M6 18a4 4 0 0 1-2-7.464",
		key: "k1g0md"
	}],
	["path", {
		d: "M6.003 5.125a4 4 0 0 0-2.526 5.77",
		key: "q97ue3"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChartNoAxesColumnIncreasing = createLucideIcon("chart-no-axes-column-increasing", [
	["path", {
		d: "M5 21v-6",
		key: "1hz6c0"
	}],
	["path", {
		d: "M12 21V9",
		key: "uvy0l4"
	}],
	["path", {
		d: "M19 21V3",
		key: "11j9sm"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CodeXml = createLucideIcon("code-xml", [
	["path", {
		d: "m18 16 4-4-4-4",
		key: "1inbqp"
	}],
	["path", {
		d: "m6 8-4 4 4 4",
		key: "15zrgr"
	}],
	["path", {
		d: "m14.5 4-5 16",
		key: "e7oirm"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Code = createLucideIcon("code", [["path", {
	d: "m16 18 6-6-6-6",
	key: "eg8j8"
}], ["path", {
	d: "m8 6-6 6 6 6",
	key: "ppft3o"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Database = createLucideIcon("database", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 21 19V5",
		key: "1wlel7"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FolderGit2 = createLucideIcon("folder-git-2", [
	["path", {
		d: "M18 19a5 5 0 0 1-5-5v8",
		key: "sz5oeg"
	}],
	["path", {
		d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
		key: "1w6njk"
	}],
	["circle", {
		cx: "13",
		cy: "12",
		r: "2",
		key: "1j92g6"
	}],
	["circle", {
		cx: "20",
		cy: "19",
		r: "2",
		key: "1obnsp"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Network = createLucideIcon("network", [
	["rect", {
		x: "16",
		y: "16",
		width: "6",
		height: "6",
		rx: "1",
		key: "4q2zg0"
	}],
	["rect", {
		x: "2",
		y: "16",
		width: "6",
		height: "6",
		rx: "1",
		key: "8cvhb9"
	}],
	["rect", {
		x: "9",
		y: "2",
		width: "6",
		height: "6",
		rx: "1",
		key: "1egb70"
	}],
	["path", {
		d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
		key: "1jsf9p"
	}],
	["path", {
		d: "M12 12V8",
		key: "2874zd"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Server = createLucideIcon("server", [
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "2",
		rx: "2",
		ry: "2",
		key: "ngkwjq"
	}],
	["rect", {
		width: "20",
		height: "8",
		x: "2",
		y: "14",
		rx: "2",
		ry: "2",
		key: "iecqi9"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "6",
		y2: "6",
		key: "16zg32"
	}],
	["line", {
		x1: "6",
		x2: "6.01",
		y1: "18",
		y2: "18",
		key: "nzw8ys"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Settings = createLucideIcon("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Shield = createLucideIcon("shield", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Zap = createLucideIcon("zap", [["path", {
	d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",
	key: "1v7up4"
}]]);
//#endregion
//#region src/components/public/workspace/TechStackHexGrid.tsx
var import_jsx_runtime = require_jsx_runtime();
var techNodes = [
	{
		id: "ai",
		name: "Agentic AI",
		category: "AI & LLM Orchestration",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-6 h-6" }),
		gradient: "from-purple-500 via-fuchsia-500 to-indigo-600",
		glowColor: "rgba(168, 85, 247, 0.6)",
		borderColor: "border-purple-400/80"
	},
	{
		id: "pega",
		name: "PEGA",
		category: "Enterprise BPM Platform",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-6 h-6" }),
		gradient: "from-blue-600 via-indigo-600 to-cyan-400",
		glowColor: "rgba(6, 182, 212, 0.6)",
		borderColor: "border-cyan-400/80"
	},
	{
		id: "cloud",
		name: "Cloud",
		category: "AWS & Azure Cloud Native",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "w-6 h-6" }),
		gradient: "from-sky-400 via-blue-500 to-indigo-600",
		glowColor: "rgba(56, 189, 248, 0.6)",
		borderColor: "border-sky-400/80"
	},
	{
		id: "react",
		name: "React",
		category: "Modern UI Architecture",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "w-5 h-5" }),
		gradient: "from-cyan-400 to-teal-400",
		glowColor: "rgba(45, 212, 191, 0.6)",
		borderColor: "border-teal-400/80"
	},
	{
		id: "nodejs",
		name: "Node.js",
		category: "High-Perf Microservices",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-5 h-5" }),
		gradient: "from-emerald-400 to-green-500",
		glowColor: "rgba(52, 211, 153, 0.6)",
		borderColor: "border-emerald-400/80"
	},
	{
		id: "typescript",
		name: "TypeScript",
		category: "Type-Safe Development",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Binary, { className: "w-5 h-5" }),
		gradient: "from-blue-500 to-indigo-600",
		glowColor: "rgba(99, 102, 241, 0.6)",
		borderColor: "border-indigo-400/80"
	}
];
function TechStackHexGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative py-12 px-4 max-w-xl mx-auto flex flex-col items-center select-none w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: 360 },
				transition: {
					duration: 60,
					repeat: Infinity,
					ease: "linear"
				},
				className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-cyan-500/20 border-dashed pointer-events-none opacity-50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: -360 },
				transition: {
					duration: 80,
					repeat: Infinity,
					ease: "linear"
				},
				className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple-500/20 border-dotted pointer-events-none opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
							node: techNodes[0],
							isFeatured: true,
							delay: 0
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-20 flex justify-center gap-4 sm:gap-6 -mt-6 sm:-mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
							node: techNodes[1],
							delay: .2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
							node: techNodes[2],
							delay: .4
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex justify-center gap-2 sm:gap-4 -mt-6 sm:-mt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
								node: techNodes[3],
								delay: .6
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
								node: techNodes[4],
								delay: .8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexNode, {
								node: techNodes[5],
								delay: 1
							})
						]
					})
				]
			})
		]
	});
}
function HexNode({ node, isFeatured = false, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { y: 0 },
		animate: { y: [
			0,
			-10,
			0
		] },
		transition: {
			duration: 4,
			repeat: Infinity,
			ease: "easeInOut",
			delay
		},
		className: "group relative flex flex-col items-center cursor-pointer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			whileHover: {
				scale: 1.15,
				rotateZ: 2
			},
			whileTap: { scale: .95 },
			transition: {
				type: "spring",
				stiffness: 350,
				damping: 18
			},
			className: `relative flex items-center justify-center transition-all duration-300 ${isFeatured ? "w-24 h-24 sm:w-28 sm:h-28" : "w-20 h-20 sm:w-24 sm:h-24"}`,
			style: { filter: `drop-shadow(0 0 20px ${node.glowColor})` },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `absolute inset-0 bg-white/80 dark:bg-slate-950/80 border-[3px] ${node.borderColor} backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400 dark:group-hover:border-cyan-300 group-hover:bg-slate-50 dark:group-hover:bg-slate-900`,
					style: { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `absolute inset-1 bg-gradient-to-br ${node.gradient} opacity-20 group-hover:opacity-70 transition-opacity duration-300`,
					style: { clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center z-10 p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-slate-800 dark:text-white drop-shadow-md dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform",
						children: node.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] sm:text-[11px] font-bold text-slate-800 dark:text-white mt-1 tracking-wider leading-none group-hover:text-cyan-600 dark:group-hover:text-cyan-200",
						children: node.name
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -bottom-10 px-3 py-1.5 rounded-lg surface-deep border border-cyan-500/30 text-[11px] text-cyan-300 font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl z-50",
			children: node.category
		})]
	});
}
//#endregion
//#region src/components/public/sections/PegaSection.tsx
function PegaSection() {
	const expertiseAreas = [
		{
			area: "Pega Development",
			description: "Building enterprise applications with Pega platform",
			technologies: [
				"Pega",
				"Case Management",
				"Data Pages",
				"Integration"
			],
			accent: "from-purple-500/25 to-indigo-500/10",
			iconColor: "accent-purple",
			borderColor: "border-purple-500/30 hover:border-purple-400/70"
		},
		{
			area: "Pega Cloud",
			description: "Cloud deployment and environment management",
			technologies: [
				"Pega Cloud",
				"Deployment",
				"Environment Management"
			],
			accent: "from-cyan-500/25 to-sky-500/10",
			iconColor: "accent-cyan",
			borderColor: "border-cyan-500/30 hover:border-cyan-400/70"
		},
		{
			area: "Pega Integration",
			description: "REST APIs and system integrations",
			technologies: [
				"REST APIs",
				"Connectors",
				"Data Transforms"
			],
			accent: "from-amber-500/25 to-orange-500/10",
			iconColor: "accent-amber",
			borderColor: "border-amber-500/30 hover:border-amber-400/70"
		},
		{
			area: "Pega Decisioning",
			description: "Business rules and decision management",
			technologies: [
				"Decision Tables",
				"Decision Trees",
				"When Rules"
			],
			accent: "from-emerald-500/25 to-teal-500/10",
			iconColor: "accent-emerald",
			borderColor: "border-emerald-500/30 hover:border-emerald-400/70"
		}
	];
	const icons = {
		"Pega Development": Database,
		"Pega Cloud": Cloud,
		"Pega Integration": Zap,
		"Pega Decisioning": ChartNoAxesColumnIncreasing
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-20 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cyber-divider absolute top-0 left-10 right-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .6 },
					className: "text-center mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-purple-500/30 text-xs font-medium accent-purple mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), "Enterprise Platform Expertise"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "cyber-section-title text-4xl font-black tracking-tight mb-4",
							children: "Pega Expertise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-soft font-light max-w-2xl mx-auto",
							children: "Specialized experience in Pega platform development and cloud deployment"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6",
					children: expertiseAreas.map((area, index) => {
						const Icon = icons[area.area] || Code;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .6,
								delay: index * .1
							},
							whileHover: { y: -6 },
							className: `hyper-glass cyber-card-hover rounded-2xl p-6 border ${area.borderColor} relative overflow-hidden`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${area.accent}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `p-3 rounded-xl bg-gradient-to-br ${area.accent} border border-white/10 flex-shrink-0`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: area.iconColor,
										size: 24
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-strong mb-2 tracking-wide",
											children: area.area
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-soft text-sm font-light mb-4",
											children: area.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: area.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-3 py-1 rounded-full text-xs font-medium surface-soft border line-soft text-strong",
												children: tech
											}, tech))
										})
									]
								})]
							})]
						}, area.area);
					})
				})]
			})
		]
	});
}
//#endregion
//#region src/components/public/sections/PegaCloudSection.tsx
function PegaCloudSection() {
	const cloudExperiences = [
		{
			title: "Pega Cloud Deployment",
			description: "Deploying and managing Pega applications in cloud environments",
			technology: "Pega Cloud",
			iconColor: "accent-cyan",
			gradient: "from-cyan-500/25 to-sky-500/10",
			borderColor: "border-cyan-500/30 hover:border-cyan-400/70"
		},
		{
			title: "Environment Management",
			description: "Managing development, test, and production environments",
			technology: "Environment Management",
			iconColor: "accent-blue",
			gradient: "from-blue-500/25 to-indigo-500/10",
			borderColor: "border-blue-500/30 hover:border-blue-400/70"
		},
		{
			title: "Cloud Integration",
			description: "Integrating Pega with cloud services and APIs",
			technology: "Cloud Integration",
			iconColor: "accent-emerald",
			gradient: "from-emerald-500/25 to-teal-500/10",
			borderColor: "border-emerald-500/30 hover:border-emerald-400/70"
		},
		{
			title: "Performance Optimization",
			description: "Optimizing application performance in cloud infrastructure",
			technology: "Performance",
			iconColor: "accent-amber",
			gradient: "from-amber-500/25 to-orange-500/10",
			borderColor: "border-amber-500/30 hover:border-amber-400/70"
		},
		{
			title: "Security & Compliance",
			description: "Implementing security measures and compliance standards",
			technology: "Security",
			iconColor: "accent-rose",
			gradient: "from-rose-500/25 to-pink-500/10",
			borderColor: "border-rose-500/30 hover:border-rose-400/70"
		},
		{
			title: "Automation",
			description: "Automating deployment and operational tasks",
			technology: "Automation",
			iconColor: "accent-purple",
			gradient: "from-purple-500/25 to-fuchsia-500/10",
			borderColor: "border-purple-500/30 hover:border-purple-400/70"
		}
	];
	const icons = {
		"Pega Cloud Deployment": Cloud,
		"Environment Management": Server,
		"Cloud Integration": Globe,
		"Performance Optimization": Activity,
		"Security & Compliance": Shield,
		"Automation": Settings
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-20 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 right-0 w-[500px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cyber-divider absolute top-0 left-10 right-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .6 },
					className: "text-center mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-cyan-500/30 text-xs font-medium accent-cyan mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), "Cloud-Native Operations"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "cyber-section-title text-4xl font-black tracking-tight mb-4",
							children: "Pega Cloud Experience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-soft font-light max-w-2xl mx-auto",
							children: "Hands-on experience with Pega Cloud deployment and management"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: cloudExperiences.map((exp, index) => {
						const Icon = icons[exp.title] || Cloud;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								duration: .6,
								delay: index * .1
							},
							whileHover: { y: -6 },
							className: `hyper-glass cyber-card-hover rounded-2xl p-6 border ${exp.borderColor} relative overflow-hidden`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.gradient}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `p-4 rounded-2xl bg-gradient-to-br ${exp.gradient} border border-white/10 mb-4`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: exp.iconColor,
											size: 28
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-bold text-strong mb-2 tracking-wide",
										children: exp.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-soft text-sm font-light mb-4",
										children: exp.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-3 py-1 rounded-full text-xs font-medium surface-soft border line-soft accent-cyan",
										children: exp.technology
									})
								]
							})]
						}, exp.title);
					})
				})]
			})
		]
	});
}
//#endregion
//#region src/components/public/sections/AgenticAISection.tsx
function AgenticAISection() {
	const aiTopics = [
		{
			topic: "Agentic AI",
			description: "Building autonomous AI agents that can reason and act",
			technologies: [
				"AI Agents",
				"Tool Calling",
				"LLM Orchestration"
			],
			iconColor: "accent-purple",
			gradient: "from-purple-500/25 to-fuchsia-500/10",
			borderColor: "border-purple-500/30 hover:border-purple-400/70"
		},
		{
			topic: "Tool Calling",
			description: "Enabling AI to interact with external tools and APIs",
			technologies: [
				"Function Calling",
				"API Integration",
				"MCP"
			],
			iconColor: "accent-cyan",
			gradient: "from-cyan-500/25 to-sky-500/10",
			borderColor: "border-cyan-500/30 hover:border-cyan-400/70"
		},
		{
			topic: "RAG Systems",
			description: "Retrieval-Augmented Generation for knowledge-rich responses",
			technologies: [
				"Vector Search",
				"Embeddings",
				"Knowledge Base"
			],
			iconColor: "accent-emerald",
			gradient: "from-emerald-500/25 to-teal-500/10",
			borderColor: "border-emerald-500/30 hover:border-emerald-400/70"
		},
		{
			topic: "Multi-Agent Systems",
			description: "Coordinating multiple AI agents for complex tasks",
			technologies: [
				"Agent Collaboration",
				"Task Distribution",
				"Workflow"
			],
			iconColor: "accent-blue",
			gradient: "from-blue-500/25 to-indigo-500/10",
			borderColor: "border-blue-500/30 hover:border-blue-400/70"
		},
		{
			topic: "Local AI",
			description: "Running AI models locally for privacy and control",
			technologies: [
				"Local LLMs",
				"Ollama",
				"Privacy"
			],
			iconColor: "accent-amber",
			gradient: "from-amber-500/25 to-orange-500/10",
			borderColor: "border-amber-500/30 hover:border-amber-400/70"
		},
		{
			topic: "AI Workflows",
			description: "Designing and implementing AI-powered automation workflows",
			technologies: [
				"Automation",
				"Chains",
				"Memory"
			],
			iconColor: "accent-rose",
			gradient: "from-rose-500/25 to-pink-500/10",
			borderColor: "border-rose-500/30 hover:border-rose-400/70"
		}
	];
	const icons = {
		"Agentic AI": Bot,
		"Tool Calling": Zap,
		"RAG Systems": Brain,
		"Multi-Agent Systems": Network,
		"Local AI": Cpu,
		"AI Workflows": MessageSquare
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-20 px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-10 left-0 w-[500px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[140px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cyber-divider absolute top-0 left-10 right-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { duration: .6 },
						className: "text-center mb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-fuchsia-500/30 text-xs font-medium accent-fuchsia mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5" }), "Frontier Exploration"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "cyber-section-title text-4xl font-black tracking-tight mb-4",
								children: "Agentic AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-soft font-light max-w-2xl mx-auto",
								children: "Exploring the frontier of autonomous AI agents and intelligent systems"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: aiTopics.map((topic, index) => {
							const Icon = icons[topic.topic] || Bot;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									scale: .9
								},
								whileInView: {
									opacity: 1,
									scale: 1
								},
								viewport: { once: true },
								transition: {
									duration: .6,
									delay: index * .1
								},
								whileHover: {
									scale: 1.03,
									y: -6
								},
								className: `hyper-glass cyber-card-hover rounded-2xl p-6 border ${topic.borderColor} relative overflow-hidden`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${topic.gradient}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col h-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `p-4 rounded-2xl bg-gradient-to-br ${topic.gradient} border border-white/10 mb-4 inline-flex w-fit`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: topic.iconColor,
												size: 32
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold text-strong mb-2 tracking-wide",
											children: topic.topic
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-soft text-sm font-light mb-4 flex-1",
											children: topic.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-2",
											children: topic.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-2 py-1 rounded-full text-xs font-medium surface-soft border line-soft text-strong",
												children: tech
											}, tech))
										})
									]
								})]
							}, topic.topic);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .6,
							delay: .4
						},
						className: "mt-12 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-6 py-3 rounded-full hyper-glass border border-fuchsia-500/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
								className: "accent-fuchsia",
								size: 20
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "accent-fuchsia font-medium",
								children: "Actively exploring and building with AI agents"
							})]
						})
					})
				]
			})
		]
	});
}
//#endregion
//#region src/pages/public/SkillsSection.tsx
var cvSkills = [
	{
		id: "s1",
		category_id: "c1",
		name: "Pega PRPC",
		icon: "",
		description: "Enterprise BPM & case management",
		experience: "4+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 1,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s2",
		category_id: "c1",
		name: "Pega Constellation",
		icon: "",
		description: "Modern UI architecture",
		experience: "2+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 2,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s3",
		category_id: "c1",
		name: "Pega CRM Framework",
		icon: "",
		description: "Customer relationship management",
		experience: "3+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 3,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s4",
		category_id: "c1",
		name: "Pega Sales Automation",
		icon: "",
		description: "Sales platform automation",
		experience: "2+ years",
		level: "secondary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 4,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s5",
		category_id: "c1",
		name: "Pega DX-API",
		icon: "",
		description: "Headless Pega applications",
		experience: "2+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 5,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s6",
		category_id: "c3",
		name: "React Js",
		icon: "",
		description: "Frontend development",
		experience: "2+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 6,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s7",
		category_id: "c3",
		name: "HTML, CSS",
		icon: "",
		description: "Web fundamentals",
		experience: "4+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 7,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s8",
		category_id: "c3",
		name: "DX Custom Component",
		icon: "",
		description: "Custom Constellation components",
		experience: "2+ years",
		level: "secondary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 8,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s9",
		category_id: "c2",
		name: "SQL Server",
		icon: "",
		description: "Relational database management",
		experience: "3+ years",
		level: "primary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 9,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s10",
		category_id: "c2",
		name: "Service Now",
		icon: "",
		description: "ITSM platform",
		experience: "2+ years",
		level: "secondary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 10,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s11",
		category_id: "c2",
		name: "ALM / JIRA / Confluence",
		icon: "",
		description: "Agile lifecycle management",
		experience: "4+ years",
		level: "secondary",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 11,
		created_at: "",
		updated_at: ""
	},
	{
		id: "s12",
		category_id: "c2",
		name: "Agile Methodology",
		icon: "",
		description: "Scrum and Kanban frameworks",
		experience: "4+ years",
		level: "exploring",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 12,
		created_at: "",
		updated_at: ""
	}
];
var skillLevelColor = {
	primary: "accent-cyan border-cyan-500/40 bg-cyan-500/10",
	secondary: "accent-blue border-blue-500/40 bg-blue-500/10",
	exploring: "accent-fuchsia border-fuchsia-500/40 bg-fuchsia-500/10"
};
function SkillsSection() {
	const [skills, setSkills] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	const loadData = async () => {
		try {
			const s = await getPublicSkills();
			setSkills(s.length > 0 ? s : cvSkills);
		} catch {
			setSkills(cvSkills);
		}
	};
	const primarySkills = skills.filter((s) => s.level === "primary");
	const secondarySkills = skills.filter((s) => s.level === "secondary");
	const exploringSkills = skills.filter((s) => s.level === "exploring");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 25
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2.5 rounded-xl bg-gradient-to-br from-purple-600/30 to-cyan-500/20 border border-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "w-5 h-5 accent-cyan" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "cyber-section-title text-2xl sm:text-3xl font-black tracking-tight",
						children: "Skills & Toolbox"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-faint font-light mt-0.5",
						children: "Technologies I build with every day"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: [
						...primarySkills,
						...secondarySkills,
						...exploringSkills
					].map((skill, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: index * .05
						},
						whileHover: { y: -5 },
						className: "hyper-glass rounded-xl p-5 border line-soft cyber-card-hover",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-strong tracking-wide",
									children: skill.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `px-2 py-0.5 rounded-full text-[10px] font-semibold border ${skillLevelColor[skill.level] || skillLevelColor.exploring}`,
									children: skill.level
								})]
							}),
							skill.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-faint font-light mb-3",
								children: skill.description
							}),
							skill.experience && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-[11px] accent-cyan font-mono",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" }), skill.experience]
							})
						]
					}, skill.id))
				})]
			})
		})
	});
}
//#endregion
//#region src/components/public/ProjectCard.tsx
var categoryColors = {
	client_served: "accent-emerald border-emerald-500/40 bg-emerald-500/10",
	poc: "accent-amber border-amber-500/40 bg-amber-500/10",
	component: "accent-cyan border-cyan-500/40 bg-cyan-500/10",
	project_build: "accent-purple border-purple-500/40 bg-purple-500/10",
	technology: "accent-blue border-blue-500/40 bg-blue-500/10",
	pega: "accent-purple border-purple-500/40 bg-purple-500/10",
	pega_cloud: "accent-cyan border-cyan-500/40 bg-cyan-500/10",
	agentic_ai: "accent-fuchsia border-fuchsia-500/40 bg-fuchsia-500/10",
	ai: "accent-emerald border-emerald-500/40 bg-emerald-500/10",
	software_engineering: "accent-amber border-amber-500/40 bg-amber-500/10",
	personal: "text-pink-300 border-pink-500/40 bg-pink-500/10",
	sample: "text-soft border-slate-500/40 bg-slate-500/10",
	open_source: "text-yellow-300 border-yellow-500/40 bg-yellow-500/10",
	other: "text-indigo-300 border-indigo-500/40 bg-indigo-500/10"
};
var categoryLabels = {
	client_served: "Client Served",
	poc: "PoC",
	component: "Component",
	project_build: "Project Build",
	technology: "Technology"
};
function ProjectCard({ project }) {
	const technologies = project.technologies || [];
	const category = project.category || "other";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: { duration: .5 },
		whileHover: { y: -8 },
		className: "hyper-glass rounded-2xl border line-soft cyber-card-hover relative overflow-hidden flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 flex flex-col flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[category] || categoryColors.other}`,
						children: categoryLabels[category] || category.replace("_", " ")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [project.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 text-[10px] font-bold accent-amber",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								className: "text-yellow-400 fill-yellow-400",
								size: 14
							}), "Featured"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, {
							size: 16,
							className: "text-faint"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl font-bold text-strong mb-2 tracking-wide",
					children: project.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-faint font-light mb-4 line-clamp-2",
					children: project.description
				}),
				technologies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] font-bold text-faint uppercase tracking-widest mb-2 flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" }), "Technologies"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1.5",
						children: [technologies.slice(0, 5).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cyber-chip text-[11px]! px-2.5! py-1!",
							children: tech
						}, tech)), technologies.length > 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "cyber-chip text-[11px]! px-2.5! py-1!",
							children: ["+", technologies.length - 5]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mt-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/projects/${project.slug}`,
							className: "neon-btn-primary flex-1 py-2.5! rounded-xl! text-sm!",
							children: "View Details"
						}),
						project.github_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: project.github_url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "p-2.5 rounded-xl border line-soft surface-soft text-soft hover:text-strong hover:border-cyan-500/50 transition-colors",
							"aria-label": "GitHub",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "w-4 h-4 fill-current",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" })
							})
						}),
						project.demo_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: project.demo_url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "p-2.5 rounded-xl border line-soft surface-soft text-soft hover:text-strong hover:border-cyan-500/50 transition-colors",
							"aria-label": "Live Demo",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 16 })
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/lib/adminApi.ts
var getLocalData = (table) => {
	const data = localStorage.getItem(`demo_${table}`);
	if (data) return JSON.parse(data);
	switch (table) {
		case "profiles": return [fallbackProfile];
		case "educations": return fallbackEducation;
		case "certifications": return fallbackCertifications;
		case "awards": return fallbackAwards;
		case "languages": return fallbackLanguages;
		case "experiences": return fallbackExperiences;
		case "projects": return fallbackProjects;
		case "skills": return cvSkills;
		case "social_links": return fallbackSocialLinks;
		case "contact_info": return [fallbackContactInfo];
		default: return [];
	}
};
var setLocalData = (table, data) => {
	localStorage.setItem(`demo_${table}`, JSON.stringify(data));
};
async function getAll(table, select = "*") {
	return getLocalData(table);
}
async function create(table, data) {
	{
		const localData = getLocalData(table);
		const newItem = {
			...data,
			id: `demo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		setLocalData(table, [newItem, ...localData]);
		return newItem;
	}
}
async function update(table, id, data) {
	{
		const localData = getLocalData(table);
		const index = localData.findIndex((i) => i.id === id);
		if (index === -1) throw new Error("Not found");
		const updatedItem = {
			...localData[index],
			...data,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		localData[index] = updatedItem;
		setLocalData(table, localData);
		return updatedItem;
	}
}
async function remove(table, id) {
	setLocalData(table, getLocalData(table).filter((i) => i.id !== id));
}
async function getSocialLinks() {
	return getAll("social_links");
}
async function createSocialLink(data) {
	return create("social_links", data);
}
async function updateSocialLink(id, data) {
	return update("social_links", id, data);
}
async function deleteSocialLink(id) {
	return remove("social_links", id);
}
async function getContactInfo() {
	{
		const local = localStorage.getItem("demo_contact_info");
		if (local) return JSON.parse(local);
		return fallbackContactInfo;
	}
}
async function updateContactInfo(data) {
	{
		const updated = {
			...await getContactInfo(),
			...data,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		localStorage.setItem("demo_contact_info", JSON.stringify(updated));
		return updated;
	}
}
async function getCertifications() {
	return getAll("certifications");
}
async function createCertification(data) {
	return create("certifications", data);
}
async function updateCertification(id, data) {
	return update("certifications", id, data);
}
async function deleteCertification(id) {
	return remove("certifications", id);
}
async function getAwards() {
	return getAll("awards");
}
async function createAward(data) {
	return create("awards", data);
}
async function updateAward(id, data) {
	return update("awards", id, data);
}
async function deleteAward(id) {
	return remove("awards", id);
}
async function getLanguages() {
	return getAll("languages");
}
async function createLanguage(data) {
	return create("languages", data);
}
async function updateLanguage(id, data) {
	return update("languages", id, data);
}
async function deleteLanguage(id) {
	return remove("languages", id);
}
async function getExperiences() {
	return getAll("experiences");
}
async function createExperience(data) {
	return create("experiences", data);
}
async function updateExperience(id, data) {
	return update("experiences", id, data);
}
async function deleteExperience(id) {
	return remove("experiences", id);
}
async function getProjects() {
	return getAll("projects");
}
async function getProjectBySlug(slug) {
	{
		const found = getLocalData("projects").find((p) => p.slug === slug);
		if (!found) throw new Error("Project not found");
		return found;
	}
}
async function createProject(data) {
	return create("projects", data);
}
async function updateProject(id, data) {
	return update("projects", id, data);
}
async function deleteProject(id) {
	return remove("projects", id);
}
async function getSkills() {
	return getAll("skills");
}
async function createSkill(data) {
	return create("skills", data);
}
async function updateSkill(id, data) {
	return update("skills", id, data);
}
async function deleteSkill(id) {
	return remove("skills", id);
}
async function getSiteSettings() {
	{
		const local = localStorage.getItem("demo_site_settings");
		if (local) return JSON.parse(local);
		return {
			id: "demo-site-settings",
			site_title: "Somnath - Pega Developer & Software Engineer",
			site_description: "Personal professional portfolio showcasing Pega development, Pega Cloud experience, and Agentic AI exploration.",
			contact_heading: "Let's Connect",
			projects_heading: "Things I've Built",
			hero_highlight_1: "Pega Developer",
			hero_highlight_2: "Pega Cloud",
			hero_highlight_3: "Agentic AI",
			hero_highlight_4: "Software Engineering",
			theme: "system",
			created_at: "",
			updated_at: ""
		};
	}
}
async function updateSiteSettings(data) {
	{
		const updated = {
			...await getSiteSettings(),
			...data,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		localStorage.setItem("demo_site_settings", JSON.stringify(updated));
		return updated;
	}
}
async function getDashboardStats() {
	return {
		projects: getLocalData("projects").length,
		experiences: getLocalData("experiences").length,
		skills: getLocalData("skills").length,
		inquiries: getLocalData("inquiries").length
	};
}
//#endregion
//#region src/pages/public/Projects.tsx
var fallbackProjects = [
	{
		id: "p1",
		name: "Aegon",
		slug: "aegon-customer-service",
		description: "Streamlined customer issue handling and ticket lifecycle management for a leading insurance client.",
		problem: "",
		solution: "Contributed to the development of new features across standalone applications such as Customer Service, Low-Code Platform for citizen developers, and Back-Office operations. The objective of the project was to streamline customer issue handling, enhance ticket lifecycle management, and enable efficient case processing.\n\nKey responsibilities included designing and implementing Pega solutions, integrating data from multiple enterprise systems, automating case creation, and routing information to downstream applications. Played a major role in improving platform efficiency and ensuring a smooth interaction between Pega workflows and external systems.",
		my_role: "Senior Pega Developer",
		architecture: "",
		features: [],
		technologies: [
			"Pega",
			"Pega Component",
			"Client Service",
			"Integrations"
		],
		challenges: [],
		what_learned: "",
		results: "",
		category: "client_served",
		demo_url: "",
		github_url: "",
		documentation_url: "",
		architecture_diagram: "",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 1,
		created_at: "",
		updated_at: ""
	},
	{
		id: "p2",
		name: "Unipol Rental",
		slug: "unipol-rental-platform",
		description: "Developed 3 separate applications for an insurance-based client to manage customer service and sales automation.",
		problem: "",
		solution: "The project is to develop 3 separate application (Customer service, Sales Automation and Agent Portal) platform for the Insurance based client to deal with their customers and provide solutions and track the tickets. It includes integration of data from various systems.",
		my_role: "Pega Developer",
		architecture: "",
		features: [],
		technologies: [
			"Pega",
			"Sales Automation",
			"Agent Portal",
			"Integration"
		],
		challenges: [],
		what_learned: "",
		results: "",
		category: "client_served",
		demo_url: "",
		github_url: "",
		documentation_url: "",
		architecture_diagram: "",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 2,
		created_at: "",
		updated_at: ""
	},
	{
		id: "p3",
		name: "Agent To Job Scheduler Convert",
		slug: "agent-to-job-scheduler",
		description: "Component wizard that converts advanced agents to job schedulers for operational efficiency.",
		problem: "",
		solution: "Created a component for a new wizard that converts advanced agents to job schedulers. This component is utilized for two different clients, enhancing operational efficiency.",
		my_role: "Pega Developer",
		architecture: "",
		features: [],
		technologies: [
			"Pega Component",
			"Pega",
			"Job Schedulers",
			"Vibe Coding"
		],
		challenges: [],
		what_learned: "",
		results: "",
		category: "component",
		demo_url: "",
		github_url: "",
		documentation_url: "",
		architecture_diagram: "",
		featured: false,
		show_on_website: true,
		show_on_resume: true,
		order: 3,
		created_at: "",
		updated_at: ""
	},
	{
		id: "p4",
		name: "Connector Management Component",
		slug: "connector-management",
		description: "Reusable component for seamless integration with external systems.",
		problem: "",
		solution: "Developed a reusable component to integrate with external systems for fetching and sending data, enabling seamless plug-and-play usage across multiple applications. The component can also run independently based on project requirements.",
		my_role: "Pega Developer",
		architecture: "",
		features: [],
		technologies: [
			"Pega Component",
			"Integration",
			"Reusable Assets"
		],
		challenges: [],
		what_learned: "",
		results: "",
		category: "component",
		demo_url: "",
		github_url: "",
		documentation_url: "",
		architecture_diagram: "",
		featured: false,
		show_on_website: true,
		show_on_resume: true,
		order: 4,
		created_at: "",
		updated_at: ""
	},
	{
		id: "p5",
		name: "Log Analyzer Using Gen AI",
		slug: "log-analyzer-gen-ai",
		description: "AI-driven log analyzer using Pega Gen AI for simplifying complex log reviews.",
		problem: "",
		solution: "Designed and developed a Log Analyzer using Pega Gen AI to assist developers by simplifying complex log reviews. Unlike traditional tracer tools that require checking multiple rule execution logs, this solution captures logs during scenario replication and analyzes them automatically when paused. It generates a concise, AI-driven summary highlighting key insights and potential issues, significantly improving debugging efficiency.",
		my_role: "Pega Developer",
		architecture: "",
		features: [],
		technologies: [
			"Agentic AI",
			"Pega Gen AI",
			"Debugging",
			"Vibe Coding"
		],
		challenges: [],
		what_learned: "",
		results: "",
		category: "poc",
		demo_url: "",
		github_url: "",
		documentation_url: "",
		architecture_diagram: "",
		featured: true,
		show_on_website: true,
		show_on_resume: true,
		order: 5,
		created_at: "",
		updated_at: ""
	}
];
function Projects() {
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [filter, setFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		loadProjects();
	}, []);
	const loadProjects = async () => {
		try {
			const activeProjects = (await getProjects()).filter((p) => p.show_on_website);
			setProjects(activeProjects.length > 0 ? activeProjects : fallbackProjects);
		} catch {
			setProjects(fallbackProjects);
		} finally {
			setLoading(false);
		}
	};
	const categories = [
		{
			value: "all",
			label: "All Projects"
		},
		{
			value: "client_served",
			label: "Client Served"
		},
		{
			value: "poc",
			label: "PoC"
		},
		{
			value: "component",
			label: "Component"
		},
		{
			value: "project_build",
			label: "Project Build"
		},
		{
			value: "technology",
			label: "Technology"
		}
	];
	const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative pb-20 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full hyper-glass border border-purple-500/30 text-xs font-medium accent-purple mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, { className: "w-3.5 h-3.5" }), "Portfolio"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "cyber-section-title text-4xl sm:text-5xl font-black tracking-tight mb-4",
							children: "Things I've Built"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-soft font-light max-w-2xl mx-auto",
							children: "A collection of my work — from client-served builds and proof-of-concepts to reusable components, full project builds with vibe coding, and technology experiments."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2 mb-10",
					children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": filter === category.value,
						onClick: () => setFilter(category.value),
						className: `px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${filter === category.value ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30 scale-105" : "cyber-chip px-4! py-2! text-soft hover:border-cyan-500/50"}`,
						children: category.label
					}, category.value))
				}),
				filteredProjects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-6 py-3 rounded-full hyper-glass border line-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderGit2, {
							className: "accent-cyan",
							size: 18
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-soft font-light",
							children: "No projects found in this category yet."
						})]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .4 },
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: filteredProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project }, project.id))
				}, filter)
			]
		})
	});
}
//#endregion
//#region src/pages/public/Home.tsx
var stats = [
	{
		value: "5+",
		label: "Years Exp.",
		accent: "border-l-purple-500",
		glow: "rgba(168,85,247,0.4)"
	},
	{
		value: "10+",
		label: "Projects",
		accent: "border-l-cyan-400",
		glow: "rgba(34,211,238,0.4)"
	},
	{
		value: "4+",
		label: "Clients",
		accent: "border-l-blue-500",
		glow: "rgba(96,165,250,0.4)"
	},
	{
		value: "100%",
		label: "Dedication",
		accent: "border-l-emerald-400",
		glow: "rgba(52,211,153,0.4)"
	}
];
var EASE = [
	.22,
	1,
	.36,
	1
];
function Home() {
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const containerVariants = {
		hidden: {},
		show: { transition: { staggerChildren: .12 } }
	};
	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 28
		},
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .65,
				ease: EASE
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen text-strong overflow-x-hidden pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "absolute top-20 left-8 font-mono text-[11px] opacity-0 text-faint hidden xl:block pointer-events-none leading-relaxed z-10",
				initial: {
					opacity: 0,
					x: -20
				},
				animate: {
					opacity: .65,
					x: 0
				},
				transition: {
					duration: 1.2,
					delay: 1
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "import"
						}),
						" pega ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-emerald",
							children: "'pega'"
						}),
						";"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "import"
						}),
						" { ai } ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-emerald",
							children: "'agentic-ai'"
						}),
						";"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "import"
						}),
						" { cloud } ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-purple font-semibold",
							children: "from"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "accent-emerald",
							children: "'aws'"
						}),
						";"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-faint mt-1",
						children: ["// building impact", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "animate-cursor",
							children: "▌"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: heroRef,
				className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "lg:col-span-6 space-y-6",
						variants: containerVariants,
						initial: "hidden",
						animate: "show",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: itemVariants,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full hyper-glass border line-soft text-xs font-semibold text-soft shadow-lg animate-float-smooth",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "accent-amber text-base",
											children: "👋"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Welcome to my digital space" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemVariants,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0] mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-strong block",
										children: "Hi, I'm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "neon-title-gradient block mt-1",
										children: "Somnath"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 mt-4",
									children: [
										"Pega Developer",
										"Agentic AI Explorer",
										"Cloud Enthusiast"
									].map((role, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
										initial: {
											opacity: 0,
											scale: .85
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										transition: {
											delay: .5 + i * .15,
											duration: .4
										},
										className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold hyper-glass border line-soft",
										children: [
											i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
												size: 11,
												className: "accent-cyan"
											}),
											i === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
												size: 11,
												className: "accent-purple"
											}),
											i === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
												size: 11,
												className: "accent-blue"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "neon-shimmer-text",
												children: role
											})
										]
									}, role))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: itemVariants,
								className: "text-sm sm:text-base text-soft leading-relaxed",
								children: "I build intelligent, scalable and cloud-native solutions using Pega Platform, Agentic AI and modern technologies. Passionate about solving complex problems and creating impactful digital experiences."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemVariants,
								className: "flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/projects",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
										whileHover: {
											scale: 1.05,
											boxShadow: "0 0 35px rgba(6,182,212,0.55)"
										},
										whileTap: { scale: .96 },
										className: "neon-btn-primary cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 15 }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore My Work" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/resume",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
										whileHover: { scale: 1.05 },
										whileTap: { scale: .96 },
										className: "neon-btn-secondary cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 15 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download Resume" })]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: itemVariants,
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-emerald-400 animate-glow-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ripple" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold accent-emerald",
									children: "Available for new opportunities"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: itemVariants,
								className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
								children: stats.map(({ value, label, accent, glow }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									whileHover: {
										scale: 1.06,
										boxShadow: `0 0 22px ${glow}`
									},
									transition: {
										type: "spring",
										stiffness: 300
									},
									className: `hyper-glass p-3 rounded-xl text-center border-l-2 ${accent} stat-card-glow cursor-default`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-2xl font-black text-strong animate-number-flicker",
										children: value
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-faint font-medium mt-0.5",
										children: label
									})]
								}, label))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "lg:col-span-6 flex flex-col items-center gap-10 w-full mt-8 lg:mt-0",
						initial: {
							opacity: 0,
							x: 40
						},
						animate: {
							opacity: 1,
							x: 0
						},
						transition: {
							duration: .9,
							delay: .25,
							ease: EASE
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							whileInView: {
								scale: [.96, 1],
								opacity: [0, 1]
							},
							viewport: { once: true },
							transition: { duration: .7 },
							className: "w-full flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStackHexGrid, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: 1,
								duration: .6
							},
							className: "space-y-3 w-full max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								whileHover: {
									scale: 1.02,
									borderColor: "var(--acc-cyan)"
								},
								className: "hyper-glass p-4 rounded-xl font-mono text-[13px] text-soft border border-cyan-500/20 flex items-center justify-between shadow-lg shadow-cyan-500/5 bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-purple-400 font-semibold",
										children: "while"
									}),
									" ",
									"(learn && build) {",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-cyan-400 font-semibold",
										children: "impact++"
									}),
									"; }"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base animate-pulse",
									children: "🚀"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								whileHover: {
									scale: 1.02,
									borderColor: "var(--acc-purple)"
								},
								className: "hyper-glass p-4 rounded-xl text-xs font-mono border border-purple-500/20 flex items-center justify-between shadow-lg shadow-purple-500/5 bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm",
								children: [
									"PLAN",
									"CODE",
									"TEST",
									"DEPLOY",
									"IMPACT"
								].map((step, i, arr) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: [
											"text-purple-400",
											"text-cyan-400",
											"text-blue-400",
											"text-emerald-400",
											"text-pink-400"
										][i] + " font-extrabold tracking-wider",
										children: step
									}), i < arr.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 8,
										className: "text-slate-400 dark:text-slate-600"
									})]
								}, step))
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity },
				className: "relative z-10 mt-20 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cyber-divider mx-auto max-w-4xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							opacity: 0,
							y: 10
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "inline-block px-6 py-2 rounded-full hyper-glass border line-soft text-xs font-semibold text-faint tracking-widest uppercase",
						children: "Expertise Deep Dive"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 space-y-24 pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "about",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "skills",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "pega",
						className: "space-y-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PegaSection, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PegaCloudSection, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgenticAISection, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "experience",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "projects",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
					})
				]
			})
		]
	});
}
//#endregion
export { getSocialLinks as A, updateSocialLink as B, getDashboardStats as C, getProjects as D, getProjectBySlug as E, updateExperience as F, Code as G, FolderGit2 as H, updateLanguage as I, CodeXml as K, updateProject as L, updateAward as M, updateCertification as N, getSiteSettings as O, updateContactInfo as P, updateSiteSettings as R, getContactInfo as S, getLanguages as T, ExternalLink as U, cvSkills as V, Download as W, deleteSkill as _, createAward as a, getAwards as b, createLanguage as c, createSocialLink as d, deleteAward as f, deleteProject as g, deleteLanguage as h, create as i, update as j, getSkills as k, createProject as l, deleteExperience as m, Projects as n, createCertification as o, deleteCertification as p, fallbackProjects as r, createExperience as s, Home as t, createSkill as u, deleteSocialLink as v, getExperiences as w, getCertifications as x, getAll as y, updateSkill as z };
