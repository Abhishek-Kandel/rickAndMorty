import { getCharacters, setCurrentPage } from "./fetchCharacters.js";
import { displayCharacters } from "./displayCharacters.js";
let paginationContainer = document.querySelector(".pagination");

export function displayPaginationButtons(charactersToDisplay) {
  paginationContainer.innerHTML = "";
  const cardsPerPage = 20;
  const totalPages = Math.ceil(charactersToDisplay.length / cardsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const button = `
        <button class="page-button">${i}</button>
      `;
    paginationContainer.insertAdjacentHTML("beforeend", button);
  }
}

export function handlePaginationButtonClick(event) {
  if (event.target.classList.contains("page-button")) {
    setCurrentPage(parseInt(event.target.textContent));
    displayCharacters(getCharacters());
    displayPaginationButtons(getCharacters());
    // event.preventDefault();
    // //Did not work...why??
    // //event.target.style.backgroundColor = "red";
    // //To change the button color when clicked
    // const buttons = paginationContainer.querySelectorAll("button");
    // buttons.forEach((button) => {
    //   button.classList.remove("active");
    // });

    // // Add active class to clicked button
    // event.target.classList.add("active");
    // console.log(event.target.classList);
  }
}

paginationContainer.addEventListener("click", handlePaginationButtonClick);
