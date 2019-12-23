export class SearchTemplate {
  constructor() {}

  getSearchPanel() {
    return `<nav class="tabs filter-tabs is-centered is-large has-text-weight-light is-marginless">
    <ul class="filter-links-parent">
    </ul>
  </nav>
  <div class="container-find-breed is-flex container is-fluid">
    <div class="find-breed-text">Find Breed</div>
    <form class="is-flex find-breed-form">
      <select class="select-breed" multiple>
      </select>
    </form>
  </div>`;
  }

  getFilterLinks(activeLink) {
    return `<li ${activeLink === "all" ? 'class="is-active"' : ""}>
    <a href="all">All pets</a>
  </li>
  <li ${activeLink === "cat" ? 'class="is-active"' : ""}>
    <a href="cat">Cats</a>
  </li>
  <li ${activeLink === "dog" ? 'class="is-active"' : ""}>
    <a href="dog">Dogs</a>
  </li>
  <li ${activeLink === "bird" ? 'class="is-active"' : ""}>
    <a href="bird">Birds</a>
  </li>
  <li ${activeLink === "fish" ? 'class="is-active"' : ""}>
    <a href="fish">Fish</a>
  </li>`;
  }
}
