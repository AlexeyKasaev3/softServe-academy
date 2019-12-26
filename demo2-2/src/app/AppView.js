import { siteSettings } from "../share/siteSettings.js";
import { AppTemplate } from "./AppTemplate.js";

export class AppView {
  constructor(siteNavClickHandler) {
    this.siteNavClickHandler = siteNavClickHandler;
    this.templater = new AppTemplate();
  }

  renderSiteTemplate() {
    document
      .querySelector(`#${siteSettings.rootAppElementIDname}`)
      .insertAdjacentHTML("beforeend", this.templater.getSiteMarkup());
    document.querySelector(".site-navigation").addEventListener("click", this.siteNavClickHandler);
  }

  refreshNavigation(currentPage) {
    [...document.querySelector(".site-navigation").children].forEach(link => link.classList.remove("current-link"));
    if (document.querySelector(`[href="${currentPage}"]`)) {
      document.querySelector(`[href="${currentPage}"]`).classList.add("current-link");
    }
  }
}
