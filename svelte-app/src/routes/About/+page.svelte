<script>
    import {onMount} from 'svelte';
    import {Card} from '$lib';
    import {Modal} from '$lib';
    import {base} from '$app/paths';

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
            src="{base}/teamMemberMikey.jpg" 
            alt="Hello, I'm Mikey Holmes, this is my portrait" 
            description="Hi, welcome to our Whale Website. My name is Mikey Holmes, I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00300796@setu.ie, I chose this course because I have a good understanding of computing. I’m especially interested in digital art and design, and I hope it will help me develop my skills in different computing areas and build a great career."
        /> 
        <Card 
            title = "I am one of the masterminds, behind this lovely website" 
            src="{base}/teamMemberJessica.jpg" 
            alt="Hello, I'm Jessica Curran, this is my portrait" 
            description="Hi, welcome to our Whale Website. My name is Jessica Curran, I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00300855@setu.ie, I chose this course as I have always had an interest in art and all things creative and thought this course might help develop my skills further."
        />
        <Card 
            title = "I am one of the masterminds, behind this lovely website" 
            src="{base}/teamMemberLiam.jpg" 
            alt="Hello, I'm Liam Treacy, this is my portrait" 
            description="Hi, welcome to our Whale Website. My name is Liam Treacy I am 21 years old, and I am a student of SETU Carlow, you can contact me at C00298242@setu.ie. The reason I chose to study IDAD in carlow, was because I wanted to have a course where I did not just specialise in one topic, but rather learn many topics, providing a hopefully promising career to come."
        />
    </div>
        <button on:click={() => showModal = true}> Check This Out </button>
        <Modal bind:isOpen={showModal} title= "We appreciate the help"></Modal>

    <style>
        h1 {color: #5aa1ed; 
        font-size: 25px;
        font-family: 'Courier New', Courier, monospace;
        border-bottom: #5aa1ed;}

        p { font-size: 18px;
            font-family: 'Courier New', Courier, monospace; }

        .team-gallery { /*PUT THEM ALL IN ONE DIV CLASS */
            display: flex; 
            align-content: center;
            justify-content: space-between; /*allows white space */
        }
        

        @media (max-width: 768px) {
    .team-gallery {
      flex-direction: column; /* TO HAVE THEM APPEAR ONE ON TOP OF ANOTHER */
      gap: 25px;
      padding: 10px;
      align-items: center;
      display: flex;
    }

    h1 {
        font-size: 50px;
    }

    p {
        font-size: 25px;
    }
}

    </style>

<!---INSTEAD OF A CONTACT PAGE, WE WILL HAVE OUR CONTACT INFORMATION IN THE ABOUT PAGE-->