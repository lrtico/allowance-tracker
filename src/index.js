import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './store';
import './index.css';
import App from './components/App/App';

const rootEl = document.getElementById('root');

// Create two const to be inserted itno the local storage function call
// One for AJ, one for JR, to determine which key to be used for the data
const JR = 'allowance-tracker-jr';
const AJ = 'allowance-tracker-aj';
const initialState = (localStorage[JR])
  ? JSON.parse(localStorage[JR])
  : {};

const saveState = () => {
  const state = JSON.stringify(store.getState());
  (store.getState().handleUserJR)
    ? localStorage[JR] = state
    : localStorage[AJ] = state;
};

const store = storeFactory(initialState);

store.subscribe(saveState);

window.store = store;

// Create function called once per week automatically to add money to jars for allowance

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);
