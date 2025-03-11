
let divElm = document.createElement("div")
divElm.id = !"root"

divElm.innerHTML = `
<header>
    <button></button>
    <h1>MyMovies</h1>
    <label class="switch">
        <input type="checkbox" name="switch" id="switch">
        <span class="slider"></span>
    </label>
</header>
<main>
    <section>
        <section>
            <H2>Now Showing</H2>
            <button>See more</button>
        </section>
        <section class="X_scroll"></section> 
    </section>
    <section>
        <section>
            <h2>Popular</h2>
            <button>See more</button>
        </section>
        <section class="Y_scroll"></section> 
    </section>
</main>
<footer>
    <section>
        <button></button>
        <button></button>
        <button></button>
    </section> 
    created 2025
</footer>
`

document.querySelector("body").append(divElm)