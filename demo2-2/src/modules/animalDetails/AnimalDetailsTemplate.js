export class AnimalsDetailsTemplate {
  constructor() {}

  getAnimalDetailsMarkup({id, inCart}) {
    return `<div class="section is-centered">${JSON.stringify(arguments[0])}</div>
    <div class="section is-centered"><button class="button is-danger add-to-cart-button" data-animal_id="${id}">${inCart ? 'IN CART' : 'BUY'}</button></div>
    <button class="button is-primary animals-details-back-button">Back</button>`
  }
}