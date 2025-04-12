import { d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload) {
  $$payload.out += `<h1 class="svelte-gacmn6">FAMOUS WHALES IN HISTORY</h1> <div class="grid svelte-gacmn6"><a${attr("href", `${base}/MobyDick`)}><p class="svelte-gacmn6">Learn all about Herman Melville's character "Moby Dick"</p> <img id="MobyDick"${attr("src", `${stringify(base)}/mobyDickWHALE.jpg`)} alt="Moby Dick book" class="svelte-gacmn6"></a> <a${attr("href", `${base}/340_Ton_Whale`)}><p class="svelte-gacmn6">Learn all about Peructus Collosus</p> <img id="collosus"${attr("src", `${stringify(base)}/skyNewsWhale.jpg`)} alt="An ancient depiction of what is believed to be the largest whale of all time, who is grey in color" class="svelte-gacmn6"></a> <a${attr("href", `${base}/freewilly`)}><p class="svelte-gacmn6">Learn all about FreeWilly</p> <img id="freewilly"${attr("src", `${stringify(base)}/freewilly.jpg`)} alt="Orca whale from FreeWilly movie" class="svelte-gacmn6"></a></div>`;
}
export {
  _page as default
};
