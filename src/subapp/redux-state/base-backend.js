import WebSocketMock from './websocket-mock';

function BaseBackend(url) {
  let socket = null;

  this.connect = () => {
    return new Promise((resolve, reject) => {
      if (socket) {
        reject(new Error('ALREADY CONNECTED.'))
      } else {
        socket = new WebSocket(url);
        socket.addEventListener('open', () => {
          resolve();
        });
        socket.addEventListener('message', e => {
          const message = JSON.parse(e.data);
          console.log(message);
          if (message.type === 'TEST_MESSAGE') {
            const testMessageEvent = new Event('testMessage');
            this.dispatchEvent(testMessageEvent);
          }
        });
        //this.socket = socket;
      }
    });
  }

  this.disconnect = () => {
    return new Promise((resolve, reject) => {
      if (!socket) {
        reject(new Error('NOT CONNECTED.'));
      } else {
        socket.addEventListener('close', () => {
          socket = null;
          resolve();
        });
        socket.close();
      }
    });
  }
}

class BaseBackend1 extends EventTarget {
  constructor(url) {
    super();
    this.socket = null;
    this.url = url;
  }

  connect() {
    const url = this.url;
    return new Promise((resolve, reject) => {
      if (this.socket) {
        reject(new Error('ALREADY CONNECTED.'))
      } else {
        this.socket = new WebSocket(url);
        this.socket.addEventListener('open', () => {
          resolve();
        });
        this.socket.addEventListener('message', e => {
          const message = JSON.parse(e.data);
          console.log(message);
          if (message.type === 'TEST_MESSAGE') {
            const testMessageEvent = new Event('testMessage');
            this.dispatchEvent(testMessageEvent);
          }
        });
      }
    });
  }

  disconnect() {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('NOT CONNECTED.'));
      } else {
        this.socket.addEventListener('close', () => {
          this.socket = null;
          resolve();
        });
        this.socket.close();
      }
    });
  }
}

// inherit EventTarget
BaseBackend.prototype = Object.create(EventTarget.prototype);
// correct the constructor pointer because it points to EventTarget
BaseBackend.prototype.constructor = BaseBackend;

export default BaseBackend1;
