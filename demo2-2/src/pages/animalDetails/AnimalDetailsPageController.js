import { PageView } from '../PageView.js'
import { AnimalsDetailsController } from '../../modules/animalDetails/AnimalDetailsController.js'
import { AnimalsDetailsPageTemplate } from './AnimalDetailsPageTemplate.js'
 
export class AnimalsDetailsPageController {
  constructor(model, publisherAPI) {
    this.templater = new AnimalsDetailsPageTemplate();
    this.view = new PageView(this.templater.getPageMarkup());

    this.view.renderPage();

    this.animalsDetailsController = new AnimalsDetailsController(model, publisherAPI);
  }
}
