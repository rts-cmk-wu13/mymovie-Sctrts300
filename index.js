/**
 * 
 * @param {string} file_path
 * @returns {string}
 */

function getIdFromMovie(file_path) {
 return file_path
}
const baseUrl = "https://image.tmdb.org/t/p/w500"

const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGY3YmE1NGIyZjlmYjViNzA3YzcwNmEwNWEzYjBhMSIsIm5iZiI6MTc0MDk4NjkzMi4yMjIwMDAxLCJzdWIiOiI2N2M1NWEzNDZjYTkwMzVhNmE3YTZkOGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jY-oBNqQk-JinkYxMTE5pqpmtkekXG1tQOMLao4EwoQ'
  }
};

const observer = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
      if(entry.isIntersecting) {
        currentOffset = currentOffset + 30;
        if (currentOffset < 20){
          fetchMovie(currentOffset)
        } else {
          console.log("NOPE");
          
        }
      }  
  })
})


let sectionElm = document.createElement("section")
sectionElm.className = "poplist"

function fetchMovie(offset){

fetch(`https://api.themoviedb.org/3/movie/now_playing?offset=${offset}language=en-US&page=1, options`)
.then(function(response) {
  return response.json()
}).then(
  function(data) {
    sectionElm.innerHTML +=  data.results.map(movie => `
        
      <a>
      <p>#${getIdFromMovie(movie.url)}</p>
      <img data-imagesrc="${baseUrl}/${getIdFromPokemon(pop.url)}.png" alt="${pop.name}">
      </a>

    `).join("")

 
  }
  )
}
  document.querySelector("main").append(sectionElm)
