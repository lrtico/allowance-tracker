import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-google-material-icons';
import './Button.css';

const Button = props => {
  const {
    changeButtonText, addClass, strokeColor, setIcon,
  } = props;
  return (
    <button onClick={changeButtonText} className={addClass}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
        <circle
          className="button__circle"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1"
          strokeMiterlimit="10"
          cx="11"
          cy="11"
          r="10"
        />
      </svg>
      <MaterialIcon icon={setIcon} size={36} />
    </button>
  );
};

Button.propTypes = {
  changeButtonText: PropTypes.func,
  addClass: PropTypes.string,
  strokeColor: PropTypes.string,
  setIcon: PropTypes.string,
};

export default Button;
