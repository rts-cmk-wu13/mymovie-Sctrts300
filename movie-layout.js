
let divElm = document.createElement("div")
divElm.id = !"root"

divElm.innerHTML = `
<header>
<label class="switch">
            <input type="checkbox" name="switch" id="switch">
            <span class="slider"></span>
        </label>
</header>
<main>
   <section class="movie_details"></section>
   <section class="cast"></section>
</main>
<footer>created 2025</footer>
`

document.querySelector("body").append(divElm)