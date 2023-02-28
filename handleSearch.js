import { setCharacters, setCurrentPage } from "./fetchCharacters.js";
import { displayCharacters } from "./displayCharacters.js";
import { displayPaginationButtons } from "./displayPaginationButtons.js";

export function handleSearch(characters) {
  const searchInput = document.querySelector(
    '.search-container input[type="text"]'
  );
  searchInput.addEventListener("change", () => {
    setCurrentPage(1);
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCharacters = characters.filter((character) => {
      return (
        character.name.toLowerCase().startsWith(searchTerm) ||
        character.status.toLowerCase().startsWith(searchTerm) ||
        character.species.toLowerCase().startsWith(searchTerm) ||
        character.gender.toLowerCase().startsWith(searchTerm) ||
        character.location.name.toLowerCase().startsWith(searchTerm)
      );
    });
    if (filteredCharacters.length === 0) {
      alert("No character found!");
      return;
    }
    setCharacters(filteredCharacters);
    displayCharacters(filteredCharacters);
    displayPaginationButtons(filteredCharacters);
  });
}
