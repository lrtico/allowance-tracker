import React from 'react';
import PropTypes from 'prop-types';
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
  handleUserAJ: PropTypes.bool,
  handleUserJR: PropTypes.bool,
  saveJarValueJr: PropTypes.string,
  saveJarNoteJr: PropTypes.string,
  saveJarTotalJr: PropTypes.number,
  saveJarValueAj: PropTypes.string,
  saveJarNoteAj: PropTypes.string,
  saveJarTotalAj: PropTypes.number,
};

export default SaveJarConnected;
