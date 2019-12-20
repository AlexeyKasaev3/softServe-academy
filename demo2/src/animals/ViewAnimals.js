import { AnimalsTemplate } from "./AnimalsTemplate.js";

export class ViewAnimals {
  constructor() {
    this.animalsGreed = document.querySelector(".animals-greed");
    this.animalsTemplate = new AnimalsTemplate();

    this.animalsGreed.innerHTML = this.animalsTemplate.getCardsGridTemplate()
    this.domAnimalsGrid = document.querySelector('.columns')
  }

  renderAnimals(animals) {
    this.domAnimalsGrid.innerHTML = animals.map(animal => {
      return this.animalsTemplate.getCardTemplate(animal);
    }).join('');
  }
}
