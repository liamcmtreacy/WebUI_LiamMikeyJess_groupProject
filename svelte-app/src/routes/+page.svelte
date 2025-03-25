<script>

</script>

<h1>Welcome to our Whales News Site</h1>
<p>Learn all about these wonderful Aquatic Mammals</p>


<div class="gifBG">
    <div class="overlay"></div>
</div>

<style>
    h1 {
        font-family: cursive;
        font-weight: bold;
    }


    p {
        font-family:cursive;
        color: rgb(0, 0, 0);
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
        z-index: -10000;
    }

    @keyframes gifs {
        0%, 50% { 
            background-image: url('/whaleDive.gif');
            opacity: 0.5;
            
        }

        50%, 100% { 
            background-image: url('/whaleUnderwater.gif');
            opacity: 0.5;
            
        }
    }

</style>

