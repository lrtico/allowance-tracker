import React, { Component } from "react";
import "./App.css";
import MaterialIcon from "react-google-material-icons";

class App extends Component {
  state = {
    flipJar: false,
    flipJarLog: false,
    submitText: "Add",
    saveJarValue: "",
    saveJarTotal: 0.0,
    saveJarNote: "",
    log: []
  };

  handleAddButtonText = () => {
    this.setState({
      submitText: "Add"
    });
    this.flipJar();
  };
  handleMinusButtonText = () => {
    this.setState({
      submitText: "Minus"
    });
    this.flipJar();
  };
  flipJar = () => {
    console.log("Make jar flip now!");
    this.setState(prevState => ({
      flipJar: !prevState.flipJar
    }));
  };
  handleSaveJarValueChange = e => {
    this.setState({
      saveJarValue: e.target.value
    });
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
    this.flipJar();
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
    this.flipJar();
  };
  flipJarLog = () => {
    this.setState(prevState => ({
      flipJarLog: !prevState.flipJarLog
    }));
  };

  render() {
    const { submitText, saveJarTotal, saveJarValue, saveJarNote } = this.state;
    return (
      <div className="flex root">
        <nav className="flex">
          <div className="user flex--col">
            <span className="user__name">AJ</span>
            <span className="user__name user__name--deactive">JR</span>
          </div>
          <div className="user__subnav user__subnav--darkgray" />
          <div className="user__subnav user__subnav--lightgray lattice-dollar-sign-bg" />
        </nav>
        <div className="jars">
          <div className="flex jars__row">
            <div
              className={
                this.state.flipJar ? "jar jar--save jar--flip" : "jar jar--save"
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
                    <button onClick={this.flipJar}>
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
                        value={saveJarNote}
                        onChange={this.handleSaveJarNoteChange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex--horz-center jar__amount__new">
                    <div className="flex flex--horz-center input--highlight">
                      <input
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
            <div className="jar jar--spend">
              <div className="flex flex--between">
                <button>
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
                <button>
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
                <span>112.75</span>
              </div>
              <div className="jar__label">
                <span>Spend</span>
              </div>
            </div>
          </div>
          <div className="flex jars__row">
            <div className="jar jar--share">
              <div className="flex flex--between">
                <button>
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
                <button>
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
                <span>14.25</span>
              </div>
              <div className="jar__label">
                <span>Share</span>
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
