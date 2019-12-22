import { SearchView } from "./SearchView.js";
import { siteSettings } from "../../share/siteSettings.js";

export class SearchController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.publisherAPI = publisherAPI;
    this.view = new SearchView(this.handleFilterClick.bind(this));

    this.displaySearchPannel();
  }

  displaySearchPannel() {
    this.view.parseSearchPannel();
  }

  handleFilterClick(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    if(target) {
      this.publisherAPI.notify(siteSettings.event.filterClick, target)
    }
  }
}
