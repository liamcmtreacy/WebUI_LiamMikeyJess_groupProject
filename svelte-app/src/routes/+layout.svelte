<script>
import Footer from '$lib/components/Footer.svelte';

</script>


<header> 
    <nav>
<ul>
    <li><a href = "/"> Home</a></li>
    <li><a href = "/About"> About The Team</a></li>
    <li><a href = "/Trending Whale News"> Trending News About Whales</a></li>
    <li><a href = "/Whales in History"> Famous Whales In History </a></li>
    <li><a href = "/Fast Facts about Whales">Fun Facts about Whales</a></li>
</ul>
    </nav>
</header>

<main> 
    <slot />
</main>

<Footer />
<style>
    header {
        background-color: #007bff;
        padding: 1rem;
        text-align: center;
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }

    nav ul li {
        margin: 0 15px;
    }

    nav ul li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

    main {
        padding: 2rem;
        text-align: center;
        min-height: 100vh;
    }
</style>

