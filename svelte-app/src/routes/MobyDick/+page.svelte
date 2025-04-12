<script>
import {Modal} from '$lib';
import {base} from '$app/paths';
import {Footer} from '$lib';
</script>

<h1> Moby Dick, by Herman Melville</h1>


<h2> What is Moby Dick?</h2> 
<p>Moby Dick is an 1851 Epic Novel written by Herman Melville. It follows the leader of Whaling Ship, Captain Ahab,
    who is determined to hunt down and kill the legendary white sperm whale "Moby Dick". It was published on October 18th 1851 in the UK
    and then the following month on November 14th, 1851 in the US, with a 210,000 word count. 
    Moby Dick himself is probably the most iconic aspect of the book, and interpretations of its meaning range from the Judeo-Christian God to atheism and anything you can think off in between. 
</p>
<img id = "bookCover" src = "{base}/mobyDickShip.jpg" alt = "Moby Dick eating part of a ship">

<h2> How popular was Moby Dick at the time?</h2>
<p> During Herman Melville's life, only 3715 copies of Moby Dick were sold, the book was a flop! Earning only $1259 for Melville</p>


<h2> Herman Melville</h2>
<p>Born on August 1st 1819, Herman Melville was raised in New York, one of 7 siblings, his father supported the family by importing French Dry Goods,
    however later he attempted to chance his hand in the Fur business in Alabama, this did not work, he later died two years later, leaving a bankrupt family.
    Melville, along with all his siblings, left school to work odd jobs, in Melville's case, he worked on his uncle's farm, helping in teaching positinos, and working in a bank. <br>
</p>
<img id = "HERMAN" src = "{base}/H_Mel.jpg" alt="Painting of Author Herman Melville">
<p> 
    Melville always loved reading, once he left school, he read much more, falling in love with Shakespeare and Mythology, another story that stuck with him was the story of whaleship Essex, the story of a ship that was attacked by a whale and sunk.
    In 1839, at the age of 20, Melville took his first voyage across the Atlantic sea as a cabin boy on the merchant ship the St. Lawrence. After this expedition and a year exploring the West, Melville joined the crew of the whaling ship Acushnet in January of 1841. 
</p>

<p>
    In October 1844, Melville returned to his mother's house determined to write about his adventures. His adventures and travels, made his knowledge about the sea incredibly accurate, and he used it all to write his masterpiece. <br>
    He had written 3 Novels by the time of 1851, when Moby Dick was published, however as we learned, it was a flop. <br>

    After the book's failure, Melville lived in obscurity, his next novel was Pierre, was another failure, later Melville became depressed and he suffered much heartbreak and loss during the rest of his life, he later died on September 28th 1891, aged 82.
</p>

<h2>Popularity</h2>
<p>During the early 20th century, critics began to rediscover Herman Melville's work, they quickly hailed his work as classics of American
    Literature. Today his work is taught about in school and his work is beloved, Melville is now one of the most recognized authors in the world.
</p>

<h2> Moby Dick in Pop Culture</h2>
<p> In 1956, Moby Dick was adapted for a feature length film by Warner Bros, starring Hollywood Superstar Gregory Peck
</p>

<img id = "starbucks" src = "{base}/starbucks.png" alt = "Starbucks Logo of a green lady, on a white background">
<p>The famous coffee chain Starbucks was actually named after a character in Moby Dick, a character in the novel named Starbuck who 
    was the first mate of the pequod.
</p>

<p>Moby Dick has also made several appearences in animated series, including Family Guy, Futurama, Tom and Jerry and The Simpsons.</p>

<img id = "simpsons" src = "{base}/simpsonsMDbook.png" alt = "Martin Prince, from the simpsons reading Moby Dick">
<img id = "family_guy" src = "{base}/FGMD.png" alt = "Peter Griffin sitting at the dinner table with Moby Dick">
<img id = "tom_and_jerry" src = "{base}/DickyMoe.jpg" alt = "a pirate captain obsessed with catching Dicky Moe, a parody of Moby Dick">

<style>
    h1 {
        font-family: 'Courier New', Courier, monospace;
        color: rgb(0, 0, 0);
        font-weight: bold;
        text-align: left;
    }

    h2 {
        max-width: fit-content;
        font-family: 'Courier New', Courier, monospace;
        color: rgb(0, 0, 0);
        text-align: left;
    }

    p {
        max-width: fit-content;
        font-family: 'Courier New', Courier, monospace;
        color: rgb(0, 0, 0);
        text-align: left;
        padding-bottom: 10px;
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

    #HERMAN {
        border: 1px solid black;
        width: auto;
        height: auto;
        margin-left: auto;
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

    /*MOBILE RESPOVINESS TESTED BASICALLY ALL WITH TRIAL AND ERROR */
    @media (max-width: 768px) {

        h1 {
            font-size: 36px;
            text-align: center;
        }

        h2 {
            font-size: 28px;
        }

        p {
            font-size: 20px;
            padding: 10px;
        }
/*IMAGES ARE MADE WIDER AND taller */
        #starbucks {
    width: 350px;
    height: 350px;
    flex-direction: column;
    }

    #bookCover {
        width: 350px;
        height: 350px;
        flex-direction: column;
    }

    #HERMAN {
        border: 2.5px solid black;
        width: auto; /*height stays auto for Herman Melville as the image looks bad with the wider stretched looks*/
        height: auto;
    }

    #simpsons {
        width: 350px;
        height: 350px;
        flex-direction: column;
    }

    #family_guy {
        width: 350px;
        height: 350px;
        flex-direction: column;
    }

    #tom_and_jerry {
        width: 350px;
        height: 350px;
        flex-direction: column;
    }
    }


</style>