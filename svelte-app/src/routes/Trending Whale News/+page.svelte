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
        description="Read this article about a humpback whale by clicking below"
    /> 
    <Card 
        title = "OVER 150 WHALES STRANDED ON THE BEACH, READ NOW" 
        src="/beachedWhalesAus.png" 
        alt="A number of beached whales stranded on a beach in Australia" 
        description="Read this article about these poor stranded whales by clicking below"
/>

<Card
title = "BREAKING NEWS, AUSTRALIA BEGINS TO EUTHANIZE FALSE KILLER WHALES!"
src="/whales_on_the_beach.png"
alt = "a number of whales stranded on a coastal beach "
description = "Read this article about this event, by clicking the link below"
/>

</div>

<main> 
    <slot />
</main>
<style>
    main {
        padding: 2rem;
        text-align: center;
    }

    .whaleNews {
            display: flex;
            align-content: center;
            justify-content: space-between
        }
</style>