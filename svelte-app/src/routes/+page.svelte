<script>
let emailAddress = "";
let isValid = false;
let song = null;
// ADDING AUDIO WITH THE HELP FROM THE SVELTE SITE THIS IS THE SONG'S PROPERTIES
const audio = {
    name: 'Wave_ocean',
    audio: "/waveOcean.mp3"
};


function loadSong() {
		song = new Audio (audio.audio);
		song.volume = 0.2; // I DID RESEARCH AND 1 IS THE FULL VOLUME, SO I HAVE IT LOWER FOR USERS WITH HEARING PROBLEMS
		song.play();
		console.log("Audio is playing!");
	}

function stopPlayingtheSong()
{
    song.pause();
    console.log("audioOver");
}
// this will allow users to subscribe to our newsletter
function validateEmail(){
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
isValid = regex.test(emailAddress);
}
</script>

<h1>Welcome to our Whales News Site</h1>
<p>Learn all about these wonderful Aquatic Mammals</p>


<div class="gifBG">
    <div class="overlay"></div>
</div>

<h2> Hey, why not Subscribe to our newsletter!</h2>

<!---INPUT YOUR EMAIL BELOW-->

<input type = "emailAddress" bind:value={emailAddress} on:input={validateEmail} placeholder="Enter Your Email Address">

<!---Real Time Validation Feedback-->

{#if emailAddress}
{#if isValid}
<p style="color: green;">✅ Your Email Address is Valid  </p>
{:else}
<p style="color: red;">❌ Sorry, your Email Address doesn't seem to be recognized</p>
{/if}
{/if}

<!---BUTTONS TO PLAY AND NOT PLAY THE AUDIO-->
<button on:click={loadSong}>Play Song</button>
<button on:click={stopPlayingtheSong}>Stop playing the Song</button>

<style>
    h1 {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
    }


    p {
        font-family: 'Courier New', Courier, monospace;
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

