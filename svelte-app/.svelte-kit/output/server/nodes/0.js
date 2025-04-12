import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C6cRvPjI.js","_app/immutable/chunks/Bm7MfWfw.js","_app/immutable/chunks/BVni4JXR.js","_app/immutable/chunks/BlTFDyke.js","_app/immutable/chunks/CPhqU4R1.js","_app/immutable/chunks/RVofVOGH.js","_app/immutable/chunks/D6sdbuEL.js"];
export const stylesheets = ["_app/immutable/assets/0.DixzrEdU.css","_app/immutable/assets/Modal.DCp5YQ5q.css"];
export const fonts = [];
