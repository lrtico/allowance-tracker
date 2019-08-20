import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import JarAmount from '../JarAmount/JarAmount';
import JarLabel from '../JarLabel/JarLabel';
import AddNote from '../Inputs/AddNote';
import InputValueError from '../Validation/InputValueError';
import JarPreviousTotal from '../JarPreviousTotal/JarPreviousTotal';

const SpendJarConnected = (props) => {
  const {
    flipJarSpend, handleAddButtonTextJarSpend, handleMinusButtonTextJarSpend, spendJarTotal,
    cancelSpendJarChange, spendJarNote, handleSpendJarNoteChange, submitTextJarSpend,
    spendJarValue, handleSpendJarValueChange, handleAddSpendJar, handleMinusSpendJar,
  } = props;
  return (
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
                ? () => handleAddSpendJar(props)
                : () => handleMinusSpendJar(props)
            }
          />
          <JarPreviousTotal jarPreviousTotal={spendJarTotal} />
        </div>
      </div>
    </div>
  );
};

SpendJarConnected.propTypes = {
  flipJarSpend: PropTypes.bool,
  submitTextJarSpend: PropTypes.string,
  handleAddButtonTextJarSpend: PropTypes.func,
  handleMinusButtonTextJarSpend: PropTypes.func,
  cancelSpendJarChange: PropTypes.func,
  handleSpendJarNoteChange: PropTypes.func,
  handleSpendJarValueChange: PropTypes.func,
  handleAddSpendJar: PropTypes.func,
  handleMinusSpendJar: PropTypes.func,
  spendJarNote: PropTypes.string,
  spendJarValue: PropTypes.string,
  spendJarTotal: PropTypes.number,
};

export default SpendJarConnected;
