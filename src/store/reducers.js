import { combineReducers } from 'redux';
import C from './constants';

export const flipJarSave = (state = false, action) => {
  switch (action.type) {
    case C.ADD_SAVE_JAR:
      return true;
    case C.MINUS_SAVE_JAR:
      return true;
    case C.CLOSE_SAVE_JAR:
      return false;
    case C.SET_SAVE_TOTAL:
      return false;
    default:
      return state;
  }
};

export const submitTextJarSave = (state = 'Add', action) => {
  switch (action.type) {
    case C.ADD_SAVE_JAR:
      return 'Add';
    case C.MINUS_SAVE_JAR:
      return 'Minus';
    default:
      return state;
  }
};

export const saveJarNote = (state = '', action) => {
  switch (action.type) {
    case C.ADD_SAVE_NOTE:
      return action.payload;
    case C.SET_SAVE_TOTAL:
      return '';
    default:
      return state;
  }
};

export const saveJarValue = (state = '', action) => {
  // Every keypress, grab the value of the input and send it to the setSaveJarValue action creator
  // that then sends an action to this reducer to mutate state
  switch (action.type) {
    case C.SET_SAVE_VALUE:
      return action.payload;
    case C.SET_SAVE_TOTAL:
      return '';
    default:
      return state;
  }
};

export const saveJarTotal = (state = 0, action) => {
  // Use the SET_SAVE_TOTAL case to do 3 things:
  // 1. Add a case to logs reducer to add a new log
  // 2. Add a case to flipJarSave to close the save jar
  // 3. Below, update the total using an action creator to calculate new total
  if (action.type === C.SET_SAVE_TOTAL) {
    return action.payload.newTotal;
  }
  return state;
};

export const flipJarSpend = (state = false, action) => {
  switch (action.type) {
    case C.ADD_SPEND_JAR:
      return true;
    case C.MINUS_SPEND_JAR:
      return true;
    case C.SET_SPEND_TOTAL:
      return false;
    case C.CLOSE_SPEND_JAR:
      return false;
    default:
      return state;
  }
};

export const submitTextJarSpend = (state = 'Add', action) => {
  switch (action.type) {
    case C.ADD_SPEND_JAR:
      return 'Add';
    case C.MINUS_SPEND_JAR:
      return 'Minus';
    default:
      return state;
  }
};

export const spendJarNote = (state = '', action) => {
  switch (action.type) {
    case C.ADD_SPEND_NOTE:
      return action.payload;
    case C.SET_SPEND_TOTAL:
      return '';
    default:
      return state;
  }
};

export const spendJarValue = (state = '', action) => {
  switch (action.type) {
    case C.SET_SPEND_VALUE:
      return action.payload;
    case C.SET_SPEND_TOTAL:
      return '';
    default:
      return state;
  }
};

export const spendJarTotal = (state = 0, action) => {
  if (action.type === C.SET_SPEND_TOTAL) {
    return action.payload.newTotal;
  }
  return state;
};

export const flipJarShare = (state = false, action) => {
  switch (action.type) {
    case C.ADD_SHARE_JAR:
      return true;
    case C.MINUS_SHARE_JAR:
      return true;
    case C.SET_SHARE_TOTAL:
      return false;
    case C.CLOSE_SHARE_JAR:
      return false;
    default:
      return state;
  }
};

export const submitTextJarShare = (state = 'Add', action) => {
  switch (action.type) {
    case C.ADD_SHARE_JAR:
      return 'Add';
    case C.MINUS_SHARE_JAR:
      return 'Minus';
    default:
      return state;
  }
};

export const shareJarNote = (state = '', action) => {
  switch (action.type) {
    case C.ADD_SHARE_NOTE:
      return action.payload;
    case C.SET_SHARE_TOTAL:
      return '';
    default:
      return state;
  }
};

export const shareJarValue = (state = '', action) => {
  switch (action.type) {
    case C.SET_SHARE_VALUE:
      return action.payload;
    case C.SET_SHARE_TOTAL:
      return '';
    default:
      return state;
  }
};

export const shareJarTotal = (state = 0, action) => {
  if (action.type === C.SET_SHARE_TOTAL) {
    return action.payload.newTotal;
  }
  return state;
};

export const flipJarLog = (state = false, action) => {
  switch (action.type) {
    case C.SHOW_LOG:
      return true;
    case C.CLOSE_LOG:
      return false;
    default:
      return state;
  }
};

export const logs = (state = [], action) => {
  switch (action.type) {
    case C.SET_SAVE_TOTAL:
      return [...state, action.payload.log];
    case C.SET_SPEND_TOTAL:
      return [...state, action.payload.log];
    case C.SET_SHARE_TOTAL:
      return [...state, action.payload.log];
    default:
      return state;
  }
};

export const pageTrans = (state = false, action) => {
  switch (action.type) {
    case C.SET_USER_AJ:
      return true;
    case C.SET_USER_JR:
      return true;
    case C.HIDE_WIPE:
      return false;
    default:
      return state;
  }
};

export const handleUserAJ = (state = false, action) => {
  switch (action.type) {
    case C.SET_USER_AJ:
      return true;
    case C.SET_USER_JR:
      return false;
    default:
      return state;
  }
};

export const handleUserJR = (state = true, action) => {
  switch (action.type) {
    case C.SET_USER_JR:
      return true;
    case C.SET_USER_AJ:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  submitTextJarSave,
  submitTextJarSpend,
  submitTextJarShare,
  flipJarLog,
  flipJarSave,
  flipJarShare,
  flipJarSpend,
  logs,
  saveJarNote,
  saveJarValue,
  saveJarTotal,
  spendJarNote,
  spendJarValue,
  spendJarTotal,
  shareJarNote,
  shareJarValue,
  shareJarTotal,
  pageTrans,
  handleUserAJ,
  handleUserJR,
});

// export default combineReducers({
//   ajData: combineReducers({
//     submitTextJarSaveAj,
//     submitTextJarSpendAj,
//     submitTextJarShareAj,
//     flipJarLogAj,
//     flipJarSaveAj,
//     flipJarShareAj,
//     flipJarSpendAj,
//     logsAj,
//     saveJarNoteAj,
//     saveJarValueAj,
//     saveJarTotalAj,
//     spendJarNoteAj,
//     spendJarValueAj,
//     spendJarTotalAj,
//     shareJarNoteAj,
//     shareJarValueAj,
//     shareJarTotalAj,
//     pageTrans,
//     handleUserAJ,
//     handleUserJR,
//   }),
//   jrData: combineReducers({
//     submitTextJarSaveJr,
//     submitTextJarSpendJr,
//     submitTextJarShareJr,
//     flipJarLogJr,
//     flipJarSaveJr,
//     flipJarShareJr,
//     flipJarSpendJr,
//     logsJr,
//     saveJarNoteJr,
//     saveJarValueJr,
//     saveJarTotalJr,
//     spendJarNoteJr,
//     spendJarValueJr,
//     spendJarTotalJr,
//     shareJarNoteJr,
//     shareJarValueJr,
//     shareJarTotalJr,
//     pageTrans,
//     handleUserAJ,
//     handleUserJR,
//   }),
// });
