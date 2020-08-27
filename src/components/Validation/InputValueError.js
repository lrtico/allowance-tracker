import React from 'react';
import PropTypes from 'prop-types';
import './Validation.css';

const InputValueError = props => {
  const { inputValueErrorJar, inputValueErrorMessage } = props;
  return (
    <div id={inputValueErrorJar} className="jar-input-error">
      <p>{inputValueErrorMessage}</p>
    </div>
  );
};

InputValueError.propTypes = {
  inputValueErrorJar: PropTypes.string,
  inputValueErrorMessage: PropTypes.string,
};

export default InputValueError;
