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
    flipJarSpend, handleAddButtonTextJarSpend, handleMinusButtonTextJarSpend,
    cancelSpendJarChange, submitTextJarSpend,
    handleSpendJarValueChangeAj, handleSpendJarNoteChangeAj,
    handleAddSpendJarAj, handleMinusSpendJarAj,
    handleSpendJarValueChangeJr, handleSpendJarNoteChangeJr,
    handleAddSpendJarJr, handleMinusSpendJarJr,
    handleUserJR, handleUserAJ,
    spendJarValueAj, spendJarNoteAj, spendJarTotalAj,
    spendJarValueJr, spendJarNoteJr, spendJarTotalJr,
  } = props;
  console.log('SpendJarConnected props', props);
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
        <JarAmount jarTotal={
          handleUserAJ
            ? spendJarTotalAj
            : spendJarTotalJr
          }
        />
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
            jarValue={
              handleUserAJ
                ? spendJarNoteAj
                : spendJarNoteJr
            }
            handleJarValueChange={
              handleUserAJ
                ? handleSpendJarNoteChangeAj
                : handleSpendJarNoteChangeJr
            }
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
                value={
                  handleUserAJ
                    ? spendJarValueAj
                    : spendJarValueJr
                }
                onChange={
                  handleUserAJ
                    ? handleSpendJarValueChangeAj
                    : handleSpendJarValueChangeJr
                }
              />
            </div>
          </div>
          <input
            type="submit"
            value={submitTextJarSpend}
            onClick={
              submitTextJarSpend === 'Add' && handleUserAJ
                ? () => handleAddSpendJarAj(spendJarValueAj, spendJarNoteAj, spendJarTotalAj)
                : submitTextJarSpend === 'Minus' && handleUserAJ
                  ? () => handleMinusSpendJarAj(spendJarValueAj, spendJarNoteAj, spendJarTotalAj)
                  : submitTextJarSpend === 'Add' && handleUserJR
                    ? () => handleAddSpendJarJr(spendJarValueJr, spendJarNoteJr, spendJarTotalJr)
                    : () => handleMinusSpendJarJr(spendJarValueJr, spendJarNoteJr, spendJarTotalJr)
            }
          />
          <JarPreviousTotal jarPreviousTotal={
            handleUserAJ
              ? spendJarTotalAj
              : spendJarTotalJr
            }
          />
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
  handleSpendJarNoteChangeAj: PropTypes.func,
  handleSpendJarValueChangeAj: PropTypes.func,
  handleAddSpendJarAj: PropTypes.func,
  handleMinusSpendJarAj: PropTypes.func,
  spendJarNoteAj: PropTypes.string,
  spendJarValueAj: PropTypes.string,
  spendJarTotalAj: PropTypes.number,
  handleSpendJarNoteChangeJr: PropTypes.func,
  handleSpendJarValueChangeJr: PropTypes.func,
  handleAddSpendJarJr: PropTypes.func,
  handleMinusSpendJarJr: PropTypes.func,
  spendJarNoteJr: PropTypes.string,
  spendJarValueJr: PropTypes.string,
  spendJarTotalJr: PropTypes.number,
  handleUserAJ: PropTypes.bool,
  handleUserJR: PropTypes.bool,
};

export default SpendJarConnected;
