import { displayCharacters } from "./displayCharacters.js";
import { handleSearch } from "./handleSearch.js";
import { handleSort } from "./handleSort.js";
import { displayPaginationButtons } from "./displayPaginationButtons.js";
import {
  fetchCharacters,
  setCharacters,
  getCharacters,
} from "./fetchCharacters.js";

const apiUrl = "https://rickandmortyapi.com/api/character";

fetchCharacters(apiUrl).then((characters) => {
  setCharacters(characters);
  displayCharacters(getCharacters());
  displayPaginationButtons(getCharacters());
  handleSearch(characters);
  handleSort(characters);
});
