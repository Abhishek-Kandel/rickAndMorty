import { displayCharacters } from "./displayCharacters.js";
import { displayPaginationButtons } from "./displayPaginationButtons.js";
import { setCharacters, setCurrentPage } from "./fetchCharacters.js";

export function handleSort(characters) {
  const sortSelect = document.querySelector(".sort-container select");
  sortSelect.addEventListener("change", () => {
    const sortBy = sortSelect.value;
    let sortedCharacters;
    if (sortBy === "name") {
      sortedCharacters = characters.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (sortBy === "status") {
      sortedCharacters = characters.sort((a, b) => {
        return a.status.localeCompare(b.status);
      });
    } else if (sortBy === "species") {
      sortedCharacters = characters.sort((a, b) => {
        return a.species.localeCompare(b.species);
      });
    } else if (sortBy === "gender") {
      sortedCharacters = characters.sort((a, b) => {
        return a.gender.localeCompare(b.gender);
      });
    }
    setCharacters(sortedCharacters);
    setCurrentPage(1);
    displayCharacters(sortedCharacters);
    displayPaginationButtons(sortedCharacters);
  });
}
