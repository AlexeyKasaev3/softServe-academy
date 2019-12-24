import { siteSettings } from "../share/siteSettings.js";
import { AppTemplate } from "./AppTemplate.js";

export class AppView {
  constructor(cartLinkClickHandler) {
    this.cartLinkClickHandler = cartLinkClickHandler;
    this.templater = new AppTemplate();
  }

  renderSiteTemplate() {
    document.querySelector(`#${siteSettings.rootAppElementIDname}`).insertAdjacentHTML("beforeend", this.templater.getSiteMarkup());
    document.querySelector(".cart-link").addEventListener("click", this.cartLinkClickHandler);
  }
}
