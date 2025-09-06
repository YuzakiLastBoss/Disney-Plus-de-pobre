const searchBar = document.getElementById("search-bar");
const cards = document.querySelectorAll(".card");

searchBar.addEventListener("keyup", function () {
  const searchValue = searchBar.value.toLowerCase();

  cards.forEach(card => {
    // pega o texto do <p> OU o alt da imagem
    const title = card.querySelector("p") 
      ? card.querySelector("p").innerText.toLowerCase() 
      : card.querySelector("img").alt.toLowerCase();

    if (title.includes(searchValue)) {
      card.style.display = "block"; // mostra
    } else {
      card.style.display = "none"; // esconde
    }
  });
});
