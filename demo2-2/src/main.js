import { AppController } from "./app/AppController.js";
import { Publisher } from "./share/Publisher.js";

const publisher = new Publisher();
const publisherAPI = publisher.controles;

const app = new AppController(publisherAPI);
