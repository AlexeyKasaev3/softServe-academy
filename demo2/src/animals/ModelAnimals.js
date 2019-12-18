export class ModelAnimals {
  constructor() {
    this.link =
      "https://alexeykasaev3.github.io/softServe-academy/demo2/json/animals_en.json";
  }

  getAnimals() {
    return fetch(this.link).then(resp => resp.json());
  }
}
