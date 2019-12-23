import { SearchView } from "./SearchView.js";
import { siteSettings } from "../../share/siteSettings.js";

export class SearchController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.publisherAPI = publisherAPI;
    this.view = new SearchView(this.handleFilterPanelClick.bind(this));

    this.activeFilterValue = "all";
    this.activeSearchValue = [];

    this.searchFieldAPI = new SlimSelect({
      select: ".select-breed",
      onChange: this.searchFiledHandler.bind(this),
      closeOnSelect: false,
      hideSelectedOption: true
    });

    this.view.renderFilterLinks(this.activeFilterValue);
    this.fillSearchFieldWithVariants(this.model.lastFilteredAppData.breeds);
  }

  handleFilterPanelClick(event) {
    event.preventDefault();
    const filter = event.target.getAttribute("href");
    if (filter) {
      this.activeFilterValue = filter;
      this.activeSearchValue = [];
      this.model.buildFilteredAppData(this.activeFilterValue, this.activeSearchValue);
      this.view.renderFilterLinks(this.activeFilterValue);
      this.fillSearchFieldWithVariants(this.model.lastFilteredAppData.breeds);
      this.publisherAPI.notify(siteSettings.event.filterStatusUpdate);
    }
  }

  searchFiledHandler(searchFiledData) {
    this.activeSearchValue = searchFiledData.map(option => option.value);
    this.model.buildFilteredAppData(this.activeFilterValue, this.activeSearchValue);
    this.publisherAPI.notify(siteSettings.event.filterStatusUpdate);
  }

  fillSearchFieldWithVariants(breeds) {
    this.searchFieldAPI.setData(breeds.map(breed => ({text: breed})))
  }
}
