tab = [];
const button = document.getElementById("button");

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
    console.log(tab[tab.indexOf(input)]);
  } else {
    console.log("ce pokemon n'existe pas");
  }
});
