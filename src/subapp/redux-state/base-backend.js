import WebSocketMock from './websocket-mock';

export default function BaseBackend(url) {
  let socket = null;

  this.connect = () => {
    return new Promise((resolve, reject) => {
      if (socket) {
        reject(new Error('ALREADY CONNECTED.'))
      } else {
        socket = new WebSocketMock(url);
        socket.addEventListener('open', () => {
          resolve();
        });
        this.socket = socket;
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
