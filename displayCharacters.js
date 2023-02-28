import { getCurrentPage } from "./fetchCharacters.js";

export function displayCharacters(characters) {
  const cardsPerPage = 20;
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";
  const currentPage = getCurrentPage();
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const charactersOnPage = characters.slice(startIndex, endIndex);

  charactersOnPage.forEach((character) => {
    const card = `
              <div class="card">
                  <img src="${character.image}" alt="${character.name}">
                  <div class="name">${character.name}</div>
                  <div class="status">${character.status}</div>
                  <div class="species">${character.species}</div>
                  <div class="gender">${character.gender}</div>
                  <div class="location">${character.location.name}</div>
              </div>
          `;
    cardContainer.insertAdjacentHTML("beforeend", card);
  });
}
