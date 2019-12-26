import { siteSettings } from "../share/siteSettings.js";

export class AppTemplate {
  constructor() {}

  getSiteMarkup() {
    return `<div class="animated fadeIn slow">
    <header class="site-header">
        <h1 class="title is-1 has-text-centered">Pets Country</h1>
        <nav class="has-text-centered site-navigation is-size-5">
         <a href="${siteSettings.page.index}" class="has-text-black">Catalog</a>
          <a href="${siteSettings.page.cart}" class="has-text-black">Cart</a>
        </nav>
      </header>
      <main id="${siteSettings.rootAppContentElementIDname}"></main>
      <footer>
      </footer>
      </div>
      `;
  }
}
