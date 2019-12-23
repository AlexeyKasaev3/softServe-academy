import { siteSettings } from "../share/siteSettings.js";

export class AppModel {
  constructor() {
    this.dataSource = siteSettings.dataSourceURL;
    this.appData = null;
    this.lastFilteredAppData = null;
    this.lastAnimalsDetailsId = null;
  }

  async fetchAndBuildAppData() {
    if (!this.appData) {
      return this.fetchAnimalsJSON().then(() => this.buildAppData());
    }
  }

  async fetchAnimalsJSON() {
    this.animalsJSON = await fetch(this.dataSource).then(response => response.json());
  }

  buildAppData() {
    this.appData = this.animalsJSON.map(animal => ({ ...animal, inCart: false }))
  }

  buildFilteredAppData(filter, search) {
    const filteredAppData = this.appData.filter(card => (filter === "all" || card.species === filter) && (!search.length || search.includes(card.breed)))
    this.lastFilteredAppData = {
      cards: filteredAppData,
      totalPagesQuantity: Math.ceil(filteredAppData.length / siteSettings.cardsPerPage),
      breeds: this.getBreeds(filteredAppData).sort()
    }
  }

  getAppData(page) {
    if(this.lastFilteredAppData === null) {
      this.buildFilteredAppData('all', [])
    }
    const sliceAnimalsArrEnd = siteSettings.cardsPerPage * page;
    const sliceAnimalsArrStart = sliceAnimalsArrEnd - siteSettings.cardsPerPage;
    return {
      ...this.lastFilteredAppData,
      cards: this.lastFilteredAppData.cards.slice(sliceAnimalsArrStart, sliceAnimalsArrEnd),
      currentPage: page
    }
  }

  getBreeds(arrayOfCards) {
    const breeds = {}
    arrayOfCards.forEach(card => breeds[card.breed] = 'doesn\'t matter');
    return Object.keys(breeds);
  }

  getAnimalById(animalId) {
    return this.appData.filter(card => card.id === Number(animalId))[0]
  }

  setLastAnimalsDetailsId(animalId) {
    this.lastAnimalsDetailsId = animalId;
  }
}
