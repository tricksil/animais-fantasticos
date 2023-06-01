import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // create the div containing informations with animals total
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Fill in each animal in the DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Animate the numbers for each animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Pull the animals through a json file and
  // create each animal using createAnimals
  async function criarAnimais() {
    try {
      // Fetch, await response and transform the response in json
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      // After transformation json, active the functions to fill and animate
      // the numbers
      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
