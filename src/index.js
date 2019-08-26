import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './store';
import './index.css';
import {
  setSaveJarTotalJr, setSpendJarTotalJr, setShareJarTotalJr,
  setSaveJarTotalAj, setSpendJarTotalAj, setShareJarTotalAj,
} from './store/actions';
import App from './containers/App';

const rootEl = document.getElementById('root');

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

// Weekly allowance deposit
let week = 6.048e+8;
const timer = () => {
  week -= 1;

  if (week === 0) {
    clearInterval(timer);
    store.dispatch(
      setSaveJarTotalAj('Save jar', '1.25', 'AJ Save Jar weekly allowance', store.getState().ajData.saveJarTotalAj),
    );
    store.dispatch(
      setSpendJarTotalAj('Spend jar', '0.5', 'AJSpend jar weekly allowance', store.getState().ajData.spendJarTotalAj),
    );
    store.dispatch(
      setShareJarTotalAj('Share jar', '0.25', 'AJ Share jar weekly allowance', store.getState().ajData.shareJarTotalAj),
    );
    store.dispatch(
      setSaveJarTotalJr('Save jar', '3', 'JR Save Jar weekly allowance', store.getState().jrData.saveJarTotalJr),
    );
    store.dispatch(
      setSpendJarTotalJr('Spend jar', '1.5', 'JR Spend jar weekly allowance', store.getState().jrData.spendJarTotalJr),
    );
    store.dispatch(
      setShareJarTotalJr('Share jar', '0.50', 'JR Share jar weekly allowance', store.getState().jrData.shareJarTotalJr),
    );
    week = 6.048e+8;
  } else {
    localStorage.setItem('payday', week - 1);
  }
};

setInterval(timer, 1000);

const store = storeFactory(initialState);

store.subscribe(saveState);

window.store = store;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);
