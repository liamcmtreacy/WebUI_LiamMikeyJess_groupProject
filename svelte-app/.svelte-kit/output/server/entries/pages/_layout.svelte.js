import { d as stringify, e as slot } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
/* empty css                                               */
import { a as attr } from "../../chunks/attributes.js";
import "clsx";
function Header($$payload) {
  $$payload.out += `<header class="svelte-1i95o2n"><div class="logo"><img${attr("src", `${stringify(base)}/whaleLogo.png`)} alt="logo with a small grey whale " class="svelte-1i95o2n"></div> `;
  Navigation($$payload);
  $$payload.out += `<!----></header>`;
}
function Navigation($$payload) {
  $$payload.out += `<nav class="svelte-1sqzqgd"><ul class="svelte-1sqzqgd"><li class="svelte-1sqzqgd"><a${attr("href", `${base}/`)} class="svelte-1sqzqgd">Home Page</a></li> <li class="svelte-1sqzqgd"><a${attr("href", `${base}/Trending Whale News`)} class="svelte-1sqzqgd">Trending News About Whales</a></li> <li class="svelte-1sqzqgd"><a${attr("href", `${base}/Fast Facts about Whales`)} class="svelte-1sqzqgd">Fun Facts about Whales</a></li> <li class="svelte-1sqzqgd"><a${attr("href", `${base}/Whales in History`)} class="svelte-1sqzqgd">Famous Whales In History</a></li> <li class="svelte-1sqzqgd"><a${attr("href", `${base}/About`)} class="svelte-1sqzqgd">About The Team</a></li></ul></nav>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-dlnv2s"><h4>© 2025, The World of Whales. All Rights Reserved</h4></footer>`;
}
function _layout($$payload, $$props) {
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-12ui1mb"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
