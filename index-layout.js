
let divElm = document.createElement("div")
divElm.id = !"root"



divElm.innerHTML = `
<header>
    <section class="header">
    <i class="fa-solid fa-bars-staggered fa-xl"></i>
    <h1>MyMovies</h1>
    <label class="switch">
        <input type="checkbox" name="switch" id="switch">
        <span class="slider"></span>
    </label>
    </section>
</header>
<main>
    <section>
        <section class="now_showing">
            <h2>Now Showing</h2>
            <button class="see_more">See more</button>
        </section>
        <section class="X_scroll"></section> 
    </section>
    <section>
        <section class="now_showing">
            <h2>Popular</h2>
            <button class="see_more">See more</button>
        </section>
        <section class="Y_scroll"></section> 
    </section>
</main>
<footer>
    <section>
        <i class="fa-solid fa-film fa-3x"></i>
        <i class="fa-solid fa-ticket fa-3x"></i>
        <i class="fa-regular fa-bookmark fa-3x"></i>
    </section> 
    created 2025
</footer>
`

document.querySelector("body").append(divElm)