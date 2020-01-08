import { SearchTemplate } from "./SearchTemplate.js";

export class SearchView {
  constructor(filterClickHandler, sortPanelClickHandler) {
    this.templater = new SearchTemplate();
    document.querySelector(".filters").insertAdjacentHTML("afterbegin", this.templater.getSearchPanel());

    this.filterLinksParentElement = document.querySelector(".filter-tabs");
    this.filterLinksParentElement.addEventListener("click", filterClickHandler);

    this.sortLinksParentElement = document.querySelector(".sort-options");
    this.sortLinksParentElement.addEventListener("click", sortPanelClickHandler);
  }

  renderFilterLinks(activeLink) {
    this.filterLinksParentElement.innerHTML = this.templater.getFilterLinks(activeLink);
  }

  renderSortLinks(activeSortMethod) {
    this.sortLinksParentElement.innerHTML = this.templater.getSortLinks(activeSortMethod);
  }
}
