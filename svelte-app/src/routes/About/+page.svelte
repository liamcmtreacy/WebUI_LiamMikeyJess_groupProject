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
    year project for the module "Web UI Development". We chose to do our site about News relating to Whales, as we thought it would be fun and interesting.</p>

<!---help from Libor restructing this site-->
    <div class = "team-gallery">
        <Card 
            title = "I am one of the masterminds, behind this lovely website" 
            src="/teamMemberMikey.jpg" 
            alt="Hello, I'm Mikey Holmes, this is my portrait" 
            description="Hi, welcome to our Whale Website. My name is Mikey Holmes, I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00300796@setu.ie"
        /> 
        <Card 
            title = "I am one of the masterminds, behind this lovely website" 
            src="/teamMemberJessica.jpg" 
            alt="Hello, I'm Jessica Curran, this is my portrait" 
            description="Hi, welcome to our Whale Website. My name is Jessica Curran, I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00300855@setu.ie"
        />
        <Card 
            title = "I am one of the masterminds, behind this lovely website" 
            src="/teamMemberLiam.jpg" 
            alt="Hello, I'm Liam Treacy, this is my portrait" 
            description="Hi, welcome to our Whale Website. My name is Liam Treacy I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00298242@setu.ie. The reason I chose to study IDAD in carlow, was because I wanted to have a course where I did not just specialise in one topic, but rather learn many topics, providing a hopefully promising career to come."
        />
    </div>
        <button on:click={() => showModal = true}> Open Modal </button>
        <Modal bind:isOpen={showModal} title= "We appreciate the help"></Modal>

    <style>
        h1 {color: #5aa1ed; 
        font-size: 25px;
        font-family: cursive;
        border-bottom: #5aa1ed;}

        p { font-size: 18px;
        font-family: cursive; }

        .team-gallery {
            display: flex;
            align-content: center;
            justify-content: space-between
        }
    </style>

<!---INSTEAD OF A CONTACT PAGE, WE WILL HAVE OUR CONTACT INFORMATION IN THE ABOUT PAGE-->