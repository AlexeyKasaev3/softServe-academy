import { siteSettings } from "../../share/siteSettings.js";
import { AnimalsDetailsView } from "./AnimalDetailsView.js";

export class AnimalsDetailsController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.publisherAPI = publisherAPI;
    this.view = new AnimalsDetailsView(
      this.handleBackButtonClick.bind(this),
      this.handleAddToCardButtonClick.bind(this)
    );
    this.view.renderAnimalDetails(this.model.lastAnimalDetailsCard);
  }

  handleBackButtonClick() {
    this.publisherAPI.notify(siteSettings.event.changePage, siteSettings.page.index);
  }

  handleAddToCardButtonClick(event) {
    this.model.setAnimalIncart(event.target.dataset.animal_id);
    this.view.renderAnimalDetails(this.model.lastAnimalDetailsCard);
  }
}
