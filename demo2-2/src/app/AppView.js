import { siteSettings } from "../share/siteSettings.js";
import { AppTemplate } from "./AppTemplate.js";

export class AppView {
  constructor() {
    this.templater = new AppTemplate();
  }

  parseSiteTemplate() {
    document.querySelector(`#${siteSettings.rootAppElementIDname}`).insertAdjacentHTML("beforeend", this.templater.getSiteMarkup());
  }
}
