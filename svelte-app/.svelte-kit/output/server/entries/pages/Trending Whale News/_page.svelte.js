import { e as slot, c as pop, p as push, d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
/* empty css                                                  */
import { C as Card } from "../../../chunks/Card.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="whaleNews svelte-1e1a6zr">`;
  Card($$payload, {
    title: "HUMPBACK WHALE, DEAD ON DELAWARE BEACH, AFTER WASHING ON SHORE, READ NOW!",
    src: `${stringify(base)}/deadHumpbackWhale.png`,
    alt: "Humpback Whale, dead on a beach",
    description: "A dead humpback whale washed ashore on Delaware beach, drawing attention from local authorities and marine experts. \r\n    Beachgoers discovered the massive marine mammal early in the morning, prompting an immediate investigation. Scientists from the \r\n    Marine Mammal Stranding Network and NOAA are assessing the whale's condition. Preliminary observations suggest it had been dead \r\n    for days, showing signs of possible injury or illness. A necropsy will determine the cause of death. Humpback whales face threats\r\n    from ship strikes, fishing gear entanglement, and environmental factors. NOAA has reported several whale fatalities along the\r\n    Atlantic coast, raising concerns about conservation. Local residents and wildlife groups have expressed sorrow, urging stronger\r\n    efforts to protect marine life. Authorities advise the public to keep a safe distance while experts investigate.This tragic\r\n    event highlights the ongoing challenges marine wildlife faces in changing oceans."
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "OVER 150 WHALES STRANDED ON THE BEACH, READ NOW",
    src: `${stringify(base)}/beachedWhalesAus.png`,
    alt: "A number of beached whales stranded on a beach in Australia",
    description: "In February , a mass stranding of over 150 false\r\n    killer whales occurred on a remote beach near Arthur River on Tasmania's\r\n    northwest coast. Marine experts and volunteers worked tirelessly to assess\r\n    and assist the stranded whales. Despite their efforts, only 90 whales\r\n    remained alive by the following day. Due to challenging weather conditions\r\n    hindering rescue attempts, authorities made the difficult decision to \r\n    euthanize the surviving whales to prevent further suffering.\r\n    This incident marks one of the largest mass strandings in Australian \r\n    history. In 2020, a similar event involved 470 long-finned pilot whales.\r\n    While the exact causes of such strandings remain uncertain, factors may\r\n    include coastal topography, social dynamics within whale pods, and \r\n    environmental influences. Investigations continue to understand these \r\n    events better and develop strategies to prevent future occurrences."
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    title: "Whale Populations on the Rise: A Conservation Triumph",
    src: `${stringify(base)}/whalejumpimage.jpg`,
    alt: "a number of whales stranded on a coastal beach ",
    description: "In recent years, whale populations have shown remarkable signs of recovery,\r\n    underscoring the success of global conservation efforts. Off the coast of Australia,\r\n    humpback whale numbers have surged by 57% over the past year. This resurgence has led\r\n    scientists to estimate that the current population may surpass pre-whaling numbers in\r\n    the Pacific. Such a rebound is a testament to the effectiveness of international\r\n    whaling bans and ongoing protection measures. Similarly, fin whales near Antarctica's\r\n    Elephant Island have been observed feeding in large groups, with gatherings of up to\r\n    150 individuals. This behavior, rare in the 20th century, highlights the positive\r\n    impact of the 1982 commercial whaling ban. The return of these whales not only enriches\r\n    marine biodiversity but also plays a crucial role in the ocean's carbon cycle.​"
  });
  $$payload.out += `<!----></div> <main class="svelte-1e1a6zr"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main>`;
  pop();
}
export {
  _page as default
};
