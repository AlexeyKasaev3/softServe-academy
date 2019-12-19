import { ModelAnimals } from "./ModelAnimals.js";
import { ViewAnimals } from "./ViewAnimals.js";

export class ControllerAnimals {
  constructor() {
    this.model = new ModelAnimals();
    this.view = new ViewAnimals();
  }

  init() {
    this.view.init();
    this.getAnimals();
  }

  getAnimals() {
    this.model
      .getAnimals()
      .then(animalsArray => this.view.renderAnimals(animalsArray));
  }
}
