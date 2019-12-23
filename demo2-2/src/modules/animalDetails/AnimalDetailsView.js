import { AnimalsDetailsTemplate } from './AnimalDetailsTemplate.js'

export class AnimalsDetailsView {
  constructor(backButtonClickHandler) {
    this.templater = new AnimalsDetailsTemplate();
    document.querySelector('.animals-details').insertAdjacentHTML('afterbegin', this.templater.getDetailsMarkup())
    this.detailsParentElement = document.querySelector('.details-parent-element')
    document.querySelector('.animals-details-back-button').addEventListener('click', backButtonClickHandler)
  }

  renderAnimalDetails(animalObj) {
    this.detailsParentElement.innerHTML = `<img src="${animalObj.image}" />` + JSON.stringify(animalObj)
  }
}