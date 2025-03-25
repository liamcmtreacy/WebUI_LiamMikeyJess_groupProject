<script>
    export let title = "Card Title";
    export let src= "";
    export let alt= "";
    export let description = "Description";

    let expanded = false;
</script>

<div class = "Card">
<img src={src} alt ={alt}>
<div class = "content">
    <h2>{title}</h2>
</div>
<p>{expanded ? description : description.substring(0, 3) + '...'}</p>
<button on:click={() => expanded = !expanded}>
    {expanded ? "Read Less" : "Read More"}
    </button>
</div>


<style>
    .Card{
    background: white;
    border-radius: 10px;
    border: 3px solid #007bff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    width: 30%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    animation: fadeInSlide 0.6s ease-out;
    }

    .Card > img {
        width: 100%;
        height: auto;
        border-radius: 8px 8px 0 0;
    }


    .content h2::before {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        background: #007bff;
        margin: 0 auto 10px auto;
        transition: width 0.3s ease-in-out;
    }

    @keyframes fadeInSlide {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .Card {
        animation: fadeInSlide 0.6s ease ease-out;
    }

    div {
    transition-property: width;
    transition-duration: 2s;
    transition-timing-function: linear;
    transition-delay: 1s;
    }

    @keyframes fadeInSlide 
    {
        0% {
        opacity: 0;
        transform: translateY(20px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>