import React, { Component } from "react";
import "./App.css";
import MaterialIcon from "react-google-material-icons";

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
    this.setState({
      spendJarValue: e.target.value
    });
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
    this.setState({
      shareJarValue: e.target.value
    });
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
                  <button onClick={this.handleAddButtonText}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                      <circle
                        className="button__circle"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                        strokeMiterlimit="10"
                        cx="11"
                        cy="11"
                        r="10"
                      />
                    </svg>
                    <MaterialIcon icon="add" size={36} />
                  </button>
                  <button onClick={this.handleMinusButtonText}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                      <circle
                        className="button__circle"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                        strokeMiterlimit="10"
                        cx="11"
                        cy="11"
                        r="10"
                      />
                    </svg>
                    <MaterialIcon icon="remove" size={36} />
                  </button>
                </div>
                <div className="flex flex--horz-center jar__amount">
                  <span>$</span>
                  <span>{saveJarTotal}</span>
                </div>
                <div className="jar__label">
                  <span>Save</span>
                </div>
              </div>
              <div className="jar__back jar__back--save">
                <div>
                  <div className="flex flex--between">
                    <button onClick={this.flipJarSave}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 22"
                      >
                        <circle
                          className="button__circle"
                          fill="none"
                          stroke="#4c4c4c"
                          strokeWidth="1"
                          strokeMiterlimit="10"
                          cx="11"
                          cy="11"
                          r="10"
                        />
                      </svg>
                      <MaterialIcon icon="close" size={36} />
                    </button>
                  </div>
                  <div className="jar__back__note">
                    <div className="flex input--highlight">
                      <label htmlFor="">Note:</label>
                      <input
                        maxLength="75"
                        type="text"
                        value={saveJarNote}
                        onChange={this.handleSaveJarNoteChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex--horz-center jar__amount__new">
                    <div className="flex flex--horz-center input--highlight">
                      <div id="save-jar-error">
                        <p>Please enter only numbers and a decimal</p>
                      </div>
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
                  <div className="jar__new-total">
                    <span>Previous total: </span>
                    <span>${saveJarTotal}</span>
                  </div>
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
                  <button onClick={this.handleAddButtonTextJarSpend}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                      <circle
                        className="button__circle"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                        strokeMiterlimit="10"
                        cx="11"
                        cy="11"
                        r="10"
                      />
                    </svg>
                    <MaterialIcon icon="add" size={36} />
                  </button>
                  <button onClick={this.handleMinusButtonTextJarSpend}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                      <circle
                        className="button__circle"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                        strokeMiterlimit="10"
                        cx="11"
                        cy="11"
                        r="10"
                      />
                    </svg>
                    <MaterialIcon icon="remove" size={36} />
                  </button>
                </div>
                <div className="flex flex--horz-center jar__amount">
                  <span>$</span>
                  <span>{spendJarTotal}</span>
                </div>
                <div className="jar__label">
                  <span>Spend</span>
                </div>
              </div>
              <div className="jar__back jar__back--spend">
                <div>
                  <div className="flex flex--between">
                    <button onClick={this.flipJarSpend}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 22"
                      >
                        <circle
                          className="button__circle"
                          fill="none"
                          stroke="#4c4c4c"
                          strokeWidth="1"
                          strokeMiterlimit="10"
                          cx="11"
                          cy="11"
                          r="10"
                        />
                      </svg>
                      <MaterialIcon icon="close" size={36} />
                    </button>
                  </div>
                  <div className="jar__back__note">
                    <div className="flex input--highlight">
                      <label htmlFor="">Note:</label>
                      <input
                        type="text"
                        value={spendJarNote}
                        onChange={this.handleSpendJarNoteChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex--horz-center jar__amount__new">
                    <div className="flex flex--horz-center input--highlight">
                      <input
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
                  <div className="jar__new-total">
                    <span>Previous total: </span>
                    <span>${spendJarTotal}</span>
                  </div>
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
                  <button onClick={this.handleAddButtonTextJarShare}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                      <circle
                        className="button__circle"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                        strokeMiterlimit="10"
                        cx="11"
                        cy="11"
                        r="10"
                      />
                    </svg>
                    <MaterialIcon icon="add" size={36} />
                  </button>
                  <button onClick={this.handleMinusButtonTextJarShare}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                      <circle
                        className="button__circle"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                        strokeMiterlimit="10"
                        cx="11"
                        cy="11"
                        r="10"
                      />
                    </svg>
                    <MaterialIcon icon="remove" size={36} />
                  </button>
                </div>
                <div className="flex flex--horz-center jar__amount">
                  <span>$</span>
                  <span>{shareJarTotal}</span>
                </div>
                <div className="jar__label">
                  <span>Share</span>
                </div>
              </div>
              <div className="jar__back jar__back--share">
                <div>
                  <div className="flex flex--between">
                    <button onClick={this.flipJarShare}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 22"
                      >
                        <circle
                          className="button__circle"
                          fill="none"
                          stroke="#4c4c4c"
                          strokeWidth="1"
                          strokeMiterlimit="10"
                          cx="11"
                          cy="11"
                          r="10"
                        />
                      </svg>
                      <MaterialIcon icon="close" size={36} />
                    </button>
                  </div>
                  <div className="jar__back__note">
                    <div className="flex input--highlight">
                      <label htmlFor="">Note:</label>
                      <input
                        type="text"
                        value={shareJarNote}
                        onChange={this.handleShareJarNoteChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex--horz-center jar__amount__new">
                    <div className="flex flex--horz-center input--highlight">
                      <input
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
                  <div className="jar__new-total">
                    <span>Previous total: </span>
                    <span>${shareJarTotal}</span>
                  </div>
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
                  <button
                    onClick={this.flipJarLog}
                    className="jar__arrow_upward--rotate45deg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                      <circle
                        className="button__circle"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1"
                        strokeMiterlimit="10"
                        cx="11"
                        cy="11"
                        r="10"
                      />
                    </svg>
                    <MaterialIcon icon="arrow_upward" size={36} />
                  </button>
                </div>
                <div className="flex flex--horz-center jar__amount">
                  <span>LOG</span>
                </div>
                <div className="jar__label">
                  <span>History</span>
                </div>
              </div>
              <div className="jar__back jar__back--log">
                <div>
                  <div className="flex flex--between">
                    <button onClick={this.flipJarLog}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 22"
                      >
                        <circle
                          className="button__circle"
                          fill="none"
                          stroke="#4c4c4c"
                          strokeWidth="1"
                          strokeMiterlimit="10"
                          cx="11"
                          cy="11"
                          r="10"
                        />
                      </svg>
                      <MaterialIcon icon="close" size={36} />
                    </button>
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
