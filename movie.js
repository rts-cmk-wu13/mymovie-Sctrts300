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


fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US&page=1&append_to_response=credits,release_dates`,options)
.then(function(response) {
  return response.json()
  
}).then(
  function(movie) {
    console.log(movie);
    let countryElm = "US";
    function movieRating(countryElm){
      const country = movie.release_dates.results.find(
        (country) => country.iso_3166_1 === countryElm
      );
      let rating = "N/A";
      if (country){
        country.release_dates.forEach((release) =>{
          if (release.certification){
            rating = release.certification;
          }
        })
      } else {
        rating = rating;
      }
      return rating;
    }
    
    sectionElm.innerHTML +=  ` 
      <img src="${baseUrl}/${movie.poster_path}" alt="${movie.title}" height="300" >
      <p>${movie.title}</p>
      <p>${movie.vote_average.toFixed(1)}/10 IMDb</p>
      
      <section>
      ${movie.genres.map(function(genre) {
        return `
        <p class="myMovie__genre-text">${genre.name}</p>
        `
      }).join("")}
      </section>
      
      <p>${Math.floor(movie.runtime/60)}h ${(movie.runtime%60)}min</p>
      <p>${movie.original_language}</p>
      <p>${movieRating(countryElm)}</p>
      
      <p>${movie.overview}</p>

      <section>

      </section>

    `
  })
  
  document.querySelector("main").append(sectionElm)


