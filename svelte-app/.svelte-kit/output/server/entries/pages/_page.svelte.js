import { a as attr } from "../../chunks/attributes.js";
import { c as pop, p as push } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload, $$props) {
  push();
  let emailAddress = "";
  $$payload.out += `<h1 class="svelte-1u1pgfh">Welcome to our Whales News Site</h1> <p class="svelte-1u1pgfh">Learn all about these wonderful Aquatic Mammals</p> <div class="gifBG svelte-1u1pgfh"><div class="overlay"></div></div> <h2 class="svelte-1u1pgfh">Hey, why not Subscribe to our newsletter!</h2> <input type="emailAddress"${attr("value", emailAddress)} placeholder="Enter Your Email Address">  `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="buttons svelte-1u1pgfh"><button class="svelte-1u1pgfh">Play Song</button> <button class="svelte-1u1pgfh">Stop playing the Song</button></div>  ${html(`<style>
    @keyframes gifs { 
        0%, 10% { 
            background-image: url('${base}/whaleJump.gif');
            opacity: 0.5;
            
        }

        10%, 20% { 
            background-image: url('${base}/orca.gif');
            opacity: 0.5;
            
        }

        20%, 40% { 
            background-image: url('${base}/whaleCrash.gif');
            opacity: 0.5;
        }

        40%, 50% { 
            background-image: url('${base}/whaleAppears.gif');
            opacity: 0.5;
        }

        50%, 60% { 
            background-image: url('${base}/whaleOutlineSwim.gif');
            opacity: 0.5;
        }

        60%, 70% { 
            background-image: url('${base}/dolphin.gif');
            opacity: 0.5;
        }

        70%, 80% { 
            background-image: url('${base}/whaleCrash.gif');
            opacity: 0.5;
        }

        70%, 80% { 
            background-image: url('${base}/waterOrca.gif');
            opacity: 0.5;
        }

        80%, 90% { 
            background-image: url('${base}/whaleSave.gif');
            opacity: 0.5;
        }

        90%, 100% { 
            background-image: url('${base}/whaleUnderwater.gif');
            opacity: 0.5;
            
        }
    }
</style`)}`;
  pop();
}
export {
  _page as default
};
