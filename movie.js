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
      <section class="bigpic"> 
        <img class="bigpicDave" src="${baseUrl}/${movie.poster_path}" alt="${movie.title}" height="1000" >
      </section>

      <section class="body"> 
      <section class="bookmark_h1">
        <h1>${movie.title}</h1>
        <i class="fa-regular fa-bookmark fa-2x"></i>
      </section>

      <section class="leftie">
        <p class="para"><i class="fa-solid fa-star fa-xs" style="color: #FFD43B;"></i> ${movie.vote_average.toFixed(1)}/10 IMDb</p>
        <section class="genre_grid">
        ${movie.genres.map(function(genre) {
          return `
          <p class="myMovie__genre-text">${genre.name}</p>
          `
        }).join("")}
        </section>
      </section>

      <section class="info">
        <p class="noman">Length</p>
        <p class="noman">Language</p>
        <p class="noman">Rating</p>
        <p class="no">${Math.floor(movie.runtime/60)}h ${(movie.runtime%60)}min</p>
        <p class="noway">${movie.original_language}</p>
        <p class="no">${movieRating(countryElm)}</p>
      </section>
      
      <h2>Description</h2>
      <p class="para">${movie.overview}</p>
    `
  })
  
  let sectionElm3 = document.createElement("section");
  sectionElm3.className = "crew_details";
  fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US&page=1&append_to_response=credits,release_dates`,options)
  .then(function(response) {
    return response.json()
    
  }).then(
    function(movie) {
      console.log(movie);
 
      sectionElm3.innerHTML +=  ` 
      
        <a class="crew_details">
        ${movie.credits.cast.map(function(castMember){
          return`
          <figure class="pics">
            <img class="pic" src="${baseUrl}/${castMember.profile_path}" alt="" >
            <p>${castMember.name}</p>
          </figure>
        `
        }).join("")}
        </a>
      </section>
      `
    })


  document.querySelector(".movie_details").append(sectionElm)
  document.querySelector(".cast").append(sectionElm3)


