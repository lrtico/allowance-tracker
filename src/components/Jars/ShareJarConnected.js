import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button';
import JarAmount from '../JarAmount/JarAmount';
import JarLabel from '../JarLabel/JarLabel';
import AddNote from '../Inputs/AddNote';
import InputValueError from '../Validation/InputValueError';
import JarPreviousTotal from '../JarPreviousTotal/JarPreviousTotal';

const ShareJarConnected = (props) => {
  const {
    flipJarShare, handleAddButtonTextJarShare, handleMinusButtonTextJarShare,
    cancelShareJarChange, submitTextJarShare,
    handleShareJarValueChangeAj, handleShareJarNoteChangeAj,
    handleAddShareJarAj, handleMinusShareJarAj,
    handleShareJarValueChangeJr, handleShareJarNoteChangeJr,
    handleAddShareJarJr, handleMinusShareJarJr,
    handleUserJR, handleUserAJ,
    shareJarValueAj, shareJarNoteAj, shareJarTotalAj,
    shareJarValueJr, shareJarNoteJr, shareJarTotalJr,
  } = props;
  console.log('ShareJarConnected props', props);
  return (
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
        <JarAmount jarTotal={
            handleUserAJ
              ? shareJarTotalAj
              : shareJarTotalJr
          }
        />
        <JarLabel jarLabel="Share" />
      </div>
      <div className="jar__back jar__back--share">
        <div>
          <div className="flex flex--between">
            <Button
              setIcon="close"
              strokeColor="#4c4c4c"
              changeButtonText={cancelShareJarChange}
            />
          </div>
          <AddNote
            jarValue={
              handleUserAJ
                ? shareJarNoteAj
                : shareJarNoteJr
            }
            handleJarValueChange={
              handleUserAJ
                ? handleShareJarNoteChangeAj
                : handleShareJarNoteChangeJr
            }
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
                value={
                  handleUserAJ
                    ? shareJarValueAj
                    : shareJarValueJr
                }
                onChange={
                  handleUserAJ
                    ? handleShareJarValueChangeAj
                    : handleShareJarValueChangeJr
                }
              />
            </div>
          </div>
          <input
            type="submit"
            value={submitTextJarShare}
            onClick={
              submitTextJarShare === 'Add' && handleUserAJ
                ? () => handleAddShareJarAj(shareJarValueAj, shareJarNoteAj, shareJarTotalAj)
                : submitTextJarShare === 'Minus' && handleUserAJ
                  ? () => handleMinusShareJarAj(shareJarValueAj, shareJarNoteAj, shareJarTotalAj)
                  : submitTextJarShare === 'Add' && handleUserJR
                    ? () => handleAddShareJarJr(shareJarValueJr, shareJarNoteJr, shareJarTotalJr)
                    : () => handleMinusShareJarJr(shareJarValueJr, shareJarNoteJr, shareJarTotalJr)
            }
          />
          <JarPreviousTotal jarPreviousTotal={
            handleUserAJ
              ? shareJarTotalAj
              : shareJarTotalJr
            }
          />
        </div>
      </div>
    </div>
  );
};

ShareJarConnected.propTypes = {
  flipJarShare: PropTypes.bool,
  submitTextJarShare: PropTypes.string,
  handleAddButtonTextJarShare: PropTypes.func,
  handleMinusButtonTextJarShare: PropTypes.func,
  cancelShareJarChange: PropTypes.func,
  handleShareJarNoteChangeAj: PropTypes.func,
  handleShareJarValueChangeAj: PropTypes.func,
  handleAddShareJarAj: PropTypes.func,
  handleMinusShareJarAj: PropTypes.func,
  shareJarNoteAj: PropTypes.string,
  shareJarValueAj: PropTypes.string,
  shareJarTotalAj: PropTypes.number,
  handleShareJarNoteChangeJr: PropTypes.func,
  handleShareJarValueChangeJr: PropTypes.func,
  handleAddShareJarJr: PropTypes.func,
  handleMinusShareJarJr: PropTypes.func,
  shareJarNoteJr: PropTypes.string,
  shareJarValueJr: PropTypes.string,
  shareJarTotalJr: PropTypes.number,
  handleUserAJ: PropTypes.bool,
  handleUserJR: PropTypes.bool,
  handleAllowanceAddShareJarAj: PropTypes.func,
  handleAllowanceAddShareJarJr: PropTypes.func,
};

export default ShareJarConnected;
