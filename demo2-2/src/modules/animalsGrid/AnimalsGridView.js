import { AnimalsGridTemplate } from "./AnimalsGridTemplate.js";

export class AnimalsGridView {
  constructor(greedClickHandler) {
    this.templater = new AnimalsGridTemplate();

    this.animalsGreedElement = document.querySelector(".animals-greed");
    this.animalsGreedElement.insertAdjacentHTML("afterbegin", this.templater.getCardsGridTemplate());
    this.animalsGreedElement.addEventListener("click", greedClickHandler);

    this.cardsParentElement = document.querySelector(".cards-parent");
  }

  renderAnimalsGrid(cards) {
    this.cardsParentElement.innerHTML = cards
      .map(card => {
        return this.templater.getCardTemplate(card);
      })
      .join("");
  }
}
