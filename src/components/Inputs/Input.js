import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const {
    maximumLength, inputType, jarValue, handleJarValueChange,
  } = props;
  console.log('Input props, ', props);
  return (
    <input
      maxLength={maximumLength}
      type={inputType}
      value={jarValue}
      onChange={handleJarValueChange}
    />
  );
};

Input.propTypes = {
  maximumLength: PropTypes.number,
  inputType: PropTypes.string,
  jarValue: PropTypes.number,
  handleJarValueChange: PropTypes.func,
};

export default Input;
