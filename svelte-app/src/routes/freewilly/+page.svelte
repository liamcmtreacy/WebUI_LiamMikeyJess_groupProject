<script>
import {Modal} from '$lib';
import {Footer} from '$lib';
import {base} from '$app/paths';
</script>

<!---images-->



<h1> Free Willy 1993, by Simon Wincer</h1>
<h2> A Legacy of Freedom and Conservation</h2>

<p> The orca featured in the 1993 movie Free Willy was a real whale named Keiko, who became an icon for animal rights and the movement to end the captivity of marine mammals. Captured off the coast of Iceland when he was just two years old, Keiko spent over 20 years in various aquariums, where he was kept in small tanks and deprived of the space to swim freely. Despite his circumstances, Keiko became a star after appearing in the popular film.
</p>

<img id = "boyorca" src = "{base}/bigorca.jpg" alt = "big orca whale behind glass window with small boy beneath"/>

<h2> A Public Outcry and Efforts for Release</h2>
<p> Following the movie’s success, a public outcry for Keiko’s release began. In 1996, marine mammal experts launched an ambitious rehabilitation project to prepare Keiko for life in the wild. After being moved to a larger facility in Oregon, Keiko was eventually released into the waters off Iceland in 2002. Though he swam freely, Keiko struggled to integrate with wild orca pods and, sadly, passed away in 2003 due to pneumonia.
</p>

<img id = "bigorca" src = "{base}/boyorca.jpg" alt = "boy with orca whale"/>

<h2> Keiko’s Legacy and Impact </h2>
<p> Keiko’s story sparked a global conversation about the ethics of keeping orcas and other marine mammals in captivity for entertainment. His journey led to increased pressure on aquariums and marine parks, including SeaWorld, to end orca breeding programs and live shows. Keiko’s legacy lives on as a symbol of the need for better treatment and conservation of marine life, inspiring efforts to protect wild orcas and other endangered species.
</p>

<style>
    h1 {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        text-align: left;
        color: rgb(0, 0, 0);
    }

    h2 {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        color: rgb(0, 0, 0);
        text-align: left;
    }

    p {
        font-family: 'Courier New', Courier, monospace;
        text-align: left;
        color: rgb(0, 0, 0);
    }

    #boyorca {
    transform: scale(0.8);
    border: 1px solid black;
    }

    #bigorca {
        border: 1px solid black;
        width: auto;
        height: auto;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 36px;
        }

        h2 {
            font-size: 28px;
        }

        p {
            font-size: 20px;
            padding: 10px;
        }

        #boyorca {
            width: 400px; /*played around with sizes, I think these look good */
            height: 400px;
            flex-direction: column;
            border: 1px solid black;
        }

        #bigorca {
            width: 400px; /*played around with sizes, I think these look good */
            height: 400px;
            flex-direction: column;
            border: 1px solid black;
        }
    }

</style>