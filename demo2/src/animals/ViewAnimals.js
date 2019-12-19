import { AnimalsTemplate } from "./AnimalsTemplate.js";

export class ViewAnimals {
  constructor() {
    this.root = document.querySelector(".root");
    this.animalsTemplate = new AnimalsTemplate();
  }

  init() {
    this.root.innerHTML = this.animalsTemplate.getCardsGridTemplate()
    this.domAnimalsGrid = document.querySelector('.columns')
  }

  renderAnimals(animals) {
    let animalStr = "";

    animals.forEach(animal => {
      animalStr += this.animalsTemplate.getCardTemplate(animal);
    });

    this.domAnimalsGrid.innerHTML = animalStr;
  }
}
