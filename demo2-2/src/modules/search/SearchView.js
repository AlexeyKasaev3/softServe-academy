import { SearchTemplate } from './SearchTemplate.js'

export class SearchView {
  constructor(filterClickHandler) {
    this.templater = new SearchTemplate()
    document.querySelector('.filters').insertAdjacentHTML('afterbegin', this.templater.getSearchPanel())
    new SlimSelect({select: '.select-breed'})
    document.querySelector('.filter-tabs').addEventListener('click', filterClickHandler)
  }

  parseSearchPannel() {
    
  }
}