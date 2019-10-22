export default class WebSocketMock extends EventTarget {
  constructor(url) {
    super();
    this.readyState = 0;
    setTimeout(() => {
      this.readyState = 1;
      this.dispatchEvent(new Event('open'));
    }, 500);
  }

  close() {
    this.readyState = 2;
    setTimeout(() => {
      this.readyState = 3;
      this.dispatchEvent(new Event('close'));
    }, 500);
  }

  send(message) {
    setTimeout(() => {
      const sendEvent = new Event('message');
      sendEvent.data = message;
      this.dispatchEvent(sendEvent);
    }, 500);
  }
}
