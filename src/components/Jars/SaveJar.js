import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import JarAmount from '../JarAmount/JarAmount';
import JarLabel from '../JarLabel/JarLabel';
import AddNote from '../Inputs/AddNote';

const SaveJar = ({ handleAddButtonText }) => {
  return (
    <div
      className={
      flipJarSave
        ? 'jar jar--save jar--flip'
        : 'jar jar--save'
      }
    >
      {/* Make the below into a JarFront component with a prop for adding the jar__front--name of the jar */}
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
      {/* Make the below into a JarBack component with a prop for adding the jar__back--name of the jar */}
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
  );
};

SaveJar.propTypes = {
  handleAddButtonText: PropTypes.func,
};

export default SaveJar;
