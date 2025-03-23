<script>
export let title = "Card Title";
</script>

<div class = "Card">
<img src = "/teamMemberMikey.jpg" alt = "Hello, I'm Mikey Holmes, this is my portrait">
<p>Hello, my name is Mikey Holmes!</p>
</div>

<div class = "Card02">
<img src = "/teamMemberJessica.jpg" alt = "Hello, I'm Jessica Curran, this is my portrait">
<p>Hello, my name is Jessica Curran!</p>
</div>

<div class = "Card03">
<img src = "/teamMemberLiam.jpg" alt = "Hello, I'm Liam Treacy, this is my portrait">
<p>Hello, my name is Liam Treacy, you can contact me at C00298242@setu.ie</p>
</div>

<div class = "content">
    <h2>{title}</h2>
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

.Card02{
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

.Card02 > img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
}

.Card03{
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

.Card03 > img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
}
    
.content {
    padding: 1.5rem;
}

.content h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.Card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.Card02:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.Card03:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
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

p {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 13px;
    font-weight: bold;
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

.Card02 {
    animation: fadeInSlide 0.6s ease ease-out;
}

.Card03 {
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