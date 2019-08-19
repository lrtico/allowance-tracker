import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './store';
import sampleData from './store/initialState';
import { setSaveJarTotal, setSaveJarValue, setSaveJarNote } from './store/actions';
import C from './store/constants';
import './index.css';
import App from './containers/App';

const rootEl = document.getElementById('root');

const initialState = (localStorage['allowance-tracker'])
  ? JSON.parse(localStorage['allowance-tracker'])
  : {};

const saveState = () => {
  const state = JSON.stringify(store.getState());
  localStorage['allowance-tracker'] = state;
};

const store = storeFactory(initialState);

store.subscribe(saveState);

window.store = store;

// store.dispatch(
//   setSaveJarTotal('Share jar', '-14', 'Sat Aug 17 2019', 'Helping demo kitchen floor', 10),
// );

// store.dispatch(
//   setSaveJarValue('4.25'),
// );

// store.dispatch(
//   setSaveJarNote('Washed the floors'),
// );

// store.dispatch(
//   setSaveJarTotal('Share jar', '+3.50', 'Sun Aug 18 2019', "Vacuum Mum's car", -14),
// );

// store.dispatch({
//   type: C.CLOSE_SAVE_JAR,
// });

// store.dispatch({
//   type: C.MINUS_SAVE_JAR,
// });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);
