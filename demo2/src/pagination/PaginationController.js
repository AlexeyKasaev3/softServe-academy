import { PaginationView } from "./PaginationView.js";
import { PaginationModel } from "./PaginationModel.js";

export class PaginationController {
  constructor(publisherAPI) {
    this.model = new PaginationModel()
    this.view = new PaginationView(this.navClickHandler.bind(this))
    this.publisherAPI = publisherAPI
    this.publisherAPI.subscribe('animals-page-change', this.handleAnimalsPageChange.bind(this))
  }

  handleAnimalsPageChange({currentPage, totalPagesQuantity}) {
    this.view.parsePagination(currentPage, totalPagesQuantity)
  }

  navClickHandler(page) {
    this.publisherAPI.notify('pagination-page-change', page)
  }
}