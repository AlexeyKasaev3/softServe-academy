export class Publisher {
  constructor() {
    this.subscribes = {};
    this.publisherAPI = {
      subscribe: this.subscribe.bind(this),
      notify: this.notify.bind(this)
    };
  }

  subscribe(event, func) {
    if (!this.subscribes.hasOwnProperty(event)) {
      this.subscribes[event] = [];
    }
    this.subscribes[event].push(func);
  }

  notify(event, data) {
    if (!this.subscribes.hasOwnProperty(event)) {
      this.subscribes[event] = [];
    }
    this.subscribes[event].forEach(sb => sb(data));
  }
}
