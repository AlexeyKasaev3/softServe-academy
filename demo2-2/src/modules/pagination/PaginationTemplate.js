export class PaginationTemplate {
  constructor() {}

  getPaginationContainer() {
    return `<div class="section">
    <div class="container">
    <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
    <a class="pagination-previous kaa-pagination-arrow">Previous</a>
    <a class="pagination-next kaa-pagination-arrow">Next page</a>
    <ul class="pagination-list">
    </ul>
    </nav>
    </div>
    </div>`;
  }

  getPaginationButton(pageNum, active = false) {
    return `<li><a class="pagination-link ${active ? "is-current" : ""}" aria-label="${pageNum}">${pageNum}</a></li>`;
  }

  getPaginationDots() {
    return `<li><span class="pagination-ellipsis">&hellip;</span></li>`;
  }
}
