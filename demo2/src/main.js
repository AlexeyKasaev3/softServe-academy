import { ControllerAnimals } from "./animals/ControllerAnimals.js";
import { Publisher } from './share/Publisher.js';
import { PaginationController } from "./pagination/PaginationController.js";

const publisher = new Publisher();

const animals = new ControllerAnimals(publisher.publisherAPI);
const pagination = new PaginationController(publisher.publisherAPI)

new SlimSelect({
  select: '.select-breed'
})