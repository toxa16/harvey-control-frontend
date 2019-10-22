import ActionType from './action-type.enum';

export function connect() {
  return {
    type: ActionType.CONNECT,
  }
}
export function disconnect() {
  return {
    type: ActionType.DISCONNECT,
  }
}
