export class SearchTemplate {
  constructor() {}

  getSearchPanel() {
    return `<nav class="filter-tabs container is-fluid">
  </nav>
  <form class="container-find-breed container is-fluid">
    <label for="select-breed" class="find-breed-label">Find Breed</label>
    <select id="select-breed" class="select-breed" multiple></select>
  </form>`;
  }

  getFilterLinks(activeLink) {
    return `
    <a href="all" class="${activeLink === "all" ? "button" : " button is-dark"}">All pets</a>
    <a href="cat" class="${activeLink === "cat" ? "button" : " button is-dark"}">Cats</a>
    <a href="dog" class="${activeLink === "dog" ? "button" : " button is-dark"}">Dogs</a>
    <a href="bird" class="${activeLink === "bird" ? "button" : " button is-dark"}">Birds</a>
    <a href="fish" class="${activeLink === "fish" ? "button" : " button is-dark"}">Fish</a>`;
  }
}
