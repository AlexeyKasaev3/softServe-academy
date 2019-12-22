import { siteSettings } from '../share/siteSettings.js'

export class AppTemplate {
  constructor() {}

  getSiteMarkup() {
    return `<header class="site-header">
        <h1 class="title is-1 has-text-centered">Pets Country</h1>
      </header>
      <main id="${siteSettings.rootAppContentElementIDname}"></main>
      <footer>FOOTER HERE</footer>
      
      `;
  }
}
