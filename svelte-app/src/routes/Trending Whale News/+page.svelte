<script>

	import { Card } from "$lib";

</script>

<div class = "strandedWhaleCard">
    <img src = "/beachedWhalesAus.png" alt = "Whales Stranded on the Beach">
    <p>OVER 150 WHALES STRANDED ON THE BEACH, READ NOW!</p>
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
.strandedWhaleCard {
    background: white;
    border-radius: 10px;
    border: 3px solid #007bff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    width: 20%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.strandedWhaleCard > img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
}

.strandedWhaleCard:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}
</style>


