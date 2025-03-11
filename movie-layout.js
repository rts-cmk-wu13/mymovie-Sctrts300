
let divElm = document.createElement("div")
divElm.id = !"root"

divElm.innerHTML = `
<header>
   <section>
      <button></button>
      <label class="switch">
         <input type="checkbox" name="switch" id="switch">
         <span class="slider"></span>
      </label>
   </section>
</header>
<main>
   <section class="movie_details"></section>
   <section>
   <h2>Cast</h2>
   <button>See more</button>
   </section>
   <section class="cast"></section>
</main>
<footer>created 2025</footer>
`

document.querySelector("body").append(divElm)