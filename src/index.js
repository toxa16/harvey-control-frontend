import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import subAppReducer from './subapp/redux-state/reducer';
import rootSaga from './subapp/redux-state/sagas';
import machineStatusReducer from './machine-online-status/logic/reducer';
import machineOnlineStatusSaga from './machine-online-status/logic/sagas';
import authReducer from './auth/logic/reducer';
import authSaga from './auth/logic/auth-saga';
import controlBackendReducer from './control-backend/logic/reducer';
import controlBackendSaga from './control-backend/logic/saga';

//const url = 'ws://localhost:3001';  // env

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    controlBackend: subAppReducer,
    machineStatus: machineStatusReducer,
    auth: authReducer,
    controlBackend: controlBackendReducer,
  }),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(controlBackendSaga);

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
