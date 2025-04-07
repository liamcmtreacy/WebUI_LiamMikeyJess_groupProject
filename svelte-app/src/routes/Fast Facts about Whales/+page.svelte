<script>
    let funFact = "";
    let tasks = ['CUSTOM FUN FACTS'];

    function addFact() {
        tasks = [...tasks, `${tasks.length} ${funFact}`]; //ADDS NEW TASK
    }

    function removeFact(index) {
        tasks = tasks.filter((_, i) => i !==index);
    }
</script>
<div class = "styleGrid">
<h1> Here are some rapid facts about Whales. </h1>

<div class="factCard"><h2> 01. </h2> <h3> A Whale can hold its breath for around 20 minutes, for reference that is 2 minutes shorter than an episode of 'The Simpsons' </h3></div>
<div class="factCard"><h2> 02. </h2> <h3> Orca, also known as Killer Whales, are actually closer relations to Dolphins, than Whales. </h3></div>
<div class="factCard"><h2> 03. </h2> <h3> In the 1998 Video Game 'Sonic Adventure', an Orca famously attacks Sonic in the game's opening stage "Emerald Coast", this moment has since become an iconic scene in Gaming. It was referenced in the franchise's 15th anniversary title 'Sonic The Hedgehog' with the opening level 'Wave Ocean' </h3></div>
<div class="factCard"><h2> 04. </h2> <h3> Whales cannot chew food, due to the fact that they do not have Molars, they are the teeth which help many creatures chew </h3></div>
<div class="factCard"><h2> 05. </h2> <h3> The Atlantic Ocean has the most whales of any ocean </h3></div>
<div class="factCard"><h2> 06. </h2> <h3> The whales with the longest lifespans are Humpback Whales and Blue Whales, they live for 80-90 years</h3></div>
<div class="factCard"><h2> 07. </h2> <h3> Whales are divided into 2 types, toothed and balleen they are determined, based on how they feed. An example of a toothed whale is a Dolphin, an exmaple of a baleen whale is the Blue Whale.</h3></div>
<div class="factCard"><h2> 08. </h2> <h3> Killer Whales are very social creatures </h3></div>
<div class="factCard"><h2> 09. </h2> <h3> Captive Whales sometimes mimic human speech </h3></div>
<div class="factCard"><h2> 10. </h2> <h3> Most Whales have 3-4 Stomachs </h3></div>
<div class="factCard"><h2> 11. </h2> <h3> Sperm Whales can reach a top speed of 36KPH </h3></div>
<div class="factCard"><h2> 12. </h2> <h3> Sperm Whales have the heaviest brains on earth, with their brains weighing 9KG </h3></div>
<div class="factCard"><h2> 13. </h2> <h3> According to Chinese Folklore and Legend, the god of the sea is depicted as a large whale which has human limbs</h3></div>

<ul>
    {#each tasks as task, index} 
    <li> {task} <button on:click = {() => removeFact(index)}> ⛔ </button> </li>
    {/each}
</ul>

<div class = "factButtons">
<button on:click={addFact}> ➕ ADD YOUR VERY OWN FUN FACTS </button>
</div> <!---END THE DIV BUTTONS CLASS-->

<div class="input">
<input type = "funFact" bind:value={funFact} placeholder="Enter Your Fun Facts Here">
</div> <!--INPUT DIV-->
</div> <!---END STYLE GRID-->

<style>

.styleGrid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px));
        gap: 10px;
        background-color: #1e676b88;
        padding: 30px;
    }

h1 {
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    color: rgb(0, 0, 0);
    border-bottom: 1px solid rgb(0, 0, 0);
}


    .factCard {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    padding: 20px;
    width: 90%;
    max-width: 600px;
    transition: transform 0.2s ease-in-out;
}

.factCard:hover {
    transform: translateY(-5px);
}

.factCard h2 {
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    color: #007bff;
    margin-bottom: 8px;
}

.factCard h3 {
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace;
    color: #333;
    line-height: 1.5;
    margin: 0;
}

    .factButtons {
    width: auto;
    height: auto;
     }
 
     .factButtons button {
         background-color: #007bff; 
         color: white;
         font-size: 16px;
         padding: 12px 24px;
         border: none;
         border-radius: 8px;
         cursor: pointer;
         transition: background-color 0.3s, transform 0.2s; 
     }
 
     .factButtons button:hover {
         background-color: #0056b3; 
         transform: scale(1.05); 
     }
 
     .factButtons button:active {
         background-color: #004085; 
     }

     .input {
        height: auto;
        width: auto;
     }
 
/*MOBILE RESPOVINESS */
</style>