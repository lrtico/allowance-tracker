import C from './constants';

export const setSaveJarValue = (value) => ({
  type: C.SET_SAVE_VALUE,
  payload: value,
});

export const setSaveJarNote = (value) => ({
  type: C.ADD_SAVE_NOTE,
  payload: value,
});

export const setSaveJarTotal = (jar, amount, date, note, currTotal) => {
  // Convert the input value from a string to a number
  const x = amount - 0;
  // The new total = the amount entered in the UI + the current total in state
  const newTotal = Math.round((x + currTotal) * 100) / 100;

  // The payload is a shaped object b/c this action.type is used in multiple reducers
  return {
    type: C.SET_SAVE_TOTAL,
    payload: {
      newTotal,
      log: {
        jar, amount, date, note, newTotal,
      },
    },
  };
};

export const setSpendJarValue = (value) => ({
  type: C.SET_SPEND_VALUE,
  payload: value,
});

export const setSpendJarNote = (value) => ({
  type: C.ADD_SPEND_NOTE,
  payload: value,
});

export const setSpendJarTotal = (jar, amount, date, note, currTotal) => {
  const x = amount - 0;
  const newTotal = Math.round((x + currTotal) * 100) / 100;

  return {
    type: C.SET_SPEND_TOTAL,
    payload: {
      newTotal,
      log: {
        jar, amount, date, note, newTotal,
      },
    },
  };
};

export const setShareJarValue = (value) => ({
  type: C.SET_SHARE_VALUE,
  payload: value,
});

export const setShareJarNote = (value) => ({
  type: C.ADD_SHARE_NOTE,
  payload: value,
});

export const setShareJarTotal = (jar, amount, date, note, currTotal) => {
  const x = amount - 0;
  const newTotal = Math.round((x - currTotal) * 100) / 100;

  return {
    type: C.SET_SHARE_TOTAL,
    payload: {
      newTotal,
      log: {
        jar, amount, date, note, newTotal,
      },
    },
  };
};
