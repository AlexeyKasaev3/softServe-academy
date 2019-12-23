import { SearchTemplate } from "./SearchTemplate.js";

export class SearchView {
  constructor(filterClickHandler) {
    this.templater = new SearchTemplate();
    document.querySelector(".filters").insertAdjacentHTML("afterbegin", this.templater.getSearchPanel());

    this.filterLinksParentElement = document.querySelector(".filter-links-parent");
    this.filterLinksParentElement.addEventListener("click", filterClickHandler);
  }

  renderFilterLinks(activeLink) {
    this.filterLinksParentElement.innerHTML = this.templater.getFilterLinks(activeLink);
  }
}
