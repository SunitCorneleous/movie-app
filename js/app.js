// fetch data
const loadMovies = async (movie) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${movie}&page=1&include_adult=false`;

  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
};

document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    const searchfield = document.getElementById("search-field");

    loadMovies(searchfield.value);
    searchfield.value = "";
  });

document
  .getElementById("search-field")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      loadMovies(event.target.value);
      event.target.value = "";
    }
  });
