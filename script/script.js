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
        const img = data.sprites.front_default;
        const type = data.types[0].type.name;
        const weight = data.weight;
        const height = data.height;
        const moves = data.moves;
        const movesTab = [];
        moves.forEach((move) => {
          movesTab.push(move.move.name);
        });
        console.log(movesTab);
        document.getElementById("name").innerHTML = name;
        document.getElementById("img").src = img;
        document.getElementById("type").innerHTML = type;
        document.getElementById("weight").innerHTML = weight;
        document.getElementById("height").innerHTML = height;
        card.style.display = "block";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    alert("Pokemon inéxistant");
  }
});
