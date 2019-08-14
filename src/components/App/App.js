import React, { Component } from 'react';
import './App.css';
import Button from '../Buttons/Button';
import AddNote from '../Inputs/AddNote';
import InputValueError from '../Validation/InputValueError';
import JarAmount from '../JarAmount/JarAmount';
import JarLabel from '../JarLabel/JarLabel';
import JarPreviousTotal from '../JarPreviousTotal/JarPreviousTotal';

class App extends Component {
  state = {
    flipJarSave: false,
    submitText: 'Add',
    saveJarValue: '',
    saveJarTotal: 0.0,
    saveJarNote: '',
    flipJarSpend: false,
    submitTextJarSpend: 'Add',
    spendJarValue: '',
    spendJarTotal: 0.0,
    spendJarNote: '',
    flipJarShare: false,
    submitTextJarShare: 'Add',
    shareJarValue: '',
    shareJarTotal: 0.0,
    shareJarNote: '',
    flipJarLog: false,
    log: [],
    pageTrans: false,
  };

  // Save jar methods
  handleAddButtonText = () => {
    this.setState({
      submitText: 'Add',
    });
    this.handleFlipJarSave();

    // Delete the two calls above
    // store.dispatch({
    //   action.type: ADD_SAVE_JAR,
    // });
  };

  handleMinusButtonText = () => {
    this.setState({
      submitText: 'Minus',
    });
    this.handleFlipJarSave();

    // Delete the two calls above
    // store.dispatch({
    //   action.type: MINUS_SAVE_JAR,
    // });
  };

  handleFlipJarSave = () => {
    console.log('Make jar flip now!');
    this.setState(prevState => ({
      flipJarSave: !prevState.flipJarSave,
    }));

    // Delete the entire method
  };

  handleSaveJarValueChange = e => {
    if (isNaN(e.target.value)) {
      document
        .querySelector('#save-jar-error')
        .classList.add('save-jar-error--active');
    } else {
      this.setState({
        saveJarValue: e.target.value,
      });

      // Delete the set state call above
      // let value = e.target.value;
      // setSaveJarValue(value);

      document
        .querySelector('#save-jar-error')
        .classList.remove('save-jar-error--active');
    }
  };

  handleSaveJarNoteChange = e => {
    this.setState({
      saveJarNote: e.target.value,
    });

    // let value = e.target.value;
    // setSaveJarNote(value)
  };

  handleAddSaveJar = () => {
    const {
      saveJarTotal, saveJarValue, log, saveJarNote,
    } = this.state;

    // let date = new Date().toDateString();
    // setSaveJarTotal('Save jar', saveJarValue, date, saveJarNote, saveJarTotal);
    // Delete everything below

    // Convert the input value from a string to a number
    const x = saveJarValue - 0;
    const newTotal = Math.round((x + saveJarTotal) * 100) / 100;
    const firstLog = log.length;
    console.log('log length is ', firstLog);

    this.setState({
      saveJarTotal: newTotal,
      saveJarValue: '',
      saveJarNote: '',
      log: [
        ...log,
        {
          amount: `+${saveJarValue}`,
          date: new Date().toDateString(),
          jar: 'Save',
          total: firstLog !== 0 ? newTotal : saveJarValue,
          note: saveJarNote,
        },
      ],
    });
    this.handleFlipJarSave();
  };

  handleMinusSaveJar = () => {
    const {
      saveJarTotal, saveJarValue, log, saveJarNote,
    } = this.state;
    // let date = new Date().toDateString();
    // I need to make the saveJarValue a negative number
    // let saveJarValue = saveJarValue * -1;
    // setSaveJarTotal('Save jar', saveJarValue, date, saveJarNote, saveJarTotal);
    // Delete everything below

    // Convert the input value from a string to a number
    let x = saveJarValue - 0;
    let newTotal = Math.round((saveJarTotal - x) * 100) / 100;
    let firstLog = log.length;

    this.setState({
      saveJarTotal: newTotal,
      saveJarValue: '',
      saveJarNote: '',
      log: [
        ...log,
        {
          amount: `-${saveJarValue}`,
          date: new Date().toDateString(),
          jar: 'Save',
          total: firstLog !== 0 ? newTotal : saveJarValue,
          note: saveJarNote,
        },
      ],
    });
    this.handleFlipJarSave();
  };

  handleFlipJarLog = () => {
    this.setState(prevState => ({
      flipJarLog: !prevState.flipJarLog,
    }));
    // store.dispatch({
    // action.type: SHOW_LOG,
    // });
  };

  // Spend jar methods
  handleAddButtonTextJarSpend = () => {
    this.setState({
      submitTextJarSpend: 'Add',
    });
    this.handleFlipJarSpend();

    // Delete the two calls above
    // store.dispatch({
    //   action.type: ADD_SPEND_JAR,
    // });
  };

  handleMinusButtonTextJarSpend = () => {
    this.setState({
      submitTextJarSpend: 'Minus',
    });
    this.handleFlipJarSpend();

    // Delete the two calls above
    // store.dispatch({
    //   action.type: MINUS_SPEND_JAR,
    // });
  };

  handleFlipJarSpend = () => {
    console.log('Make jar flip now!');
    this.setState(prevState => ({
      flipJarSpend: !prevState.flipJarSpend,
    }));

    // Delete the entire method
  };

  handleSpendJarNoteChange = e => {
    this.setState({
      spendJarNote: e.target.value,
    });

    // let value = e.target.value;
    // setSpendJarNote(value);
  };

  handleSpendJarValueChange = e => {
    if (isNaN(e.target.value)) {
      document
        .getElementById('spend-jar-error')
        .classList.add('spend-jar-error--active');
    } else {
      this.setState({
        spendJarValue: e.target.value,
      });

      // Delete the set state call above
      // let value = e.target.value;
      // setSpendJarValue(value);

      document
        .getElementById('spend-jar-error')
        .classList.remove('spend-jar-error--active');
    }
  };

  handleAddSpendJar = () => {
    const {
      spendJarTotal, spendJarValue, log, spendJarNote,
    } = this.state;

    // let date = new Date().toDateString();
    // setSpendJarTotal('Spend jar', spendJarValue, date, spendJarNote, spendJarTotal);
    // Delete everything below

    // Convert the input value from a string to a number
    let x = spendJarValue - 0;
    let newTotal = Math.round((x + spendJarTotal) * 100) / 100;
    let firstLog = log.length;

    this.setState({
      spendJarTotal: newTotal,
      spendJarValue: '',
      spendJarNote: '',
      log: [
        ...log,
        {
          amount: `+${spendJarValue}`,
          date: new Date().toDateString(),
          jar: 'Spend',
          total: firstLog !== 0 ? newTotal : spendJarValue,
          note: spendJarNote,
        },
      ],
    });
    this.handleFlipJarSpend();
  };

  handleMinusSpendJar = () => {
    const {
      spendJarTotal, spendJarValue, log, spendJarNote,
    } = this.state;

    // let date = new Date().toDateString();
    // I need to make the spendJarValue a negative number
    // let spendJarValue = spendJarValue * -1;
    // setSpendJarTotal('Spend jar', spendJarValue, date, spendJarNote, spendJarTotal);
    // Delete everything below

    // Convert the input value from a string to a number
    let x = spendJarValue - 0;
    let newTotal = Math.round((spendJarTotal - x) * 100) / 100;
    let firstLog = log.length;

    this.setState({
      spendJarTotal: newTotal,
      spendJarValue: '',
      spendJarNote: '',
      log: [
        ...log,
        {
          amount: `-${spendJarValue}`,
          date: new Date().toDateString(),
          jar: 'Spend',
          total: firstLog !== 0 ? newTotal : spendJarValue,
          note: spendJarNote,
        },
      ],
    });
    this.handleFlipJarSpend();
  };

  // Share jar methods
  handleAddButtonTextJarShare = () => {
    this.setState({
      submitTextJarShare: 'Add',
    });
    this.handleFlipJarShare();

    // Delete two calls above
    // store.dispatch({
    //    action.type: C.ADD_SHARE_JAR
    // });
  };

  handleMinusButtonTextJarShare = () => {
    this.setState({
      submitTextJarShare: 'Minus',
    });
    this.handleFlipJarShare();

    // Delete two calls above
    // store.dispatch({
    //    action.type: C.MINUS_SHARE_JAR
    // });
  };

  handleFlipJarShare = () => {
    console.log('Make jar flip now!');
    this.setState(prevState => ({
      flipJarShare: !prevState.flipJarShare,
    }));

    // Delete this method entirely
  };

  handleShareJarNoteChange = e => {
    this.setState({
      shareJarNote: e.target.value,
    });

    // Delete everything above
    // let value = e.target.value;
    // setShareJareNote(value);
  };

  handleShareJarValueChange = e => {
    if (isNaN(e.target.value)) {
      document
        .getElementById('share-jar-error')
        .classList.add('share-jar-error--active');
    } else {
      this.setState({
        shareJarValue: e.target.value,
      });

      // Delete set state call above
      // let value = e.target.value;
      // setShareJarValue(value);

      document
        .getElementById('share-jar-error')
        .classList.remove('share-jar-error--active');
    }
  };

  handleAddShareJar = () => {
    const {
      shareJarTotal, shareJarValue, log, shareJarNote,
    } = this.state;

    // let date = new Date().toDateString();
    // setShareJarTotal('Share jar', shareJarValue, date, shareJarNote, shareJarTotal);
    // Delete everything below

    // Convert the input value from a string to a number
    const x = shareJarValue - 0;
    const newTotal = Math.round((x + shareJarTotal) * 100) / 100;
    const firstLog = log.length;

    this.setState({
      shareJarTotal: newTotal,
      shareJarValue: '',
      shareJarNote: '',
      log: [
        ...log,
        {
          amount: `+${shareJarValue}`,
          date: new Date().toDateString(),
          jar: 'Share',
          total: firstLog !== 0 ? newTotal : shareJarValue,
          note: shareJarNote,
        },
      ],
    });
    this.handleFlipJarShare();
  };

  handleMinusShareJar = () => {
    const {
      shareJarTotal, shareJarValue, log, shareJarNote,
    } = this.state;

    // let date = new Date().toDateString();
    // let shareJarValue = shareJarValue * -1;
    // setShareJarTotal('Share jar', shareJarValue, date, shareJarNote, shareJarTotal);
    // Delete everything below

    // Convert the input value from a string to a number
    const x = shareJarValue - 0;
    const newTotal = Math.round((shareJarTotal - x) * 100) / 100;
    const firstLog = log.length;

    this.setState({
      shareJarTotal: newTotal,
      shareJarValue: '',
      shareJarNote: '',
      log: [
        ...log,
        {
          amount: `-${shareJarValue}`,
          date: new Date().toDateString(),
          jar: 'Share',
          total: firstLog !== 0 ? newTotal : shareJarValue,
          note: shareJarNote,
        },
      ],
    });
    this.handleFlipJarShare();
  };

  handleWipe = () => {
    this.setState(prevState => ({
      pageTrans: !prevState.pageTrans,
    }));

    setTimeout(() => {
      this.setState({
        pageTrans: false,
      });
    }, 2000);
  };

  render() {
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
    } = this.state;

    const {
      handleWipe,
      handleAddButtonText,
      handleMinusButtonText,
      handleSaveJarNoteChange,
      handleSaveJarValueChange,
      handleAddSaveJar,
      handleMinusSaveJar,
      handleFlipJarSave,
      handleAddButtonTextJarSpend,
      handleMinusButtonTextJarSpend,
      handleSpendJarNoteChange,
      handleSpendJarValueChange,
      handleAddSpendJar,
      handleMinusSpendJar,
      handleFlipJarSpend,
      handleAddButtonTextJarShare,
      handleMinusButtonTextJarShare,
      handleShareJarNoteChange,
      handleShareJarValueChange,
      handleAddShareJar,
      handleMinusShareJar,
      handleFlipJarShare,
      handleFlipJarLog,
    } = this;

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
                      changeButtonText={handleFlipJarSave}
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
                      changeButtonText={handleFlipJarSpend}
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
                      changeButtonText={handleFlipJarShare}
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
                      changeButtonText={handleFlipJarLog}
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
  }
}

export default App;
