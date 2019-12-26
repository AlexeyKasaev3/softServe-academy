import { siteSettings } from "../share/siteSettings.js";

export class AppModel {
  constructor() {
    this.appData = null;
    this.lastFilteredAppData = null;
    this.lastAnimalsGridPageNum = 1;
    this.lastAnimalsGridFilter = "all";
    this.lastAnimalGridSearch = [];
    this.lastAnimalDetailsCard = null;
  }

  async fetchAndBuildAppData() {
    if (!this.appData) {
      return this.fetchAnimalsJSON().then(() => this.buildAppData());
    }
  }

  async fetchAnimalsJSON() {
    this.animalsJSON = await fetch(siteSettings.dataSourceURL).then(response => response.json());
  }

  buildAppData() {
    this.appData = this.animalsJSON.map(animal => ({
      ...animal,
      inCart: false,
      age: this.birthDateToAge(animal.birth_date),
      breed: this.titleCase(animal.breed)
    }));
  }

  buildFilteredAppData(filter = "all", search = []) {
    this.lastAnimalsGridFilter = filter;
    this.lastAnimalGridSearch = search;

    const filteredAppData = this.appData.filter(
      card => (filter === "all" || card.species === filter) && (!search.length || search.includes(card.breed))
    );
    this.lastFilteredAppData = {
      cards: filteredAppData,
      totalPagesQuantity: Math.ceil(filteredAppData.length / siteSettings.cardsPerPage),
      breeds: this.getBreeds(this.lastAnimalsGridFilter).sort()
    };
  }

  getAppData(pageNum) {
    if (this.lastFilteredAppData === null) {
      this.buildFilteredAppData(this.lastAnimalsGridFilter, this.lastAnimalGridSearch);
    }

    this.lastAnimalsGridPageNum = Number(pageNum);

    const sliceAnimalsArrEnd = siteSettings.cardsPerPage * pageNum;
    const sliceAnimalsArrStart = sliceAnimalsArrEnd - siteSettings.cardsPerPage;
    return {
      ...this.lastFilteredAppData,
      cards: this.lastFilteredAppData.cards.slice(sliceAnimalsArrStart, sliceAnimalsArrEnd),
      currentPage: pageNum
    };
  }

  getBreeds(species) {
    const breeds = {};
    if (species === "all") {
      this.appData.forEach(card => (breeds[card.breed] = null));
    } else {
      this.appData.filter(card => card.species === species).forEach(card => (breeds[card.breed] = null));
    }
    return Object.keys(breeds);
  }

  buildLastAnimalsDetailsCard(animalId) {
    this.lastAnimalDetailsCard = this.appData.filter(card => card.id === Number(animalId))[0];
  }

  setAnimalIncart(animalId) {
    const animalID = Number(animalId);
    this.appData.forEach(card => {
      if (card.id === animalID) card.inCart = true;
    });
    this.buildFilteredAppData(this.lastAnimalsGridFilter, this.lastAnimalGridSearch);
    if (this.lastAnimalDetailsCard) {
      this.buildLastAnimalsDetailsCard(animalId);
    }
  }

  removeAnimalFromCart(animalId) {
    const animalID = Number(animalId);
    this.appData.forEach(card => {
      if (card.id === animalID) card.inCart = false;
    });
    this.buildFilteredAppData(this.lastAnimalsGridFilter, this.lastAnimalGridSearch);
    if (this.lastAnimalDetailsCard) {
      this.buildLastAnimalsDetailsCard(animalId);
    }
  }

  getItemsInCart() {
    return this.appData.filter(card => card.inCart);
  }

  birthDateToAge(miliseconds) {
    return Math.ceil((new Date().getTime() - new Date(miliseconds).getTime()) / 2592000000);
  }

  titleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");
  }
}
