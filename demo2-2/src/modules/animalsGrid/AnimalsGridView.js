import { AnimalsGridTemplate } from './AnimalsGridTemplate.js'

export class AnimalsGridView {
  constructor() {
    this.templater = new AnimalsGridTemplate();
    document.querySelector('.animals-greed').insertAdjacentHTML('beforebegin', this.templater.getCardsGridTemplate());

    this.cardsParentElement = document.querySelector('.cards-parent')
  }

  renderAnimalsGrid(cards) {
    this.cardsParentElement.innerHTML = cards
      .map(card => {
        return this.templater.getCardTemplate(card);
      })
      .join("");
  }
}