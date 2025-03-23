<script>
    import {onMount} from 'svelte';
    import {Card} from '$lib';
    import {Modal} from '$lib';

    let showModal = false;

    onMount (() => {
        console.log("About Page Loaded");
    });
</script>

<h1> About Our Team</h1>
<p> Jessica Curran, Mikey Holmes and Liam Treacy are 3 students studying "Computing in Interactive Digital Art and Design" in SETU Carlow, this is a second
    year project for the module "Web UI Development". We chose to do our site about News relating to Whales, as we thought it would be fun and interesting</p>


    <div class = "TheTeamGallery">
        <Card title = "We are the masterminds, behind this lovely website">
        </Card> 
        </div>

        <button on:click={() => showModal = true}> Open Modal </button>
        <Modal bind:isOpen={showModal} title= "Welcome"></Modal>

    <style>
        h1 {color: #5aa1ed; 
        font-size: 25px;
        font-family: cursive;}

        p { font-size: 18px;
        font-family: cursive; }

    </style>

<!---INSTEAD OF A CONTACT PAGE, WE WILL HAVE OUR CONTACT INFORMATION IN THE ABOUT PAGE-->