import { SearchView } from "./SearchView.js";
import { siteSettings } from "../../share/siteSettings.js";

export class SearchController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.publisherAPI = publisherAPI;
    this.view = new SearchView();

    displaySearchPannel();
  }

  displaySearchPannel() {
    this.view.parseSearchPannel();
  }
}
