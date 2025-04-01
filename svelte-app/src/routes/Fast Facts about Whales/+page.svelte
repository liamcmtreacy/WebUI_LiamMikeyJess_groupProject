<!--below we will have the code to add and remove your very own fun facts-->


<h1> Here are some rapid facts about Whales. </h1>

<h2> 01. A Whale can hold its breath for around 20 minutes, for reference that is 2 minutes shorter than an episode of 'The Simpsons' </h2>
<h2> 02. Orca, also known as Killer Whales, are actually closer relations to Dolphins, than Whales. </h2>
<h2> 03. In the 1998 Video Game 'Sonic Adventure', an Orca famously attacks Sonic in the game's opening stage "Emerald Coast", this moment has since become an iconic scene in Gaming. It was referenced in the franchise's 15th anniversary title 'Sonic The Hedgehog' with the opening level 'Wave Ocean' </h2>
<h2> 04. Whales cannot chew food, due to the fact that they do not have Molars, they are the teeth which help many creatures chew </h2>
<h2> 05. The Atlantic Ocean has the most whales of any ocean </h2>
<h2> 06. The whales with the longest lifespans are Humpback Whales and Blue Whales, they live for 80-90 years</h2>
<h2> 07. Whales are divided into 2 types, toothed and balleen they are determined, based on how they feed. An example of a toothed whale is a Dolphin, an exmaple of a baleen whale is the Blue Whale.</h2>
<h2> 08. Killer Whales are very social creatures</h2>
<h2> 09. Captive Whales sometimes mimic human speech</h2>
<h2> 10. Most Whales have 3-4 Stomachs</h2>
<h2> 11. Sperm Whales can reach a top speed of 36KPH</h2>
<h2> 12. Sperm Whales have the heaviest brains on earth, with their brains weighing 9KG</h2>
<h2> 13. According to Chinese Folklore and Legend, the god of the sea is depicted as a large whale which has human limbs</h2>

<script>
    let funFact = "";
    let tasks = ['FUN FACTS'];

    function addTask() {
        tasks = [...tasks, 'New Task ${tasks.length + 1}']; //ADDS NEW TASK
    }

    function removeTask(index) {
        tasks = tasks.filter((_, i) => i !==index);
    }
</script>

<ul>
    {#each tasks as task, index} 
    <li> {task} <button on:click = {() => removeTask(index)}> X </button> </li>
    {/each}
</ul>

<button on:click={addTask}> + ADD YOUR VERY OWN FUN FACTS </button>
<input type = "funFact" bind:value={funFact} placeholder="Enter Your Fun Facts Here">


<style>

h1 {
    font-size: 30px;
    font-family:cursive;
    color: black;
}

    h2 {
        font-size: 14px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: black;
        font: bold;
        margin-left: auto;
        padding: 10px;
    }
</style>