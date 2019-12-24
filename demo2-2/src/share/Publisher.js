export class Publisher {
  constructor() {
    this.subscribes = {};
    this.controles = {
      subscribe: this.subscribe.bind(this),
      unsubscribe: this.unsubscribe.bind(this),
      notify: this.notify.bind(this),
      unsubscribeAll: this.unsubscribeAll.bind(this)
    };
  }

  subscribe(event, func) {
    this.checkEvent(event);
    this.subscribes[event].push(func);
  }

  unsubscribe(event, func) {
    this.checkEvent(event);
    this.subscribes[event] = this.subscribes[event].filter(fu => fu != func);
  }

  notify(event, data) {
    //console.log('NOTIFY', event, data, this.subscribes)
    this.checkEvent(event);
    this.subscribes[event].forEach(sb => sb(data));
  }

  checkEvent(event) {
    if (!this.subscribes.hasOwnProperty(event)) {
      this.subscribes[event] = [];
    }
  }

  unsubscribeAll() {
    this.subscribes = {changePage: this.subscribes.changePage}
  }
}