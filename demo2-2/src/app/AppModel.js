import { siteSettings } from "../share/siteSettings.js";

export class AppModel {
  constructor() {
    const stateFromSessionStorage = this.getStateFromSessionStorage();
    if (stateFromSessionStorage) {
      this.setModelStateFromSessionStorage(stateFromSessionStorage);
    } else {
      this.setInitialModelState();
    }
  }

  setInitialModelState() {
    this.animalsJSON = null;
    this.appData = null;
    this.lastFilteredAppData = null;
    this.lastAnimalsGridPageNum = 1;
    this.lastAnimalsGridFilter = "all";
    this.lastAnimalsGridSearch = [];
    this.lastAnimalsGridSortMethod = 'age-up';
    this.lastAnimalDetailsCard = null;
    this.orderFormStatus = siteSettings.orderFormStatus.close;
    this.currentPage = siteSettings.page.index;
  }

  setModelStateFromSessionStorage(stateFromSessionStorage) {
    Object.keys(stateFromSessionStorage).forEach(key => (this[key] = stateFromSessionStorage[key]));
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
    this.saveStateInSessionStorage();
  }

  buildFilteredAppData(filter = "all", search = [], sortMethod = this.lastAnimalsGridSortMethod) {
    this.lastAnimalsGridFilter = filter;
    this.lastAnimalGridSearch = search;
    this.lastAnimalsGridSortMethod = sortMethod;

    let filteredAppData = this.appData.filter(
      card => (filter === "all" || card.species === filter) && (!search.length || search.includes(card.breed))
    );

    switch(sortMethod) {
      case 'age-up':
        filteredAppData = filteredAppData.sort((a, b) => a.age - b.age);
        break;
      case 'age-down':
        filteredAppData = filteredAppData.sort((a, b) => b.age - a.age);
        break;
      case 'price-up':
        filteredAppData = filteredAppData.sort((a, b) => a.price - b.price);
        break;
      case 'down-down':
        filteredAppData = filteredAppData.sort((a, b) => b.price - a.price);
        break;
    }

    this.lastFilteredAppData = {
      cards: filteredAppData,
      totalPagesQuantity: Math.ceil(filteredAppData.length / siteSettings.cardsPerPage),
      breeds: this.getBreeds(this.lastAnimalsGridFilter).sort()
    };
    this.saveStateInSessionStorage();
  }

  getAppData(pageNum) {
    if (this.lastFilteredAppData === null) {
      this.buildFilteredAppData(this.lastAnimalsGridFilter, this.lastAnimalGridSearch);
    }

    this.lastAnimalsGridPageNum = Number(pageNum);
    this.saveStateInSessionStorage();

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
    this.saveStateInSessionStorage();
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
    this.saveStateInSessionStorage();
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
    this.saveStateInSessionStorage();
  }

  getItemsInCartData() {
    let totalCartPrice = 0;
    const itemsInCart = this.appData.filter(card => {
      if (card.inCart) {
        totalCartPrice += card.price;
        return true;
      }
    });
    return { totalCartPrice, itemsInCart };
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

  saveStateInSessionStorage() {
    sessionStorage.setItem(siteSettings.sessionStorageKey, JSON.stringify(this));
  }

  getStateFromSessionStorage() {
    const dataFromSessionStorage = sessionStorage.getItem(siteSettings.sessionStorageKey);
    if (dataFromSessionStorage) {
      return JSON.parse(dataFromSessionStorage);
    } else {
      return false;
    }
  }

  setOrderFormStatus(status) {
    this.orderFormStatus = status;
    this.saveStateInSessionStorage();
  }

  setCurrentPage(page) {
    this.currentPage = page;
    this.saveStateInSessionStorage();
  }

  restoreInitialAppState() {
    sessionStorage.clear();
    this.setInitialModelState();
    this.fetchAndBuildAppData();
  }
}