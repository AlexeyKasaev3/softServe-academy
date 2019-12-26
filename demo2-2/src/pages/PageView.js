import { siteSettings } from "../share/siteSettings.js";

export class PageView {
  constructor(templateStr) {
    this.templateStr = templateStr;
  }

  renderPage() {
    document
      .querySelector(`#${siteSettings.rootAppContentElementIDname}`)
      .insertAdjacentHTML("beforeend", this.templateStr);
  }
}
