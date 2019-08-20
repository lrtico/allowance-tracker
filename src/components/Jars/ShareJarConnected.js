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
    flipJarShare, handleAddButtonTextJarShare, handleMinusButtonTextJarShare, shareJarTotal,
    cancelShareJarChange, shareJarNote, handleShareJarNoteChange, submitTextJarShare,
    shareJarValue, handleShareJarValueChange, handleAddShareJar, handleMinusShareJar,
  } = props;
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
        <JarAmount jarTotal={shareJarTotal} />
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
            jarValue={shareJarNote}
            handleJarValueChange={handleShareJarNoteChange}
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
                onChange={handleShareJarValueChange}
              />
            </div>
          </div>
          <input
            type="submit"
            value={submitTextJarShare}
            onClick={
              submitTextJarShare === 'Add'
                ? () => handleAddShareJar(props)
                : () => handleMinusShareJar(props)
            }
          />
          <JarPreviousTotal jarPreviousTotal={shareJarTotal} />
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
  handleShareJarNoteChange: PropTypes.func,
  handleShareJarValueChange: PropTypes.func,
  handleAddShareJar: PropTypes.func,
  handleMinusShareJar: PropTypes.func,
  shareJarNote: PropTypes.string,
  shareJarValue: PropTypes.string,
  shareJarTotal: PropTypes.number,
};

export default ShareJarConnected;
