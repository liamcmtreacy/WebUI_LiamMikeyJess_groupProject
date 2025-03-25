<script>
 import {Navigation} from "$lib";
</script>


<header>
    <div class = "logo">
        <img src = "/whaleLogo.png" alt = "Website Logo">
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