//initialisation des variables
tab = [];
const button = document.getElementById("button");
const card = document.getElementById("card");

//fetch de l'api pour récupérer les noms des pokemons
fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then((response) => response.json()) //transforme la réponse en json
  .then((data) => {
    //récupère les données
    data.results.forEach((pokemon) => {
      tab.push(pokemon.name); //ajoute les noms des pokemons dans le tableau tab
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
console.log(tab);

//fonction qui permet de récupérer les informations du pokemon
button.addEventListener("click", () => {
  //ajoute un écouteur d'événement click sur le bouton
  const input = document.getElementById("rech").value;
  if (tab.includes(input)) {
    //vérifie si le nom du pokemon est dans le tableau tab
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`) //fetch de l'api pour récupérer les informations du pokemon si il est dans tab
      .then((response) => response.json())
      .then((data) => {
        //affichage des informations du pokemon
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
        //affichage des informations dans le site
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
        console.error("Error:", error); //affiche une erreur si le pokemon n'existe pas
      });
  } else {
    alert("Pokemon inéxistant"); //affiche une alerte si le pokemon n'existe pas
  }
});
