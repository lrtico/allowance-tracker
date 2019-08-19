import React from 'react';
import './App.css';
// import C from '../../store/constants';
import {
  closeSaveJar, setSubmitTextAddSaveJar, setSubmitTextMinusSaveJar,
  setSaveJarNote, setSaveJarValue, setSaveJarTotal,
  closeSpendJar, setSubmitTextAddSpendJar, setSubmitTextMinusSpendJar,
  setSpendJarNote, setSpendJarValue, setSpendJarTotal,
  closeShareJar, setSubmitTextAddShareJar, setSubmitTextMinusShareJar,
  setShareJarNote, setShareJarValue, setShareJarTotal,
  makeLogFlip, flipCloseLog,
} from '../../store/actions';
import Button from '../Buttons/Button';
import AddNote from '../Inputs/AddNote';
import InputValueError from '../Validation/InputValueError';
import JarAmount from '../JarAmount/JarAmount';
import JarLabel from '../JarLabel/JarLabel';
import JarPreviousTotal from '../JarPreviousTotal/JarPreviousTotal';

// Save jar functions
const cancelSaveJarChange = () => {
  closeSaveJar();
};

const handleAddButtonText = () => {
  // store.dispatch({
  //   type: C.ADD_SAVE_JAR,
  // });
  setSubmitTextAddSaveJar();
};

const handleMinusButtonText = () => {
  // store.dispatch({
  //   type: C.ADD_SAVE_JAR,
  // });
  setSubmitTextMinusSaveJar();
};

const handleSaveJarValueChange = e => {
  if (isNaN(e.target.value)) {
    document
      .querySelector('#save-jar-error')
      .classList.add('save-jar-error--active');
  } else {
    setSaveJarValue(e.target.value);

    document
      .querySelector('#save-jar-error')
      .classList.remove('save-jar-error--active');
  }
};

const handleSaveJarNoteChange = e => {
  setSaveJarNote(e.target.value);
};

const handleAddSaveJar = () => {
  const {
    saveJarTotal, saveJarValue, saveJarNote,
  } = this.state;

  const date = new Date().toDateString();
  setSaveJarTotal('Save jar', saveJarValue, date, saveJarNote, saveJarTotal);
};

const handleMinusSaveJar = () => {
  const {
    saveJarTotal, saveJarValue, saveJarNote,
  } = this.state;
  const date = new Date().toDateString();
  // I need to make the saveJarValue a negative number
  const negativeValue = saveJarValue * -1;
  setSaveJarTotal('Save jar', negativeValue, date, saveJarNote, saveJarTotal);
};

const handleFlipJarLog = () => {
  // store.dispatch({
  //   type: C.SHOW_LOG,
  // });
  makeLogFlip();
};

const handleClosingLog = () => {
  // store.dispatch({
  //   type: C.CLOSE_LOG,
  // });
  flipCloseLog();
};

// Spend jar functions
const cancelSpendJarChange = () => {
  // store.dispatch({
  //   type: C.CLOSE_SPEND_JAR,
  // });
  closeSpendJar();
};

const handleAddButtonTextJarSpend = () => {
  // store.dispatch({
  //   type: C.ADD_SPEND_JAR,
  // });
  setSubmitTextAddSpendJar();
};

const handleMinusButtonTextJarSpend = () => {
  // store.dispatch({
  //   type: C.MINUS_SPEND_JAR,
  // });
  setSubmitTextMinusSpendJar();
};

const handleSpendJarNoteChange = e => {
  setSpendJarNote(e.target.value);
};

const handleSpendJarValueChange = e => {
  if (isNaN(e.target.value)) {
    document
      .getElementById('spend-jar-error')
      .classList.add('spend-jar-error--active');
  } else {
    setSpendJarValue(e.target.value);

    document
      .getElementById('spend-jar-error')
      .classList.remove('spend-jar-error--active');
  }
};

const handleAddSpendJar = () => {
  const {
    spendJarTotal, spendJarValue, spendJarNote,
  } = this.state;

  const date = new Date().toDateString();
  setSpendJarTotal('Spend jar', spendJarValue, date, spendJarNote, spendJarTotal);
};

const handleMinusSpendJar = () => {
  const {
    spendJarTotal, spendJarValue, spendJarNote,
  } = this.state;

  const date = new Date().toDateString();
  // I need to make the spendJarValue a negative number
  const negativeValue = spendJarValue * -1;
  setSpendJarTotal('Spend jar', negativeValue, date, spendJarNote, spendJarTotal);
};

// Share jar functions
const cancelShareJarChange = () => {
  // store.dispatch({
  //   type: C.ADD_SPEND_JAR,
  // });
  closeShareJar();
};

const handleAddButtonTextJarShare = () => {
  // store.dispatch({
  //   type: C.ADD_SHARE_JAR,
  // });
  setSubmitTextAddShareJar();
};

const handleMinusButtonTextJarShare = () => {
  // store.dispatch({
  //   type: C.MINUS_SHARE_JAR,
  // });
  setSubmitTextMinusShareJar();
};

const handleShareJarNoteChange = e => {
  setShareJarNote(e.target.value);
};

const handleShareJarValueChange = e => {
  if (isNaN(e.target.value)) {
    document
      .getElementById('share-jar-error')
      .classList.add('share-jar-error--active');
  } else {
    setShareJarValue(e.target.value);

    document
      .getElementById('share-jar-error')
      .classList.remove('share-jar-error--active');
  }
};

const handleAddShareJar = () => {
  const {
    shareJarTotal, shareJarValue, shareJarNote,
  } = this.state;

  const date = new Date().toDateString();
  setShareJarTotal('Share jar', shareJarValue, date, shareJarNote, shareJarTotal);
};

const handleMinusShareJar = () => {
  const {
    shareJarTotal, shareJarValue, shareJarNote,
  } = this.state;

  const date = new Date().toDateString();
  const negativeValue = shareJarValue * -1;
  setShareJarTotal('Share jar', negativeValue, date, shareJarNote, shareJarTotal);
};

const handleWipe = () => {
  this.setState(prevState => ({
    pageTrans: !prevState.pageTrans,
  }));

  setTimeout(() => {
    this.setState({
      pageTrans: false,
    });
  }, 2000);
};

const App = props => {
  const {
    flipJarSave,
    flipJarSpend,
    flipJarShare,
    flipJarLog,
    log,
    submitText,
    saveJarTotal,
    saveJarValue,
    saveJarNote,
    spendJarTotal,
    spendJarNote,
    spendJarValue,
    submitTextJarSpend,
    shareJarNote,
    shareJarTotal,
    shareJarValue,
    submitTextJarShare,
    pageTrans,
  } = props;
  return (
    <div className={pageTrans ? 'flex root menu-open' : 'flex root'}>
      <div id="page-trans" />
      <nav className="flex">
        <div className="users flex--col">
          <div className="user" id="jr" onClick={handleWipe}>
            <span className="user__name">JR</span>
            <div className="user__name--hover" />
          </div>
          <div className="user" id="aj">
            <span className="user__name user__name--deactive">AJ</span>
            <div className="user__name--hover" />
          </div>
        </div>
        <div className="user__subnav user__subnav--darkgray" />
        <div className="user__subnav user__subnav--lightgray lattice-dollar-sign-bg" />
      </nav>
      <div className="jars">
        <div className="flex jars__row">
          <div
            className={
              flipJarSave
                ? 'jar jar--save jar--flip'
                : 'jar jar--save'
            }
          >
            <div className="jar__front jar__front--save">
              <div className="flex flex--between">
                <Button
                  setIcon="add"
                  strokeColor="#ffffff"
                  changeButtonText={handleAddButtonText}
                />
                <Button
                  setIcon="remove"
                  strokeColor="#ffffff"
                  changeButtonText={handleMinusButtonText}
                />
              </div>
              <JarAmount jarTotal={saveJarTotal} />
              <JarLabel jarLabel="Save" />
            </div>
            <div className="jar__back jar__back--save">
              <div>
                <div className="flex flex--between">
                  <Button
                    setIcon="close"
                    strokeColor="#4c4c4c"
                    changeButtonText={cancelSaveJarChange}
                  />
                </div>
                <AddNote
                  jarValue={saveJarNote}
                  handleJarValueChange={handleSaveJarNoteChange}
                />
              </div>
              <div>
                <div className="flex flex--horz-center jar__amount__new">
                  <div className="flex flex--horz-center input--highlight">
                    <InputValueError
                      inputValueErrorJar="save-jar-error"
                      inputValueErrorMessage="Wah-wah-waaaaaah! Nice try! Only #s :P"
                    />
                    <input
                      maxLength="6"
                      type="text"
                      value={saveJarValue}
                      onChange={handleSaveJarValueChange}
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value={submitText}
                  onClick={
                    submitText === 'Add'
                      ? handleAddSaveJar
                      : handleMinusSaveJar
                  }
                />
                <JarPreviousTotal jarPreviousTotal={saveJarTotal} />
              </div>
            </div>
          </div>
          <div
            className={
              flipJarSpend
                ? 'jar jar--spend jar--flip'
                : 'jar jar--spend'
            }
          >
            <div className="jar__front jar__front--spend">
              <div className="flex flex--between">
                <Button
                  setIcon="add"
                  strokeColor="#ffffff"
                  changeButtonText={handleAddButtonTextJarSpend}
                />
                <Button
                  setIcon="remove"
                  strokeColor="#ffffff"
                  changeButtonText={handleMinusButtonTextJarSpend}
                />
              </div>
              <JarAmount jarTotal={spendJarTotal} />
              <JarLabel jarLabel="Spend" />
            </div>
            <div className="jar__back jar__back--spend">
              <div>
                <div className="flex flex--between">
                  <Button
                    setIcon="close"
                    strokeColor="#4c4c4c"
                    changeButtonText={cancelSpendJarChange}
                  />
                </div>
                <AddNote
                  jarValue={spendJarNote}
                  handleJarValueChange={handleSpendJarNoteChange}
                />
              </div>
              <div>
                <div className="flex flex--horz-center jar__amount__new">
                  <div className="flex flex--horz-center input--highlight">
                    <InputValueError
                      inputValueErrorJar="spend-jar-error"
                      inputValueErrorMessage="Wah-wah-waaaaaah! Nice try! Only #s :P"
                    />
                    <input
                      maxLength="6"
                      type="text"
                      value={spendJarValue}
                      onChange={handleSpendJarValueChange}
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value={submitTextJarSpend}
                  onClick={
                    submitTextJarSpend === 'Add'
                      ? handleAddSpendJar
                      : handleMinusSpendJar
                  }
                />
                <JarPreviousTotal jarPreviousTotal={spendJarTotal} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex jars__row">
          <div
            className={
              flipJarShare
                ? 'jar jar--share jar--flip'
                : 'jar jar--share'
            }
          >
            <div className="jar__front jar__front--share">
              <div className="flex flex--between">
                <Button
                  setIcon="add"
                  strokeColor="#ffffff"
                  changeButtonText={handleAddButtonTextJarShare}
                />
                <Button
                  setIcon="remove"
                  strokeColor="#ffffff"
                  changeButtonText={handleMinusButtonTextJarShare}
                />
              </div>
              <JarAmount jarTotal={shareJarTotal} />
              <JarLabel jarLabel="Share" />
            </div>
            <div className="jar__back jar__back--share">
              <div>
                <div className="flex flex--between">
                  <Button
                    setIcon="close"
                    strokeColor="#4c4c4c"
                    changeButtonText={cancelShareJarChange}
                  />
                </div>
                <AddNote
                  jarValue={shareJarNote}
                  handleJarValueChange={handleShareJarNoteChange}
                />
              </div>
              <div>
                <div className="flex flex--horz-center jar__amount__new">
                  <div className="flex flex--horz-center input--highlight">
                    <InputValueError
                      inputValueErrorJar="share-jar-error"
                      inputValueErrorMessage="Wah-wah-waaaaaah! Nice try! Only #s :P"
                    />
                    <input
                      maxLength="6"
                      type="text"
                      value={shareJarValue}
                      onChange={handleShareJarValueChange}
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  value={submitTextJarShare}
                  onClick={
                    submitTextJarShare === 'Add'
                      ? handleAddShareJar
                      : handleMinusShareJar
                  }
                />
                <JarPreviousTotal jarPreviousTotal={shareJarTotal} />
              </div>
            </div>
          </div>
          <div
            className={
              flipJarLog
                ? 'jar jar--log jar--flip'
                : 'jar jar--log'
            }
          >
            <div className="jar__front jar__front--log">
              <div className="flex flex--end">
                <Button
                  setIcon="arrow_upward"
                  strokeColor="#ffffff"
                  addClass="jar__arrow_upward--rotate45deg"
                  changeButtonText={handleFlipJarLog}
                />
              </div>
              <div className="flex flex--horz-center jar__amount">
                <span>LOG</span>
              </div>
              <JarLabel jarLabel="History" />
            </div>
            <div className="jar__back jar__back--log">
              <div>
                <div className="flex flex--between">
                  <Button
                    setIcon="close"
                    strokeColor="#4c4c4c"
                    changeButtonText={handleClosingLog}
                  />
                </div>
                <div className="jar__back__log">
                  {log.map((l, index) => (
                    <div
                      className="jar__back__log__item flex flex--between"
                      key={index}
                    >
                      <div className="jar__back__log__item__details">
                        <p>
                          <strong>{`${l.jar} jar, `}</strong>
                          <span>{`${l.date}:`}</span>
                        </p>
                        <p>{l.note}</p>
                      </div>
                      <div className="jar__back__log__item__amount">
                        <p>{l.amount}</p>
                      </div>
                      <div className="jar__back__log__item__total">
                        <strong>{l.total}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// const App = connect(mapStateToProps, mapDispatchToProps)(AppConnected);
// export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(AppConnected);
