export class Observer {
  constructor() {
    this.listeners = []
  }
  subscribe(eventType, listener) {
    this.listeners.push = [eventType, listener]
  }
  unsubscribe(eventType, listener) {
    this.listeners = this.listeners.map(value => )
  }
  notify(eventType, data) {
    this.listeners.forEach(listener => {
      if()
    })
  }
}