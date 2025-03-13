
const baseUrl = "https://image.tmdb.org/t/p/w500"

const url = [ 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1','https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'];
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGY3YmE1NGIyZjlmYjViNzA3YzcwNmEwNWEzYjBhMSIsIm5iZiI6MTc0MDk4NjkzMi4yMjIwMDAxLCJzdWIiOiI2N2M1NWEzNDZjYTkwMzVhNmE3YTZkOGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jY-oBNqQk-JinkYxMTE5pqpmtkekXG1tQOMLao4EwoQ'
  }
};

let sectionElm1 = document.createElement("section")
sectionElm1.className = "poplist"

function fetchMovie(page){

fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
.then(function(response) {
  return response.json()
}).then(
  function(data) {
    sectionElm1.innerHTML +=  data.results.map(movie => `
      <a href="/movie.html?movie=${movie.id}" class="details">
      <img src="${baseUrl}/${movie.poster_path}" alt="${movie.title}" height="250" >
      <h3>${movie.title}</h3>
      <p><i class="fa-solid fa-star fa-xs" style="color: #FFD43B;"></i> ${movie.vote_average.toFixed(1)}/10 IMDb</p>
      </a>
    `
  ).join("")
  }
  )
  document.querySelector(".X_scroll").append(sectionElm1)
}



let sectionElm2 = document.createElement("section")
sectionElm2.className = "movlist"

function fetchAllMovie(page){

fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
.then(function(response) {
  return response.json()
}).then(
  function(data) {
    sectionElm2.innerHTML +=  data.results.map(movie => `

      <a href="/movie.html?movie=${movie.id} class="details">

        <section class="artikel">
          <img src="${baseUrl}/${movie.poster_path}" alt="${movie.title}" height="200" >
        
          <section class="movie_details">
          <h3>${movie.title}</h3>
          <p><i class="fa-solid fa-star fa-xs" style="color: #FFD43B;"></i> ${movie.vote_average.toFixed(1)}/10 IMDb</p>

            <section class="genres">
              ${movie.genre_ids.map(genre_id => {
              let currentGenre = genres.find(genre => genre.id == genre_id)
              // console.log(currentGenre);
          return `<span class="movielist_genre">${currentGenre.name}</span>` 
        }).join(" ")}
        </section>
        </section>
        </section>
        
      </a>
      <br>
    `
  ).join("")
  }
  )
  document.querySelector(".Y_scroll").append(sectionElm2)
}

fetchMovie(1)
fetchAllMovie(1)