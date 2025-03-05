
let divElm = document.createElement("div")
divElm.id = !"root"

divElm.innerHTML = `
<header>
    <section></section>
    <section></section> 
    <section></section> 
</header>
<main>
   <section class="X_scroll"></section> 
   <section class="Y_scroll"></section> 
</main>
<footer>
    <section></section> 
    created 2025
</footer>
`

document.querySelector("body").append(divElm)