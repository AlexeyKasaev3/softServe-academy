export class CartTemplate {
  constructor() {}

  static getCartMarkup(data) {
    return `<div class="section is-centered">${JSON.stringify(data)}</div>`
  }
}