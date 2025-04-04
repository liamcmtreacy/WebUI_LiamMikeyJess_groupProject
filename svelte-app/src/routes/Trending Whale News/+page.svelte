<script>
    import {onMount} from 'svelte';
    import {Card} from '$lib';
    import {Modal} from '$lib';

    let showModal = false;

    onMount (() => {
        console.log("About Page Loaded");
    });
    </script>

<div class = "whaleNews">
    <Card 
    title = "HUMPBACK WHALE, DEAD ON DELAWARE BEACH, AFTER WASHING ON SHORE, READ NOW!" 
    src="/deadHumpbackWhale.png" 
    alt="Humpback Whale, dead on a beach" 
    description="A dead humpback whale washed ashore on Delaware beach, drawing attention from local authorities and marine experts. 
    Beachgoers discovered the massive marine mammal early in the morning, prompting an immediate investigation. Scientists from the 
    Marine Mammal Stranding Network and NOAA are assessing the whale's condition. Preliminary observations suggest it had been dead 
    for days, showing signs of possible injury or illness. A necropsy will determine the cause of death. Humpback whales face threats
    from ship strikes, fishing gear entanglement, and environmental factors. NOAA has reported several whale fatalities along the
    Atlantic coast, raising concerns about conservation. Local residents and wildlife groups have expressed sorrow, urging stronger
    efforts to protect marine life. Authorities advise the public to keep a safe distance while experts investigate.This tragic
    event highlights the ongoing challenges marine wildlife faces in changing oceans."
    /> 
    
    <Card 
    title = "OVER 150 WHALES STRANDED ON THE BEACH, READ NOW" 
    src="/beachedWhalesAus.png" 
    alt="A number of beached whales stranded on a beach in Australia" 
    description="In February , a mass stranding of over 150 false
    killer whales occurred on a remote beach near Arthur River on Tasmania's
    northwest coast. Marine experts and volunteers worked tirelessly to assess
    and assist the stranded whales. Despite their efforts, only 90 whales
    remained alive by the following day. Due to challenging weather conditions
    hindering rescue attempts, authorities made the difficult decision to 
    euthanize the surviving whales to prevent further suffering.
    This incident marks one of the largest mass strandings in Australian 
    history. In 2020, a similar event involved 470 long-finned pilot whales.
    While the exact causes of such strandings remain uncertain, factors may
    include coastal topography, social dynamics within whale pods, and 
    environmental influences. Investigations continue to understand these 
    events better and develop strategies to prevent future occurrences."
/>

    <Card
    title = "Whale Populations on the Rise: A Conservation Triumph"
    src="/whalejumpimage.jpg"
    alt = "a number of whales stranded on a coastal beach "
    description = "In recent years, whale populations have shown remarkable signs of recovery,
    underscoring the success of global conservation efforts. Off the coast of Australia,
    humpback whale numbers have surged by 57% over the past year. This resurgence has led
    scientists to estimate that the current population may surpass pre-whaling numbers in
    the Pacific. Such a rebound is a testament to the effectiveness of international
    whaling bans and ongoing protection measures. Similarly, fin whales near Antarctica's
    Elephant Island have been observed feeding in large groups, with gatherings of up to
    150 individuals. This behavior, rare in the 20th century, highlights the positive
    impact of the 1982 commercial whaling ban. The return of these whales not only enriches
    marine biodiversity but also plays a crucial role in the ocean's carbon cycle.​"
    />

</div>

<main> 
    <slot />
</main>
<style>
    main {
        padding: 2rem;
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
    }

    .whaleNews {
            display: flex;
            font-family: 'Courier New', Courier, monospace;;
            align-content: center;
            justify-content: space-between
        }
</style>