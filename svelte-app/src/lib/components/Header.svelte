<script>
 import {Navigation} from "$lib";
 import {base} from '$app/paths';
</script>

<!--images-->

<header>
    <div class = "logo">
        <img src = "{base}/whaleLogo.png" alt = "logo with a small grey whale " />
    </div>
    <Navigation/>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-color);
        color: rgb(126, 0, 243);
        padding: 0.5rem;
    }

    img {
        width: 40px;
        height: 30px;
    }
</style>