// fetch data
const loadMovies = async (movie) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${movie}&page=1&include_adult=false`;

  const res = await fetch(url);
  const data = await res.json();

  displayAllMovies(data.results);
};

// search button
document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    const searchfield = document.getElementById("search-field");

    loadMovies(searchfield.value);
    searchfield.value = "";
  });

// search on hit enter key
document
  .getElementById("search-field")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      loadMovies(event.target.value);
      event.target.value = "";
    }
  });

const displayAllMovies = (movies) => {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    console.log(movie);
    const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

    const card = document.createElement("div");
    card.classList.add("card", "w-72", "bg-base-100", "shadow-xl", "mx-auto");

    card.innerHTML = `
      <figure>
        <img src="${poster}" alt="No Image" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          ${movie.original_title}
          <div class="badge badge-secondary">${movie.vote_average}</div>
        </h2>
        <p>Release Date: ${movie.release_date}</p>
        
      </div>
    `;

    moviesContainer.appendChild(card);
  });
};
