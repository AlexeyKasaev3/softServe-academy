const settings = {
  dataSourceURL: "https://maksv21.github.io/softserve/demo2/database/animals_en.json",
  cardsPerPage: 6,
  defaultAnimalsGridPageNumber: 1,
  rootAppElementIDname: "root",
  rootAppContentElementIDname: "root-content",
  sessionStorageKey: "df44kjhf32487dfkhj",
  event: {
    changePage: "changePage",
    paginationPageChange: "paginationPageChange",
    animalsGridPageChange: "animalsGridPageChange",
    filterStatusUpdate: "filterStatusUpdate",
    addAnimalToCart: "addAnimalToCart",
    removeAnimalFromCart: "removeAnimalFromCart",
    orderFormOpen: "orderFormOpen",
    orderFormSubmited: "orderFormSubmited"
  },
  page: {
    index: "index",
    animalDetails: "animal details",
    cart: "cart"
  },
  orderFormStatus: {
    open: "open",
    close: "close"
  },
  telegramBot: {
    APIkey: "1056859763:AAGftWl4vMDB78pdGub2xdZvd-sFAZ6YEc4",
    chatID: 343471857
  }
};

export const siteSettings = Object.freeze(settings);