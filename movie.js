function getIdFromMovie(file_path) {
  return file_path
}
const baseUrl = "https://image.tmdb.org/t/p/w500"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGY3YmE1NGIyZjlmYjViNzA3YzcwNmEwNWEzYjBhMSIsIm5iZiI6MTc0MDk4NjkzMi4yMjIwMDAxLCJzdWIiOiI2N2M1NWEzNDZjYTkwMzVhNmE3YTZkOGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jY-oBNqQk-JinkYxMTE5pqpmtkekXG1tQOMLao4EwoQ'
  }
};

let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let movie = params.get("movie");

let sectionElm = document.createElement("section");
sectionElm.className = "movie_details";

fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US`,options)
.then(function(response) {
  return response.json()
}).then(
  function(movie) {
    console.log(movie);
    
    sectionElm.innerHTML +=  ` 

      <p>${movie.title}</p>
      <p>${movie.genre}</p>

    `
  })

  document.querySelector("main").append(sectionElm)
