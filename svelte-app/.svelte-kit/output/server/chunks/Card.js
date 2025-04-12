import { f as bind_props, c as pop, p as push } from "./index.js";
/* empty css                                    */
import { f as fallback } from "./utils.js";
import { a as attr } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
function Card($$payload, $$props) {
  push();
  let title = fallback($$props["title"], "Card Title");
  let src = fallback($$props["src"], "");
  let alt = fallback($$props["alt"], "");
  let description = fallback($$props["description"], "Description");
  $$payload.out += `<div class="Card svelte-366625"><img${attr("src", src)}${attr("alt", alt)} class="svelte-366625"> <div class="content svelte-366625"><h2 class="svelte-366625">${escape_html(title)}</h2></div> <p class="svelte-366625">${escape_html(description.substring(0, 100) + "...")}</p> <button class="read-more svelte-366625">${escape_html("Read More")}</button></div>`;
  bind_props($$props, { title, src, alt, description });
  pop();
}
export {
  Card as C
};
