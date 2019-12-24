import { AnimalsDetailsTemplate } from "./AnimalDetailsTemplate.js";

export class AnimalsDetailsView {
  constructor(backButtonClickHandler, addToCartClickHandler) {
    this.backButtonClickHandler = backButtonClickHandler;
    this.addToCartClickHandler = addToCartClickHandler;
    this.templater = new AnimalsDetailsTemplate();
    this.detailsParentElement = document.querySelector(".animals-details");
  }

  renderAnimalDetails(animalObj) {
    this.detailsParentElement.innerHTML = this.templater.getAnimalDetailsMarkup(animalObj);
    document.querySelector(".add-to-cart-button").addEventListener("click", this.addToCartClickHandler);
    document.querySelector(".animals-details-back-button").addEventListener("click", this.backButtonClickHandler);
  }
}
