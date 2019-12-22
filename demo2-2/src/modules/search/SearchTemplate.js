export class SearchTemplate {
  constructor() {}

  getSearchPanel() {
    return `<nav class="tabs is-centered is-large has-text-weight-light is-marginless">
    <ul>
      <li class="is-active">
        <a>
          <span class="icon is-small"><i class="fas fa-paw" aria-hidden="true"></i></span>
          <span>All pets</span>
        </a>
      </li>
      <li>
        <a>Cats</a>
      </li>
      <li>
        <a>Dogs</a>
      </li>
      <li>
        <a>Birds</a>
      </li>
      <li>
        <a>Fish</a>
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