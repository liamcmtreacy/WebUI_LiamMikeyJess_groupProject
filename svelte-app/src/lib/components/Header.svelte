<script>
    import {Navigation} from '$lib'
</script>

<header>
    <div class = "logo">
        <img src = "/favicon.png" alt = "Website Logo">
    </div>
<Navigation />
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--primary-color);
        color: white;
        padding: 1rem;
    }

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    width: 50px;
    margin-right: 0.625rem;
}
</style>