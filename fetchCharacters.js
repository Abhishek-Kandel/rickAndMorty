var currentPage = 1;
var charactersToDisplay = [];

export function fetchCharacters(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response not ok");
      }
      return response.json();
    })
    .then((data) => {
      const characters = data.results;
      if (data.info.next) {
        return fetchCharacters(data.info.next).then((nextCharacters) =>
          characters.concat(nextCharacters)
        );
      }
      return characters;
    })
    .catch((error) => {
      console.error("Error fetching characters:", error);
    });
}
export function getCurrentPage() {
  return currentPage;
}
export function setCurrentPage(page) {
  currentPage = page;
}
export function setCharacters(characters) {
  charactersToDisplay = [...characters];
}
export function getCharacters() {
  return charactersToDisplay;
}
