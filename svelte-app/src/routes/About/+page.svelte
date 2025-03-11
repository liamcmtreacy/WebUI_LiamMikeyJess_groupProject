<script>
    import {onMount} from 'svelte';
    import {Card} from '$lib';

    onMount (() => {
        console.log("About Page Loaded");
    });
</script>

<h1> About Our Team</h1>
<p> Jessica, Mikey and Liam, are 3 students studying "Computing in Interactive Digital Art and Design" in SETU Carlow, this is a second
    year project for the module "Web UI Development". We chose to do our site about News relating to Whales, as we thought it would be fun and interesting</p>

    <style>
        h1 {color: #5aa1ed; 
        font-size: 25px;}

        p { font-size: 18px; }

    </style>
<div class = "TheTeamGallery">
<Card title = "We are the masterminds, behind this lovely website">
</Card> 
</div>