import { IndexPageTemplate } from "./IndexPageTemplate.js";
import { PageView } from "../PageView.js";

import { AnimalsGridController } from "../../modules/animalsGrid/AnimalsGridController.js";
import { PaginationController } from "../../modules/pagination/PaginationController.js";
import { SearchController } from "../../modules/search/SearchController.js";

export class IndexPageController {
  constructor(model, publisherAPI) {
    this.templater = new IndexPageTemplate();
    this.view = new PageView(this.templater.getPageMarkup());

    this.view.renderPage();

    this.paginationController = new PaginationController(publisherAPI);
    this.animalsGreedController = new AnimalsGridController(model, publisherAPI);
    this.searchController = new SearchController(model, publisherAPI);
  }
}
