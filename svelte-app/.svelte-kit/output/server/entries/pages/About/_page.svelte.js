import { f as bind_props, h as copy_payload, i as assign_payload, c as pop, p as push, d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
/* empty css                                                  */
import { C as Card } from "../../../chunks/Card.js";
import { f as fallback } from "../../../chunks/utils.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function Modal($$payload, $$props) {
  let isOpen = fallback($$props["isOpen"], false);
  let title = fallback($$props["title"], "Modal Title");
  if (isOpen) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="modal-overlay svelte-ka2amu"><div class="modal-content svelte-ka2amu"><h2>${escape_html(title)}</h2> <p>Special Thanks to our lecturers for WEB UI Design, Libor Zachoval and Milu Phillip</p> <button class="svelte-ka2amu">Close</button></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { isOpen, title });
}
function _page($$payload, $$props) {
  push();
  let showModal = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<h1 class="svelte-1bkc4gw">About Our Team</h1> <p class="svelte-1bkc4gw">Jessica Curran, Mikey Holmes and Liam Treacy are 3 students studying "Computing in Interactive Digital Art and Design" in SETU Carlow, this is a second
    year project for the module "Web UI Development". We chose to do our site about News relating to Whales, as we thought it would be fun and interesting.</p> <div class="team-gallery svelte-1bkc4gw">`;
    Card($$payload2, {
      title: "I am one of the masterminds, behind this lovely website",
      src: `${stringify(base)}/teamMemberMikey.jpg`,
      alt: "Hello, I'm Mikey Holmes, this is my portrait",
      description: "Hi, welcome to our Whale Website. My name is Mikey Holmes, I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00300796@setu.ie, I chose this course because I have a good understanding of computing. I’m especially interested in digital art and design, and I hope it will help me develop my skills in different computing areas and build a great career."
    });
    $$payload2.out += `<!----> `;
    Card($$payload2, {
      title: "I am one of the masterminds, behind this lovely website",
      src: `${stringify(base)}/teamMemberJessica.jpg`,
      alt: "Hello, I'm Jessica Curran, this is my portrait",
      description: "Hi, welcome to our Whale Website. My name is Jessica Curran, I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00300855@setu.ie, I chose this course as I have always had an interest in art and all things creative and thought this course might help develop my skills further."
    });
    $$payload2.out += `<!----> `;
    Card($$payload2, {
      title: "I am one of the masterminds, behind this lovely website",
      src: `${stringify(base)}/teamMemberLiam.jpg`,
      alt: "Hello, I'm Liam Treacy, this is my portrait",
      description: "Hi, welcome to our Whale Website. My name is Liam Treacy I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00298242@setu.ie. The reason I chose to study IDAD in carlow, was because I wanted to have a course where I did not just specialise in one topic, but rather learn many topics, providing a hopefully promising career to come."
    });
    $$payload2.out += `<!----></div> <button>Check This Out</button> `;
    Modal($$payload2, {
      title: "We appreciate the help",
      get isOpen() {
        return showModal;
      },
      set isOpen($$value) {
        showModal = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
