tab = [];
const button = document.getElementById("button");
const card = document.getElementById("card");
fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {
      tab.push(pokemon.name);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
console.log(tab);

button.addEventListener("click", () => {
  const input = document.getElementById("rech").value;
  if (tab.includes(input)) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const name = data.name;
        const img =
          data.sprites.versions["generation-v"]["black-white"].animated
            .front_shiny;
        const type = data.types[0].type.name;
        const weight = data.weight;
        const height = data.height;
        const stats = data.stats;
        const abilities = data.abilities;
        const abilitiesTab = [];
        abilities.forEach((ability) => {
          abilitiesTab.push(ability.ability.name);
        });
        console.log(abilitiesTab);
        const moves = data.moves;
        const movesTab = [];
        moves.forEach((move) => {
          movesTab.push(move.move.name);
        });
        console.log(movesTab);
        document.getElementById("name").innerHTML = name;
        document.getElementById("img").src = img;
        document.getElementById("type").innerHTML += `<li>Type : ${type}</li>`;
        document.getElementById(
          "weight"
        ).innerHTML += `<li>Weight : ${weight}</li>`;
        document.getElementById(
          "height"
        ).innerHTML += `<li>Height : ${height}</li>`;
        document.getElementById("stats").innerHTML = "";
        stats.forEach((stat) => {
          document.getElementById(
            "stats"
          ).innerHTML += `<li>${stat.stat.name} : ${stat.base_stat}</li>`;
        });
        document.getElementById("abilities").innerHTML = "";
        abilitiesTab.forEach((ability) => {
          document.getElementById(
            "abilities"
          ).innerHTML += `<li>${ability}</li>`;
        });
        card.style.display = "block";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Pokemon inéxistant");
  }
});
