import { Templater } from "../share/Templater.js";

export class ViewAnimals {
  constructor() {
    this.domAnimalsGrid = document.querySelector(".columns");
    //this.animalsCard = Templater.getInstance('/src/animals/animalCardTemplate.html')
    this.animalsCard = Templater.getInstance('https://alexeykasaev3.github.io/softServe-academy/demo2/src/animals/animalCardTemplate.html')
  }

  renderAnimalsGrid(animals) {
    let animalStr = "";

    animals.forEach(animal => {
      animalStr += this.prepareAnimalCard(animal);
    });

    this.domAnimalsGrid.innerHTML = animalStr;
  }

  prepareArticleData(article) {
    return Object.entries(article).map(el => {
      return {
        name: el[0],
        value: el[1]
      };
    });
  }

  prepareAnimalCard(animal) {
    return this.animalsCard.getHTML(this.prepareArticleData(animal));
  }
}

/*
https://alexeykasaev3.github.io/softServe-academy/mvc/app/news/templateNews.html


*/
