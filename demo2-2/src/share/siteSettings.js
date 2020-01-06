const settings = {
  dataSourceURL: "https://maksv21.github.io/softserve/demo2/database/animals_en.json",
  cardsPerPage: 6,
  defaultAnimalsGridPageNumber: 1,
  rootAppElementIDname: "root",
  rootAppContentElementIDname: "root-content",
  event: {
    changePage: "changePage",
    paginationPageChange: "paginationPageChange",
    animalsGridPageChange: "animalsGridPageChange",
    filterStatusUpdate: "filterStatusUpdate",
    addAnimalToCart: "addAnimalToCart",
    removeAnimalFromCart: "removeAnimalFromCart",
    orderFormOpen: "orderFormOpen"
  },
  page: {
    index: "index",
    animalDetails: "animal details",
    cart: "cart"
  },
  orderFormStatus: {
    open: 'open',
    close: 'close'
  }
};

export const siteSettings = Object.freeze(settings);
