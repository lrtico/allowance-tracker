import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';

// Middleware that's a higher order function to create log messages
// when an action is dispatched to the store
const consoleMessages = store => next => action => {
  let result;

  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log('logs', store.getState().logs.length);
  result = next(action);

  const { logs, flipJarSave } = store.getState();
  console.log(`
    flipJarLog: ${JSON.stringify(logs)}
    filpJarSave: ${flipJarSave}
  `);
  console.groupEnd();

  return result;
};

export default (initialState = {}) => {
  return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState);
};
