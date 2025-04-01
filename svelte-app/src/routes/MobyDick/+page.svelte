<script>
import {Modal} from '$lib';
import {Footer} from '$lib';
</script>

<h1> Moby Dick, by Herman Melville</h1>


<h2> What is Moby Dick?</h2> 
<h3>Moby Dick is an 1851 Epic Novel written by Herman Melville. It follows the leader of Whaling Ship, Captain Ahab,
    who is determined to hunt down and kill the legendary white sperm whale "Moby Dick". It was published on October 18th 1851 in the UK
    and then the following month on November 14th, 1851 in the US, with a 210,000 word count.
</h3>

<img id = "bookCover" src = "/mobyDickShip.jpg" alt = "Moby Dick eating part of a ship">

<h2> How popular was Moby Dick at the time?</h2>
<h3> During Herman Melville's life, only 3715 copies of Moby Dick were sold, the book was a flop! Earning only $1259 for Melville</h3>

<h2>Why is Moby Dick popular today?</h2>
<h3>During the early 20th century, critics began to rediscover Herman Melville's work, they quickly hailed his work as classics of American
    Literature. 
</h3>

<h2> Moby Dick in Pop Culture</h2>
<h3> In 1956, Moby Dick was adapted for a feature length film by Warner Bros, starring Hollywood Superstar Gregory Peck
</h3>


<h3>The famous coffee chain Starbucks was actually named after a character in Moby Dick, a character in the novel named Starbuck who 
    was the first mate of the pequod.
</h3>
<img id = "starbucks" src = "/starbucks.png" alt = "Starbucks Logo of a green lady, on a white background">

<h3>Moby Dick has also made several appearences in animated series, including Family Guy, Futurama, Tom and Jerry and The Simpsons</h3>

<img id = "simpsons" src = "/simpsonsMDbook.png" alt = "Martin Prince, from the simpsons reading Moby Dick">
<img id = "family_guy" src = "/FGMD.png" alt = "Peter Griffin sitting at the dinner table with Moby Dick">
<img id = "tom_and_jerry" src = "/DickyMoe.jpg" alt = "a pirate captain obsessed with catching Dicky Moe, a parody of Moby Dick">

<style>
    h1 {
        margin: auto;
        max-width: fit-content;
        font-family: cursive;
        font-size: 30px;
        color: rgb(0, 0, 0);
        font-weight: bold;
    }

    h2 {
        margin: auto;
        max-width: fit-content;
        font-family: cursive;
        font-size: 18px;
        color: rgb(0, 0, 0);
    }

    h3 {
        margin: auto;
        max-width: fit-content;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 16px;
        color: rgb(0, 0, 0);
    }

    #starbucks {
    width: 300px;
    height: auto;
    border: 2px solid rgb(0, 0, 0);
    margin-left: auto;

    }

    #bookCover {
        margin: auto;
        width: 250px;
        height: auto;
        border: 2px solid black;
        display: flex;
    }

    #simpsons {
        border: 1px solid black;
        width: 250px;
        height: 250px;
    }

    #family_guy {
        border: 1px solid black;
        width: 250px;
        height: 250px;
    }

    #tom_and_jerry {
        border: 1px solid black;
        width: 250px;
        height: 250px;
    }

    /*MOBILE RESPOVINESS */
.container {
  width: 80%;
  margin: 0 auto;
}

.column {
  width: 50%;
  float: left;
}

@media (max-width: 600px) {
  .column {
    width: 100%;
    float: none;
  }
}

img {
  max-width: 100%;
  height: auto;
}

body {
  font-size: 16px;
}
h1 {
  font-size: 2em;  /* 32px */
}

h2 {
  font-size: 1em;  /* 16px */
}

h3 {
    font-size: 0.5em;
}

@media (max-width: 480px) {
  body {
    font-size: 18px;
  }
}

</style>