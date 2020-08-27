import React from 'react';
import PropTypes from 'prop-types';
import './AddNote.css';

const AddNote = props => {
  const { jarValue, handleJarValueChange } = props;
  return (
    <div className="jar__back__note">
      <div className="flex input--highlight">
        <label htmlFor="">Note:</label>
        <input
          maxLength="75"
          type="text"
          value={jarValue}
          onChange={handleJarValueChange}
        />
      </div>
    </div>
  );
};

AddNote.propTypes = {
  jarValue: PropTypes.string,
  handleJarValueChange: PropTypes.func,
};

export default AddNote;
