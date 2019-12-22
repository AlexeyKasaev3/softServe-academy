import { SearchTemplate } from './SearchTemplate.js'

export class SearchView {
  constructor() {
    this.templater = new SearchTemplate()
    document.querySelector('.filters').insertAdjacentHTML('afterbegin', this.templater.getSearchPanel())
    new SlimSelect({
      select: '.select-breed'
    })
  }
}