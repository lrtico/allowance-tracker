import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import C from '../../store/constants';
import {
  setSaveJarNoteAj, setSaveJarValueAj, setSaveJarTotalAj,
  setSaveJarNoteJr, setSaveJarValueJr, setSaveJarTotalJr,
} from '../../store/actions';
import Button from '../Buttons/Button';
import JarAmount from '../JarAmount/JarAmount';
import JarLabel from '../JarLabel/JarLabel';
import AddNote from '../Inputs/AddNote';
import InputValueError from '../Validation/InputValueError';
import JarPreviousTotal from '../JarPreviousTotal/JarPreviousTotal';

const SaveJarConnected = props => {
  const {
    flipJarSave, handleAddButtonText, handleMinusButtonText,
    cancelSaveJarChange, submitTextJarSave,
    handleSaveJarValueChangeAj, handleSaveJarNoteChangeAj, handleAddSaveJarAj, handleMinusSaveJarAj,
    handleSaveJarValueChangeJr, handleSaveJarNoteChangeJr, handleAddSaveJarJr, handleMinusSaveJarJr,
    handleUserJR, handleUserAJ,
    saveJarValueJr, saveJarNoteJr, saveJarTotalJr,
    saveJarValueAj, saveJarNoteAj, saveJarTotalAj,
  } = props;
  console.log('SaveJarConnected props', props);
  return (
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
        <JarAmount jarTotal={
            handleUserAJ
              ? saveJarTotalAj
              : saveJarTotalJr
          }
        />
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
            jarValue={
              handleUserAJ
                ? saveJarNoteAj
                : saveJarNoteJr
            }
            handleJarValueChange={
              handleUserAJ
                ? handleSaveJarNoteChangeAj
                : handleSaveJarNoteChangeJr
            }
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
                value={
                  handleUserAJ
                    ? saveJarValueAj
                    : saveJarValueJr
                }
                onChange={
                  handleUserAJ
                    ? handleSaveJarValueChangeAj
                    : handleSaveJarValueChangeJr
                }
              />
            </div>
          </div>
          <input
            type="submit"
            value={submitTextJarSave}
            onClick={
              submitTextJarSave === 'Add' && handleUserJR
                ? () => handleAddSaveJarJr(saveJarValueJr, saveJarNoteJr, saveJarTotalJr)
                : submitTextJarSave === 'Minus' && handleUserJR
                  ? () => handleMinusSaveJarJr(saveJarValueJr, saveJarNoteJr, saveJarTotalJr)
                  : submitTextJarSave === 'Add' && handleUserAJ
                    ? () => handleAddSaveJarAj(saveJarValueAj, saveJarNoteAj, saveJarTotalAj)
                    : () => handleMinusSaveJarAj(saveJarValueAj, saveJarNoteAj, saveJarTotalAj)
            }
          />
          <JarPreviousTotal jarPreviousTotal={
              handleUserAJ
                ? saveJarTotalAj
                : saveJarTotalJr
            }
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  flipJarSave: state.flipJarSave,
  submitTextJarSave: state.submitTextJarSave,
  saveJarNoteAj: state.ajData.saveJarNoteAj,
  saveJarValueAj: state.ajData.saveJarValueAj,
  saveJarTotalAj: state.ajData.saveJarTotalAj,
  saveJarNoteJr: state.jrData.saveJarNoteJr,
  saveJarValueJr: state.jrData.saveJarValueJr,
  saveJarTotalJr: state.jrData.saveJarTotalJr,
  handleUserAJ: state.handleUserAJ,
  handleUserJR: state.handleUserJR,
});

const mapDispatchToProps = dispatch => ({
  handleAddButtonText() {
    dispatch({
      type: C.ADD_SAVE_JAR,
    });
  },
  handleMinusButtonText() {
    dispatch({
      type: C.MINUS_SAVE_JAR,
    });
  },
  cancelSaveJarChange() {
    dispatch({
      type: C.CLOSE_SAVE_JAR,
    });
  },
  handleSaveJarNoteChangeAj(e) {
    dispatch(
      setSaveJarNoteAj(e.target.value),
    );
  },
  handleSaveJarNoteChangeJr(e) {
    dispatch(
      setSaveJarNoteJr(e.target.value),
    );
  },
  handleSaveJarValueChangeAj(e) {
    dispatch(
      setSaveJarValueAj(e.target.value),
    );
  },
  handleSaveJarValueChangeJr(e) {
    dispatch(
      setSaveJarValueJr(e.target.value),
    );
  },
  handleAddSaveJarAj(saveJarValue, saveJarNote, saveJarTotal) {
    console.log(`
    'handleAddSaveJar action':
    saveJarValue: ${saveJarValue}
    saveJarNote: ${saveJarNote}
    saveJarTotal: ${saveJarTotal}
    `);
    dispatch(
      setSaveJarTotalAj('Save jar', saveJarValue, saveJarNote, saveJarTotal),
    );
  },
  handleAddSaveJarJr(saveJarValue, saveJarNote, saveJarTotal) {
    console.log(`
    'handleAddSaveJar action':
    saveJarValue: ${saveJarValue}
    saveJarNote: ${saveJarNote}
    saveJarTotal: ${saveJarTotal}
    `);
    dispatch(
      setSaveJarTotalJr('Save jar', saveJarValue, saveJarNote, saveJarTotal),
    );
  },
  handleMinusSaveJarAj(saveJarValue, saveJarNote, saveJarTotal) {
    // We need to make the saveJarValue a negative number
    const negativeValue = saveJarValue * -1;
    dispatch(
      setSaveJarTotalAj('Save jar', negativeValue, saveJarNote, saveJarTotal),
    );
  },
  handleMinusSaveJarJr(saveJarValue, saveJarNote, saveJarTotal) {
    // We need to make the saveJarValue a negative number
    const negativeValue = saveJarValue * -1;
    dispatch(
      setSaveJarTotalJr('Save jar', negativeValue, saveJarNote, saveJarTotal),
    );
  },
});

SaveJarConnected.propTypes = {
  flipJarSave: PropTypes.bool,
  submitTextJarSave: PropTypes.string,
  handleAddButtonText: PropTypes.func,
  handleMinusButtonText: PropTypes.func,
  cancelSaveJarChange: PropTypes.func,
  handleSaveJarNoteChangeAj: PropTypes.func,
  handleSaveJarValueChangeAj: PropTypes.func,
  handleAddSaveJarAj: PropTypes.func,
  handleMinusSaveJarAj: PropTypes.func,
  handleSaveJarNoteChangeJr: PropTypes.func,
  handleSaveJarValueChangeJr: PropTypes.func,
  handleAddSaveJarJr: PropTypes.func,
  handleMinusSaveJarJr: PropTypes.func,
  saveJarNote: PropTypes.string,
  saveJarValue: PropTypes.string,
  saveJarTotal: PropTypes.number,
  handleUserAJ: PropTypes.bool,
  handleUserJR: PropTypes.bool,
  saveJarValueJr: PropTypes.string,
  saveJarNoteJr: PropTypes.string,
  saveJarTotalJr: PropTypes.number,
  saveJarValueAj: PropTypes.string,
  saveJarNoteAj: PropTypes.string,
  saveJarTotalAj: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveJarConnected);
