import { SearchView } from "./SearchView.js";
import { siteSettings } from "../../share/siteSettings.js";

export class SearchController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.publisherAPI = publisherAPI;
    this.view = new SearchView(this.handleFilterPanelClick.bind(this));

    this.activeFilterValue = this.model.lastAnimalsGridFilter;
    this.activeSearchValue = this.model.lastAnimalGridSearch;

    this.searchFieldAPI = new SlimSelect({
      select: "#select-breed",
      onChange: this.searchFiledHandler.bind(this),
      closeOnSelect: false,
      hideSelectedOption: true,
      placeholder: 'Click to find...'
    });

    this.view.renderFilterLinks(this.activeFilterValue);
    this.fillSearchFieldWithCurrentData(this.model.lastFilteredAppData.breeds, this.model.lastAnimalGridSearch);
  }

  handleFilterPanelClick(event) {
    event.preventDefault();
    const filter = event.target.getAttribute("href");
    if (filter) {
      this.activeFilterValue = filter;
      this.activeSearchValue = [];
      this.model.buildFilteredAppData(this.activeFilterValue, this.activeSearchValue);
      this.view.renderFilterLinks(this.activeFilterValue);
      this.fillSearchFieldWithCurrentData(this.model.lastFilteredAppData.breeds, []);
      this.publisherAPI.notify(siteSettings.event.filterStatusUpdate, siteSettings.defaultAnimalsGridPageNumber);
    }
  }

  searchFiledHandler(searchFiledData) {
    if(searchFiledData.length !== this.model.lastAnimalGridSearch.length) {
      this.activeSearchValue = searchFiledData.map(option => option.value);
      this.model.buildFilteredAppData(this.activeFilterValue, this.activeSearchValue);
      this.publisherAPI.notify(siteSettings.event.filterStatusUpdate, siteSettings.defaultAnimalsGridPageNumber);
    }
  }

  fillSearchFieldWithCurrentData(breeds, currentSelectedBreeds) {
    this.searchFieldAPI.setData(breeds.map(breed => ({text: breed})))
    this.searchFieldAPI.set(currentSelectedBreeds)
  }
}
