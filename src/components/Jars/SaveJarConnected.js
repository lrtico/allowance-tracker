import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import JarAmount from '../JarAmount/JarAmount';
import JarLabel from '../JarLabel/JarLabel';
import AddNote from '../Inputs/AddNote';
import InputValueError from '../Validation/InputValueError';
import JarPreviousTotal from '../JarPreviousTotal/JarPreviousTotal';

const SaveJarConnected = (props) => {
  const {
    flipJarSave, handleAddButtonText, handleMinusButtonText, saveJarTotal,
    cancelSaveJarChange, saveJarNote, handleSaveJarNoteChange, submitTextJarSave,
    saveJarValue, handleSaveJarValueChange, handleAddSaveJar, handleMinusSaveJar,
  } = props;
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
            value={submitTextJarSave}
            onClick={
              submitTextJarSave === 'Add'
                ? () => handleAddSaveJar(props)
                : () => handleMinusSaveJar(props)
            }
          />
          <JarPreviousTotal jarPreviousTotal={saveJarTotal} />
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
  handleSaveJarNoteChange: PropTypes.func,
  handleSaveJarValueChange: PropTypes.func,
  handleAddSaveJar: PropTypes.func,
  handleMinusSaveJar: PropTypes.func,
  saveJarNote: PropTypes.string,
  saveJarValue: PropTypes.string,
  saveJarTotal: PropTypes.number,
};

export default SaveJarConnected;
