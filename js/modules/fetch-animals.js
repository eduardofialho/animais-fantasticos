import initNumbersAnimation from "./numbers-animation.js";

export default function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const numbersGrid = document.querySelector(".numbers-grid");

      animalsJSON.forEach((animal) => {
        const animalDiv = createAnimal(animal);
        numbersGrid.appendChild(animalDiv);
      });

      initNumbersAnimation();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimals("./animals-api.json");
}
