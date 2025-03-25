<script>
    import {onMount} from 'svelte';
    import {Card} from '$lib';
    import {Modal} from '$lib';

    let showModal = false;

    onMount (() => {
        console.log("About Page Loaded");
    });
    </script>

<div class = "team-gallery">
    <Card 
        title = "HUMPBACK WHALE, DEAD ON DELAWARE BEACH, AFTER WASHING ON SHORE, READ NOW!" 
        src="/deadHumpbackWhale.png" 
        alt="Humpback Whale, dead on a beach" 
        description="Hi, welcome to our Whale Website. My name is Mikey Holmes, I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00300796@setu.ie"
    /> 
    <Card 
        title = "OVER 150 WHALES STRANDED ON THE BEACH, READ NOW" 
        src="/beachedWhalesAus.png" 
        alt="A number of beached whales stranded on a beach in Australia" 
        description="Hi, welcome to our Whale Website. My name is Jessica Curran, I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00300855@setu.ie"
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

    p {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 13px;
        font-weight: bold;
    }
</style>