import { PageView } from '../PageView.js'

export class AnimalsDetailsPageController {
  constructor(model, publisherAPI) {
    this.model = model;
    this.publisherAPI = publisherAPI;
    this.view = new PageView()
  }
}
