<script>
    import {base} from '$app/paths';
    
let emailAddress = "";
let isValid = false;
let song = null; // audio song, always appears red but works fine, unsure of meaning behind
let subscribed = false;

// ADDING AUDIO WITH THE HELP FROM THE SVELTE SITE THIS IS THE SONG'S PROPERTIES
const audio = {
    name: 'Wave_ocean',
    audio: `${base}/waveOcean.mp3`
};

//PLAY SONG
function loadSong() {
		song = new Audio (audio.audio);
		song.volume = 0.2; // I DID RESEARCH AND 1 IS THE FULL VOLUME, SO I HAVE IT LOWER FOR USERS WITH HEARING PROBLEMS
		song.play();
		console.log("Audio is playing!");
	}

    // IF YOU CHOOSE TO TURN OFF THE SONG
function stopPlayingtheSong()
{
    song.pause();
    console.log("audioOver");
}
// this will allow users to subscribe to our newsletter
function validateEmail(){
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
isValid = regex.test(emailAddress);
console.log("testing Email Address input by user");
}

</script>



<h1>Welcome to our Whales News Site</h1>
<p>Learn all about these wonderful Aquatic Mammals</p>

<!--help from other classmates-->
<div class="gifBG">
    <div class="overlay"></div>
</div>

<h2> Hey, why not Subscribe to our newsletter!</h2>

<!---INPUT YOUR EMAIL BELOW-->

<input type = "emailAddress" bind:value={emailAddress} on:input={validateEmail} placeholder="Enter Your Email Address">

<!---Real Time Validation Feedback-->
<!---USED CODE FROM LIKE BUTTON ON JAVASCRIPT NOTES, CHANGED TO FIT THE CONTEXT OF A WHALES SITE-->


{#if emailAddress}
{#if isValid}
<!---DONE THIS WAY SO YOU CAN ONLY SUBSCRIBE IF YOUR EMAIL IS VALID-->
<p style="color: green;">✅ Your Email Address is Valid  </p>
<button on:click={() => subscribed = !subscribed}>
    {subscribed ? "🐳You are now Subscribed" : "🐋 Not Subscribed"}
</button>

{:else}
<p style="color: red;">❌ Sorry, your Email Address doesn't seem to be recognized</p> <!---EMAIL IS NOT VALID-->
{/if}
{/if}

{#if subscribed}
<p style ="color: blue;">YOU ARE NOW SUBSCRIBED TO OUR NEWLETTER</p> 
{:else} <!----IF YOU ARE NOT SUBSCRIBED YOU DON'T SEE THE BLUE MESSAGE-->
{/if}

<div class = "buttons">
<!---BUTTONS TO PLAY AND NOT PLAY THE AUDIO-->
<button on:click={loadSong}>Play Song</button> <!---simple buttons-->
<button on:click={stopPlayingtheSong}>Stop playing the Song</button>
</div>

<style>
    h1 {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }

    h2 {
        font-family: 'Courier New', Courier, monospace;
        color: red;
    }

    p {
        font-family: 'Courier New', Courier, monospace;
        color: rgb(0, 0, 0);
    }

    .buttons {
        position: relative;
        margin-top: 20px;
    }

    .buttons button {
        background-color: #007bff; 
        color: white;
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s; 
    }

    .buttons button:hover {
        background-color: #0056b3; 
        transform: scale(1.05); 
    }

    .buttons button:active {
        background-color: #004085; 
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

    @media (max-width: 768px) {
    h1 {
        font-size: 36px;
        text-align: center;
    }

    h2 {
        font-size: 24px;
        text-align: center;
    }

    p {
        font-size: 16px;
        text-align: center;
    }
    }
</style>


<!----GIF BACKGROUND STLYE, NOT TO SELF, NEVER DO THIS AGAIN-->
{@html `<style>
    @keyframes gifs { 
        0%, 10% { 
            background-image: url('${base}/whaleJump.gif');
            opacity: 0.5;
            
        }

        10%, 20% { 
            background-image: url('${base}/orca.gif');
            opacity: 0.5;
            
        }

        20%, 40% { 
            background-image: url('${base}/whaleCrash.gif');
            opacity: 0.5;
        }

        40%, 50% { 
            background-image: url('${base}/whaleAppears.gif');
            opacity: 0.5;
        }

        50%, 60% { 
            background-image: url('${base}/whaleOutlineSwim.gif');
            opacity: 0.5;
        }

        60%, 70% { 
            background-image: url('${base}/dolphin.gif');
            opacity: 0.5;
        }

        70%, 80% { 
            background-image: url('${base}/whaleCrash.gif');
            opacity: 0.5;
        }

        70%, 80% { 
            background-image: url('${base}/waterOrca.gif');
            opacity: 0.5;
        }

        80%, 90% { 
            background-image: url('${base}/whaleSave.gif');
            opacity: 0.5;
        }

        90%, 100% { 
            background-image: url('${base}/whaleUnderwater.gif');
            opacity: 0.5;
            
        }
    }
</style`}

