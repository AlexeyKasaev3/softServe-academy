export class SearchTemplate {
  constructor() {}

  getSearchPanel() {
    return `<nav class="tabs filter-tabs is-centered is-large has-text-weight-light is-marginless">
    <ul>
      <li class="is-active">
        <a href="all">All pets</a>
      </li>
      <li>
        <a href="cat">Cats</a>
      </li>
      <li>
        <a href="dog">Dogs</a>
      </li>
      <li>
        <a href="bird">Birds</a>
      </li>
      <li>
        <a href="fish">Fish</a>
      </li>
    </ul>
  </nav>
  <div class="container-find-breed is-flex container is-fluid">
    <div class="find-breed-text">Find Breed</div>
    <form class="is-flex find-breed-form">
      <select class="select-breed" multiple>
      </select>
      <button type="submit" class="button is-rounded">Find</button>
    </form>
  </div>`
  }  
}