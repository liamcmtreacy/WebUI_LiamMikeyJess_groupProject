<script>
import {base} from '$app/paths';
</script>


<h1> FAMOUS WHALES IN HISTORY</h1>

<div class = "grid">

<a href = {`${base}/MobyDick`}> 
    <p> Learn all about Herman Melville's character "Moby Dick"</p>
    <img id = "MobyDick" src = "{base}/mobyDickWHALE.jpg" alt = "Moby Dick book">
</a>

<a href = {`${base}/340_Ton_Whale`}>
    <p> Learn all about Peructus Collosus</p>
    <img id = "collosus" src = "{base}/skyNewsWhale.jpg" alt = "An ancient depiction of what is believed to be the largest whale of all time, who is grey in color"/>
</a>

<a href = {`${base}/freewilly`}>
    <p> Learn all about FreeWilly</p>
<img id ="freewilly" src = "{base}/freewilly.jpg" alt = "Orca whale from FreeWilly movie"/>
</a>

</div>



<style>

    h1 {
            font-family: "Times New Roman";
            font-size: 48px;
            color: black;
            font-weight: bold;
            text-align: center;
            border-bottom: 2px solid black;
        }

    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        background-color: #7f2e08;
        padding: 30px;
    }

    #MobyDick {
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
    }

    #collosus {
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid white;
        padding: 20px;
        border-radius: 10px;
        text-align: left;
    }

    #freewilly {
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid white;
        padding: 20px;
        border-radius: 10px;
        text-align: left;
    }


    img {
        max-width: 100%;
        height: auto;
        border: 2px solid white;
        border-radius: 10px;
    }

    p {
        color: white;
    }
</style>


