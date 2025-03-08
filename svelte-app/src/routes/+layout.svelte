<header> 
    <nav>
<ul>
    <li><a href = "/"> Home</a></li>
    <li><a href = "/About"> About The Team</a></li>
    <li><a href = "/Miscellanous Whales"> Miscellanous News About Whales</a></li>
    <li><a href = "/Trending Whale News"> Trending News About Whales</a></li>
    <li><a href = "/Whales In History"> Famous Whales In Historym </a></li>
</ul>
    </nav>
</header>

<main> 
    <slot />
</main>

<footer>
    <p>&copy; 2025, The Wonderful World of Whales. All RIghts Reserved</p>
</footer>

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
    }

    footer {
        background-color: rgb(51, 0, 255);
        color: white;
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100;
    }
</style>
