import NumbersAnimation from "./numbers-animation.js";

export default function fetchAnimals(url, target) {
  // Creates the div containing information with the total number of animals
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  // Fills each animal in the DOM
  const numbersGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const animalDiv = createAnimal(animal);
    numbersGrid.appendChild(animalDiv);
  }

  // Animate the numbers of each animal
  function animalsNumbersAnimation() {
    const numbersAnimation = new NumbersAnimation(
      "[data-number]",
      ".numbers",
      "active",
    );
    numbersAnimation.init();
  }

  // Pulls the animals through a .json file and creates each animal using
  // createAnimal
  async function createAnimals() {
    try {
      // Fetch, wait for response and trasform into .json
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      // After transformation into .json, activate the functions to fill and
      // animate the numbers
      animalsJSON.forEach((animal) => fillAnimals(animal));
      animalsNumbersAnimation();
    } catch (error) {
      console.log(error);
    }
  }

  return createAnimals();
}
