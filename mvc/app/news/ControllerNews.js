import { ModelNews } from './ModelNews.js';
import { ViewNews } from './ViewNews.js';

export class ControllerNews {
    constructor() {
        this.model = new ModelNews();
        this.view = new ViewNews();
        this.view.addListeners(this.handleClickSearchBtn.bind(this));
    }

    handleClickSearchBtn() {
        this.getNews();
    }

    getNews() {
        this.model.getNews()
            .then(newsObj => this.view.renderNews(newsObj.articles));
    }
}
