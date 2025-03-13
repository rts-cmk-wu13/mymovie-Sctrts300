
let divElm = document.createElement("div")
divElm.id = !"root"

divElm.innerHTML = `
<header>
   <section class="head_but">
      <a class="back_btn" href="index.html">
         <i class="fa-solid fa-arrow-left fa-2x"></i>
      </a>
      <label class="switch">
         <input type="checkbox" name="switch" id="switch">
         <span class="slider"></span>
      </label>
   </section>
</header>
<main>
   <section class="movie_details"></section>
   <section class="casting">
   <h2>Cast</h2>
   <button class="see_more">See more</button>
   </section>
   <section class="cast"></section>
</main>
<footer>created 2025</footer>
`

document.querySelector("body").append(divElm)