import C from './constants';

export const closeSaveJar = () => ({
  type: C.CLOSE_SAVE_JAR,
});

export const setSubmitTextAddSaveJar = () => ({
  type: C.ADD_SAVE_JAR,
});

export const setSubmitTextMinusSaveJar = () => ({
  type: C.MINUS_SAVE_JAR,
});

export const setSaveJarValueAj = (value) => {
  if (isNaN(value)) {
    document
      .querySelector('#save-jar-error')
      .classList.add('save-jar-error--active');
    return {
      type: C.SET_SAVE_VALUE_AJ,
      payload: '',
    };
  }
  document
    .querySelector('#save-jar-error')
    .classList.remove('save-jar-error--active');

  return {
    type: C.SET_SAVE_VALUE_AJ,
    payload: value,
  };
};

export const setSaveJarValueJr = (value) => {
  if (isNaN(value)) {
    document
      .querySelector('#save-jar-error')
      .classList.add('save-jar-error--active');
    return {
      type: C.SET_SAVE_VALUE_JR,
      payload: '',
    };
  }
  document
    .querySelector('#save-jar-error')
    .classList.remove('save-jar-error--active');

  return {
    type: C.SET_SAVE_VALUE_JR,
    payload: value,
  };
};

export const setSaveJarNoteAj = (value) => ({
  type: C.ADD_SAVE_NOTE_AJ,
  payload: value,
});

export const setSaveJarNoteJr = (value) => ({
  type: C.ADD_SAVE_NOTE_JR,
  payload: value,
});

export const setSaveJarTotalAj = (jar, value, note, currTotal) => {
  const date = new Date().toDateString();
  // Convert the input value from a string to a number
  const x = value - 0;
  // The new total = the amount entered in the UI + the current total in state
  const newTotal = Math.round((x + currTotal) * 100) / 100;
  console.log(`
    setSaveJarTotal:
    jar: ${jar}
    amount: ${value}
    date: ${date}
    note: ${note}
    currTotal: ${currTotal}
    newTotal: ${newTotal}
  `);

  // The payload is a shaped object b/c this action.type is used in multiple reducers
  return {
    type: C.SET_SAVE_TOTAL_AJ,
    payload: {
      newTotal,
      log: {
        jar, value, date, note, newTotal,
      },
    },
  };
};

export const setSaveJarTotalJr = (jar, value, note, currTotal) => {
  const date = new Date().toDateString();
  // Convert the input value from a string to a number
  const x = value - 0;
  // The new total = the amount entered in the UI + the current total in state
  const newTotal = Math.round((x + currTotal) * 100) / 100;
  console.log(`
    setSaveJarTotal:
    jar: ${jar}
    amount: ${value}
    date: ${date}
    note: ${note}
    currTotal: ${currTotal}
    newTotal: ${newTotal}
  `);

  // The payload is a shaped object b/c this action.type is used in multiple reducers
  return {
    type: C.SET_SAVE_TOTAL_JR,
    payload: {
      newTotal,
      log: {
        jar, value, date, note, newTotal,
      },
    },
  };
};

export const closeSpendJar = () => ({
  type: C.CLOSE_SPEND_JAR,
});

export const setSubmitTextAddSpendJar = () => ({
  type: C.ADD_SPEND_JAR,
});

export const setSubmitTextMinusSpendJar = () => ({
  type: C.MINUS_SPEND_JAR,
});

export const setSpendJarValueAj = (value) => {
  if (isNaN(value)) {
    document
      .querySelector('#spend-jar-error')
      .classList.add('spend-jar-error--active');
    return {
      type: C.SET_SPEND_VALUE_AJ,
      payload: '',
    };
  }
  document
    .querySelector('#spend-jar-error')
    .classList.remove('spend-jar-error--active');

  return {
    type: C.SET_SPEND_VALUE_AJ,
    payload: value,
  };
};

export const setSpendJarValueJr = (value) => {
  if (isNaN(value)) {
    document
      .querySelector('#spend-jar-error')
      .classList.add('spend-jar-error--active');
    return {
      type: C.SET_SPEND_VALUE_JR,
      payload: '',
    };
  }
  document
    .querySelector('#spend-jar-error')
    .classList.remove('spend-jar-error--active');

  return {
    type: C.SET_SPEND_VALUE_JR,
    payload: value,
  };
};

export const setSpendJarNoteAj = (value) => ({
  type: C.ADD_SPEND_NOTE_AJ,
  payload: value,
});

export const setSpendJarNoteJr = (value) => ({
  type: C.ADD_SPEND_NOTE_JR,
  payload: value,
});

export const setSpendJarTotalAj = (jar, value, note, currTotal) => {
  const date = new Date().toDateString();
  const x = value - 0;
  const newTotal = Math.round((x + currTotal) * 100) / 100;

  console.log(`
    setSpendJarTotal:
    jar: ${jar}
    amount: ${value}
    date: ${date}
    note: ${note}
    currTotal: ${currTotal}
    newTotal: ${newTotal}
  `);

  return {
    type: C.SET_SPEND_TOTAL_AJ,
    payload: {
      newTotal,
      log: {
        jar, value, date, note, newTotal,
      },
    },
  };
};

export const setSpendJarTotalJr = (jar, value, note, currTotal) => {
  const date = new Date().toDateString();
  const x = value - 0;
  const newTotal = Math.round((x + currTotal) * 100) / 100;

  console.log(`
    setSpendJarTotal:
    jar: ${jar}
    amount: ${value}
    date: ${date}
    note: ${note}
    currTotal: ${currTotal}
    newTotal: ${newTotal}
  `);

  return {
    type: C.SET_SPEND_TOTAL_JR,
    payload: {
      newTotal,
      log: {
        jar, value, date, note, newTotal,
      },
    },
  };
};

export const closeShareJar = () => ({
  type: C.CLOSE_SHARE_JAR,
});

export const setSubmitTextAddShareJar = () => ({
  type: C.ADD_SHARE_JAR,
});

export const setSubmitTextMinusShareJar = () => ({
  type: C.MINUS_SHARE_JAR,
});

export const setShareJarValueAj = (value) => {
  if (isNaN(value)) {
    document
      .querySelector('#share-jar-error')
      .classList.add('share-jar-error--active');
    return {
      type: C.SET_SHARE_VALUE_AJ,
      payload: '',
    };
  }
  document
    .querySelector('#share-jar-error')
    .classList.remove('share-jar-error--active');

  return {
    type: C.SET_SHARE_VALUE_AJ,
    payload: value,
  };
};

export const setShareJarValueJr = (value) => {
  if (isNaN(value)) {
    document
      .querySelector('#share-jar-error')
      .classList.add('share-jar-error--active');
    return {
      type: C.SET_SHARE_VALUE_JR,
      payload: '',
    };
  }
  document
    .querySelector('#share-jar-error')
    .classList.remove('share-jar-error--active');

  return {
    type: C.SET_SHARE_VALUE_JR,
    payload: value,
  };
};

export const setShareJarNoteAj = (value) => ({
  type: C.ADD_SHARE_NOTE_AJ,
  payload: value,
});

export const setShareJarNoteJr = (value) => ({
  type: C.ADD_SHARE_NOTE_JR,
  payload: value,
});

export const setShareJarTotalAj = (jar, value, note, currTotal) => {
  const date = new Date().toDateString();
  const x = value - 0;
  const newTotal = Math.round((x + currTotal) * 100) / 100;

  console.log(`
    setShareJarTotal:
    jar: ${jar}
    amount: ${value}
    date: ${date}
    note: ${note}
    currTotal: ${currTotal}
    newTotal: ${newTotal}
  `);

  return {
    type: C.SET_SHARE_TOTAL_AJ,
    payload: {
      newTotal,
      log: {
        jar, value, date, note, newTotal,
      },
    },
  };
};

export const setShareJarTotalJr = (jar, value, note, currTotal) => {
  const date = new Date().toDateString();
  const x = value - 0;
  const newTotal = Math.round((x + currTotal) * 100) / 100;

  console.log(`
    setShareJarTotal:
    jar: ${jar}
    amount: ${value}
    date: ${date}
    note: ${note}
    currTotal: ${currTotal}
    newTotal: ${newTotal}
  `);

  return {
    type: C.SET_SHARE_TOTAL_JR,
    payload: {
      newTotal,
      log: {
        jar, value, date, note, newTotal,
      },
    },
  };
};

export const makeLogFlip = () => ({
  type: C.SHOW_LOG,
});

export const flipCloseLog = () => ({
  type: C.CLOSE_LOG,
});

export const setUserAJ = () => ({
  type: C.SET_USER_AJ,
});

export const setUserJR = () => ({
  type: C.SET_USER_JR,
});
