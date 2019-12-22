import { siteSettings } from '../../share/siteSettings.js';
import { PaginationTemplate } from './PaginationTemplate.js'

export class PaginationView {
  constructor(navClickHandler) {
    this.templater = new PaginationTemplate;

    this.paginationDOMparent = document.querySelector(".pagination-container");
    this.template = new PaginationTemplate();

    this.paginationDOMparent.insertAdjacentHTML('afterbegin', this.templater.getPaginationContainer());
    this.paginationButtonsDOMparent = document.querySelector(".pagination-list");

    this.paginationDOMparent.addEventListener("click", this.routePaginationPanelClick.bind(this));
    this.navClickHandler = navClickHandler;

  }

  renderPagination(currentPage, totalPagesQuantity) {
    this.currentPage = Number(currentPage);
    this.totalPagesQuantity = Number(totalPagesQuantity);

    if (totalPagesQuantity < 2) {
      return null;
    } else {
      if (this.currentPage === 1) {
        document.querySelector(".pagination-previous").classList.add("out-of-rich");
        document.querySelector(".pagination-next").classList.remove("out-of-rich");
      } else if (this.currentPage === totalPagesQuantity) {
        document.querySelector(".pagination-next").classList.add("out-of-rich");
        document.querySelector(".pagination-previous").classList.remove("out-of-rich");
      } else {
        document.querySelector(".pagination-previous").classList.remove("out-of-rich");
        document.querySelector(".pagination-next").classList.remove("out-of-rich");
      }

      let buttons = "";
      let startPosition = 1;
      let endPosition = this.totalPagesQuantity;

      if (this.currentPage - 2 > 2) {
        buttons += this.template.getPaginationButton(1, false);
        buttons += this.template.getPaginationDots();
        startPosition = this.currentPage - 2;
      }

      if (this.currentPage + 2 < this.totalPagesQuantity - 1) {
        endPosition = this.currentPage + 2;
      }
      for (let i = startPosition; i <= endPosition; i += 1) {
        buttons += this.template.getPaginationButton(i, i === this.currentPage);
      }

      if (this.currentPage + 2 < this.totalPagesQuantity - 1) {
        buttons += this.template.getPaginationDots();
        buttons += this.template.getPaginationButton(this.totalPagesQuantity, false);
      }

      this.paginationButtonsDOMparent.innerHTML = buttons;
    }
  }

  routePaginationPanelClick(event) {
    if (event.target.classList.contains("pagination-link")) {
      this.navClickHandler(event.target.getAttribute("aria-label"));
    } else if (event.target.classList.contains("pagination-previous")) {
      this.navClickHandler(this.currentPage - 1);
    } else if (event.target.classList.contains("pagination-next")) {
      this.navClickHandler(this.currentPage + 1);
    }
  }
}