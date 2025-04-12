<script>
import {base} from '$app/paths';
</script>

<nav>
    <ul>
        <li><a href = {`${base}/`}> Home Page</a></li>
        <li><a href = {`${base}/Trending Whale News`}> Trending News About Whales</a></li>
        <li><a href = {`${base}/Fast Facts about Whales`}>Fun Facts about Whales</a></li>
        <li><a href = {`${base}/Whales in History`}> Famous Whales In History </a></li>
        <li><a href = {`${base}/About`}> About The Team</a></li>
    </ul>
</nav>

    <style>

        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }
    
        nav ul li {
            margin: 0 50px;
        }
    
        nav ul li a {
            text-decoration: none;
            color: white;
            font-weight: bold;
            font-family: 'Courier New', Courier, monospace;
            position: relative;
        }

        nav ul li a:hover {
         color: navy;
        }
 
        nav a:hover {
         cursor: pointer;
         background-color: rgba(15, 161, 167, 0.753);
        }

        @media (max-width: 768px) {
        nav {
            width: 100%;
        }
        
        nav ul {
            flex-direction: column;
            align-items: center;
        }

        nav ul li {
            margin: 10px 0;
        }
}
    </style>