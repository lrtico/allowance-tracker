import React, { Component } from "react";
import "./App.css";
import Button from "../Buttons/Button";
import AddNote from "../Inputs/AddNote";
import InputValueError from "../Validation/InputValueError";
import JarAmount from "../JarAmount/JarAmount";
import JarLabel from "../JarLabel/JarLabel";
import JarPreviousTotal from "../JarPreviousTotal/JarPreviousTotal";

class App extends Component {
  state = {
    flipJarSave: false,
    submitText: "Add",
    saveJarValue: "",
    saveJarTotal: 0.0,
    saveJarNote: "",
    flipJarSpend: false,
    submitTextJarSpend: "Add",
    spendJarValue: "",
    spendJarTotal: 0.0,
    spendJarNote: "",
    flipJarShare: false,
    submitTextJarShare: "Add",
    shareJarValue: "",
    shareJarTotal: 0.0,
    shareJarNote: "",
    flipJarLog: false,
    log: [],
    pageTrans: false
  };

  //Save jar methods
  handleAddButtonText = () => {
    this.setState({
      submitText: "Add"
    });
    this.flipJarSave();
  };
  handleMinusButtonText = () => {
    this.setState({
      submitText: "Minus"
    });
    this.flipJarSave();
  };
  flipJarSave = () => {
    console.log("Make jar flip now!");
    this.setState(prevState => ({
      flipJarSave: !prevState.flipJarSave
    }));
  };
  handleSaveJarValueChange = e => {
    if (isNaN(e.target.value)) {
      document
        .getElementById("save-jar-error")
        .classList.add("save-jar-error--active");
    } else {
      this.setState({
        saveJarValue: e.target.value
      });
      document
        .getElementById("save-jar-error")
        .classList.remove("save-jar-error--active");
    }
  };
  handleSaveJarNoteChange = e => {
    this.setState({
      saveJarNote: e.target.value
    });
  };
  handleAddSaveJar = () => {
    const { saveJarTotal, saveJarValue, log, saveJarNote } = this.state;
    //Convert the input value from a string to a number
    let x = saveJarValue - 0;
    let newTotal = Math.round((x + saveJarTotal) * 100) / 100;
    let firstLog = log.length;
    console.log("log length is ", firstLog);

    this.setState({
      saveJarTotal: newTotal,
      saveJarValue: "",
      saveJarNote: "",
      log: [
        ...log,
        {
          amount: `+${saveJarValue}`,
          date: new Date().toDateString(),
          jar: "Save",
          total: firstLog !== 0 ? newTotal : saveJarValue,
          note: saveJarNote
        }
      ]
    });
    this.flipJarSave();
  };
  handleMinusSaveJar = () => {
    const { saveJarTotal, saveJarValue, log, saveJarNote } = this.state;
    //Convert the input value from a string to a number
    let x = saveJarValue - 0;
    let newTotal = Math.round((saveJarTotal - x) * 100) / 100;
    let firstLog = log.length;

    this.setState({
      saveJarTotal: newTotal,
      saveJarValue: "",
      saveJarNote: "",
      log: [
        ...log,
        {
          amount: `-${saveJarValue}`,
          date: new Date().toDateString(),
          jar: "Save",
          total: firstLog !== 0 ? newTotal : saveJarValue,
          note: saveJarNote
        }
      ]
    });
    this.flipJarSave();
  };

  flipJarLog = () => {
    this.setState(prevState => ({
      flipJarLog: !prevState.flipJarLog
    }));
  };

  //Spend jar methods
  handleAddButtonTextJarSpend = () => {
    this.setState({
      submitTextJarSpend: "Add"
    });
    this.flipJarSpend();
  };
  handleMinusButtonTextJarSpend = () => {
    this.setState({
      submitTextJarSpend: "Minus"
    });
    this.flipJarSpend();
  };
  flipJarSpend = () => {
    console.log("Make jar flip now!");
    this.setState(prevState => ({
      flipJarSpend: !prevState.flipJarSpend
    }));
  };
  handleSpendJarNoteChange = e => {
    this.setState({
      spendJarNote: e.target.value
    });
  };
  handleSpendJarValueChange = e => {
    if (isNaN(e.target.value)) {
      document
        .getElementById("spend-jar-error")
        .classList.add("spend-jar-error--active");
    } else {
      this.setState({
        spendJarValue: e.target.value
      });
      document
        .getElementById("spend-jar-error")
        .classList.remove("spend-jar-error--active");
    }
  };
  handleAddSpendJar = () => {
    const { spendJarTotal, spendJarValue, log, spendJarNote } = this.state;
    //Convert the input value from a string to a number
    let x = spendJarValue - 0;
    let newTotal = Math.round((x + spendJarTotal) * 100) / 100;
    let firstLog = log.length;

    this.setState({
      spendJarTotal: newTotal,
      spendJarValue: "",
      spendJarNote: "",
      log: [
        ...log,
        {
          amount: `+${spendJarValue}`,
          date: new Date().toDateString(),
          jar: "Spend",
          total: firstLog !== 0 ? newTotal : spendJarValue,
          note: spendJarNote
        }
      ]
    });
    this.flipJarSpend();
  };
  handleMinusSpendJar = () => {
    const { spendJarTotal, spendJarValue, log, spendJarNote } = this.state;
    //Convert the input value from a string to a number
    let x = spendJarValue - 0;
    let newTotal = Math.round((spendJarTotal - x) * 100) / 100;
    let firstLog = log.length;

    this.setState({
      spendJarTotal: newTotal,
      spendJarValue: "",
      spendJarNote: "",
      log: [
        ...log,
        {
          amount: `-${spendJarValue}`,
          date: new Date().toDateString(),
          jar: "Spend",
          total: firstLog !== 0 ? newTotal : spendJarValue,
          note: spendJarNote
        }
      ]
    });
    this.flipJarSpend();
  };

  //Share jar methods
  handleAddButtonTextJarShare = () => {
    this.setState({
      submitTextJarShare: "Add"
    });
    this.flipJarShare();
  };
  handleMinusButtonTextJarShare = () => {
    this.setState({
      submitTextJarShare: "Minus"
    });
    this.flipJarShare();
  };
  flipJarShare = () => {
    console.log("Make jar flip now!");
    this.setState(prevState => ({
      flipJarShare: !prevState.flipJarShare
    }));
  };
  handleShareJarNoteChange = e => {
    this.setState({
      shareJarNote: e.target.value
    });
  };
  handleShareJarValueChange = e => {
    if (isNaN(e.target.value)) {
      document
        .getElementById("share-jar-error")
        .classList.add("share-jar-error--active");
    } else {
      this.setState({
        shareJarValue: e.target.value
      });
      document
        .getElementById("share-jar-error")
        .classList.remove("share-jar-error--active");
    }
  };
  handleAddShareJar = () => {
    const { shareJarTotal, shareJarValue, log, shareJarNote } = this.state;
    //Convert the input value from a string to a number
    let x = shareJarValue - 0;
    let newTotal = Math.round((x + shareJarTotal) * 100) / 100;
    let firstLog = log.length;

    this.setState({
      shareJarTotal: newTotal,
      shareJarValue: "",
      shareJarNote: "",
      log: [
        ...log,
        {
          amount: `+${shareJarValue}`,
          date: new Date().toDateString(),
          jar: "Share",
          total: firstLog !== 0 ? newTotal : shareJarValue,
          note: shareJarNote
        }
      ]
    });
    this.flipJarShare();
  };
  handleMinusShareJar = () => {
    const { shareJarTotal, shareJarValue, log, shareJarNote } = this.state;
    //Convert the input value from a string to a number
    let x = shareJarValue - 0;
    let newTotal = Math.round((shareJarTotal - x) * 100) / 100;
    let firstLog = log.length;

    this.setState({
      shareJarTotal: newTotal,
      shareJarValue: "",
      shareJarNote: "",
      log: [
        ...log,
        {
          amount: `-${shareJarValue}`,
          date: new Date().toDateString(),
          jar: "Share",
          total: firstLog !== 0 ? newTotal : shareJarValue,
          note: shareJarNote
        }
      ]
    });
    this.flipJarShare();
  };

  handleWipe = () => {
    this.setState(prevState => ({
      pageTrans: !prevState.pageTrans
    }));

    setTimeout(() => {
      this.setState({
        pageTrans: false
      });
    }, 2000);
  };

  render() {
    const {
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
      pageTrans
    } = this.state;
    return (
      <div className={pageTrans ? "flex root menu-open" : "flex root"}>
        <div id="page-trans" />
        <nav className="flex">
          <div className="users flex--col">
            <div className="user" id="jr" onClick={this.handleWipe}>
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
                this.state.flipJarSave
                  ? "jar jar--save jar--flip"
                  : "jar jar--save"
              }
            >
              <div className="jar__front jar__front--save">
                <div className="flex flex--between">
                  <Button
                    setIcon="add"
                    strokeColor="#ffffff"
                    changeButtonText={this.handleAddButtonText}
                  />
                  <Button
                    setIcon="remove"
                    strokeColor="#ffffff"
                    changeButtonText={this.handleMinusButtonText}
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
                      changeButtonText={this.flipJarSave}
                    />
                  </div>
                  <AddNote
                    jarValue={saveJarNote}
                    handleJarValueChange={this.handleSaveJarNoteChange}
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
                        onChange={this.handleSaveJarValueChange}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    value={submitText}
                    onClick={
                      submitText === "Add"
                        ? this.handleAddSaveJar
                        : this.handleMinusSaveJar
                    }
                  />
                  <JarPreviousTotal jarPreviousTotal={saveJarTotal} />
                </div>
              </div>
            </div>
            <div
              className={
                this.state.flipJarSpend
                  ? "jar jar--spend jar--flip"
                  : "jar jar--spend"
              }
            >
              <div className="jar__front jar__front--spend">
                <div className="flex flex--between">
                  <Button
                    setIcon="add"
                    strokeColor="#ffffff"
                    changeButtonText={this.handleAddButtonTextJarSpend}
                  />
                  <Button
                    setIcon="remove"
                    strokeColor="#ffffff"
                    changeButtonText={this.handleMinusButtonTextJarSpend}
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
                      changeButtonText={this.flipJarSpend}
                    />
                  </div>
                  <AddNote
                    jarValue={spendJarNote}
                    handleJarValueChange={this.handleSpendJarNoteChange}
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
                        onChange={this.handleSpendJarValueChange}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    value={submitTextJarSpend}
                    onClick={
                      submitTextJarSpend === "Add"
                        ? this.handleAddSpendJar
                        : this.handleMinusSpendJar
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
                this.state.flipJarShare
                  ? "jar jar--share jar--flip"
                  : "jar jar--share"
              }
            >
              <div className="jar__front jar__front--share">
                <div className="flex flex--between">
                  <Button
                    setIcon="add"
                    strokeColor="#ffffff"
                    changeButtonText={this.handleAddButtonTextJarShare}
                  />
                  <Button
                    setIcon="remove"
                    strokeColor="#ffffff"
                    changeButtonText={this.handleMinusButtonTextJarShare}
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
                      changeButtonText={this.flipJarShare}
                    />
                  </div>
                  <AddNote
                    jarValue={shareJarNote}
                    handleJarValueChange={this.handleShareJarNoteChange}
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
                        onChange={this.handleShareJarValueChange}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    value={submitTextJarShare}
                    onClick={
                      submitTextJarShare === "Add"
                        ? this.handleAddShareJar
                        : this.handleMinusShareJar
                    }
                  />
                  <JarPreviousTotal jarPreviousTotal={shareJarTotal} />
                </div>
              </div>
            </div>
            <div
              className={
                this.state.flipJarLog
                  ? "jar jar--log jar--flip"
                  : "jar jar--log"
              }
            >
              <div className="jar__front jar__front--log">
                <div className="flex flex--end">
                  <Button
                    setIcon="arrow_upward"
                    strokeColor="#ffffff"
                    addClass="jar__arrow_upward--rotate45deg"
                    changeButtonText={this.flipJarLog}
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
                      changeButtonText={this.flipJarLog}
                    />
                  </div>
                  <div className="jar__back__log">
                    {this.state.log.map((l, index) => (
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
