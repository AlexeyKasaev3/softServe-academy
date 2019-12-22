import { siteSettings } from "../../share/siteSettings.js";
import { PaginationView } from "./PaginationView.js";

export class PaginationController {
  constructor(publisherAPI) {
    this.publisherAPI = publisherAPI;
    this.view = new PaginationView(this.navClickHandler.bind(this));
    this.publisherAPI.subscribe(siteSettings.event.animalsGridPageChange, this.handleAnimalsPageChange.bind(this));
  }

  handleAnimalsPageChange({ currentPage, totalPagesQuantity }) {
    this.view.renderPagination(currentPage, totalPagesQuantity);
  }

  navClickHandler(page) {
    this.publisherAPI.notify(siteSettings.event.paginationPageChange, page);
  }
}
