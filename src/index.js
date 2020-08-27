import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './store';
import './index.css';
import {
  setSaveJarTotalJr,
  setSpendJarTotalJr,
  setShareJarTotalJr,
  setSaveJarTotalAj,
  setSpendJarTotalAj,
  setShareJarTotalAj,
} from './store/actions';
import App from './containers/App';

const rootEl = document.getElementById('root');

const JR = 'allowance-tracker-jr';
const AJ = 'allowance-tracker-aj';
const initialState = localStorage[JR] ? JSON.parse(localStorage[JR]) : {};

const saveState = () => {
  const state = JSON.stringify(store.getState());
  store.getState().handleUserJR
    ? (localStorage[JR] = state)
    : (localStorage[AJ] = state);
};

// Weekly allowance deposit
const payday = () => {
  const today = new Date();
  const dayOfTheWeek = today.getDay();

  if (dayOfTheWeek === 6) {
    console.log(
      `today is the ${dayOfTheWeek} of the week and the date is ${today}`,
    );
    store.dispatch(
      setSaveJarTotalAj(
        'Save jar',
        '1.25',
        'AJ Save Jar weekly allowance',
        store.getState().ajData.saveJarTotalAj,
      ),
    );
    store.dispatch(
      setSpendJarTotalAj(
        'Spend jar',
        '0.5',
        'AJSpend jar weekly allowance',
        store.getState().ajData.spendJarTotalAj,
      ),
    );
    store.dispatch(
      setShareJarTotalAj(
        'Share jar',
        '0.25',
        'AJ Share jar weekly allowance',
        store.getState().ajData.shareJarTotalAj,
      ),
    );
    store.dispatch(
      setSaveJarTotalJr(
        'Save jar',
        '3',
        'JR Save Jar weekly allowance',
        store.getState().jrData.saveJarTotalJr,
      ),
    );
    store.dispatch(
      setSpendJarTotalJr(
        'Spend jar',
        '1.5',
        'JR Spend jar weekly allowance',
        store.getState().jrData.spendJarTotalJr,
      ),
    );
    store.dispatch(
      setShareJarTotalJr(
        'Share jar',
        '0.50',
        'JR Share jar weekly allowance',
        store.getState().jrData.shareJarTotalJr,
      ),
    );
  } else {
    console.log(
      `today is not Saturday the ${dayOfTheWeek} of the week and the date is ${today}`,
    );
  }
};

const store = storeFactory(initialState);

store.subscribe(saveState);

window.store = store;

setInterval(payday, 8.64e7);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);
