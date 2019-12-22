const settings = {
  dataSourceURL: "https://maksv21.github.io/softserve/demo2/database/animals_en.json",
  cardsPerPage: 8,
  defaultAnimalsGridPageNumber: 1,
  rootAppElementIDname: "root",
  rootAppContentElementIDname: "root-content",
  event: {
    changePage: "change-page",
    paginationPageChange: "pagination-page-change",
    animalsGridPageChange: "animals-grid-page-change"
  },
  page: {
    index: "index",
    animalDetails: "animal details",
    cart: "cart"
  }
};

export const siteSettings = Object.freeze(settings);
