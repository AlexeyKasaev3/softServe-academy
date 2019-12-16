//import { SingletonTemplater } from '../share/SingletonTemplater.js';
import { Templater } from '../share/Templater.js'

export class ViewNews {
    constructor() {
        this.domNews = document.querySelector('.news');
        this.btnSearch = document.querySelector('.btn__search');
        //this.templater = SingletonTemplater('/app/news/templateNews.html');
        this.templater = Templater('/app/news/templateNews.html');
    }

    renderNews(news) {
        let newsStr = '';

        news.forEach(nws => {
            newsStr += this.prepareNewsArticle(nws);
        });

        this.domNews.innerHTML = newsStr;
    }

    prepareArticleData(article) {
        return Object.entries(article).map(el => {
            return {
                name: el[0],
                value: el[1]
            };
        });
    }

    prepareNewsArticle(article) {
        return this.templater.getHTML(this.prepareArticleData(article));
    }

    addListeners(searchFunc) {
        this.btnSearch.addEventListener('click', searchFunc);
    }

}
