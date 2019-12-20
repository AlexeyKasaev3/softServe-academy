import { SITE_SETTINGS } from '../share/SiteSettings.js'

export class ModelAnimals {
  constructor() {
    this.link =
      "https://maksv21.github.io/softserve/demo2/database/animals_en.json";
      this.animalsPromise = null
  }

  getAnimals(page = 1) {
    if(this.animalsPromise === null) {
      return this.fetchAnimals().then(() => this.getAnimals(page))
    } else {
      const end = SITE_SETTINGS.CARDS_PER_PAGE * page
      const start = end - SITE_SETTINGS.CARDS_PER_PAGE
      return this.animalsPromise.then(animalsArray => {
        return {
          currentPage: page,
          totalPagesQuantity: Math.ceil(animalsArray.length / SITE_SETTINGS.CARDS_PER_PAGE),
          cards: animalsArray.slice(start, end)
        }
      })
    } 
  }

  fetchAnimals() {
    return fetch(this.link)
        .then(response => this.animalsPromise = response.json())
  }
}
