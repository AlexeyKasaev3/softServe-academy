import { siteSettings } from "../share/siteSettings.js";

export class AppModel {
  constructor() {
    this.dataSource = siteSettings.dataSourceURL;
    this.appData = null;
    this.lastFilteredAppData = null;
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
    this.appData = {
      animals: this.animalsJSON.map(animal => ({ ...animal, inCart: false }))
    };
  }

  buildFilteredAppData(filter, search) {
    this.lastFilteredAppData = this.appData.animals.filter(card => (filter === "all" || card.species === filter) && (!search.length || search.includes(card.breed)));
  }

  getAppData(page) {
    if(this.lastFilteredAppData === null) {
      this.buildFilteredAppData('all', [])
    }
    const sliceAnimalsArrEnd = siteSettings.cardsPerPage * page;
    const sliceAnimalsArrStart = sliceAnimalsArrEnd - siteSettings.cardsPerPage;
    return {
      currentPage: page,
      totalPagesQuantity: Math.ceil(this.lastFilteredAppData.length / siteSettings.cardsPerPage),
      cards: this.lastFilteredAppData.slice(sliceAnimalsArrStart, sliceAnimalsArrEnd)
    }
  }
}
