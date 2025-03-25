<script>

	import { Footer } from "$lib";

</script>

<h1>Welcome to our Whales News Site</h1>
<p>Learn all about these wonderful Aquatic Mammals</p>


<header> 
    <nav>
<ul>
    <li><a href = "/"> Home</a></li>
    <li><a href = "/About"> About The Team</a></li>
    <li><a href = "/Trending Whale News"> Trending News About Whales</a></li>
    <li><a href = "/Whales in History"> Famous Whales In History </a></li>
    <li><a href = "/Fast Facts about Whales">Fun Facts about Whales</a></li>
</ul>
    </nav>
</header>

<div class="gifBG">
    <div class="overlay"></div>
</div>

<style>
    h1 {
        font-family: cursive;
        font-weight: bold;
    }


    p {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: rgb(159, 159, 255);
    }

    /* FOR THE GIF BACKGROUND I RECIEVED HELP FROM PAVEL, ELISKA AND JAKE */
    .gifBG {
        position: fixed; 
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background-size: cover;
        background-position: center;
        animation: gifs 25s infinite steps(1);
        overflow: hidden;
        opacity: 0.5;
    }

    @keyframes gifs {
        0%, 49% { 
            background-image: url('/whaleDive.gif');
            
        }

        50%, 100% { 
            background-image: url('/whaleUnderwater.gif');
            
        }
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }

    nav ul li {
        margin: 0 15px;
    }

    nav ul li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    nav ul li a:hover {
        color: navy;
    }

    nav a:hover {
        cursor: pointer;
        background-color: rgba(8, 8, 66, 0.753);
    }

</style>

