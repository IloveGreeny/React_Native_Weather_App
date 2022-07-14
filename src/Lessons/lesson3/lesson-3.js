const root = document.getElementById("root");
const api = "https://swapi.dev/api/planets/1/";

const fetchMovies = async () => {
  let data = [];
  try {
      data = await fetch(api);
      let name = data.json();
      console.log(data);
      let nameTag = document.createElement("h1");
      nameTag.innerHTML = nameTag.name;
      root.appendChild(nameTag)
  }catch (e) {
      console.log(e);
  }
}

fetchMovies();