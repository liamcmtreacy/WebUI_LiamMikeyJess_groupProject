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
        0%, 10% { 
            background-image: url('/whaleJump.gif');
            opacity: 0.5;
            
        }

        10%, 20% { 
            background-image: url('/orca.gif');
            opacity: 0.5;
            
        }

        20%, 40% { 
            background-image: url('/whaleCrash.gif');
            opacity: 0.5;
        }

        40%, 50% { 
            background-image: url('/whaleAppears.gif');
            opacity: 0.5;
        }

        50%, 60% { 
            background-image: url('/whaleOutlineSwim.gif');
            opacity: 0.5;
        }

        60%, 70% { 
            background-image: url('/dolphin.gif');
            opacity: 0.5;
        }

        70%, 80% { 
            background-image: url('/whaleCrash.gif');
            opacity: 0.5;
        }

        70%, 80% { 
            background-image: url('/waterOrca.gif');
            opacity: 0.5;
        }

        80%, 90% { 
            background-image: url('/whaleSave.gif');
            opacity: 0.5;
        }

        90%, 100% { 
            background-image: url('/whaleUnderwater.gif');
            opacity: 0.5;
            
        }
    }

</style>

