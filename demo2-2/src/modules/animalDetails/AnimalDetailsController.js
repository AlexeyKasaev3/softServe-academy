import { siteSettings } from '../../share/siteSettings.js';
import { AnimalsDetailsView } from "./AnimalDetailsView.js";

export class AnimalsDetailsController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.publisherAPI = publisherAPI;
    this.view = new AnimalsDetailsView(this.handleBackButtonClick.bind(this));
    this.view.renderAnimalDetails(this.model.getAnimalById(this.model.lastAnimalsDetailsId));
  }

  handleBackButtonClick() {
    this.publisherAPI.notify(siteSettings.event.changePage, siteSettings.page.index)
  }
}
